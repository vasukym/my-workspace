
  this.createViewFromDlg = function(element,viewType)
  {
   if(!ZDBLazyLoadUtil.loadSnippet("PICK_TABLE_FOR_VIEW","/ZDBPickTableForView.cc",this,"APPENDTODOC"))
    {
      return;
    }
    if(!ZDBLazyLoadUtil.loadCssOnly(["CSSLIST_GRIDSTYLES", "CSSLIST_ANALYSISVIEWSTYLES"], this, ZDBCreateViewAPI.createViewFromDlg,[element,viewType])){
      return;
    }
    var selEl = ZDBUtil.getCachedRef(ZDBCreateViewAPI,'ZDB_TABLEPICK');
    //--ZROP Changes
    setTimeout(function(){ZDBCreateViewAPI.sortSelect(selEl);},200);
    var chNodes = selEl.childNodes;
    for(var i = chNodes.length -1;i > -1;i--)
    {
      selEl.removeChild(chNodes[i]);
    }
    var tblList = [];
    var tblObjId = [];

    if(!ZDBCreateViewAPI.checkAndGetTableList(tblList, tblObjId))
    {
      return;
    }
    if(tblList.length == 1) // if only one table is present directly jumping to creating view tab
    {
        var parentViewId = tblObjId[0];
        ZDBCreateViewAPI.createViewTab(parentViewId,viewType);
        return;
    }

    for(var i = 0;i < tblList.length;i++)
    {
      var option = document.createElement("Option");
      option.text = tblList[i];
      option.value = tblList[i];
      
      (BROWSER.IE) ? selEl.add(option):selEl.appendChild(option);
    }
         

         if(ZDBGlobal.ISNEWLAYOUT){
            var createdOver = ZDBExpViewHandler.fetchViewListInfo(ZDBClientUI.selectedTab.view.objId);//
            var createdOverParent = ZDBExpViewHandler.fetchViewListInfo(ZDBClientUI.selectedTab.view.parentViewId);
            if(createdOver !== undefined){
                  var createdOverTableType = createdOver[ZDBExpViewHandler["VIEW_TYPE"]];
                  if(createdOverTableType !== "Dashboard"){
                        if(createdOverTableType == "Table" || createdOverTableType == "QueryTable"){
                          var priorityOption = createdOver[ZDBExpViewHandler["VIEW_NAME"]];
                        }
                        else
                        {
                          var priorityOption = createdOverParent[ZDBExpViewHandler["VIEW_NAME"]];
                        }                        
                    }
                  } else{
                        if(createdOverParent !== undefined){
                            var priorityOption = createdOverParent[ZDBExpViewHandler["VIEW_NAME"]];
                        }
                  }
             if(priorityOption){
                      //selEl.value = priorityOption;
                      console.log("priorityoption : ",priorityOption);
                     
              }
              else{
                      console.log("no priorityOption")
                     
              }
          }
    var el = ZDBUtil.getCachedRef(ZDBCreateViewAPI,"ZDBTableForViewDlg");
    el.style.display = "block";
    el.viewType = viewType;
    el.tblList = tblList;
    el.tblObjId = tblObjId;
    var focusDlg=ZDBDialogUtil.showDialog(el,{TITLE:ZDBI18NMap.g('zrpt.common.newrpt.selbasetbl.js.dlgTtl',el),ADDFRAME:true,MODAL:true,DONTREMOVE:true});
      if(ZDBGlobal.ISNEWLAYOUT){
            jQuery(selEl).zselectbox("destroy");
    
            var dlgBodyContent = DOMUtils.getFirstMatchingChild(focusDlg, "*", "elname","dlgBodyContent");//NO I18N
                   jQuery(selEl).zselectbox({
                      dropdownList : {
                        appendTo:jQuery(dlgBodyContent),viewport:window,
                      },
                    
                  });
                   jQuery(selEl).zselectbox("setValue",priorityOption);
              console.log("selected index:",selEl.selectedIndex,"selected value:",selEl.value);
            ZDBGlobal.ISNEWLAYOUT ? ZDBUtil.addClass(focusDlg, "newUiDialog") : null;//newly added
      }
    return;
  }
  //--ZROP Changes--
  this.sortSelect=function (elem) {
      var tempArray = new Array();
      if(ZDBGlobal.ISNEWLAYOUT){
 console.log("selected index:",elem.selectedIndex,"selected value:",elem.value);
var opt = elem.value;}
      for (var i=0;i<elem.options.length;i++) {
          tempArray[i] = new Array();
          tempArray[i][0] = elem.options[i].text;
          tempArray[i][1] = elem.options[i].value;
      }
      tempArray.sort(function(a,b){if(a[0] === b[0]){return 0;}else {return (a[0] < b[0]) ? -1 : 1;}});
      while (elem.options.length > 0) {
          elem.options[0] = null;
      }
      for (var i=0;i<tempArray.length;i++) {
          var op = new Option(tempArray[i][0], tempArray[i][1]);
          elem.options[i] = op;
      }
      if(ZDBGlobal.ISNEWLAYOUT){
      jQuery(elem).zselectbox("setValue",opt);
console.log("selected index:",elem.selectedIndex,"selected value:",elem.value);
}

  }
  //-




