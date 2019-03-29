
        import org.apache.lucene.analysis.Analyzer;
        import org.apache.lucene.analysis.standard.StandardAnalyzer;
        import org.apache.lucene.document.Document;
        import org.apache.lucene.document.Field;
        import org.apache.lucene.document.LongPoint;
        import org.apache.lucene.document.TextField;
        import org.apache.lucene.index.DirectoryReader;
        import org.apache.lucene.index.IndexWriter;
        import org.apache.lucene.index.IndexWriterConfig;
        import org.apache.lucene.index.Term;
        import org.apache.lucene.queryparser.classic.MultiFieldQueryParser;
        import org.apache.lucene.queryparser.classic.ParseException;
        import org.apache.lucene.queryparser.classic.QueryParser;
        import org.apache.lucene.search.*;
        import org.apache.lucene.store.FSDirectory;
        import org.junit.Test;

        import java.io.IOException;
        import java.nio.file.Paths;


/**
 * @Title: Lucene增删改查
 * @ClassName: cn.edu360.lucene.LuceneCRUDTest.java
 * @Description: https://segmentfault.com/a/1190000010367206
 * https://github.com/DmitryKey/luke/releases
 * @Copyright 2016-2018  - Powered By 研发中心
 * @author: 王延飞
 */
public class LuceneCRUDTest {

    /**
     * @Title: 写入数据
     * @methodName: testCreate
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testCreate() throws IOException {

        Article article = new Article();
        article.setId(108L);
        article.setAuthor("FLY");
        article.setTitle("学习大数据");
        article.setContent("大数据搜索，像毕老师一样牛！fff");
        article.setUrl("https://blog.csdn.net/fly910905/article/details/81190382");

        // String indexPath = "D:\\usr\\lucene\\index";
        String indexPath = "/Users/xiaobo/Desktop/index";
        FSDirectory fsDirectory = FSDirectory.open(Paths.get(indexPath));
        //创建一个标准分词器，一个字分一次
        Analyzer analyzer = new StandardAnalyzer();
        //Analyzer analyzer = new IKAnalyzer(true);
        //写入索引的配置，设置了分词器
        IndexWriterConfig indexWriterConfig = new IndexWriterConfig(analyzer);
        //指定了写入数据目录和配置
        IndexWriter indexWriter = new IndexWriter(fsDirectory, indexWriterConfig);
        //创建一个文档对象
        Document document = article.toDocument();
        System.out.println(document);
        //通过IndexWriter写入
        indexWriter.addDocument(document);
        indexWriter.close();
    }


    /**
     * @Title: 查询数据
     * @methodName: testSearch
     * @Description:
     * @author: 王延飞
     * @date: 2018-08-05 16:01
     */
    @Test
    public void testSearch() throws IOException, ParseException {


        String indexPath = "/Users/xiaobo/Desktop/index";
        Analyzer analyzer = new StandardAnalyzer();
        //Analyzer analyzer = new IKAnalyzer(true);
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        //索引查询器
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        String queryStr = "数据";
        //创建一个查询条件解析器
        QueryParser parser = new QueryParser("content", analyzer);
        //对查询条件进行解析
        Query query = parser.parse(queryStr);

        //TermQuery将查询条件当成是一个固定的词
        //Query query = new TermQuery(new Term("url", "http://www.edu360.cn/a10010"));
        //在【索引】中进行查找
        TopDocs topDocs = indexSearcher.search(query, 10);

        //获取到查找到的文文档ID和得分
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            //从索引中查询到文档的ID，
            int doc = scoreDoc.doc;
            //在根据ID到文档中查找文档内容
            Document document = indexSearcher.doc(doc);
            //将文档转换成对应的实体类
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }

    /**
     * @Title: 删除数据
     * @methodName: testDelete
     * @Description:
     * @author: 王延飞
     * @date: 2018-08-05 16:01
     */
    @Test
    public void testDelete() throws IOException, ParseException {


        String indexPath = "/Users/xiaobo/index";
//        Analyzer analyzer = new IKAnalyzer(true);
        Analyzer analyzer = new StandardAnalyzer();
        FSDirectory fsDirectory = FSDirectory.open(Paths.get(indexPath));
        IndexWriterConfig indexWriterConfig = new IndexWriterConfig(analyzer);
        IndexWriter indexWriter = new IndexWriter(fsDirectory, indexWriterConfig);

        //Term词条查找，内容必须完全匹配，不分词
        //indexWriter.deleteDocuments(new Term("content", "学好"));

        // 分词器查找
        //QueryParser parser = new QueryParser("title", analyzer);
        //Query query = parser.parse("大数据老师");

        //LongPoint是建立索引的
        // LongPoint.newRangeQuery()--范围查询
        //Query query = LongPoint.newRangeQuery("id", 99L, 120L);
        // LongPoint.newExactQuery()--精确查询
        Query query = LongPoint.newExactQuery("id", 105L);

        indexWriter.deleteDocuments(query);

        indexWriter.commit();
        indexWriter.close();
    }

