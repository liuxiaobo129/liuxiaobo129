
window.onload=function(){
    var refBizId = $("#refBizId").val();
    $.ajax({
        url:'query',
        type:'get',
        data:{
            "refBizId":refBizId
        },
        dataType:'json',
        success:function(response){
            var jsonStr = JSON.stringify(response);
            $("#edit").val(jsonStr);
        },
        error:function(response){

        }
    });
}