if(!ZDBLazyLoadUtil.loadSnippet("PICK_TABLE_FOR_VIEW","/ZDBPickTableForView.cc",this,"APPENDTODOC"))
    {
      return;
    }
    if(!ZDBLazyLoadUtil.loadCssOnly(["CSSLIST_GRIDSTYLES", "CSSLIST_ANALYSISVIEWSTYLES"], this, ZDBCreateViewAPI.createViewFromDlg,[element,viewType])){
    	return;
    }
    var selEl = ZDBUtil.getCachedRef(ZDBCreateViewAPI,'ZDB_TABLEPICK');
    //--ZROP Changes
    setTimeout(function(){ZDBCreateViewAPI.sortSelect(selEl);},200);
    var chNodes = selEl.childNodes;
    for(var i = chNodes.length -1;i > -1;i--)
    {
      selEl.removeChild(chNodes[i]);
    }
    var tblList = [];
    var tblObjId = [];

    if(!ZDBCreateViewAPI.checkAndGetTableList(tblList, tblObjId))
    {
      return;
    }
    if(tblList.length == 1) // if only one table is present directly jumping to creating view tab
    {
        var parentViewId = tblObjId[0];
        ZDBCreateViewAPI.createViewTab(parentViewId,viewType);
        return;
    }

    for(var i = 0;i < tblList.length;i++)
    {
      var option = document.createElement("Option");
      option.text = tblList[i];
      option.value = tblList[i];
      (BROWSER.IE) ? selEl.add(option):selEl.appendChild(option);
    }
         if(ZDBGlobal.ISNEWLAYOUT){
            var createdOver = ZDBExpViewHandler.fetchViewListInfo(ZDBClientUI.selectedTab.view.objId);//
            var createdOverParent = ZDBExpViewHandler.fetchViewListInfo(ZDBClientUI.selectedTab.view.parentViewId);
            if(createdOver !== undefined){
                  var createdOverTableType = createdOver[ZDBExpViewHandler["VIEW_TYPE"]];
                  if(createdOverTableType !== "Dashboard"){
                        if(createdOverTableType == "Table" || createdOverTableType == "QueryTable"){
                          var priorityOption = createdOver[ZDBExpViewHandler["VIEW_NAME"]];
                        }
                        else
                        {
                          var priorityOption = createdOverParent[ZDBExpViewHandler["VIEW_NAME"]];
                        }
                        console.log("priorityoption : ",priorityOption);
                        
                    }
            } else{
              if(createdOverParent !== undefined){
                  var priorityOption = createdOverParent[ZDBExpViewHandler["VIEW_NAME"]];
              }
             }
             if(priorityOption){
             selEl.value = priorityOption;}
          }
    var el = ZDBUtil.getCachedRef(ZDBCreateViewAPI,"ZDBTableForViewDlg");
    el.style.display = "block";
    el.viewType = viewType;
    el.tblList = tblList;
    el.tblObjId = tblObjId;
    var focusDlg=ZDBDialogUtil.showDialog(el,{TITLE:ZDBI18NMap.g('zrpt.common.newrpt.selbasetbl.js.dlgTtl',el),ADDFRAME:true,MODAL:true,DONTREMOVE:true});
      if(ZDBGlobal.ISNEWLAYOUT){
        if(!priorityOption){
          console.log("no priorityOption")
        }
            jQuery(selEl).zselectbox("destroy");
    
            var dlgBodyContent = DOMUtils.getFirstMatchingChild(focusDlg, "*", "elname","dlgBodyContent");//NO I18N
                   jQuery(selEl).zselectbox({
                      dropdownList : {
                        appendTo:jQuery(dlgBodyContent),viewport:window,
                      }
                  });
             
            ZDBGlobal.ISNEWLAYOUT ? ZDBUtil.addClass(focusDlg, "newUiDialog") : null;//newly added
      }
    return;
  }