    /**
     * @Title: 更新数据
     * @methodName: testUpdate
     * @Description: lucene的update比较特殊，update的代价太高，先删除，然后在插入
     * @author: 王延飞
     */
    @Test
    public void testUpdate() throws IOException, ParseException {


        String indexPath = "D:\\usr\\lucene\\index";
        StandardAnalyzer analyzer = new StandardAnalyzer();
        FSDirectory fsDirectory = FSDirectory.open(Paths.get(indexPath));
        IndexWriterConfig indexWriterConfig = new IndexWriterConfig(analyzer);
        IndexWriter indexWriter = new IndexWriter(fsDirectory, indexWriterConfig);


        Article article = new Article();
        article.setId(106L);
        article.setAuthor("老王");
        article.setTitle("学好大数据，要找赵老师");
        article.setContent("迎娶白富美，走上人生巅峰！！！");
        article.setUrl("https://blog.csdn.net/fly910905/article/details/81190382");
        Document document = article.toDocument();

        indexWriter.updateDocument(new Term("author", "老王"), document);

        indexWriter.commit();
        indexWriter.close();
    }

    /**
     * @Title: 查询多个字段
     * @methodName: testMultiField
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testMultiField() throws IOException, ParseException {


        String indexPath = "/Users/xiaobo/Desktop/index";
        StandardAnalyzer analyzer = new StandardAnalyzer();
//        Analyzer analyzer = new IKAnalyzer(true);
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        String[] fields = {"title", "content"};
        //多字段的查询转换器
        MultiFieldQueryParser queryParser = new MultiFieldQueryParser(fields, analyzer);
        Query query = queryParser.parse("老师");

        TopDocs topDocs = indexSearcher.search(query, 10);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            int doc = scoreDoc.doc;
            Document document = indexSearcher.doc(doc);
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }


    /**
     * @Title: 查找全部的数据
     * @methodName: testMatchAll
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testMatchAll() throws IOException, ParseException {


        String indexPath = "D:\\usr\\lucene\\index";
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        Query query = new MatchAllDocsQuery();

        TopDocs topDocs = indexSearcher.search(query, 10);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            int doc = scoreDoc.doc;
            Document document = indexSearcher.doc(doc);
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }

    /**
     * @Title: 布尔查询，可以组合多个查询条件
     * @methodName: testBooleanQuery
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testBooleanQuery() throws Exception {

        String indexPath = "D:\\usr\\lucene\\index";
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        Query query1 = new TermQuery(new Term("title", "老师"));
        Query query2 = new TermQuery(new Term("content", "丁"));
        BooleanClause bc1 = new BooleanClause(query1, BooleanClause.Occur.MUST);
        BooleanClause bc2 = new BooleanClause(query2, BooleanClause.Occur.MUST_NOT);
        BooleanQuery boolQuery = new BooleanQuery.Builder().add(bc1).add(bc2).build();
        System.out.println(boolQuery);

        TopDocs topDocs = indexSearcher.search(boolQuery, 10);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            int doc = scoreDoc.doc;
            Document document = indexSearcher.doc(doc);
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }


    /**
     * @Title: QueryParser查询解析
     * @methodName: testQueryParser
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testQueryParser() throws Exception {

        String indexPath = "D:\\usr\\lucene\\index";
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);

        //创建一个QueryParser对象。参数1：默认搜索域 参数2：分析器对象。
        QueryParser queryParser = new QueryParser("title", new StandardAnalyzer());

        //Query query = queryParser.parse("数据");
        Query query = queryParser.parse("title:学好 OR title:学习");
        System.out.println(query);

        TopDocs topDocs = indexSearcher.search(query, 10);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            int doc = scoreDoc.doc;
            Document document = indexSearcher.doc(doc);
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }


    /**
     * @Title: 范围查询
     * @methodName: testRangeQuery
     * @Description:
     * @author: 王延飞
     */
    @Test
    public void testRangeQuery() throws Exception {

        String indexPath = "D:\\usr\\lucene\\index";
        DirectoryReader directoryReader = DirectoryReader.open(FSDirectory.open(Paths.get(indexPath)));
        IndexSearcher indexSearcher = new IndexSearcher(directoryReader);


        Query query = LongPoint.newRangeQuery("id", 107L, 108L);

        System.out.println(query);

        TopDocs topDocs = indexSearcher.search(query, 10);
        ScoreDoc[] scoreDocs = topDocs.scoreDocs;
        for (ScoreDoc scoreDoc : scoreDocs) {
            int doc = scoreDoc.doc;
            Document document = indexSearcher.doc(doc);
            Article article = Article.parseArticle(document);
            System.out.println(article);
        }

        directoryReader.close();
    }
}
