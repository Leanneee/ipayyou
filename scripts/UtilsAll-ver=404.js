
// globals - BUTTON
var g_arrayButtons = [];
var g_idBtnDefault;
var g_idBtnCancel;

var g_Calc;
var g_IP;

// globals - MENU
var g_InactivityTimerEnabled = false;
var MenuGroups = {};
var MenuClickEvent = $({});


// globals - GRID
var GridGroups = {};
var delayedload_GridGroupName = '';
var delayedload_GridItemId = '';

// globals - STATE
var g_StateNew = {};
var g_serializedStateNew;
var g_StateCurrent;
var g_serializedStateCurrent;
var g_boolPopping = false;
var g_boolPushState = true;



$(document).ready(function () {
  $('.boxEditJSEdit').on('input', function (e) {
    //ClearErrors();
  });

  // ready - BUTTON - BEGIN
  $(document).keydown(function (event) {
    // track enter key
    var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
    if (keycode == 13) { // keycode for enter key
      // force the 'Enter Key' to implicitly click the Update button
      if (g_idBtnDefault != '' && g_idBtnDefault != null)
        $('#' + g_idBtnDefault).click();
      return false;
    }
    else if (keycode == 27) {
      if (g_idBtnCancel != '' && g_idBtnCancel != null)
        $('#' + g_idBtnCancel).click();
    }
    else {
      return true;
    }
  }); // end of function

  $('.btnIAccounts').unbind('click').click(function (event) {
    strButtonID = $(this).prop('id');
    if (strButtonID == null || g_arrayButtons[strButtonID] == null)
      return true;
    ClearErrors();

    ButtonAction(strButtonID, 'clicked');
    return false;
  });

  ResetAllButtons();
  // ready - BUTTON - END


  // ready - MENU - BEGIN
  $(document.body).off().on('click',
    '.MenuUnselected',
    function () {
      var id = $(this).attr('id');
      var items = id.split('_cell_');
      MenuClick(items[0], items[1]);
    }).on('click',
      '.MenuSubUnselected',
      function () {
        var id = $(this).attr('id');
        var items = id.split('_cell_');
        MenuSubClick(items[0], items[1], items[2]);
      });

  if ($(location).attr('href').toLowerCase().indexOf('login') < 0) {
    MenuNavigateSavedLocation();
  }
  // ready - MENU - END

  // ready - GRID - BEGIN
  GridAttachHandlers();
  // ready - GRID - END

  // ready - EDIT - BEGIN
  $('.classMultilineEdit').unbind().on('input', function (e) {
    // track enter key
    privProcessTextArea($(this));
  }).keydown(function (event) {
    var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
    if (keycode == 13) { // keycode for enter key
      if (g_boolReentry)
        return;

      strValue = $(this).val();
      g_boolReentry = true;
      $(this).val(strValue + '\r');
      setTimeout(function () { g_boolReentry = false; }, 100);
      $(this).scrollTop($(this)[0].scrollHeight);

      privProcessTextArea($(this));
    }
  });
  // ready - EDIT - END

  Calc();
})

function ConvertUTCToLocal() {
  $('.UTCTime').each(function (index, data) {
    strUTCTime = $(this).text();
    if (strUTCTime.split(',').length > 1)
      strUTCTime = strUTCTime + ' UTC';
    else {
      dt = new Date(Date.parse(strUTCTime));
      dtUTC = new Date(Date.UTC(dt.getYear() + 1900, dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes()));
      strUTCTime = dtUTC.toString();
    }

    dateUTCTime = new Date(strUTCTime);
    strLocalTime = '<b>' + $.datepicker.formatDate('M d, yy', dateUTCTime) + '</b> <span class="TextSmB">' + timeFormatter(dateUTCTime) + '</span>';
    $(this).removeClass('UTCTime').addClass('TextSmA');
    $(this).html(strLocalTime);
  });

  $('.UTCTimeBR').each(function (index, data) {
    strUTCTime = $(this).text();
    if (strUTCTime.split(',').length > 1)
      strUTCTime = strUTCTime + ' UTC';
    else {
      dt = new Date(Date.parse(strUTCTime));
      dtUTC = new Date(Date.UTC(dt.getYear() + 1900, dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes()));
      strUTCTime = dtUTC.toString();
    }

    dateUTCTime = new Date(strUTCTime);
    strLocalTime = '<b>' + $.datepicker.formatDate('M d, yy', dateUTCTime) + '</b> <br /> <span class="TextSmB">' + timeFormatter(dateUTCTime) + '</span>';
    $(this).removeClass('UTCTime').addClass('TextSmA');
    $(this).html(strLocalTime);
  });
}

