SELECT * FROM tcbiz_rcs_model.Rule where scriptBody like '%Firstmemberlevel%';

SELECT * FROM tcbiz_rcs_model.Rule where scriptBody like '%getlastrejectorpasstime%';

def Lastpepolerejecttime = service.getLastRejectorPassTime(idNo,['int':0],'R','AUDIT_REJECT',['java.lang.String':null])