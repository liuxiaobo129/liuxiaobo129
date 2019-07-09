 谢丽萍(melissa.xie) 6-28 上午 11:20
 tcbiz_rcs.TxnRuleSkipLog
 
 谢丽萍(melissa.xie) 6-28 上午 11:20
 快捷交易
 
 谢丽萍(melissa.xie) 6-28 上午 11:24
 现金贷提现是否在白名单：
select distinct(refBizTxnId),memberID
,min(crtTime),max(crtTime)
from tcbiz_fq_rcs.RuleDetailLog 
where refBizTxnId in
(SELECT refBizTxnId
     FROM tcbiz_fq_rcs.RuleDetailLog
     WHERE idRule IN (3084,
                      2635)
                      and substr(crtTime,1,10)>'2019-06-19'
     GROUP BY refBizTxnId
     HAVING count(1) = 1)
     group by refBizTxnId
     order by crtTime desc
白条是否在白名单：
select distinct(refBizTxnId),memberID
,min(crtTime),max(crtTime)
from tcbiz_fq_rcs.RuleDetailLog 
where refBizTxnId in
(SELECT refBizTxnId
     FROM tcbiz_fq_rcs.RuleDetailLog
     WHERE idRule IN (264,
                      2909)
                      and substr(crtTime,1,10)>'2019-06-19'
     GROUP BY refBizTxnId
     HAVING count(1) = 1)
     group by refBizTxnId
     order by crtTime desc
     
     
     
     共同点：1）都有时效性（系统默认给的是添加当天23:59:59，可以修改）；2）都可以选择在会员号/银行卡号层级添加；
     3）最终的结果都是跳过某些规则。
区别：1）白名单是快捷/提现/白条都可以添加，免疫规则只能快捷添加；2）在白名单内且在有效期的申请，
除了不跳过规则（交易风控A0规则、授信风控A0规则），其他规则全部跳过；而免疫规则是，只跳过添加了免疫的规则
（比如当前申请命中345/701两条规则，那么添加免疫规则只会将会员号/银行卡号（以选择为准）添加345/701两条免疫规则，
下次再来申请时，只跳过这两条规则，其他规则正常走）；3）白名单是加在risklist表，免疫规则是添加在tcbiz_rcs.TxnImmunityRule



1）blockcode是对账户层级的一种管制，而不是申请编号层级，tcbiz_rcs_data.BlockCode这个表是我们建的所有的blockcode；
2）blockcode和黑白名单、免疫规则区别低一点在于blockcode没有时效的概念，始终有效（除非修改blockcode的值）；
3）blockcode有两种添加方式，一是规则命中，我们规则中有是否添加blockcode的属性，如果选择了是，则命中规则后，blockcode值会变为S；二是手工添加，这就分为批量和具体事件，其中具体事件就是我今天提的需求，在REM风险事件详情页面，一线人员可以手工选择更改blockcode值（无论当前是否有blockcode及blockcode的值），blockcode记录的表是tcbiz_rcs_data.MemberBlockCode；
4）添加了blockcode的账户（可能是会员号也可能是银行卡）申请时，系统发现命中了blockcode（值不等于0），那么这单就会直接被拒绝，不会进入到规则引擎（因此有blockcode的客户，规则执行记录表没有记录，这也是今天杜老师说页面上我问你那个为什么没有查到命中规则）。并且只要这个账户blockcode值没有被修改为0，那么这个账户永远过来申请，都会被拒绝；
5）blockcode这个概念目前只对交易风控有效，授信风控没有blockcode这个TASK。意思是说
    a.现金贷提现和白条的规则，没有是否命中添加blockcode的属性；
    b.虽然白条/现金贷页面也开放了添加blockcode的按钮，但是如果我修改了blockcode，只能控制这个账户来申请交易会被拒绝，申请白条交易/现金贷提现没有影响。
    
    
    
    A0,B规则必须执行
    
    
    
    
    
    
    
    
    fn.isNewMember(rd.memberId) == false &&rd.memberId> '200000000'&&fn.anyIn(rd.merchantId,["201601140007","201512150005","201512150006","201602010024","201601270019"])
    
    
    //个人理解先TxnRuleDetailLog，再MemberBlockCode
    SELECT * FROM tcbiz_rcs.TxnRuleDetailLog 
    
    tcbiz_rcs_data.MemberBlockCode
    
    
    @刘小波(xiaobo.liu)(lxb51283)  小波，可以看一下这一单GP0031277138吗，点击详情页面又提示命中规则异常
    
    白条/现金贷目前没有规则免疫，没有开通这个功能
    