function HoursToNow(dt) {
  return (new Date().getTime() - new Date(dt + 'Z').getTime()) / 1000 / 3600;
}

function timeFormatter(dateTime) {
  var hour;
  var amPm;
  var date = new Date(dateTime);
  if (date.getHours() >= 12) {
    hour = parseInt(date.getHours()) - 12;
    amPm = "PM";
  } else {
    hour = date.getHours();
    amPm = "AM";
  }
  if (hour === 0)
    hour = 12;

  minutes = date.getMinutes();
  if (minutes.toString().length === 1)
    minutes = '0' + minutes;

  var time = hour + ":" + minutes + " " + amPm;
  return time;
}


function ClearEntryFields() {
  $('.boxEditJSNoInit').val('');
  ResetAllButtons();
  $('.classONonReset').show();
  $('.classOFFonReset').hide();
  $('.classCongratulationsForL1L2').hide();
  $(document).trigger('ClearEntryFieldsEvent', '');
  g_idBtnDefault = '';
}

function ClearErrors() {
  $('.classErrorRow').hide();
  $('.boxEditJSError').html('&nbsp;');
  $('.ErrorSm').html('&nbsp;');
  $('.Error').html('&nbsp;');
  $('.blockError').hide();
  $('.classVideoPlay').html('').hide();
  $('.classVideoStatic').show();
}

function CSVToArray(strData) {
  if (strData.trim() === '')
    return new Array();
  else
    return strData.split(',');
}

function CSVToHash(strData) {
  arrayData = CSVToArray(strData);

  var hashData = {};

  arrayData.forEach(function (entry) {
    if (null === hashData[entry])
      hashData[entry] = {};
  });

  return hashData;
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function stringAddIfMissing(strBase, strToken) {
  if (strBase.split(strToken).length === 0)
    return strBase + ' ' + strToken;
  else
    return strBase;
}

function createCookieTopLevelDomain(name, value, days) {
  var tlDomain = extractTopLevelDomain(document.location.href);
  var cookie = createCookie(name, value, days, tlDomain);
  document.cookie = cookie;
}

function createCookieSubdomain(name, value, days) {
  var cookie = createCookie(name, value, days, '');
  document.cookie = cookie;
}

function createCookie(name, value, days, domain) {
  var expires;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }

  var cookie;

  if (domain != null && domain != '')
    cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; domain=" + domain + "; path=/";
  else
    cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";

  return cookie;
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  eraseCookieSubdomain(name);
  eraseCookieTopLevelDomain(name);
}

function eraseCookieSubdomain(name) {
  createCookieSubdomain(name, "", -1);
}

function eraseCookieTopLevelDomain(name) {
  createCookieTopLevelDomain(name, "", -1);
}

function privAnimateBackgroundColor(strClassName, strColor, msDelayToRevert, msAnimation) {
  $(strClassName).each(function () {
    var $this = $(this);
    //        $.data(this, 'css', { backgroundColor: $this.css('backgroundColor') });
  });

  $(strClassName).animate({ backgroundColor: strColor }, msAnimation);

  setTimeout(function () {
    $(strClassName).each(function () {
      //          var orig = $.data(this, 'css');
      $(this).animate({ backgroundColor: 'white' }, msAnimation);
    });

  }, msDelayToRevert);

}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function extractDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  }
  else {
    domain = url.split('/')[0];
  }

  //find & remove port number
  domain = domain.split(':')[0];

  return domain;
}

function extractTopLevelDomain(url) {
  var strDomain = extractDomain(url);
  var strTLDomain = '';
  arrayDomainComponents = strDomain.split('.');
  for (var index = arrayDomainComponents.length - 1; index >= 1; index--) {
    strTLDomain = '.' + arrayDomainComponents[index] + strTLDomain;
  }

  return strTLDomain;
}

function clipboardCopy(string) {
  var aux = document.createElement("input");
  aux.setAttribute("value", string);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function GetQueryParametersForSessionAndService() {
  return 'sessionId=' + g_guidSessionID + '&serviceId=' + g_guidServiceID;
}

// functions - BUTTON - BEGIN

function RegisterButton(strButtonID, strButtonText, strButtonTextClicked, boolEnabledByDefault) {
  var objButtonInfo = {};
  objButtonInfo.id = strButtonID;
  objButtonInfo.strButtonText = strButtonText;
  objButtonInfo.strButtonTextClicked = strButtonTextClicked;
  objButtonInfo.boolEnabledByDefault = boolEnabledByDefault;

  g_arrayButtons[strButtonID] = objButtonInfo;
}

function ResetAllButtons() {
  var keys = Object.keys(g_arrayButtons);
  keys.forEach(function (key) {
    objButtonInfo = g_arrayButtons[key];
    if (!objButtonInfo.boolEnabledByDefault)
      ButtonAction(objButtonInfo.id, 'reset');
    else {
      ButtonAction(objButtonInfo.id, 'enable');
    }
  });
}


function ButtonAction(strButtonID, action) {

  if (action == 'enable')
    ButtonAction(strButtonID, 'reset');

  btn = $('#' + strButtonID);

  if (btn.hasClass('btnLgSubmitting'))
    btn.addClass('btnLg').removeClass('btnLgSubmitting');

  if (action === 'enable' && btn.prop('Clicked') != true) {
    btn.prop('disabled', false).removeClass('btnDisabled').addClass('btnEnabled');
    btn.prop('value', g_arrayButtons[strButtonID].strButtonText);
    btn.prop('Clicked', false);
    if (g_arrayButtons[strButtonID].boolEnabledByDefault == false)
      g_idBtnDefault = strButtonID;
  }
  else if (action === 'disable' && btn.prop('Clicked') != true) {
    btn.prop('disabled', true).addClass('btnDisabled').removeClass('btnEnabled');
    btn.prop('value', g_arrayButtons[strButtonID].strButtonText);
    btn.prop('Clicked', false);
    g_idBtnDefault = '';
  }
  else if (action === 'clicked') {
    btn.prop('disabled', true);
    btn.prop('value', g_arrayButtons[strButtonID].strButtonTextClicked);
    btn.addClass('btnClicked').removeClass('btnEnabled');
    if (btn.hasClass('btnLg'))
      btn.removeClass('btnLg').addClass('btnLgSubmitting');
    btn.prop('Clicked', true);
    g_idBtnDefault = '';
    btn.trigger('ClickEvent', '');
  }
  else if (action === 'reset') {
    btn.prop('value', g_arrayButtons[strButtonID].strButtonText);
    if (g_arrayButtons[strButtonID].boolEnabledByDefault)
      btn.prop('disabled', false).removeClass('btnDisabled').addClass('btnEnabled').removeClass('btnClicked');
    else
      btn.prop('disabled', true).addClass('btnDisabled').removeClass('btnEnabled').removeClass('btnClicked');
    btn.prop('Clicked', false);
  }
}

// functions - BUTTON - END

// functions - MENU - BEGIN
function MenuNavigateSavedLocation() {
  var startLocation = readCookie('menuState1');
  if (startLocation) {
    startLocation = JSON.parse(startLocation);
  }

  if (startLocation) {
    if (startLocation.menuGroupName == 'safeway') {
      ShortcutToSafeway();
    }
    else if (startLocation.menuGroupName == 'uber') {
      ShortcutToUber();
    }
    else if (startLocation.menuGroupName == 'ledger') {
      ShortcutToLedger();
    }
    else if (startLocation.menuGroupName == 'amazon') {
      ShortcutToAmazon();
    }
    else if (startLocation.menuGroupName == 'bestbuy') {
      ShortcutToBestBuy();
    }
    else if (startLocation.menuId == 'YouReceived' && g_longTwitterIDPayee == 0 && g_ContractIDPayee == null) {
      MenuClick('LeftMenu', 'Welcome');
    }
    else if (startLocation.menuId == 'ShortCode' && g_strShortcodeCommand == null) {
      MenuClick('LeftMenu', 'Welcome');
    }
    else {
      if (MenuClick(startLocation.menuGroupName, startLocation.menuId)) {
        if (startLocation.subMenuId && startLocation.subMenuId !== '') {
          MenuSubClick(startLocation.menuGroupName, startLocation.menuId, startLocation.subMenuId);
        }
      }
    }
  } else {
    MenuClick('LeftMenu', 'Welcome');
  }
}

function GenerateMenuState(groupName, rootMenuId, subId) {
  if (!groupName || !rootMenuId) {
    return null;
  }

  var menuState =
    {
      menuGroupName: groupName,
      menuId: rootMenuId,
      subMenuId: subId
    }

  return menuState;
}
function SaveMenuState(groupName, rootMenuId, subId) {
  if (g_guidSessionID && groupName == 'LeftMenu') {
    eraseCookieTopLevelDomain('menuState1');
    createCookieTopLevelDomain('menuState1', JSON.stringify(GenerateMenuState(groupName, rootMenuId, subId)), true);
  }
}

function MenuRegister(strMenuGroupName, strMenuID, strJSONMenu) {

  objJSONMenu = JSON.parse(strJSONMenu);
  //hashIDsToDisplayWhenClicked = CSVToHash(objJSONMenu.IDsToDisplayWhenClicked);
  //privAddToDisplayGroup(strMenuGroupName, hashIDsToDisplayWhenClicked);

  var menuItem =
    {
      ID: strMenuID,
      JSONMenu: objJSONMenu,
      SubMenuArray: new Array(),
      SubMenuHash: {} //,
      //IDsToDisplayWhenClicked: hashIDsToDisplayWhenClicked
    };

  if (MenuGroups[strMenuGroupName] == null)
    MenuGroups[strMenuGroupName] = {};

  if (MenuGroups[strMenuGroupName]['MenuItems'] == null)
    MenuGroups[strMenuGroupName]['MenuItems'] = new Array();

  MenuGroups[strMenuGroupName]['MenuItems'].push(menuItem);


}


function SubMenuRegister(strMenuGroupName, strMenuID, strSubMenuID, strJSONMenu) {

  objJSONMenu = JSON.parse(strJSONMenu)
  //hashIDsToDisplayWhenClicked = CSVToHash(objJSONMenu.IDsToDisplayWhenClicked);
  //privAddToDisplayGroup(strMenuGroupName, hashIDsToDisplayWhenClicked);

  var menuSubItem =
    {
      ID: strSubMenuID,
      JSONMenu: objJSONMenu//,
      //IDsToDisplayWhenClicked: hashIDsToDisplayWhenClicked
    };

  if (MenuGroups[strMenuGroupName] == null)
    MenuGroups[strMenuGroupName] = {};

  if (MenuGroups[strMenuGroupName]['MenuItems'] == null)
    MenuGroups[strMenuGroupName]['MenuItems'] = new Array();

  var arrayMenuItemsInGroup = MenuGroups[strMenuGroupName]['MenuItems']
  var menuItem = MenuItemFindInSubgroup(arrayMenuItemsInGroup, strMenuID);
  menuItem.SubMenuHash[menuSubItem.ID] = menuSubItem;
  menuItem.SubMenuArray.push(menuSubItem.ID);
}

function MenuItemFindInSubgroup(arrayMenuItemsInGroup, strMenuItemToFindID) {
  var entryToReturn = null;
  arrayMenuItemsInGroup.forEach(function (entry) {
    if (entry.ID == strMenuItemToFindID) {
      entryToReturn = entry;
    }
  });

  return entryToReturn;
}


function MenuClick(strMenuGroupName, strMenuID) {
  $('#divVideo').hide();

  if (null == MenuGroups[strMenuGroupName])
    return;

  $('.' + strMenuGroupName).hide();
  $('.' + strMenuID).show();

  ClearErrors();
  ClearEntryFields();

  var boolMenuEntryFound = false;
  MenuGroups[strMenuGroupName]['MenuItems'].forEach(function (entry) {
    if (entry.ID == strMenuID) {
      boolMenuEntryFound = true;
    }
  });

  if (boolMenuEntryFound) {

    MenuGroups[strMenuGroupName]['MenuItems'].forEach(function (entry) {
      if (entry.ID == strMenuID) {

        var funcInitName = strMenuGroupName + '_' + strMenuID + '_' + 'Init';
        var funcInit = window[funcInitName];
        var cntSubMenusVisible = SubMenusVisibleCount(entry);
        if (cntSubMenusVisible == 0)
          $("#" + strMenuGroupName + '_cell_' + entry.ID).removeClass(entry.JSONMenu.CSSClassUnselected).removeClass('MenuUnselected').addClass(entry.JSONMenu.CSSClassSelected).addClass('MenuSelected');

        funcInit();
        $("#" + strMenuGroupName + '_row_' + entry.ID).show();
      }
      else {
        $("#" + strMenuGroupName + '_cell_' + entry.ID).removeClass(entry.JSONMenu.CSSClassSelected).removeClass('MenuSelected').addClass(entry.JSONMenu.CSSClassUnselected).addClass('MenuUnselected');
        $("#" + strMenuGroupName + '_row_' + entry.ID).hide();
      }
    });

    MenuLoaded(strMenuID);
    $(document).trigger('MenuClickedEvent', '');

    SaveMenuState(strMenuGroupName, strMenuID)
    return true;
  }
  else {
    MenuClick(strMenuGroupName, MenuGroups[strMenuGroupName]['MenuItems'][0].ID);
    return false;
  }

}

function SubMenusVisibleCount(menuItem) {
  var cntSubMenusVisible = 0;
  var cntSubMenus = menuItem.SubMenuArray.length;
  for (index = 0; index < cntSubMenus; index++) {
    var subMenu = menuItem.SubMenuHash[menuItem.SubMenuArray[index]];
    if (subMenu.JSONMenu.boolVisible) {
      cntSubMenusVisible++;
    }
  }

  return cntSubMenusVisible;
}

function MenuSubClick(strMenuGroupName, strMenuID, strSubMenuID) {
  if (null == MenuGroups[strMenuGroupName])
    return;

  var arrayMenuItemsInGroup = MenuGroups[strMenuGroupName]['MenuItems']
  var menuItem = MenuItemFindInSubgroup(arrayMenuItemsInGroup, strMenuID);

  var hashMenuSubItems = menuItem.SubMenuHash;
  var boolSubMenuExists = false;
  for (var strMenuSubItemKey in hashMenuSubItems) {
    objMenuSubItem = hashMenuSubItems[strMenuSubItemKey];
    if (objMenuSubItem.ID == strSubMenuID) {
      boolSubMenuExists = true;
      break;
    }
  }

  if (boolSubMenuExists) {
    $(document).trigger('MenuClickedEvent', '');

    $('.' + strMenuID + '_SubMenu').hide();
    $('.' + strSubMenuID).show();

    if (g_InactivityTimerEnabled)
      InactivityTimerTimeout(true);


    for (var strMenuSubItemKey in hashMenuSubItems) {
      objMenuSubItem = hashMenuSubItems[strMenuSubItemKey];
      if (objMenuSubItem.ID == strSubMenuID) {
        var funcInitName = strMenuGroupName + '_' + strSubMenuID + '_' + 'Init';
        var funcInit = window[funcInitName];

        // privDisplayControlsInArray(strMenuGroupName, objMenuSubItem.IDsToDisplayWhenClicked);
        $("#" + strMenuGroupName + '_cell_' + strMenuID + '_cell_' + objMenuSubItem.ID).removeClass("MenuSubCell").removeClass('MenuSubUnselected').addClass("MenuSubCellSelected").addClass('MenuSubSelected');

        funcInit();
      }
      else {
        $("#" + strMenuGroupName + '_cell_' + strMenuID + '_cell_' + objMenuSubItem.ID).removeClass("MenuSubCellSelected").removeClass('MenuSubSelected').addClass("MenuSubCell").addClass('MenuSubUnselected');
      }
    }
  }

  MenuLoaded(strSubMenuID);
  SaveMenuState(strMenuGroupName, strMenuID, strSubMenuID);
}

// functions - MENU - END

// functions - GRID - BEGIN
function GridAttachHandlers() {
  $('.GridItem_row').unbind().click(function (e) {
    privGridItemRowClick(this);
  });

  $('.GridItem_row_with_table').unbind().click(function (e) {
    privGridItemRowClick(this);
  });

  $('.GridItem_delete').unbind().click(function (e) {
    strDeleteID = $(this).attr('id');
    $(this).hide();
    strGridGroupName = strDeleteID.split('_')[0];
    strGridItemID = strDeleteID.split('_')[1];
    $('#' + strGridGroupName + '_' + strGridItemID + '_deleteworking').show();
    strFuncDeleteToCall = GridGroups[strGridGroupName]['GridItem'].funcDeleted;

    var funcToCall = window[strFuncDeleteToCall];
    funcToCall(strGridGroupName, strGridItemID);

    e.stopPropagation();
  });

}

function privGridItemRowClick(ctrl) {
  InactivityTimerTimeout(true);

  strRowID = $(ctrl).attr('id');
  var groupID = strRowID.split('_');
  strGridGroupName = groupID[0];
  strGridItemID = groupID[1];

  var retGridRowData = privGridItemData(strGridGroupName, strGridItemID);
  if (null != retGridRowData) {

    strFuncSelectedToCall = GridGroups[strGridGroupName]['GridItem'].funcSelected;

    var funcToCall = window[strFuncSelectedToCall];
    funcToCall(retGridRowData);
  }
}

function privGridItemData(strGridGroupName, strGridItemID) {
  var retGridRowData = null;

  arrayGridRowData = GridGroups[strGridGroupName]['GridItem'].arrayGridRowData;
  if (null == arrayGridRowData[0]) {
    delayedload_GridGroupName = strGridGroupName;
    delayedload_GridItemId = strGridItemID;
  }
  else {
    arrayGridRowData.forEach(function (objGridRowData) {
      if (objGridRowData.ID == strGridItemID) {
        retGridRowData = objGridRowData;
        return false;
      }
    });
  }

  return retGridRowData;
}

function GridRegister(strGridGroupName, strFuncSelected, strFuncDeleted) {
  // , arrayGridRowData
  // objGridRowData = JSON.parse(arrayGridRowData);

  var GridItem =
    {
      ID: strGridGroupName,
      funcSelected: strFuncSelected,
      funcDeleted: strFuncDeleted,
      htmlRowWhenGridIsEmpty: '',
      arrayGridRowData: {}
    };

  if (GridGroups[strGridGroupName] == null)
    GridGroups[strGridGroupName] = {};

  GridGroups[strGridGroupName]['GridItem'] = GridItem;
}

function GridRowItemDelete(strGridGroupName, strItemID) {
  InactivityTimerTimeout(true);

  $('#' + strGridGroupName + '_' + strItemID + '_row').fadeOut(1000, function () {

    $('#' + strGridGroupName + '_' + strItemID + '_row').remove();

    cntGridRows = $('#' + strGridGroupName + '_table').find('tr').length;
    if (0 == cntGridRows) {
      $('#' + strGridGroupName + '_table').append(GridGroups[strGridGroupName]['GridItem'].htmlRowWhenGridIsEmpty);
      $('#noavailable' + strGridGroupName).show();
    }
    else {
      $('#' + $('#' + strGridGroupName + '_table').find('tr')[cntGridRows - 1].id).removeClass('GridItem_row_Dotted');
    }

    GridComplete(strGridGroupName);
  });
}

function GridClearRows(strGridGroupName) {
  $('#' + strGridGroupName + '_table').empty();
}

function GridReplaceRows(strGridGroupName, arrayGridRowData) {
  $('#' + strGridGroupName + '_table').empty();
  GridGroups[strGridGroupName]['GridItem'].arrayGridRowData = arrayGridRowData;

  if (null == arrayGridRowData || arrayGridRowData.length == 0)
    $('#' + strGridGroupName + '_table').append(GridGroups[strGridGroupName]['GridItem'].htmlRowWhenGridIsEmpty);
  else {
    for (index = 0; index < arrayGridRowData.length; index++) {
      $('#' + strGridGroupName + '_table').append(arrayGridRowData[index].strHTMLRow);
    }
  }

  GridAttachHandlers();
  ConvertUTCToLocal();
  if (null != arrayGridRowData)
    GridComplete(strGridGroupName);

}

function GridPrependRow(strGridGroupName, itemGridRowData) {

  if (null == itemGridRowData)
    return;

  if (GridGroups[strGridGroupName]['GridItem'].arrayGridRowData == null)
    GridGroups[strGridGroupName]['GridItem'].arrayGridRowData = [];

  if (GridGroups[strGridGroupName]['GridItem'].arrayGridRowData.length == 0)
    $('#' + strGridGroupName + '_table').empty();

  if (itemGridRowData == null)
    itemGridRowData = null;

  $('#' + strGridGroupName + '_table').prepend(itemGridRowData.strHTMLRow);
  setTimeout(function () {
    $('#' + strGridGroupName + '_table').scrollTop(0);
  }, 1000);

  $('.GridItem_row_new').removeClass('GridItem_row_new');
  $('#' + strGridGroupName + '_' + itemGridRowData.ID + '_row').addClass('GridItem_row_new');
  GridGroups[strGridGroupName]['GridItem'].arrayGridRowData.unshift(itemGridRowData);

  GridAttachHandlers();
  ConvertUTCToLocal();
  GridComplete(strGridGroupName);
}

function GridReplaceRow(strGridGroupName, itemGridRowData) {
  if (GridGroups[strGridGroupName]['GridItem'].arrayGridRowData == null)
    GridGroups[strGridGroupName]['GridItem'].arrayGridRowData = [];

  if (GridGroups[strGridGroupName]['GridItem'].arrayGridRowData.length == 0)
    $('#' + strGridGroupName + '_table').empty();

  GridGroups[strGridGroupName]['GridItem'].arrayGridRowData = GridGroups[strGridGroupName]['GridItem'].arrayGridRowData.filter(function (itemGridRowDataExisting) {
    if (itemGridRowDataExisting.ID != itemGridRowData.ID)
      return true;
    else {
      $('#' + strGridGroupName + '_' + itemGridRowData.ID + '_row').remove();
      return false;
    }
  });

  $('#' + strGridGroupName + '_table').prepend(itemGridRowData.strHTMLRow);
  $('.GridItem_row_new').removeClass('GridItem_row_new');
  $('#' + strGridGroupName + '_' + itemGridRowData.ID + '_row').addClass('GridItem_row_new');
  GridGroups[strGridGroupName]['GridItem'].arrayGridRowData.unshift(itemGridRowData);

  GridAttachHandlers();
  ConvertUTCToLocal();
  GridComplete(strGridGroupName);
}

function GridComplete(strGridGroupName) {
  window.parent.GridLoaded(strGridGroupName);
}

function GridLoadEmptyRow(strGridGroupName, strHTMLEmptyRow) {
  GridGroups[strGridGroupName]['GridItem'].htmlRowWhenGridIsEmpty = strHTMLEmptyRow;
}

// blank function to be called in times when no operation is needed
function Noop(data) {

}

// functions - GRID - END

// functions - GRID2 - BEGIN
function Grid2Register(strGridGroupName) {
  // , arrayGridRowData
  // objGridRowData = JSON.parse(arrayGridRowData);

  var GridItem =
    {
      ID: strGridGroupName,
      funcSelected: Noop,
      funcDeleted: Noop,
      htmlRowWhenGridIsEmpty: '',
      arrayGridRowData: {}
    };

  if (GridGroups[strGridGroupName] == null)
    GridGroups[strGridGroupName] = {};

  GridGroups[strGridGroupName]['GridItem'] = GridItem;
}

function Grid2ReplaceRows(strGridGroupName, arrayGridRowData) {
  $('#' + strGridGroupName).empty();
  GridGroups[strGridGroupName]['GridItem'].arrayGridRowData = arrayGridRowData;

  if (null == arrayGridRowData || arrayGridRowData.length == 0)
    $('#' + strGridGroupName).append(GridGroups[strGridGroupName]['GridItem'].htmlRowWhenGridIsEmpty);
  else {
    for (index = 0; index < arrayGridRowData.length; index++) {
      $('#' + strGridGroupName).append(arrayGridRowData[index].strHTMLRow);
    }
  }

  Grid2AttachHandlers();
  ConvertUTCToLocal();
}

function Grid2LoadEmptyRow(strGridGroupName, strHTMLEmptyRow) {
  GridGroups[strGridGroupName]['GridItem'].htmlRowWhenGridIsEmpty = strHTMLEmptyRow;
}

function Grid2AttachHandlers() {

}

// functions - GRID2 - END

// functions - STATE - BEGIN
function StateCurrentMainPush(menuGroup, menuItem) {
  var StateItem = {};
  StateItem.type = 'main';
  StateItem.menuGroup = menuGroup;
  StateItem.menuItem = menuItem;
  StateItem.menuSubItem = '';

  if (g_StateNew.Items == null)
    g_StateNew.Items = [];

  lengthStateCurrent = g_StateNew.Items.length;
  g_StateNew.Items[lengthStateCurrent] = StateItem;
}

function StateCurrentSubPush(menuGroup, menuItem, menuSubItem) {
  var StateItem = {};
  StateItem.type = 'sub';
  StateItem.menuGroup = menuGroup;
  StateItem.menuItem = menuItem;
  StateItem.menuSubItem = menuSubItem;

  if (g_StateNew.Items == null)
    g_StateNew.Items = [];

  lengthStateCurrent = g_StateNew.Items.length;
  g_StateNew.Items[lengthStateCurrent] = StateItem;
}

function StateCurrentPush() {
  g_serializedStateNew = JSON.stringify(g_StateNew);

  if (!g_boolPopping && g_boolPushState) {
    if (g_StateCurrent != null && g_serializedStateCurrent == g_serializedStateNew) {
    }
    else
      window.history.pushState(g_StateNew, '');
    //lengthHistory = g_StateHistory.length;
    //g_StateHistory[lengthHistory] = g_StateNew;
  }

  if (g_boolPushState) {
    g_StateCurrent = g_StateNew;
    g_serializedStateCurrent = JSON.stringify(g_StateCurrent);
  }
  g_boolPushState = true;
  g_StateNew = {};
}

/*
function StateCurrentPop()
{
    lengthHistory = g_StateHistory.length;
    if (lengthHistory == 1)
        return false;
    
    g_StateHistory.splice(lengthHistory - 1, 1);
    
    lengthHistory = lengthHistory - 1;
    var StateCurrent = g_StateHistory[lengthHistory - 1];

    StateExecute(StateCurrent);

    return true;
}
*/

function StateExecute(StateCurrent) {
  lengthExec = StateCurrent.Items.length;
  g_boolPopping = true;

  for (i = 0; i < lengthExec; i++) {
    StateItem = StateCurrent.Items[i];
    if (StateItem.type == 'main')
      MenuClick(StateItem.menuGroup, StateItem.menuItem);
    else if (StateItem.type == 'sub')
      MenuSubClick(StateItem.menuGroup, StateItem.menuItem, StateItem.menuSubItem);

  }

  g_boolPopping = false;

}
// functions - STATE - END





// functions - DIALOG - BEGIN
function dialogDisplay(idDiv) {
  divDialog = $(idDiv);




  $(divDialog).dialog()
  $(divDialog).dialog("option", "width", 500);
  $('#gridTxHistory_div').append($('#divTxHistoryDetail').parent());
  //$("#gridTxHistory_div").parent().css({ position: 'relative' });
  //$("#gridTxHistory_div").css({ top: 500, left: 200, position: 'absolute' });
  $(divDialog).fadeIn(600);

  /*
  //Set the center alignment padding + border see css style
  var popMargTop = ($(divDialog).height()) / 2;
  var popMargLeft = ($(divDialog).width()) / 2;

  $(divDialog).css({
      'margin-top': -popMargTop,
      'margin-left': -popMargLeft
  });

  // Add the mask to body
  $('body').append('<div id="mask"></div>');
  $('#mask').fadeIn(300);
  */

}


//'position': 'absolute',
//'top': '50%',
//'left': '50%'

// functions - DIALOG - END


// functions - EDIT - BEGIN
var g_boolReentry = false;

function privProcessTextArea(control) {
  cntMaxCharacters = 1000;
  strValue = control.val();

  idCharsRemaining = control.prop('id').split('_')[0] + "_CharsRemaining";
  cntCharsRemaining = cntMaxCharacters - strValue.length;
  if (cntCharsRemaining < 0) {
    strValue = strValue.substring(0, cntMaxCharacters);
    control.val(strValue);
    control.scrollTop(control[0].scrollHeight);
    $('#' + idCharsRemaining).text(0);
    return false;
  }
  else
    $('#' + idCharsRemaining).text(cntCharsRemaining);

}
// functions - EDIT - END

// functions - RANDOM - BEGIN

function Calc() {

  IPYCookie = getCookie();

  var y = '';

  var message = IPYCookie + g_IP + navigator.userAgent;

  x = sha256(message);

  x.then(function (result) {
    g_Calc = result;
  },

    function (err) {
      g_Calc = err;
    });

  return y;

}

async function sha256(message) {

  var array = strEncodeUTF16(message);
  array = new Uint8Array(array);
  const hashBuffer = await crypto.subtle.digest('SHA-256', array);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}


function strEncodeUTF16(str) {
  var bytes = [];
  var charCode;
  for (var i = 0; i < str.length; ++i) {
    charCode = str.charCodeAt(i);
    bytes.push(charCode & 0xFF);
    bytes.push((charCode & 0xFF00) >> 8);

  }

  return bytes;
}


function getCookie() {
  var cookieReturn = '';

  cookie = document.cookie;

  arrayCookie = cookie.split(';');

  for (i = 0; i < arrayCookie.length; i++) {

    if (arrayCookie[i].toLocaleLowerCase().includes('guidipy')) {

      arrayX = arrayCookie[i].split('=');

      if (arrayX[1] != null) {
        cookieReturn += (arrayX[1]);
      }
    }

    else if (arrayCookie[i].toLocaleLowerCase().includes('guidsession')) {

      arrayX = arrayCookie[i].split('=');

      if (arrayX[1] != null) {
        cookieReturn += (arrayX[1]);
      }

    }

  }
  return cookieReturn;
}

function formatDollar(num) {
  var p = num.toFixed(2).split(".");
  return "$" + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
    return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  }, "") + "." + p[1];
}

function SetUserIPAddress(ip) {
  g_IP = ip;
}

//functions - RANDOM - END
