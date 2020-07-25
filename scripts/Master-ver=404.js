var g_urlIAccountsBaseline;
var g_urlLoginRegister;
var g_boolAuthyEnabled = false;
var g_objLoginData;
var g_boolUserLoggedIn;

var g_InactivityTimer;
var g_secondsToExpiration;
var g_boolReadyForNextPing = true;
var g_boolInactivityTimerReset = false;

var g_objImagesByPriority = {};
var g_priorityImagesCurrent = 1;
var g_cntImagesAtCurrentPriority = 0;
var g_cntImagesAtCurrentPriorityLoaded = 0;

var g_idMarketingSlide = 0;

var g_disconnections = 0;

var g_urlLogin;
var g_urlLogout;
var g_urlSubscribeUnsubscribe;
var g_urlBeta;
var g_urlForgotPassword;
var g_urlResetPassword;
var g_urlPasswordSubmitPhoneNumberForVerification;
var g_urlPasswordSMSCodeSubmit;
var g_urlResendVerificationEmail;
var g_urlCreateAccount1;
var g_urlCreateAccount2;
var g_urlIAccountsInactivityCheck;
var g_urlImages;
var g_urlAddressVerify;
var g_urlAddressBook;
var g_urlEarnCustomWallet;
var g_urlEarnBitcoinOptions;
var g_urlEarnBitcoinOptionsPhysical;
var g_urlAddressesUsed;
var g_urlBankAccount;
var g_urlBTCPaymentContract;
var g_urlBetweenCurrenciesContract;
var g_urlBankAccountContract;
var g_urlConversionRate;
var g_urlEarnBitcoinSubmitAmazon;
var g_urlBlockchainBalance;
var g_urlTxHistory;
var g_urlCurrency;
var g_urlTxHistoryCancel;
var g_urlLogoutLanding;
var g_urlSecurityProfile;
var g_urlSecurityProfileLevel1;
var g_urlSecurityProfileLevel1KBA;
var g_urlAuthySetup;
var g_urlAuthyInstructions;
var g_urlAuthyVerify;
var g_urlVerifyEmail;
var g_urlRequestInvitation;
var g_urlInvitationCodeSubmit;
var g_urlSettingsName;
var g_urlSettingsPassword;
var g_urlSettingsCloseAccount;
var g_urlSettingsEmail;
var g_guidServiceID;
var g_guidSessionID;
var g_urlSettingsAddTwitter;
var g_urlTwitter;
var g_urlGiftCardCatalog;
var g_urlGiftCardCatalogValues;
var g_urlCatalogValues;
var g_urlGiftCardPayment;
var g_urlGiftCardInventory;
var g_urlPurchase;
var g_urlLimits;
var g_urlPurchasePromotion;
var g_urlPurchaseSell;
var g_urlAmazonDirect;
var g_urlStarbucksDirect;
var g_urlBitcoinDirect;
var g_urlGlideraNavigate;
var g_urlGlideraSendText;
var g_urlVerifyGlideraPhone;
var g_urlGlideraLimits;
var g_urlVPNIPGet;
var g_urlGetNextStaticTime;
var g_urlPostNewShippingAddress;
var g_urlFinalizeShipment;
var g_urlPollShippingInfoFinal;
var g_urlBitcoinDirectSubmitNewLoginCredentials;
var g_urlBitcoinDirectToAmazonZincPromptClaimGiftCard;
var g_urlBitcoinDirectSubmitAmazon2FA;



var g_PageReady = false;
var g_BTCAddress;
var g_BTCAddressesAll;
var g_defaultCurrency;
var g_supportedCurrencies = {};
var g_minFeesForCurrencies = {};
var g_UserName;
var g_UserEmail;
var g_SecurityLevel1;
var g_SecurityLevel2;
var g_SecurityLevel2a;
var g_SecurityLevel2aInReview;
var g_SecurityLevel2b;
var g_SecurityLevel2bInReview;
var g_SecurityLeve2BeforeLevel1;
var g_SecurityGlideraRegistered;
var g_SecurityGlideraPhoneValidated;
var g_BlockHeightCurrent;
var g_boolInsideGetWalletBalanceCall = false;
var g_dictConversionRate = [];
//var g_floatEarnBitcoinDiscountPercent = 0;
//var g_floatEarnBitcoinDiscountPercentSub100 = 0;
var g_floatEarnBitcoinDiscountBonus = 0;
var g_satoshiBankPending = [];
var g_satoshiBalanceTotalFromTxHistory = {};
var g_GetWalletBalancePoll;
var g_guidOnBehalfOfUserID;
var g_satoshiWalletBalanceUsable = [];
var g_satoshiWalletBalancePending = [];
var g_boolSubscribed = true;
var g_strAmount_LastKnownGood;
var g_strAmount_LastKnownGoodUSD;
var g_strAmount_LastKnownGoodBTC;
var g_floatSatoshi_LastKnownGood;
var g_floatFiat_LastKnownGood;
var g_floatFiat_LastKnownGoodUSD;
var g_floatFiat_LastKnownGoodBTC;
var g_EnteredAmountBlank;
var g_FiatMaxWithdraw;
var g_TxHistoryList = [];
var g_TxHashes = [];
var g_TxHistoryLoaded = false;
var g_TxHistoryProcessed = false;
var g_boolSkipExitConfirmation = false;
var g_boolExitConfirmation = false;
var g_timerSecurityProfile = null;
var g_boolReadyForPriceCheck = true;
var g_stateWalletWithdrawDeposit;

var g_PhoneNumberPure;
var g_CountryCodeEntered;
var g_CountrySelected;
var g_PhoneNumberForDisplay;

var g_floatBTCPayeeWillReceive;
var g_floatFiatPayeeWillReceive;
var g_floatBTCExpediteFee;
var g_floatFiatExpediteFee;
var g_guidContractFlowID;

var g_BankAccountList = {};
var g_idBankSelected;
var g_urlBankLogo;
var g_strBankName;
var g_tokenBankMFA;
var g_SynConfirmationTimeout;
var g_countdownSynConfirmationExpiration_Initial = 60;
var g_countdownSynConfirmationExpiration = g_countdownSynConfirmationExpiration_Initial;
var g_guidSelectedBankAccount;
var g_guidContractSynFlowID;
var g_strMFAQuestion = '';
var g_strBankRoutingNumber = '';
var g_strBankAccountNumber = '';
var g_strBankAccountType = '';
var g_strBankAccountNickname = '';

var g_txhistoryItemSelected = {};
var g_txhistoryUSDBTCView = 'usd';
var g_cntTxHistoryListCalls = 0;
var g_boolNavigateToTxHistory = false;
var g_guidCancelFlowID;
var g_ContractIDToBeCancelled;

var g_AddressBookList = {};
var g_Limits = {};
var g_boolDefaultEBWallet = true;
var g_strCustomEBAddress = '';
var g_strCustomEBFee = '';
var g_satoshiCustomEBFee = 0;
var g_boolCustomEBWalletAddressChange = false;
var g_EarnBitcoinOptions = [];
var g_EarnBitcoinOptionSelected = 0;
var g_EarnBitcoinPhysicalGridSelected = null;
var g_EarnBitcoinPhysicalValueSelected = 0;
var g_EarnBitcoinPhysicalMerchantSelected = '';
var g_EarnBitcoinPhysicalQuantitySelected = 0;
var g_EarnBitcoinCalculatorValueSelected = 0;
var g_EarnBitcoinCalculatorQuantitySelected = 0;
var g_EarnBitcoinCalculatorQuantitySub100Rate = false;
var g_EBEmailAddress = '';
var g_stateAddressBook;
var g_strPayeeAddress;
var g_strPayeeName;
var g_longPayeeTwitterID;
var g_strPayeeComment;
var g_boolAddToAddressBook;
var g_strPayeeAddressBookID;
var g_boolInternalPayee;
var g_AddressBookControlLastShown;


var g_BrandsAvailableList = {};
var g_BrandsValuesList = [];
var g_gridItemGiftCardBrandSelected = {};
var g_CardIDToSelect = '';
var g_catalogCategories = { GiftCards: 'GiftCards', HardwareWallets: 'HardwareWallets', VPN: 'VPN', BitcoinDirect: 'BitcoinDirect' }
var g_loadTypes = { Empty: 'Empty', All: 'All', Shortlink: 'Shortlink' };
var g_fancyboxFocus = '';

var g_fiatSelectedCardAmountInCents;
var g_enumSelectedCardBrand;
var g_quantityMax = 0;
var g_strQuantityLastKnownGood = '1';

var g_CatalogActive;
var g_CatalogIDToSelect = '';
var g_GridCatalogItemSelected = {};
var g_CatalogBrandsValuesList = [];
var g_strQuantityLastKnownGoodCatalog = '1';
var g_HardwareWalletBrand = 'HardwareWallets';

var g_boolAmazonCredentialsOverride = false;
var g_objAmazonCredentials = null;
var g_objAmazonContract = null;
var g_BitcoinDirectList = {};
var g_objBitcoinDirectSelected;

var g_ItemForPurchaseSelected = {};
var g_percentDiscount = 0;
var g_promotionCode = '';

var g_InventoryListReadyToPoll = [];
var g_boolNavigateToInventory = false;

var g_AddressCurrentForDeposit = {};

var g_strSelectedCurrencyFrom;
var g_strSelectedCurrencyTo;

var g_currentShippingAddress;
var g_shippingStatus = { NoInfoReceived: 'NoInfoReceived', ShippingLocationReceived: 'ShippingLocationReceived', ShipmentFinalized: 'ShipmentFinalized' };
var DisplayShippingAction = { Start: 0, DisplayConfirmation: 2 };

var g_VPNProtectionLoaded = false;
var g_VPNGoogleLoaded = false;
var g_VPNBrandsAvailableList = [];
var g_VPNValuesList = [];
var g_VPNBrandSelected = {};
var g_VPNValueSelected = {};
var g_exchangeRateHub;

var g_strPhoneForVerification;

var g_objKBA;

var g_enumFaqPageToDisplay;

var g_AuthyRequestID;
var g_boolAuthySetup = false;
var g_guidCodeFlowID;
var g_guidAuthyCodeFlowID;
var g_stateAuthy;
var g_cntSMSRetries = 0;


var g_longTwitterIDPayer = 0;
var g_longTwitterIDPayee = 0;
var g_ContractIDPayee = null;
var g_payeeUserIdForService = '';

var g_strShortcodeCommand;
var g_ShortlinkUserIdForService = '';
var g_longShortcodeTwitterID = '';
var g_satoshiWalletBalanceUsableLightweight = [];
var g_satoshiWalletBalancePendingLightweight = [];

var g_TwitterNew = false;
var g_TwitterID = '';
var g_strTwitterOauthToken;
var g_strTwitterOauthVerifier;

//var g_rewardsLevelsVerificationIDNeeded;
var g_userEarnBitcoinOffset; 

var g_arrayEarnBitcoinOptions = [];

var g_arrayLinkPrefixForAddress = [];
g_arrayLinkPrefixForAddress['BTC'] = 'https://blockchain.info/address/';
g_arrayLinkPrefixForAddress['BCH'] = 'https://explorer.bitcoin.com/bch/address/';
g_arrayLinkPrefixForAddress['BSV'] = 'https://blockchair.com/bitcoin-sv/address/';

var g_urlAuctionsBuyBidsList;
var g_GridAuctionBidPackSelected = {};
var g_urlAuctionsBuyBids;
var g_AuctionId;
var bidsMade = [];
var g_auctionsHub;
var g_urlAuctionsBid;


$(document).ready(function () {

  g_PageReady = true;

  if (self == top) {
    document.documentElement.style.display = 'block';
  } else {
    top.location = self.location;
  }


  //g_exchangeRateConnection = $.

  ImagesForPageLoad();
  //GetConversionRate();
  //PollConversionRate();


  //ready - signalr - begin

    g_exchangeRateHub = $.connection.exchangeRateHub;

    g_auctionsHub = $.connection.auctionsHub;

    g_exchangeRateHub.client.broadcastMessage = function (rate) {

        dictRate = rate.dictExchangeRatePerCurrency;
        for (var key in dictRate) {
            if (dictRate[key] != g_dictConversionRate[key] && dictRate[key] != 0) {
                UpdateWalletBalances(key, g_satoshiWalletBalanceUsable[key], g_satoshiWalletBalanceUsable[key], g_satoshiWalletBalancePending[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_dictConversionRate[key], dictRate[key]);
            }

        }

    };

    /*
    g_auctionsHub.client.broadcastMessage = function (auctions) {

        if (g_AuctionId != null && g_AuctionId != '') {

            var auction = auctions[g_AuctionId];

            if (auction != null) {
                var bidMadeValue = bidsMade[auction.AuctionId];

                if (bidMadeValue != null) {

                    if (bidMadeValue <= auction.CurrentBidCents) {
                        UpdateAuction(auction);
                    }
                }
                else {
                    UpdateAuction(auction);
                }

            }

        }
        else {
            for (var key in auctions) {

                var auction = auctions[key];

                UpdateAuction(auction);

            }
        }
    }

    */
    $.connection.hub.start();

    $.connection.hub.disconnected(function () {
        g_disconnections = g_disconnections + 1;

        setTimeout(function () {
            $.connection.hub.start();
        }, 5000); // Restart connection after 5 seconds.
    });


   


  //ready - signalr - end


  // ready - authy - begin
  $('.classRecommendedEnableAuthy').click(function () {
    MenuClick('LeftMenu', 'Settings');
    MenuSubClick('LeftMenu', 'Settings', 'Authentication');
    return false;
  });
  $('.classRecommendedDisableAuthy').click(function () {
    MenuClick('LeftMenu', 'Settings');
    MenuSubClick('LeftMenu', 'Settings', 'Authentication');
    return false;
  });
  $('.classSendAuthyCode').click(function () {
    ClearErrors();
    $('.classNoAuthySendCode').hide();
    $('.classNoAuthyCodeSent').show();

    g_AuthyRequestID = $(this)[0].id.split('_')[1];
    strID = g_AuthyRequestID + '_Edit';
    $('#' + strID).focus();
    $('#' + strID).val('');

    RequestAuthCode('', RequestAuthCodeSuccess, RequestAuthCodeFailure, false);

    setTimeout(function () {
      $('.classNoAuthyCodeSent').hide();
      $('.classNoAuthySendCode').fadeIn(500);
    }, 40000);

    return false;
  });
  $('#AuthyStep2_Edit').on('input', function (e) {
    if ($('#AuthyStep2_Edit').val().trim() != '') {
      if (g_stateAuthy == 'DisablePairing')
        ButtonAction('btnAuthyDisable', 'enable');
      else
        ButtonAction('btnVerifyDevice', 'enable');

    }
    else {
      if (g_stateAuthy == 'DisablePairing')
        ButtonAction('btnAuthyDisable', 'disable');
      else
        ButtonAction('btnVerifyDevice', 'disable');
    }
  });
  $('#btnVerifyDevice').on('ClickEvent', function (event, data) {
    AuthySetup($('#AuthyStep2_Edit').val().trim());
  });
  $('#btnAuthyDisable').on('ClickEvent', function (event, data) {
    AuthyDisable($('#AuthyStep2_Edit').val().trim());
  });
  $('#boxAuthyCode_Edit').on('input', function (e) {
    if ($('#boxAuthyCode_Edit').val().trim() != '')
      ButtonAction('btnAuthyEnable', 'enable');
    else
      ButtonAction('btnAuthyEnable', 'disable');
  });
  $('#btnAuthyEnable').on('ClickEvent', function (event, data) {
    AuthyVerify($('#boxAuthyCode_Edit').val().trim());
  });
  // ready - authy - end




  if (AmIinWallet()) {

    $('.classTemporarilyDisabled').hide();
    $(window).on('popstate', function (event) {
      StateCurrent = event.originalEvent.state;
      if (null != StateCurrent)
        StateExecute(StateCurrent);
    });
    AdjustHeightOnResizeFull('divMarketing');
    $(window).resize(function () {
      AdjustHeightOnResizeFull('divMarketing');
      AdjustHeightOnResize('gridTxHistory');
      AdjustHeightOnResize('gridAddressBook');
      AdjustHeightOnResize('gridBankBuyAccounts');
      AdjustHeightOnResize('gridBankSellAccounts');
      AdjustHeightOnResize('gridGiftCard');
      AdjustHeightOnResize('gridGiftCardCatalogValues');

      AdjustViewOfSocialLinks();
    });
    $('#btnLoginOrCreateAccount1').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount2').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount3').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount4').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount5').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount6').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount7').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount8').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount_gridGiftCard').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $('#btnLoginOrCreateAccount_gridGiftCardArchive').on('ClickEvent', function (event, data) {
      window.location = g_urlLoginRegister;
      return false;
    });
    $(document).on('MenuClickedEvent', function (event, data) {
      ClearErrors();
      UsdBtcReset();
      if (g_InactivityTimerEnabled)
        InactivityTimerTimeoutReset();
    });
    $(document).on('ClearEntryFieldsEvent', function (event, data) {
      $('.classCharactersRemaining').text('1000');
    });


    // ready - inactivity - begin
    $('#idInactivityTimeout').click(function () {
      return false;
    })
      .fancybox({
        type: 'html',
        autoSize: true,
        hideOnContentClick: false
      });
    $('#btnInactivityCancel').click(function () {
      InactivityTimerTimeoutReset();
    })
    // ready - inactivity - end

    // ready - wallet - begin
    $('#imgAboutBitcoinLess').click(function () {
      $('#imgAboutBitcoinLess').hide();
      $('#imgAboutBitcoinMore').show();
      $('#textAboutBitcoinMore').hide();
    });
    $('#imgAboutBitcoinMore').click(function () {
      $('#imgAboutBitcoinLess').show();
      $('#imgAboutBitcoinMore').hide();
      $('#textAboutBitcoinMore').show();
    });
    $('#boxAmountToSendInUSD_Edit').on('input', function (e) {
      BTCEntryReset();
      var input = $(this).val();
      var btcAmount = privUSDAmountEntry($(this), input);
      CheckAmountToSend();
    });
    $('#boxAmountToSendInBTC_Edit').on('input', function (e) {
      USDEntryReset();
      var input = $(this).val();
      var btcAmount = privBTCAmountEntry($(this), input);
      CheckAmountToSend();
    });
    $('#boxFiatAmountToDepositFromSyn_Edit').on('input', function (e) {
      var input = $(this).val();
      var btcAmount = privUSDAmountEntry($(this), input);
      CheckAmountToDeposit();
      privDepositSynCheckToEnableContinue();

    });
    $('#boxAmountToDepositInUSD_Edit').on('input', function (e) {
      BTCEntryReset();
      var input = $(this).val();
      var btcAmount = privUSDAmountEntry($(this), input);
    
      if (CheckAmountToReceive()) {
        privProcessDepositRequest(btcAmount);
      }
      else {
        privProcessDepositRequest(0);
      }
      return false;
    });
    $('#boxAmountToDepositInBTC_Edit').on('input', function (e) {
      USDEntryReset();
      var input = $(this).val();
      var btcAmount = privBTCAmountEntry($(this), input);
      if (CheckAmountToReceive()) {
        privProcessDepositRequest(parseFloat(g_strAmount_LastKnownGoodBTC));
      }
      else {
        privProcessDepositRequest(0);
      }
      return false;
    });
    $('.BTCAddressOnBlockchainInfo').click(function () {
      urlBlockchain = 'https://blockchain.info/address/' + g_BTCAddress;
      window.open(urlBlockchain, '_blank');
      return false;
    });

    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    SetBitcoinAddressInUI();
    for (var key in g_dictConversionRate)
      SetConversionRate(key, g_dictConversionRate[key]);
    SetAuthyState(g_boolAuthyEnabled);
    SetUserName(g_UserName);
    SetUserEmail(g_UserEmail);
    SetSubscribedStatus(g_boolSubscribed);
    for (key in g_satoshiWalletBalanceUsable) {
      SetWalletBalanceInSatoshi(key, g_satoshiWalletBalanceUsable[key], g_satoshiWalletBalancePending[key] /*, g_satoshiWalletBalanceConfirmed*/);
    }
    SetSupportedCurrenciesObject(g_supportedCurrencies);
    GetWalletBalancePoll();
    ObtainLimits();
    //ObtainGlideraBuyLimits();
    // ready - wallet - end

    // ready - walletwithdraw - begin
    $('#PayeeAddress_Edit').on('input', function (e) {
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      $('#rowUnderstandReWrongAddress').hide();
      $('#rowContinueCreateNewPayee').show();
      g_idBtnCancel = '';
    });
    $('#PayeeName_Edit').on('input', function (e) {
      ClearErrors();

      if ($('#PayeeName_Edit').val() == '') {
        $("#chkAddToAddressBook").prop("checked", false);
        $('#chkAddToAddressBook').prop("disabled", true);
      }
      else {
        $("#chkAddToAddressBook").prop("checked", true);
        $('#chkAddToAddressBook').prop("disabled", false);
      }
      $('#rowUnderstandReWrongAddress').hide();
      $('#rowContinueCreateNewPayee').show();
      g_idBtnCancel = '';
    });
    $('#btnContinueSendMoney').on('ClickEvent', function (event, data) {
      BTCPaymentContractGet();
      return false;
    });
    $('#AmountChange').click(function () {
      ClearErrors();
      $('#rowAmountToSendEdit').show();
      $('.classSendFundsContinue').show();
      $('.classAmountToSendConfirm').hide();
      $('.classEnterPassword').hide();
      $('#boxAmountToSendInUSD_Edit').val(g_strAmount_LastKnownGoodUSD);
      $('#boxAmountToSendInBTC_Edit').val(g_strAmount_LastKnownGoodBTC);
      if ('' == g_strAmount_LastKnownGoodBTC) {
        privUSDAmountEntry($('#boxAmountToSendInUSD_Edit'), g_strAmount_LastKnownGoodUSD);
        $('#boxAmountToSendInBTC_Edit').val('');
      }
      else {
        privBTCAmountEntry($('#boxAmountToSendInBTC_Edit'), g_strAmount_LastKnownGoodBTC);
        $('#boxAmountToSendInUSD_Edit').val('');
      }
      CheckAmountToSend(false);

      g_idBtnCancel = 'PayeeChange';
      return false;
    });
    // ready - walletwithdraw - end

    // ready - marketing - begin
    $('.classMarketingCells').hide();
    //MarketingHideCurrentDisplayNext(0);
    MarketingRotate();
    GetNextMaintenance();
    // ready - marketing - end

    // ready - welcome - begin
    $('.classWelcomeAmazonDirect').click(function (event, data) {
      ShortcutToAmazonDirect();
      return false;
    });
    $('.classWelcomeStarbucksDirect').click(function (event, data) {
      MenuClick('LeftMenu', 'Shopping');
      MenuSubClick('LeftMenu', 'Shopping', 'StarbucksDirect');
      return false;
    });
    $('#lnkWelcomeTransferBitcoinFromAnotherWallet').click(function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Wallet');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Wallet', 'ReceiveFunds');
      return false;
    });
    $('.classWelcomeWhatHappenedToBuyBitcoin').click(function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'FAQ');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'FAQ', 'WhereIsBuyBitcoin');
      return false;
    });
    $('.classWelcomeEarnBitcoin').click(function (event, data) {
      ShortcutToEarnBitcoin();
      return false;
    });
    $('.classConvertCurrencies').click(function (event, data) {
      ShortcutToSwapCurrencies();
      return false;
    });
    $('.classWelcomeBuyBitcoin').click(function (event, data) {
      ShortcutToBuyBitcoin();
      return false;
    });
    $('.classWelcomeSellBitcoin').click(function (event, data) {
      ShortcutToSellBitcoin();
      return false;
    });
    $('#lnkWelcomeGetStartedWithPayment').click(function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Wallet');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Wallet', 'SendFunds');
      return false;
    });
    $('.classWelcomeBuyGiftCard').click(function (event, data) {
      ShortcutToGiftcards();
      return false;
    });
    $('.classWelcomeVPN').click(function (event, data) {
      ShortcutToVPN();
      return false;
    });
    $('#lnkWelcomeLearnMore').click(function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'FAQ');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'FAQ', 'PayingWithBitcoin');
      return false;
    });
    $('#btnWelcomeFullExperience').on('ClickEvent', function (event, data) {
      $('.classWelcomeSpotlight').hide();
      $('.classWelcomeMain').hide();
      $('.classWelcomeMain').css('visibility', 'hidden');
      $('.classWelcomeMain').css('opacity', '0');
      $('.classWelcomeMain').show();
      $('.classWelcomeMain').css('visibility', 'visible');
      $('.classWelcomeMain').fadeTo(3000, 1, function () { });

    });
    // ready - welcome - end



    // ready - phonenumber - begin
    if (null != g_CountrySelected && null != g_PhoneNumberPure)
      SetCountryAndPhoneNumber(g_CountryCodeEntered, g_CountrySelected, g_PhoneNumberForDisplay);
    // ready - phonenumber - end

    // ready - withdrawsyn - begin
    $('#boxFiatAmountToWithdrawToSyn_Edit').on('input', function (e) {
      privWithdrawSynCheckToEnableContinue();
      return false;
    });
    $('#btnDepositSynNow').on('ClickEvent', function (event, data) {
      BankSynDepositNow();
      return false;
    });
    $('#btnWithdrawSynNow').on('ClickEvent', function (event, data) {
      BankSynWithdrawNow();
      return false;
    });
    $('#btnContinueDepositFromSyn').on('ClickEvent', function (event, data) {
      if (g_guidSelectedBankAccount.boolSellOnly) {
        ClearEntryFields();
        $('.classBankAccountContractError').html('Selected bank account may only be used to SELL COIN');
        ButtonAction('btnContinueDepositFromSyn', 'reset');
      }
      else
        BankDepositGetContract();
      return false;
    });
    $('#btnContinueWithdrawalToSyn').on('ClickEvent', function (event, data) {


      BankWithdrawalGetContract();
      return false;
    });
    $('#btnCancelAmountToWithdrawToSynConfirm').click('input', function (e) {
      $('#rowAmountToWithdrawToSynConfirm').hide();
      $('#rowAmountToWithdrawToSynEdit').show();
      privWithdrawSynCheckToEnableContinue();
      $('#boxFiatAmountToWithdrawToSyn_Edit').focus();
      g_idBtnCancel = 'lnkCancelBankSelectForTx';
      return false;
    });
    $('.classCancelAmountToWithdrawToSynConfirm').click('input', function (e) {
      $('#rowAmountToWithdrawToSynConfirm').hide();
      $('#rowAmountToWithdrawToSynEdit').show();
      privWithdrawSynCheckToEnableContinue();
      $('#boxFiatAmountToWithdrawToSyn_Edit').focus();
      g_idBtnCancel = 'lnkCancelBankSelectForTx';
      return false;
    });
    $('#lnkCancelAmountToDepositFromSynConfirm').click('input', function (e) {
      $('#rowAmountToDepositFromSynConfirm').hide();
      $('#rowAmountToDepositFromSynEdit').show();
      privDepositSynCheckToEnableContinue();
      $('#boxFiatAmountToDepositFromSyn_Edit').focus();
      g_idBtnCancel = 'lnkCancelBankSelectForTx';
      return false;
    });
    $('.classLnkCancelAmountToDepositFromSynConfirm').click('input', function (e) {
      $('#rowAmountToDepositFromSynConfirm').hide();
      $('#rowAmountToDepositFromSynEdit').show();
      privDepositSynCheckToEnableContinue();
      $('#boxFiatAmountToDepositFromSyn_Edit').focus();
      g_idBtnCancel = 'lnkCancelBankSelectForTx';
      return false;
    });
    $('#idDepositCancelBankSelect').click('input', function (e) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('#btnCancelBankSelectedDeposit').click('input', function (e) {
      $('#rowDepositBankSelected').hide();
      $('#rowDepositSelectBank').hide();
      $('#rowDepositSelectBank').hide();
      $('#rowDepositBankAccountGrid').show();
      return false;
    });
    $('#boxBankMFAAnswer_Edit').on('input', function (e) {
      if ($('#boxBankMFAAnswer_Edit').val().trim() != '')
        ButtonAction('btnBankMFASubmit', 'enable');
      else
        ButtonAction('btnBankMFASubmit', 'disable');
    });
    $('#boxDepositSynAuthyCode_Edit').on('input', function (e) {
      privDepositSynCheckIfToEnableDepositSynNow();
    });
    $('#chkAgreeToSynBuy').click(function () {
      privDepositSynCheckIfToEnableDepositSynNow();
    });
    $('#boxWithdrawSynAuthyCode_Edit').on('input', function (e) {
      if ($('#boxWithdrawSynAuthyCode_Edit').val().trim() != '')
        ButtonAction('btnWithdrawSynNow', 'enable');
      else
        ButtonAction('btnWithdrawSynNow', 'disable');
    });
    //BankAccountList('gridBankBuyAccounts', 0);
    //BankAccountList('gridBankSellAccounts', 0);
    // ready - withdrawsyn - end



    // ready - banksyn - begin
    $('#btnLevel1VerifyFromBankAdd').on('ClickEvent', function (event, data) {
      MenuClick('LeftMenu', 'Settings');
      return false;
    });
    $('#btnBankMFASubmit').on('ClickEvent', function (event, data) {
      BankSubmitMFA();
      return false;
    });
    $('#btnWalletAddBank').on('ClickEvent', function (event, data) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('#btnVerifyBankByRoutingContinue').on('ClickEvent', function (event, data) {
      g_strBankRoutingNumber = $('#editBankRoutingNumber_Edit').val().trim();
      g_strBankAccountNumber = $('#editBankAccountNumber_Edit').val().trim();

      DisplayBank('BankCredentialsByRoutingAccountReenter');
      return false;
    });
    $('#btnVerifyBankByRoutingContinue2').on('ClickEvent', function (event, data) {
      var boolSucceeded = true;
      var strBankRoutingNumberReentered = $('#editBankRoutingNumberReenter_Edit').val().trim();
      var strBankAccountNumberReentered = $('#editBankAccountNumberReenter_Edit').val().trim();

      if (g_strBankRoutingNumber != strBankRoutingNumberReentered || g_strBankAccountNumber != strBankAccountNumberReentered)
        boolSucceeded = false;

      if (!boolSucceeded) {
        DisplayBank('BankCredentialsByRoutingAccount');

        if (g_strBankRoutingNumber != strBankRoutingNumberReentered)
          $('#editBankRoutingNumber_Error').text("Routing numbers did not match");

        if (g_strBankAccountNumber != strBankAccountNumberReentered)
          $('#editBankAccountNumber_Error').text("Account numbers did not match");
      }
      else
        DisplayBank('BankCredentialsByRoutingAccountNickname');

      return false;
    });
    $('#btnVerifyBankByRoutingSubmit').on('ClickEvent', function (event, data) {
      g_strBankAccountNickname = $('#boxBankRoutingAccountNickname_Edit').val().trim();
      if ($('#radioListCheckingSavings_0').is(":checked"))
        g_strBankAccountType = 'CHECKING';
      else
        g_strBankAccountType = 'SAVINGS';

      BankRegisterByRoutingAccount();
    });
    $('.classBankAddByRoutingAccount').click('input', function (e) {
      DisplayBank('BankCredentialsByRoutingAccount');
      return false;
    });
    $('#idCancelBankSelectForAdd').click('input', function (e) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('.classLnkCancelBankSelectForAdd').click('input', function (e) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('.classLnkCancelBankSelectForTx').click('input', function (e) {
      DisplayBank('ListOfSavedBanks');
      return false;
    });
    $('#lnkCancelBankSelectForTx').click('input', function (e) {
      DisplayBank('ListOfSavedBanks');
      return false;
    });
    $('#lnkCancelBankSelectForAddByRouting').click('input', function (e) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('.classLnkCancelBankSelectForAddByRouting').click('input', function (e) {
      DisplayBank('ListOfAvailableBanks');
      return false;
    });
    $('#lnkCancelBankSelectForAddByRoutingReenter').click('input', function (e) {
      DisplayBank('BankCredentialsByRoutingAccount');
      return false;
    });
    $('#lnkCancelBankSelectForAddByRoutingNickname').click('input', function (e) {
      DisplayBank('BankCredentialsByRoutingAccount');
      return false;
    });
    $('.classBankSelect').click('input', function (e) {
      arrayBankInfo = $(this).prop('id').split('~');

      g_idBankSelected = arrayBankInfo[1];
      g_strBankName = arrayBankInfo[2];
      g_urlBankLogo = arrayBankInfo[3];

      DisplayBank('BankSelectedForAdd');

    });
    $('#editBankUsername_Edit').on('input', function (e) {
      privSynCheckToEnableBankVerify();
    });
    $('#editBankPassword_Edit').on('input', function (e) {
      privSynCheckToEnableBankVerify();
    });
    $('#editBankRoutingNumber_Edit').on('input', function (e) {
      privSynCheckToEnableBankByRoutingContinue();
    });
    $('#editBankAccountNumber_Edit').on('input', function (e) {
      privSynCheckToEnableBankByRoutingContinue();
    });
    $('#editBankRoutingNumberReenter_Edit').on('input', function (e) {
      privSynCheckToEnableBankByRoutingContinue2();
    });
    $('#editBankAccountNumberReenter_Edit').on('input', function (e) {
      privSynCheckToEnableBankByRoutingContinue2();
    });
    $('#boxBankRoutingAccountNickname_Edit').on('input', function (e) {
      privSynCheckToEnableBankByRoutingSubmit();
    });
    $('#btnVerifyBankCredentials').on('ClickEvent', function (event, data) {
      BankRegister();
    });
    // ready - banksyn - end


    // ready - twitter - begin
    $('#btnSettingsSocialTwitterChangeSubmit').on('ClickEvent', function (event, data) {
      TwitterAddSubmit();
      return false;
    });
    $('#btnSettingsSocialTwitterRemoveSubmit').on('ClickEvent', function (event, data) {
      TwitterRemoveSubmit();
      return false;
    });
    // ready - twitter - end

    // ready - txhistory - begin
    $('#divTxHistoryDetail').click(function () {
      return false;
    })
      .fancybox({
        type: 'html',
        autoSize: true,
        hideOnContentClick: false
      });
    $('#btnExitWithoutCancelling').click(function (event) {
      $.fancybox.close();
      return false;
    });
    $('#boxCancellationAuthyCode_Edit').on('input', function (e) {
      ClearErrors();
      var input = $(this).val();
      if (input.length > 0) {
        ButtonAction('btnConfirmCancellation', 'enable');
      }
      else {
        ButtonAction('btnConfirmCancellation', 'disable');
      }

    });
    $('#btnConfirmCancellation').on('ClickEvent', function (event, data) {

      paramsCancellation = {};
      paramsCancellation.serviceid = g_guidServiceID;
      paramsCancellation.sessionid = g_guidSessionID;
      paramsCancellation.guidCancelFlowID = g_guidCancelFlowID;
      paramsCancellation.strContractID = g_ContractIDToBeCancelled;
      paramsCancellation.strCancellationNote = $('#editCancellationNote_Edit').val();

      if (g_txhistoryItemSelected.ContractStatus == 'SendComplete') {
        command = 'PUT';
      }
      else {
        command = 'DELETE';
      }

      $.ajax({
        type: command,
        url: g_urlTxHistoryCancel,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(paramsCancellation),
        success: function (response) {
          if (response.responsecode == 'SUCCESS') {
            g_boolNavigateToTxHistory = true;
            TxHistoryList('gridTxHistory', 1);
            InventoryItemList('gridGiftCard', g_loadTypes.All);
          }
          else if (response.responsecode == 'EXPIRED') {
            $('#errorTxCancellation').html('Cancellation request expired - <a href="" onclick="$.fancybox.close(); return false;">try again</a>');
            ButtonAction('btnConfirmCancellation', 'reset');
            ButtonAction('btnConfirmCancellation', 'disable');
          }
          else if (response.responsecode == 'INVALID_CONTRACT') {
            $('#errorTxCancellation').html('Unable to cancel transaction <br /> (Your recipient may have recently claimed it)<br />');
            TxHistoryList('gridTxHistory', 1);
            ButtonAction('btnConfirmCancellation', 'enable');

          }
          else {
            $('#errorTxCancellation').html('Error cancelling transaction: ' + response.responsecode + '<br />(' + response.errordescription + ')');
            ButtonAction('btnConfirmCancellation', 'enable');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          $('#errorTxCancellation').text('Error cancelling transaction: ' + xhr.statusText);
          ButtonAction('btnConfirmCancellation', 'enable');
        }

      });

    });
    $('.CorrelatedTransaction').click(function (event) {
      idOtherTransaction = $(this).prop('id');
      g_TxHistoryList.forEach(function (objGridItem) {
        if (objGridItem.ID == idOtherTransaction) {
          TxHistoryItemSelected(objGridItem);
        }
      });
    });
    $('.classHistoryView').click(function () {
      if (g_txhistoryUSDBTCView == 'usd') {
        //$('#cellUSDBTCView').text('Bitcoin View');
        $('.classHistoryView').text('Switch to USD View');
        $('.classHistoryBTC').show();
        $('.classHistoryUSD').hide();
        g_txhistoryUSDBTCView = 'btc';
      }
      else {
        //$('#cellUSDBTCView').text('USD View');
        $('.classHistoryView').text('Switch to Coin View');
        $('.classHistoryBTC').hide();
        $('.classHistoryUSD').show();
        g_txhistoryUSDBTCView = 'usd';
      }

      return false;
    });
    $('.classLearnMoreAboutBitcoins').click(function () {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'FAQ');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'FAQ', 'WhatIsBitcoin');

      return false;
    });
    $('#btnTxHistoryCredentialsSubmit').on('ClickEvent', function (event, data) {
      ClearErrors();
      strLoginID = $('#boxTxHistoryEnterLoginID_Edit').val();
      strPassword = $('#boxTxHistoryEnterPassword_Edit').val();
      str2FACode = $('#boxTxHistory2FA_Edit').val();
      SubmitBitcoinDirectNewCredentials(strLoginID, strPassword, str2FACode, g_txhistoryItemSelected.ID);
      return false;
    });
    $('#btnTxHistoryClaimGiftCard').on('ClickEvent', function (event, data) {
      ClearErrors();
      ClearEntryFields();
      BitcoinDirectToAmazonZincPromptClaimGiftCard(g_txhistoryItemSelected.ID);
      return false;
    });
    $('#boxTxHistoryEnterLoginID_Edit').on('input', function (e) {
      privBitcoinDirectCredentialsCheckToEnableSubmit();
    });
    $('#boxTxHistoryEnterPassword_Edit').on('input', function (e) {
      privBitcoinDirectCredentialsCheckToEnableSubmit();
    });
    $('#boxTxHistory2FA_Edit').on('input', function (e) {
      privBitcoinDirectCredentialsCheckToEnableSubmit();
    });
    TxHistoryList('gridTxHistory', 0);
    // ready - txhistory - end


    // ready - addressbook - begin
    $('#btnContinueCreateNewPayee').on('ClickEvent', function (event, data) {
      g_strPayeeAddress = $('#PayeeAddress_Edit').val().trim();
      g_strPayeeName = $('#PayeeName_Edit').val().trim();
      g_boolAddToAddressBook = $('#chkAddToAddressBook').is(":checked");
      boolConfirmed = false;
      AddressBookCreateNewPayee(boolConfirmed);
      return false;

    });
    $('#btnUnderstandReWrongAddress').on('ClickEvent', function (event, data) {
      g_strPayeeAddress = $('#PayeeAddress_Edit').val().trim();
      g_strPayeeName = $('#PayeeName_Edit').val().trim();
      g_boolAddToAddressBook = $('#chkAddToAddressBook').is(":checked");
      boolConfirmed = true;
      AddressBookCreateNewPayee(boolConfirmed);
      return false;

    });
    $('#lnkUnderstandReWrongAddressCancel').click(function () {
      MenuClick('WithdrawChoices', 'NewPayee');
      return false;
    });
    $('.classPayeeChange').click(function () {
      AddressBookDisplay('PayeeChange');
      return false;
    });
    $('#PayeeChange').click(function () {
      AddressBookDisplay('PayeeChange');
      return false;
    });
    $('#egSupportAtiPayYou').click(function () {
      $('#PayeeAddress_Edit').val('support@iPayYou.io');
      $('#PayeeName_Edit').val('iPayYou Support - Thanks!');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egAtBillGates').click(function () {
      $('#PayeeAddress_Edit').val('@BillGates');
      $('#PayeeName_Edit').val('Bill Gates');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egATIPayYouIO').click(function () {
      $('#PayeeAddress_Edit').val('@iPayYouIO');
      $('#PayeeName_Edit').val('iPayYou.io');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egAtEdwardSnowden').click(function () {
      $('#PayeeAddress_Edit').val('@Snowden');
      $('#PayeeName_Edit').val('Edward Snowden');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egBitcoinDonation').click(function () {
      $('#PayeeAddress_Edit').val('327ahTt8KYYfjnk8zfwD45EgLkG9CvNYbj');
      $('#PayeeName_Edit').val('iPayYou - Donation');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egBitcoinDonationBSV').click(function () {
      $('#PayeeAddress_Edit').val('327ahTt8KYYfjnk8zfwD45EgLkG9CvNYbj');
      $('#PayeeName_Edit').val('iPayYou - Donation');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#egBitcoinDonationBCH').click(function () {
      $('#PayeeAddress_Edit').val('bitcoincash:pqz224ur3kefsrzeq83sdcrquck7fj65eg8qhxuma6');
      $('#PayeeName_Edit').val('iPayYou - Donation');
      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#lnkSendPaymentClearEntries').click(function () {
      $('#PayeeAddress_Edit').val('').focus();
      $('#PayeeName_Edit').val('');
      g_strPayeeAddress = '';
      g_strPayeeName = '';

      ClearErrors();
      CheckIfToEnableCreateNewPayeeButton();
      return false;
    });
    $('#btnPayNow').on('ClickEvent', function (event, data) {
      if (g_stateAddressBook == 'Wallet') {
        BTCPaymentContractSubmit();
      }
      else if (g_stateAddressBook == 'GiftCards') {
        PurchaseSendToFriend(GiftCardItemSendSUCCESS, GiftCardItemSendFAILURE);
      }
    });
    AddressBookList('gridAddressBook', 0);
    // ready - addressbook - end



    // ready - giftcardscatalog - begin
    $('#divGiftCardDetail').click(function () {
      return false;
    })
      .fancybox({
        type: 'html',
        autoSize: true,
        hideOnContentClick: false
      });
    $('#lnkCancelGiftCardBrand').click('input', function (e) {
      GiftCardPageInit('SelectBrand');
      return false;
    });
    $('.classCancelGiftCardBrand').click('input', function (e) {
      GiftCardPageInit('SelectBrand');
      return false;
    });
    $('#lnkCancelGiftCardValue').click('input', function (e) {
      GiftCardPageInit('BrandSelected');
      return false;
    });
    $('.classCancelGiftCardValue').click('input', function (e) {
      GiftCardPageInit('BrandSelected');
      return false;
    });
    $('#cellGiftCardViewClaimCode1').click('input', function (e) {
      $('#rowGiftCardDetailAvailable').hide();
      $('.classGiftCardDetailOpenWarning').show();
      return false;
    });
    $('.classCustomEBWalletAddressSelected').click('input', function (e) {
      window.open(g_arrayLinkPrefixForAddress[g_defaultCurrency] + g_strCustomEBAddress, '_blank');
      return false;
    });
    $('.classCustomEBWalletAddressSelectedTxHistory').click('input', function (e) {
      window.open(g_arrayLinkPrefixForAddress[g_txhistoryItemSelected.CurrencyCode] + g_txhistoryItemSelected.strBitcoinAddress, '_blank');
      return false;
    });
    $('#lnkGiftCardOpenCancel').click('input', function (e) {
      $('#rowGiftCardDetailAvailable').show();
      $('.classGiftCardDetailOpenWarning').hide();
      return false;
    });
    $('#lnkViewClaimCodeConfirmed').click('input', function (e) {
      GiftCardClaimCodeGet(g_GridCatalogItemSelected.ID);
      return false;
    });
    $('.classRedeemOnAmazon').click('input', function (e) {
      GiftCardRedeemOnAmazon(g_GridCatalogItemSelected.ClaimCode);
      return false;
    });
    $('.classPrivateInternetAccess').click('input', function (e) {
      window.open('https://PrivateInternetAccess.com', '_blank');
      return false;
    });
    $('#btnGiftCardSellNow').on('ClickEvent', function (event, data) {
      PurchaseSellContractSubmit(g_guidItemSellContractFlow, InventorySellContractSubmitSUCCESS, InventorySellContractSubmitFAILURE);
      return false;
    });
    $('#lnkGiftCardPrint').click('input', function (e) {

      $('#logoGiftCardDetailsForPrint').attr('src', g_urlIAccountsBaseline + '/i/logo_blue001.png');
      var divToPrint = $('#tblGiftCardsDetailsForPrint');
      newWin = window.open("");
      newWin.document.write(divToPrint.html());
      setTimeout(function () {
        newWin.document.close();
        newWin.focus();
        newWin.print();
        newWin.close();
      }, 50);
      return false;
    });
    GiftCardCatalogBrandsList('gridGiftCardCatalogBrands', g_catalogCategories.GiftCards, g_loadTypes.Empty);
    // ready - giftcardscatalog - end




    // ready - giftcards - begin
    $("#cardQuantity").unbind().on('input', function (e) {
      input = $(this).val();
      if ('' == input)
        g_strQuantityLastKnownGood = input;
      else if ($.isNumeric(input) && input != '0' && input.indexOf('.') == -1)
        g_strQuantityLastKnownGood = input;

      $(this).val(g_strQuantityLastKnownGood)

      updateTotalAmount();
    });
    $('#btnGiftCardReviewPurchase').on('ClickEvent', function (event, data) {
      ClearErrors();
      var quantity = $("#cardQuantity").val();
      PurchaseReview(quantity, g_ItemForPurchaseSelected, GiftCardReviewPurchaseSUCCESS, GiftCardReviewPurchaseFAILURE);
      return false;
    });
    $('#btnPayCard').on('ClickEvent', function (event, data) {
      processGiftCardPayment();
      return false;
    });
    $('#boxPromotionCode_Edit').on('input', function (event, data) {
      privCheckIfToEnableAppyPromotion();
      return false;
    });
    $('#btnPromotionApply').on('ClickEvent', function (event, data) {
      ApplyGiftCardPromotion();
      return false;
    });
    $('#lnkGiftCardVideo').click('input', function (e) {
      $('#cellGiftCardVideo').hide();
      $('#cellGiftCardVideoPlay').html('<iframe width="220" height="124" src="https://www.youtube.com/embed/fyRQATIf7gE?rel=0&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>').show();
      return false;

    });
    if (null == g_strShortcodeCommand) {
      InventoryItemList('gridGiftCard', g_loadTypes.Empty);
      InventoryItemList('gridGiftCardArchive', g_loadTypes.Empty);
    }
    // ready - giftcards - end

    // ready - glidera - begin
    $('.classSendGlideraAuthyCode').click(function () {
      ClearErrors();
      $('.classNoAuthySendCode').hide();
      $('.classNoAuthyCodeSent').show();

      g_AuthyRequestID = $(this)[0].id.split('_')[1];
      strID = g_AuthyRequestID + '_Edit';
      $('#' + strID).focus();
      $('#' + strID).val('');

      SendGlideraText();

      setTimeout(function () {
        $('.classNoAuthyCodeSent').hide();
        $('.classNoAuthySendCode').fadeIn(500);
      }, 40000);

      return false;
    });
    $('#AuthyCodeGlidera_Edit').on('input', function (e) {
      ClearErrors();
      if ($('#AuthyCodeGlidera_Edit').val().trim() != '') {
        ButtonAction('btnGlideraPhoneValidate', 'enable');
      }
      else {
        ButtonAction('btnGlideraPhoneValidate', 'disable');
      }
    });
    $('#btnGlideraPhoneValidate').on('ClickEvent', function (event, data) {
      VerifyGlideraPhone($('#AuthyCodeGlidera_Edit').val());
      return false;
    });
    // ready - glidera - end

    // ready - catalog - begin
    $('#lnkCancelCatalogValue').click('input', function (e) {
      CatalogPageInit(g_CatalogActive);
      return false;
    });
    $('.classCatalogValueImages').hover(function () {
      var urlImage = $(this).attr('src');
      $('#imgCatalogValueSelected').prop('src', urlImage);
    });
    $('#boxPromotionCodeCatalog_Edit').on('input', function (event, data) {
      privCheckIfToEnableAppyCatalogPromotion();
      return false;
    });
    $('#btnPromotionApplyCatalog').on('ClickEvent', function (event, data) {
      ApplyCatalogPromotion();
      return false;
    });
    $('#btnCatalogReviewPurchase').on('ClickEvent', function (event, data) {
      ClearErrors();
      var quantity = $("#itemQuantity").val();
      PurchaseReview(quantity, g_GridCatalogItemSelected, CatalogReviewPurchaseSUCCESS, CatalogReviewPurchaseFAILURE);
      return false;
    });
    $("#itemQuantity").unbind().on('input', function (e) {
      input = $(this).val();
      if ('' == input)
        g_strQuantityLastKnownGoodCatalog = input;
      else if ($.isNumeric(input) && input != '0' && input.indexOf('.') == -1)
        g_strQuantityLastKnownGoodCatalog = input;

      $(this).val(g_strQuantityLastKnownGoodCatalog)

      updateTotalAmountCatalog();
    });
    CatalogGetValuesList(g_loadTypes.Empty, 'gridAvailableHardwareWallets', g_catalogCategories.HardwareWallets, g_HardwareWalletBrand, '')
    // ready - catalog - end


    // ready - amazondirect - begin
    $('#boxAmazonLoginEmail_Edit').on('input', function (e) {
      CheckIfToEnableAmazonApply();
      return false;
    });
    $('#boxAmazonPassword_Edit').on('input', function (e) {
      CheckIfToEnableAmazonApply();
      return false;
    });
    $('#btnAmazonApplyCredentials').on('ClickEvent', function (event, data) {
      var strAmazonLogin = $('#boxAmazonLoginEmail_Edit').val().trim();
      var strAmazonPassword = $('#boxAmazonPassword_Edit').val().trim();
      ApplyAmazonCredentials(strAmazonLogin, strAmazonPassword);
      return false;
    });
    $('#boxAmountToSendToAmazon_Edit').on('input', function (e) {
      var input = $(this).val();
      var btcAmount = privUSDAmountEntry($(this), input);
      var boolAmountIsGood = CheckAmountToSend();
      if (boolAmountIsGood) {
        var fiatAmountToSendToAmazon = g_floatSatoshi_LastKnownGood / 1e8 * g_dictConversionRate[g_defaultCurrency];
        fiatAmountToSendToAmazon = Math.round(fiatAmountToSendToAmazon * 100) / 100;
        if (fiatAmountToSendToAmazon < 5) {
          $(".BTCAmount").html('<font color="red">minimum: $5.00</font>');
          //ButtonAction('btnApplyFundsToAmazon', 'disable');
        }
        else if (fiatAmountToSendToAmazon > 2000) {
          $(".BTCAmount").html('<font color="red">maximum: $2,000.00</font>');
          //ButtonAction('btnApplyFundsToAmazon', 'disable');
        }
        //else
        //ButtonAction('btnApplyFundsToAmazon', 'enable');
      }
      else {
        //ButtonAction('btnApplyFundsToAmazon', 'disable');
      }
    });
    $('.lnkAmazonCredentialsChange').click(function () {
      DisplayAmazonCredentials(true, false);
      ButtonAction('boxAmazonDirectSend', 'disable');

      return false;
    });
    $('#lnkAmazonCredentialsCancel').click(function () {
      DisplayAmazonCredentials(false, true);
      return false;
    });
    $('#lnkAmazonDirectHelp').click(function () {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'FAQ');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'FAQ', 'AmazonDirectFAQ');
      return false;
    });
    BindAmazonDirectHandlers();
    $('#lnkAmazonDirectChangeAmount').click(function () {
      g_objAmazonContract = null;
      DisplayAmazonCredentials(false, true);
      return false;
    });
    $('#boxAmazonDirectSend').on('ClickEvent', function (event, data) {
      AmazonDirectContractSubmit();
      return false;
    });
    ReadAmazonCredentials(false);
    GiftCardValuesList('gridBitcoinDirect', g_catalogCategories.BitcoinDirect, g_loadTypes.All, 'AmazonGC', 'Amazon.com');
    // ready - amazondirect - end


    // ready - earnbitcoin - begin
    EarnBitcoinList('gridEBDigital', 0);
    EarnBitcoinList('gridEBPhysical', 0);

    $('#btnEBCalculator').on('ClickEvent', function (event, data) {
      EarnCalculator();
      return false;
    });
    $('#lnkEarnCalculatorCancel').click(function () {
      g_idBtnCancel = '';
      $.fancybox.close();
      return false;
    });
    $('#editCalculatorQuantity_Edit').on('input', function (e) {
      ClearErrors();
      EarnCalculatorValidateAndCompute();

      return false;
    });
    $('#editCalculatorValue_Edit').on('input', function (e) {
      ClearErrors();
      EarnCalculatorValidateAndCompute();
      
      return false;
    });

    $('#btnEBCalculatorGoToAmazon').on('ClickEvent', function (event, data) {
      var win = window.open(g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].urlAmazon, '_blank');
      $.fancybox.close();
      return false;
    });
    $('.classCustomEBWalletAddressSave').on('ClickEvent', function (event, data) {
      SaveCustomEBAddress(this.id);
      return false;
    });
    $('.classCheckedNoCustomEBWalletClick').click(function () {
      ClearErrors();
      $('.classSpaceForCustomEBAddress').css("background-color", "#f0ffff");
      SwitchToCustomEBWallet(this.id);
      return false;
    });
    $('.classCustomEBWalletAddressSelectedChange').click(function () {
      g_boolCustomEBWalletAddressChange = true;
      SwitchToCustomEBWallet(this.id);
      ProcessEarnBitcoinPhysicalSelectedIfNecessary();
      return false;
    });
    $('.classCheckedYesCustomEBWalletClick').click(function () {
      ClearErrors();
      SwitchToDefaultEBWallet();
      return false;
    });
    $('.classCustomEBWalletAddress_Edit').on('input', function (e) {
      CheckToEnableCustomEBWalletSave(this.id);
      return false;
    });

    $('.classAmazonOrderEdit').focus(function () {
      InitializeEBWithdrawalAddress();
      ProcessEarnBitcoinPhysicalSelectedIfNecessary();        
    });
    $('.classCustomerEBWalletCancel').click(function () {
      InitializeEBWithdrawalAddress();
      ProcessEarnBitcoinPhysicalSelectedIfNecessary();
      return false;
    });
    $('#btnEarnOption1').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(1);
      return false;
    });
    $('#btnEarnOption2').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(2);
      return false;
    });
    $('#btnEarnOption3').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(3);
      return false;
    });
    $('#btnEarnOption4').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(4);
      return false;
    });
    $('#btnEarnOption5').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(5);
      return false;
    });
    $('#btnEarnOption6').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(6);
      return false;
    });
    $('#btnEarnOption7').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(7);
      return false;
    });
    $('#btnEarnOption8').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(8);
      return false;
    });
    $('#btnEarnOption9').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(9);
      return false;
    });
    $('#btnEarnOption10').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(10);
      return false;
    });
    $('#btnEarnOption11').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(11);
      return false;
    });
    $('#btnEarnOption12').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(12);
      return false;
    });
    $('#btnEarnOption13').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(13);
      return false;
    });
    $('#btnEarnOption14').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(14);
      return false;
    });
    $('#btnEarnOption15').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(15);
      return false;
    });
    $('#btnEarnOption16').on('ClickEvent', function (event, data) {
      ShortcutToEarnBitcoinOption(16);
      return false;
    });

    $('#btnEarnBitcoinPhysicalAccessWishlist').on('ClickEvent', function (event, data) {
      setTimeout(
        function () {
          ButtonAction('btnEarnBitcoinPhysicalAccessWishlist', 'reset');
          ButtonAction('btnEarnBitcoinPhysicalAccessWishlist', 'enable');
        }, 2000);
      for (var key in g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].listEarnOptionPhysicalOptions) {
        if (g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].listEarnOptionPhysicalOptions[key].centsValue == g_EarnBitcoinPhysicalValueSelected) {
          var win = window.open(g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].listEarnOptionPhysicalOptions[key].urlAmazonWishlist, '_blank');
          return false;
        }
      }

      $('#boxAmazonOrderNumberPhysical_Edit').focus();
      
      return false;
    });

    $('#btnPhysicalAdditionalInstructionsExpand').on('ClickEvent', function (event, data) {
      $('.classPhysicalAdditionalInstructions').css('opacity', '0');
      $('.classPhysicalAdditionalInstructions').show();
      $('.classPhysicaAdditionalInstructionsExpand').hide();
      $('.classPhysicalAdditionalInstructions').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
      return false;
    });
    

    $('#lnkEarnBitcoinPhysicalSelectCancel').click('input', function (e) {

      g_EarnBitcoinPhysicalValueSelected = 0;
      $('.classEarnPhysicalPreSelect').show();
      $('.classEarnPhysicalPostSelect').hide();
      ButtonAction('btnEarnBitcoinPhysicalAccessWishlist', 'reset');
      ButtonAction('btnPhysicalAdditionalInstructionsExpand', 'reset');
      $('.classPhysicalAdditionalInstructions').hide();
      $('.classPhysicaAdditionalInstructionsExpand').show();
      $('.classPhysicalStep7').hide();
      g_idBtnCancel = '';

      //EarnBitcoinPageInit('EarnOption', g_EarnBitcoinOptionSelected);
      return false;
    });

    $('#btnBuyCoin').on('ClickEvent', function (event, data) {
      ShortcutToBuyBitcoin();
      return false;
    });
    $('#btnSellCoin').on('ClickEvent', function (event, data) {
      ShortcutToSellBitcoin();
      return false;
    });
    $('#btnSwapCurrencies').on('ClickEvent', function (event, data) {
      ShortcutToSwapCurrencies();
      return false;
    });
    $('#boxEBDigitalOrderNumber_Edit').on('input', function (e) {
      ClearErrors();
      CheckIfToEnableEarnBitcoinContinue();
      return false;
    });
    $('#boxAmazonOrderNumberPhysical_Edit').on('input', function (e) {
      ClearErrors();
      CheckIfToEnableEarnBitcoinPhysicalSubmit();
      return false;
    });

    $('#btnAmazonOrderNumberContinue').on('ClickEvent', function (event, data) {
      if (g_strCustomEBAddress == '' || g_strCustomEBAddress == null) {
        ButtonAction('btnAmazonOrderNumberContinue', 'enable');
        $('.classSpaceForCustomEBAddress').css("background-color", "#fff3f3");
        $('#errorDigitalOrderEntry').text('Let us know where to send your funds');

      } else {
        $('.classEarnStepByStep').hide();
        $('.classEarnAcknowledgement').show();
        var strAmazonOrderNumber = $('#boxEBDigitalOrderNumber_Edit').val().trim();
        $('.classAmazonOrderNumber').text(strAmazonOrderNumber);
        g_idBtnCancel = 'lnkEarnBitcoinSubmitCancel';
      }
      return false;
    });
    $('#btnAmazonOrderNumberSubmit').on('ClickEvent', function (event, data) {
      var strAmazonOrderNumber = $('#boxEBDigitalOrderNumber_Edit').val().trim();
      BitcoinEarnSubmitAmazonOrderNumber(strAmazonOrderNumber, g_EarnBitcoinOptionSelected);
      return false;
    });
    $('#btnAmazonOrderNumberPhysicalSubmit').on('ClickEvent', function (event, data) {
      var strAmazonOrderNumber = $('#boxAmazonOrderNumberPhysical_Edit').val().trim();
      var merchant = g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].merchant;
      BitcoinEarnSubmitAmazonOrderNumberPhysical(strAmazonOrderNumber, merchant, g_EarnBitcoinPhysicalValueSelected);
      return false;
    });

    $('.classEBAcknowledgedNo').click('input', function (e) {
      $('.classEBAcknowledgedNo').hide();
      $('.classEBAcknowledgedYes').show();
      ButtonAction('btnAmazonOrderNumberSubmit', 'enable');
      return false;
    });
    $('.classEBAcknowledgedYes').click('input', function (e) {
      $('.classEBAcknowledgedYes').hide();
      $('.classEBAcknowledgedNo').show();
      ButtonAction('btnAmazonOrderNumberSubmit', 'disable');
      return false;
    });
    $('#lnkEarnBitcoinSubmitCancel').click('input', function (e) {
      EarnBitcoinPageInit('EarnOption', g_EarnBitcoinOptionSelected);
      return false;
    });

    $('.classEBEmailToClipboard').click(function () {

      var widthCell = $('#cellEBEmailToClipboard').width();
      $('.classEBEmailToClipboardCopiedCell').width(widthCell);

      $('.classEBEmailToClipboardCell').hide();
      clipboardCopy(g_EBEmailAddress);
      $('.classEBEmailToClipboardCopiedCell').fadeTo(500, 1, function () { setTimeout(function () { $('.classEBEmailToClipboardCopiedCell').fadeTo(500, 0, function () { $('.classEBEmailToClipboardCopiedCell').hide(); $('.classEBEmailToClipboardCell').show(); }); }, 700) });

      return false;
    });

    // ready - earnbitcoin - end

    // ready - inventory - begin
    $('#lnkInventoryChange').click('input', function (e) {
      InventoryInit('InventoryActive');
      return false;
    });
    $('#lnkInventorySellCancel').click('input', function (e) {
      InventoryInit('InventoryActive');
      return false;
    });
    $('.classCancelInventorySale').click('input', function (e) {
      InventoryInit('InventoryActive');
      return false;
    });
    InventoryHandersAttach();
    // ready - inventory - end

    // ready - addressesused - begin
    AddressesCurrentForDeposit('gridCurrentAddressForDeposit', 0);
    AddressesUsedWithBalance('gridAddressesUsedWithBalance', 0);
    AddressesUsedWithNoBalance('gridAddressesUsedWithBalance', 0);
    // ready - addressesused - end


    // ready - currencies - begin
    $('.classSwitchCurrencies').click(function () {
      ShortcutToSwitchCurrencies();
      return false;
    });
    $('#btnSetDefaultBTC').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BTC');
      return false;
    });
    $('#btn2SetDefaultBTC').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BTC');
      return false;
    });
    $('#btnActivateBTC').on('ClickEvent', function (event, data) {
      NavigateToCurrency('btc');
      return false;
    });
    $('#btnSetDefaultBCH').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BCH');
      return false;
    });
    $('#btn2SetDefaultBCH').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BCH');
      return false;
    });
    $('#btnActivateBCH').on('ClickEvent', function (event, data) {
      NavigateToCurrency('BCH');
      return false;
    });
    $('#btnSetDefaultBSV').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BSV');
      return false;
    });
    $('#btn2SetDefaultBSV').on('ClickEvent', function (event, data) {
      CurrencyUpdateDefault('BSV');
      return false;
    });

    $('#btnActivateBSV').on('ClickEvent', function (event, data) {
      NavigateToCurrency('BSV');
      return false;
    });
    $('#btnActivateEscapeTheFees').on('ClickEvent', function (event, data) {
      NavigateToCurrency('BCH');
      return false;
    });
    $('.classSwitchToBCH').click(function () {
      $('.classSwitchToBCH').hide();
      $('.classPleaseWait').show();
      NavigateToCurrency('BCH');
      return false;
    });
    $('.classSwitchToBSV').click(function () {
      $('.classSwitchToBSV').hide();
      $('.classPleaseWait').show();
      NavigateToCurrency('BSV');
      return false;
    });
    $('.classSwitchToBTC').click(function () {
      $('.classSwitchToBTC').hide();
      $('.classPleaseWait').show();
      NavigateToCurrency('BTC');
      return false;
    });
    $('.classSwitchToBCHNoHide').click(function () {
      NavigateToCurrency('BCH');
      return false;
    });
    $('.classSwitchToBTCNoHide').click(function () {
      NavigateToCurrency('BTC');
      return false;
    });
    $('.classSwitchToBSVNoHide').click(function () {
      NavigateToCurrency('BSV');
      return false;
    });
    $('#btnEscapeTheFeesInEarnBitcoin').on('ClickEvent', function (event, data) {
      NavigateToCurrency('BCH');
      return false;
    });
    $('#btnActivateEscapeTheFeesInReceiveBitcoin').on('ClickEvent', function (event, data) {
      NavigateToCurrency('BCH');
      return false;
    });
    $('.classAddressToClipboard').click(function () {

      var widthCell = $('#cellAddressToClipboard').width();
      $('.classAddressToClipboardCopiedCell').width(widthCell);

      $('.classAddressToClipboardCell').hide();
      clipboardCopy(g_BTCAddressesAll[g_defaultCurrency].AddrNext);
      $('.classAddressToClipboardCopiedCell').fadeTo(500, 1, function () { setTimeout(function () { $('.classAddressToClipboardCopiedCell').fadeTo(500, 0, function () { $('.classAddressToClipboardCopiedCell').hide(); $('.classAddressToClipboardCell').show(); }); }, 700) });

      return false;
    });
    // ready - currencies - end

    // ready - currenciesbetween - begin
    $('#boxAmountToTransferInUSD_Edit').on('input', function (e) {
      BTCEntryReset();
      var input = $(this).val();
      var btcAmount = privUSDAmountEntryForCurrency($(this), input, g_strSelectedCurrencyFrom);
      CheckAmountToTransfer(false);
    });
    $('#boxAmountToTransferInBTC_Edit').on('input', function (e) {
      USDEntryReset();
      var input = $(this).val();
      var btcAmount = privBTCAmountEntryForCurrency($(this), input, g_strSelectedCurrencyFrom);
      CheckAmountToTransfer(false);
    });
    $('#btnTransferContinue').on('ClickEvent', function (event, data) {
      BetweenCurrenciesContractGet();
      return false;
    });
    $('#btnTransferSubmit').on('ClickEvent', function (event, data) {
      BetweenCurrenciesContractSubmit();
      return false;
    });
    $('#lnkTransferCancel').click(function () {
      ClearErrors();
      ClearEntryFields();
      DisplayBetweenCurrencies('Init');
      return false;
    });
    $('#lnkTransferAmountChange').click(function () {
      TransferAmountChange();
      return false;
    });
    CurrenciesTransferAddHandlers();
    // ready - currenciesbetween - end

    // ready - shipping - begin
    $("#boxShippingAddressName_Edit").on('input', function (e) {
      g_currentShippingAddress.Name = $("#boxShippingAddressName_Edit").val();
      privEnableSubmitShippingInformation();
    });
    $("#boxShippingAddressPostalCode_Edit").on('input', function (e) {
      g_currentShippingAddress.PostalCode = $("#boxShippingAddressPostalCode_Edit").val();
      privEnableSubmitShippingInformation();
    });
    $("#boxShippingAddressStateCode_Edit").on('input', function (e) {
      g_currentShippingAddress.State = $("#boxShippingAddressStateCode_Edit").val();
      privEnableSubmitShippingInformation();
    });
    $("#boxShippingAddressStreet_Edit").on('input', function (e) {
      g_currentShippingAddress.Street1 = $("#boxShippingAddressStreet_Edit").val();
      privEnableSubmitShippingInformation();
    });
    $("#boxShippingAddressCity_Edit").on('input', function (e) {
      g_currentShippingAddress.City = $("#boxShippingAddressCity_Edit").val();
      privEnableSubmitShippingInformation();
    });
    $("#shippingAddressCountryCode").on('change', function (sel) {
      g_currentShippingAddress.Country = sel.target.value;
    });
    $('#btnVerifyShippingAddress').on('ClickEvent', function (event, data) {
      ButtonAction('btnVerifyShippingAddress', 'disable');
      SubmitShippingAddress();
      return false;
    });
    $('#btnFinalizeShipment').on('ClickEvent', function (event, data) {
      ButtonAction('btnFinalizeShipment', 'disable');
      FinalizeShipment();
      return false;
    });
    $('.classShippingChangeAddress').click('input', function (e) {
      $('.classConfirmShippingAddress').hide();
      $('.classAddNewShippingAddress').show();
      $('#boxShippingAddressName_Edit').focus();
      ButtonAction('btnVerifyShippingAddress', 'reset');
      ButtonAction('btnVerifyShippingAddress', 'enable');
      return false;
    });
    // ready - shipping - end

    // ready - vpnprotection - begin
    VPNGetVisibleInfo();
    VPNCatalogBrandsList();
    VPNGetValuesList();
    VPNProtectionPageInit('Init');
    $('#boxPromotionCodeVPN_Edit').on('input', function (event, data) {
      privCheckIfToEnableAppyPromotionVPN();
      return false;
    });
    $('#btnPromotionApplyVPN').on('ClickEvent', function (event, data) {
      ApplyGiftCardPromotionVPN();
      return false;
    });
    $('#btnPayNowVPN').on('ClickEvent', function (event, data) {
      ClearErrors();
      g_ItemForPurchaseSelected = g_VPNValueSelected;
      PurchaseReview(1, g_ItemForPurchaseSelected, GiftCardReviewPurchaseSUCCESS, VPNPurchaseFAILURE);
      return false;
    });
    g_VPNProtectionLoaded = true;
    if (g_VPNGoogleLoaded) {
      loadVPNMap();
    }
    // ready - vpnprotection - end


    // ready - settings - begin
    $('#lnkChangeName').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsNameChange')
      return false;
    });
    $('#lnkChangeNameCancel').click(function () {
      SettingsPageInit('Personal')
      return false;
    });
    $('#lnkChangePhone').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsPhoneChange');
      return false;
    });
    $('#lnkChangePhoneCancel').click(function () {
      SettingsPageInit('Personal');
      return false;
    });
    $('#lnkSocialTwitterChangeCancel').click(function () {
      SettingsPageInit('Social');
      return false;
    });
    $('#lnkChangePassword').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsPasswordChange')
      return false;
    });
    $('#lnkCloseAccount').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsCloseAccount')
      return false;
    });
    $('#lnkAddTwitter').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsAddTwitter')
      return false;
    });
    $('#lnkChangePasswordCancel').click(function () {
      SettingsPageInit('Personal');
      return false;
    });
    $('#lnkCloseAccountCancel').click(function () {
      SettingsPageInit('Personal');
      return false;
    });
    $('#lnkChangeEmail').click(function () {
      ClearEntryFields();
      SettingsPageInit('SettingsEmailChange')
      return false;
    });
    $('#lnkChangeTwitter').click(function () {
      ClearEntryFields();
      ClearErrors();
      SettingsPageInit('SettingsSocialTwitterChange')
      return false;
    });
    $('#lnkSocialTwitterChangeRemove').click(function () {
      ClearEntryFields();
      ClearErrors();
      SettingsPageInit('SettingsSocialTwitterRemove')
      return false;
    });
    $('#lnkChangeEmailCancel').click(function () {
      SettingsPageInit('Personal');
      return false;
    });
    $('#boxChangeFirstName_Edit').on('input', function (e) {
      CheckIfToEnableNameChange();
    });
    $('#boxChangeLastName_Edit').on('input', function (e) {
      CheckIfToEnableNameChange();
    });
    $('#boxChangePhone_Edit').on('input', function (e) {
      CheckIfToEnablePhoneChange1();
    });
    $('#verificationCode_Edit').on('input', function (e) {
      CheckIfToEnablePhoneChange2();
    });
    $('#boxSettingsPasswordOld_Edit').on('input', function (e) {
      CheckIfToEnablePasswordChange();
    });
    $('#boxSettingsPasswordNew_Edit').on('input', function (e) {
      CheckIfToEnablePasswordChange();
    });
    $('#boxSettingsPasswordNewRetype_Edit').on('input', function (e) {
      CheckIfToEnablePasswordChange();
    });
    $('#authySettingsPassword_Edit').on('input', function (e) {
      CheckIfToEnablePasswordChange();
    });
    $('#authySettingsCloseAccount_Edit').on('input', function (e) {
      CheckIfToEnableAccountClose();
    });
    $('#boxSettingsPasswordOld2_Edit').on('input', function (e) {
      CheckIfToEnableAccountClose();
    });
    $('#boxSettingsNewEmail_Edit').on('input', function (e) {
      CheckIfToEnableEmailChange();
    });
    $('#authySettingsEmail_Edit').on('input', function (e) {
      CheckIfToEnableEmailChange();
    });
    $('#authySettingsSocialTwitterPassword_Edit').on('input', function (e) {
      CheckIfToEnableTwitterChange();
    });
    $('#authySettingsSocialTwitterRemove_Edit').on('input', function (e) {
      CheckIfToEnableTwitterRemove();
    });
    $('#authySettingsSocialFacebookPassword_Edit').on('input', function (e) {
      CheckIfToEnableFacebookChange();
    });
    $('#btnChangeName').on('ClickEvent', function (event, data) {
      NameChangeSubmit();
      return false;
    });
    $('#btnSettingsChangePhone1').on('ClickEvent', function (event, data) {
      PhoneChangeSubmit();
      return false;
    });
    $('#btnSettingsChangePhone2').on('ClickEvent', function (event, data) {
      PhoneChangeCodeSubmit();
      return false;
    });
    $('#btnSettingClose').on('ClickEvent', function (event, data) {
      SettingsPageInit('Personal');
      return false;
    });
    $('#btnSettingsPasswordChangeSubmit').on('ClickEvent', function (event, data) {
      PasswordChangeSubmit();
      return false;
    });
    $('#btnSubmitEmailChange').on('ClickEvent', function (event, data) {
      EmailChangeSubmit();
      return false;
    });
    $('#lnkSettingsResubscribe').click(function () {
      ClearEntryFields();
      ClearErrors();

      $('.classSubscribeUnsubscribeAction').hide();
      $('.classSubscribeUnsubscribePleaseWait').show();

      Resubscribe(ResubscribeSUCCESS, ResubscribeFAILURE, g_guidServiceID, null, g_guidSessionID)
      return false;
    });
    $('#lnkSettingsUnsubscribe').click(function () {
      ClearEntryFields();
      ClearErrors();

      $('.classSubscribeUnsubscribeAction').hide();
      $('.classSubscribeUnsubscribePleaseWait').show();

      Unsubscribe(UnsubscribeSUCCESS, UnsubscribeFAILURE, g_guidServiceID, null, g_guidSessionID)
      return false;
    });
    $('#lnkTransferBitcoinBeforeClosing').click(function () {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Wallet');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Wallet', 'SendFunds');
      return false;
    });
    $('.classTransferInventoryBeforeClosing').click(function () {
      MenuClick('LeftMenu', 'Inventory');
      return false;
    });
    $('.classCancelGiftCardPurchaseBeforeClosing').click(function () {
      ShortcutToTxHistory();
      return false;
    });
    $('#btnSettingsCloseAccount').on('ClickEvent', function (event, data) {
      CloseAccountSubmit();
      return false;
    });
    // ready - settings - end




    // ready - securityprofile - begin
    if (null != g_CountrySelected)
      $('#valueSecurityProfileCountry').removeClass('DialogValueError').addClass('DialogValueLg').removeClass('DialogValueHint').text(g_CountrySelected);
    $('#btnSubmitSecurityProfile').on('ClickEvent', function (event, data) {
      SubmitForLevel1Approval();
    });
    $('#btnRegisterWithGlidera').on('ClickEvent', function (event, data) {
      NavigateGlidera();
    });
    $('#btnReregisterGlidera').on('ClickEvent', function (event, data) {
      NavigateGlidera();
    });
    $('#btnSendGlideraText').on('ClickEvent', function (event, data) {
      SendGlideraText();
    });
    $('#btnVerifyGlideraPhoneCode').on('ClickEvent', function (event, data) {
      VerifyGlideraPhone($('#boxGlideraPhoneValidation_Edit').val());
    });
    $('#btnNeedLevel2BeforeLevel1').on('ClickEvent', function (event, data) {
      $('#btnSubmitSecurityProfile').show();
      $('#NeedToVerifyLevel2BeforeLevel1').hide();
      MenuSubClick('LeftMenu', 'Settings', 'Level2');
      ButtonAction('btnNeedLevel2BeforeLevel1', 'enable');
    });
    $('#btnSubmitKBAAnswers').on('ClickEvent', function (event, data) {
      SubmitForLevel1KBAApproval();
    });
    $('#btnSubmitDriversLic').on('ClickEvent', function (event, data) {
      UploadLevel2Picture();
    });
    $('#btnSubmitConsentVideo').on('ClickEvent', function (event, data) {
      UploadLevel2Video();
    });
    $('#btnStartWithLevel1').on('ClickEvent', function (event, data) {
      ButtonAction('btnStartWithLevel1', 'reset');
      MenuSubClick('LeftMenu', 'Settings', 'Level1');
    });
    $('#btnDepositStartWithLevel1').on('ClickEvent', function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Level1');
    });
    $('#btnDepositWithdrawMoney').on('ClickEvent', function (event, data) {
      ShortcutToSellBitcoin();
    });
    $('#btnLevel1WithdrawMoney').on('ClickEvent', function (event, data) {
      ShortcutToSellBitcoin();
    });
    $('#btnLevel1DepositMoney').on('ClickEvent', function (event, data) {
      ShortcutToBuyBitcoin();
    });
    $('#btnLevel1Level2Verify').on('ClickEvent', function (event, data) {
      MenuSubClick('LeftMenu', 'Settings', 'Level2');
    });
    $('#btnDepositVerifyLevel2').on('ClickEvent', function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Level2');
    });
    $('#btnLevel2WithdrawMoney').on('ClickEvent', function (event, data) {
      ShortcutToSellBitcoin();
    });
    $('#btnLevel2DepositMoney').on('ClickEvent', function (event, data) {
      ShortcutToBuyBitcoin();
    });
    $('#btnWithdrawStartWithLevel1').on('ClickEvent', function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Level1');
    });
    $('#btnDepositStartWithLevel2').on('ClickEvent', function (event, data) {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Level2');
    });
    $('.classSecurityProfileWithdrawMoney').click(function () {
      ShortcutToSellBitcoin();
    });
    $('#lnkAuthyEnable').click(function () {
      g_stateAuthy = 'AuthyEnable';
      $('.classAuthy').hide();
      $('.classAuthyEnableWorkflowStep1').show();
      g_idBtnCancel = 'lnkAuthyCancel';
      return false;
    });
    $('#lnkAuthyDownloadConfirmed').click(function () {
      ClearErrors();
      ClearEntryFields();
      $('.classAuthy').hide();
      $('.classAuthyEnableWorkflowStep2').show();
      $('#AuthyStep2_Edit').focus();
      g_idBtnCancel = 'lnkAuthyCancel';
      return false;
    });
    $('#lnkAuthyInstructionsIOS').click(function () {
      ClearErrors();
      ClearEntryFields();
      SendAuthyInstructions('iOS');
      return false;
    });
    $('#lnkAuthyInstructionsAndroid').click(function () {
      ClearErrors();
      ClearEntryFields();
      SendAuthyInstructions('Android');
      return false;
    });
    $('#lnkAuthyCancel').click(function () {
      ClearErrors();
      ClearEntryFields();
      SetAuthyState(g_boolAuthyEnabled);
      return false;
    });
    $('#lnkAuthySetupCancel').click(function () {
      ClearErrors();
      ClearEntryFields();
      SetAuthyState(g_boolAuthyEnabled);
      return false;
    });
    $('#lnkAuthyDisable').click(function () {
      g_stateAuthy = 'DisablePairing';
      $('.classAuthy').hide();
      $('.classAuthyDefault').hide();
      $('.classAuthyDisable').show();
      $('#AuthyStep2_Edit').focus();
      g_idBtnCancel = 'lnkAuthyPairClose';
      return false;
    });
    $('#lnkViewAuthyPairing').click(function () {
      g_stateAuthy = 'ViewPairing';
      $('.classAuthy').hide();
      $('.classAuthyDefault').hide();
      $('.classAuthyViewPairingStep1').show();
      $('#AuthyStep2_Edit').focus();
      g_idBtnCancel = 'lnkAuthyPairClose';
      return false;
    });
    $('#lnkAuthyPairClose').click(function () {
      SetAuthyState(g_boolAuthyEnabled);
      return false;
    });
    $('#boxSecurityProfileStreet_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $('#boxSecurityProfileCity_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $('#boxSecurityProfileStateCode_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $('#boxSecurityProfilePostalCode_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $('#boxSecurityProfileBirthDate_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $('#boxSecurityProfileSSN_Edit').on('input', function (e) {
      privSecurityProfileCheckToEnableSubmit();
    });
    $(function () {
      $('#boxSecurityProfileBirthDate_Edit').datepicker({
        changeMonth: true,
        changeYear: true,
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        yearRange: "1900:2017",
        onSelect: function (dateText) {
          privSecurityProfileCheckToEnableSubmit();
        }
      });
    });
    $('#lnkCancelKBA').click('input', function (e) {
      g_boolPushState = false;
      LeftMenu_Level1_Init();
      return false;
    });
    $('input[name="KBA_Q1"]').change(function () {
      privSecurityProfileCheckToEnableKBASubmit();
    });
    $('input[name="KBA_Q2"]').change(function () {
      privSecurityProfileCheckToEnableKBASubmit();
    });
    $('input[name="KBA_Q3"]').change(function () {
      privSecurityProfileCheckToEnableKBASubmit();
    });
    $('input[name="KBA_Q4"]').change(function () {
      privSecurityProfileCheckToEnableKBASubmit();
    });
    $('input[name="KBA_Q5"]').change(function () {
      privSecurityProfileCheckToEnableKBASubmit();
    });
    $('#inputFile').change(function () {
      readIDFromDisk(this);
    });
    $('#inputVideo').change(function () {
      readConsentFromDisk(this);
    });
    $('#lnkResetLicensePic').click(function () {
      ResetLicensePic();
      return false;
    });
    $('#lnkResetConsentVideo').click(function () {
      ResetConsentVideo();
      return false;
    });
    $('#imgDriversLic').load(function () {
      ClearErrors();
      $('.classImgNotUploaded').hide();
      $('.classImgUploaded').show();
      g_idBtnCancel = 'lnkResetLicensePic';
    });
    $('#videoConsent').load(function () {
      ClearErrors();
      $('.classVideoNotUploaded').hide();
      $('.classVideoUploaded').show();
      g_idBtnCancel = 'lnkResetConsentVideo';
    });
    // ready - securityprofile - end


    // ready - shortcuts - begin
    $('.classShortcutToSettingsPersonal').click(function () {
      ShortcutToSettingsPersonal();
      return false;
    });
    $('.classShortcutToLoyaltyAbout').click(function () {
      ShortcutToLoyaltyAbout();
      return false;
    });
    $('.classShortcutToSwitchWallets').click(function () {
      ShortcutToSwitchCurrencies();
      return false;
    });
    // ready - shortcuts - end

    // ready - beta - begin
    $('#btnJoinLoyaltyBeta').on('ClickEvent', function (event, data) {
      BetaAddRemove(BetaAddRemoveSuccess, LoyaltyBetaAddFailure, g_guidServiceID, g_guidOnBehalfOfUserID, g_guidSessionID, 1);
    });
    $('.classBetaActionLeave').click(function () {
      $('#lnkBetaUnsubscribe').hide();
      $('.classBetaPleaseWait').show();
      BetaAddRemove(BetaAddRemoveSuccess, SettingsBetaFailure, g_guidServiceID, g_guidOnBehalfOfUserID, g_guidSessionID, 0);
      return false;
    });
    $('.classBetaActionJoin').click(function () {
      $('#lnkBetaResubscribe').hide();
      $('.classBetaPleaseWait').show();
      BetaAddRemove(BetaAddRemoveSuccess, SettingsBetaFailure, g_guidServiceID, g_guidOnBehalfOfUserID, g_guidSessionID, 1);
      return false;
    });
    // ready - beta - end


    // ready - logout - begin
    $('.classLogout').click('input', function (e) {
      g_boolSkipExitConfirmation = true;
      $('.classLogout').html('<i>logging out...</i>');
      privLogout();
    });
    // ready - logout - end


    // ready - youreceived - begin
    $('#lnkYouReceivedViewMenus').click(function () {
      $('.classFullMenus').show();
      $('.classNoMenus').hide();
      return false;
    });
    $('#lnkYouReceivedHideMenus').click(function () {
      $('.classFullMenus').hide();
      $('.classNoMenus').show();
      return false;
    });
    $('#btnToClaim').on('ClickEvent', function (event, data) {
      if (g_longTwitterIDPayee > 0) {
        window.location = g_urlLoginRegister + "?t=" + g_longTwitterIDPayee.toString();
      }
      else {
        window.location = g_urlLoginRegister + "?User=" + g_payeeUserIdForService;
      }
      return false;
    });
    if (g_longTwitterIDPayer > 0 || g_longTwitterIDPayee > 0 || g_payeeUserIdForService != '') {
      if (g_longTwitterIDPayer > 0) {
        $('.cellTwitterID_' + g_longTwitterIDPayer).html('<img src=\"i/please-wait.gif\" width=\"200\" />');
        TwitterGetHandleFromID(g_longTwitterIDPayer, 'TwitterPayer');
      }

      if (g_longTwitterIDPayee > 0) {
        $('.cellTwitterID_' + g_longTwitterIDPayee).html('<img src=\"i/please-wait.gif\" width=\"200\" />');
        TwitterGetHandleFromID(g_longTwitterIDPayee, 'TwitterPayee');
      }

      $('.classFullMenus').hide();
      $('.classNoMenus').show();
    }
    // ready - youreceived - end

    // ready - shortcode - begin
    $('#lnkShortlinkCancelInventory').click(function () {
      DisplayShortCode('init');
      return false;
    });
    $('#lnkShortlinkViewClaimCode').click(function () {
      ClearErrors();
      GiftCardClaimCodeGet(g_GridCatalogItemSelected.ID);
      return false;
    });
    $('#lnkShortlinkArchive').click(function () {
      ClearErrors();
      PurchaseArchive(g_GridCatalogItemSelected, true, ShortCodeArchiveSUCCESS, ShortCodeArchiveFAILURE);
      return false;
    });
    $('#btnShortCodeLoginCreate').on('ClickEvent', function (event, data) {
      if (g_ShortlinkUserIdForService == '') {
        window.location = g_urlLoginRegister;
      }
      else {
        window.location = g_urlLoginRegister + "?User=" + g_ShortlinkUserIdForService;
      }
      return false;
    });
    $('.classShortCodeLoginCreate').click(function () {
      if (g_ShortlinkUserIdForService == '') {
        window.location = g_urlLoginRegister;
      }
      else {
        window.location = g_urlLoginRegister + "?User=" + g_ShortlinkUserIdForService;
      }
      return false;
    });
    $('.lnkShortcodeSwitchToBTC').click(function () {
      //$('.classShortcodeBCHAddress').hide();
      $('.classShortcodeBCHAddress').fadeTo(500, 0, function () {
        $('.classShortcodeBCHAddress').hide();
        $('.classShortcodeBCHAddress').css('opacity', '1');
        $('.classShortcodeBTCAddress').css('opacity', '0');
        $('.classShortcodeBTCAddress').show();
        $('.classShortcodeBTCAddress').fadeTo(500, 1, function () { });
      });

      return false;
    });
    $('.lnkShortcodeHelp').click(function () {
      window.location = g_urlLoginRegister.replace("/Login", "") + "/CoinQk";
      return false;
    });
    $('.lnkShortcodeEarn').click(function () {
      window.location = g_urlLoginRegister.replace("/Login", "") + "/earn";
      return false;
    });
    $('.lnkShortcodeSwitchToBCH').click(function () {
      //$('.classShortcodeBTCAddress').hide();
      $('.classShortcodeBTCAddress').fadeTo(500, 0, function () {
        $('.classShortcodeBTCAddress').hide();
        $('.classShortcodeBTCAddress').css('opacity', '1');
        $('.classShortcodeBCHAddress').css('opacity', '0');
        $('.classShortcodeBCHAddress').show();
        $('.classShortcodeBCHAddress').fadeTo(500, 1, function () { });
      });

      return false;
    });

    $('.classBCHAddressToClipboard').click(function () {

      var widthCell = $('#cellBCHAddressToClipboard').width();
      $('.classBCHAddressToClipboardCopiedCell').width(widthCell);

      $('.classBCHAddressToClipboardCell').hide();
      clipboardCopy(g_BTCAddressesAll['BCH'].AddrNext);
      $('.classBCHAddressToClipboardCopiedCell').fadeTo(500, 1, function () {
        setTimeout(function () {
          $('.classBCHAddressToClipboardCopiedCell').fadeTo(500, 0, function () {
            $('.classBCHAddressToClipboardCopiedCell').hide();
            $('.classBCHAddressToClipboardCell').show();
          });
        }, 500)
      });

      return false;
    });
    $('.classBSVAddressToClipboard').click(function () {

      var widthCell = $('#cellBSVAddressToClipboard').width();
      $('.classBSVAddressToClipboardCopiedCell').width(widthCell);

      $('.classBSVAddressToClipboardCell').hide();
      clipboardCopy(g_BTCAddressesAll['BSV'].AddrNext);
      $('.classBSVAddressToClipboardCopiedCell').fadeTo(500, 1, function () {
        setTimeout(function () {
          $('.classBSVAddressToClipboardCopiedCell').fadeTo(500, 0, function () {
            $('.classBSVAddressToClipboardCopiedCell').hide();
            $('.classBSVAddressToClipboardCell').show();
          });
        }, 500)
      });

      return false;
    });
    $('.classBTCAddressToClipboard').click(function () {

      var widthCell = $('#cellBTCAddressToClipboard').width();
      $('.classBTCAddressToClipboardCopiedCell').width(widthCell);

      $('.classBTCAddressToClipboardCell').hide();
      clipboardCopy(g_BTCAddressesAll['BTC'].AddrNext);
      $('.classBTCAddressToClipboardCopiedCell').fadeTo(500, 1, function () {
        setTimeout(function () {
          $('.classBTCAddressToClipboardCopiedCell').fadeTo(500, 0, function () {
            $('.classBTCAddressToClipboardCopiedCell').hide();
            $('.classBTCAddressToClipboardCell').show();
          });
        }, 500)
      });

      return false;
    });
    if (g_longShortcodeTwitterID > 0) {
      $('.cellTwitterID_' + g_longShortcodeTwitterID).html('<img src=\"i/please-wait.gif\" width=\"200\" />');
      TwitterGetHandleFromID(g_longShortcodeTwitterID, 'TwitterPayee');
    }
    if ('' != g_strShortcodeCommand && null != g_strShortcodeCommand) {
      $('.classFullMenus').hide();
      $('.classNoMenus').show();
      if (g_strShortcodeCommand == 'Balance') {
        InventoryItemList('gridInventoryShortlink', g_loadTypes.Empty);
      }
    }
    SetWalletBalanceInSatoshiLightweight('BTC', g_satoshiWalletBalanceUsableLightweight['BTC'], g_satoshiWalletBalancePendingLightweight['BTC']);
    SetWalletBalanceInSatoshiLightweight('BCH', g_satoshiWalletBalanceUsableLightweight['BCH'], g_satoshiWalletBalancePendingLightweight['BCH']);
    SetWalletBalanceInSatoshiLightweight('BSV', g_satoshiWalletBalanceUsableLightweight['BSV'], g_satoshiWalletBalancePendingLightweight['BSV']);
    ShortcodeDisplayBTCQRCode();
    ShortcodeDisplayBCHQRCode();
    ShortcodeDisplayBSVQRCode();
    // ready - shortcode - end

    // ready - twitterdefaultaspx - begin
    $('.classRegisterTwitterHandle').click(function () {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Social');
      return false;
    });
    SetTwitterIDExisting(g_TwitterID);
    if (g_TwitterNew)
      SetTwitterHandleNewJump();
    // ready - twitterdefaultaspx - end


    //ready - rewardslevels - begin

    /*
    $('#btnRewardsLevelsDoKYC').on('ClickEvent', function (event, data) {
      RewardsLevelsDisplay('KYCNeeded');
    });

  */

    $('#btnViewRewardsLevels').on('ClickEvent', function (event, data) {
      RewardsLevelsDisplay('RewardsLevelsGen')
    });


    //ready - rewardslevels - end


    //ready - auctions - begin

      AuctionsBuyBidsList('gridAuctionsBuyBids', 0);

      $('#btnAuctionBidPackPurchase').on('ClickEvent', function (event, data) {

          
          var quantity = $('#bidPackQuantity').val();


          AuctionsBuyBidPack(quantity, g_GridAuctionBidPackSelected);

      });


      $('#bidPackQuantity').on('input', function (e) {
          input = $(this).val();
          if ('' == input)
              g_strQuantityLastKnownGood = input;
          else if ($.isNumeric(input) && input != '0' && input.indexOf('.') == -1)
              g_strQuantityLastKnownGood = input;

          $(this).val(g_strQuantityLastKnownGood)
          UpdateTotalCostAuctionBidPacks();
          return false;
      });


      $('.classCancelAuctionBidPackSelected').click(function () {
          AuctionsPageInit('AuctionsBuyBids');
          return false;
      });

      $('.classBidButton').click('input', function (e) {
          var id = $(this).attr('id');
          var array = id.split('_');
          var auctionId = array[1];

          AuctionsBid(auctionId);

          return false;

      });


      $('.classAuctionId').click(function () {

          var guid = this.parentElement.id.split('_')[1];

          AuctionsPageInit('AuctionSelected', guid);

          return false;


      });

      $('.classAllAuctions').click(function () {

          AuctionsPageInit('AuctionsLive');

          return false;

      });


    //ready - auctions - end

    AttachClassPleaseLoginController();

    $('#frameWallet').load(function () {
      $('#rowWalletLoading').hide();
      $('#rowWallet').show();
    });
    $('.btnLogo').click(function () {
      g_boolSkipExitConfirmation = true;
      location.reload();
    });
    $(document).on('MenuClickedEvent', function (event, data) {
      AdjustViewOfSocialLinks();
    });
    SetAuthyState(g_boolAuthyEnabled);
    SetUserLoggedIn(g_boolUserLoggedIn);
  }




});

function breakOut() {
  if (window != top) top.location.href = location.href;
}

function AttachClassPleaseLoginController() {
  $('.classPleaseLogin').click(function () {
    window.location = g_urlLoginRegister;
    return false;
  });


}
function AdjustViewOfSocialLinks() {
  var elementSocialBlock = $('#divid');

  if (null != elementSocialBlock && null != elementSocialBlock.offset()) {
    elementSocialBlock.show();

    var posDividTop = elementSocialBlock.offset().top;
    var posMenuBottom = $('#cellLeftMenu').offset().top + $('#cellLeftMenu').height();

    if (posDividTop < posMenuBottom)
      elementSocialBlock.hide();
  }
}
function SetSessionID(guidSessionID) {
  g_guidSessionID = guidSessionID;
}
function SetLogoutURL(urlLogout) {
  g_urlLogoutLanding = urlLogout;
}
function SetIAccountsSvcURLBaseline(urlIAccountsSvcBaseline, guidServiceID) {
  g_guidServiceID = guidServiceID;

  if (window.location.protocol == 'https:')
    g_urlIAccountsBaseline = urlIAccountsSvcBaseline.replace('http://', 'https://');
  else
    g_urlIAccountsBaseline = urlIAccountsSvcBaseline.replace('https://', 'http://');


  g_urlLogin = g_urlIAccountsBaseline + '/api/Login/ServiceCall';
  g_urlSubscribeUnsubscribe = g_urlIAccountsBaseline + '/api/SubscribeUnsubscribe/ServiceCall';
  g_urlBeta = g_urlIAccountsBaseline + '/api/BetaAddRemove/ServiceCall';
  g_urlLogout = g_urlIAccountsBaseline + '/api/Logout/ServiceCall';
  g_urlForgotPassword = g_urlIAccountsBaseline + '/api/ForgotPassword/ServiceCall';
  g_urlResetPassword = g_urlIAccountsBaseline + '/api/ResetPassword/ServiceCall';
  g_urlCreateAccount1 = g_urlIAccountsBaseline + '/api/CreateAccount1/ServiceCall';
  g_urlCreateAccount2 = g_urlIAccountsBaseline + '/api/CreateAccount2/ServiceCall';
  g_urlRequestInvitation = g_urlIAccountsBaseline + '/api/RequestInvitation/ServiceCall';
  g_urlConversionRate = g_urlIAccountsBaseline + '/api/BTCRate/ServiceCall?strCurrency=USD';
  g_urlEarnBitcoinSubmitAmazon = g_urlIAccountsBaseline + '/api/EarnSubmitAmazon/ServiceCall';
  g_urlAddressVerify = g_urlIAccountsBaseline + '/api/AddressVerify/ServiceCall';
  g_urlAddressBook = g_urlIAccountsBaseline + '/api/AddressBook/ServiceCall';
  g_urlEarnCustomWallet = g_urlIAccountsBaseline + '/api/EarnCustomWallet/ServiceCall';
  g_urlEarnBitcoinOptions = g_urlIAccountsBaseline + '/api/EarnBitcoinOptions/ServiceCall';
  g_urlEarnBitcoinOptionsPhysical = g_urlIAccountsBaseline + '/api/EarnBitcoinOptionsPhysical/ServiceCall';
  g_urlAddressesUsed = g_urlIAccountsBaseline + '/api/AddressesUsed/ServiceCall';
  g_urlBankAccount = g_urlIAccountsBaseline + '/api/BankAccount/ServiceCall';
  g_urlBankAccountContract = g_urlIAccountsBaseline + '/api/BankAccountContract/ServiceCall';
  g_urlBTCPaymentContract = g_urlIAccountsBaseline + '/api/Payment/ServiceCall';
  g_urlBetweenCurrenciesContract = g_urlIAccountsBaseline + '/api/BetweenCurrencies/ServiceCall';
  g_urlIAccountsInactivityCheck = g_urlIAccountsBaseline + '/api/Ping/ServiceCall';
  g_urlImages = g_urlIAccountsBaseline + '/api/Images/ServiceCall';
  g_urlBlockchainBalance = g_urlIAccountsBaseline + '/api/BlockchainBalance/BlockchainBalance';
  g_urlTxHistory = g_urlIAccountsBaseline + '/api/TxHistory/ServiceCall';
  g_urlCurrency = g_urlIAccountsBaseline + '/api/Currency/ServiceCall';
  g_urlTxHistoryCancel = g_urlIAccountsBaseline + '/api/TxHistoryCancel/ServiceCall';
  // g_urlExpediteRate = g_urlIAccountsBaseline + '/api/ExpediteFee/ServiceCall';
  g_urlSecurityProfile = g_urlIAccountsBaseline + '/api/SecurityProfile/ServiceCall';
  g_urlSecurityProfileLevel1 = g_urlIAccountsBaseline + '/api/SecurityProfileLevel1/ServiceCall';
  g_urlGlideraNavigate = g_urlIAccountsBaseline + '/api/GlideraOAuth/ServiceCall';
  g_urlGlideraSendText = g_urlIAccountsBaseline + '/api/GlideraPhone/SendText';
  g_urlVerifyGlideraPhone = g_urlIAccountsBaseline + '/api/GlideraPhone/VerifyGlideraPhone';

  g_urlGlideraLimits = g_urlIAccountsBaseline + '/api/GlideraLimits/GetLimits';
  g_urlVPNVisibleInfoGet = g_urlIAccountsBaseline + '/api/VPN/GetVPNVisibleInfo';

  g_urlSecurityProfileLevel1KBA = g_urlIAccountsBaseline + '/api/SecurityProfileLevel1KBA/ServiceCall';
  g_urlSecurityProfileLevel2 = g_urlIAccountsBaseline + '/api/SecurityProfileLevel2/ServiceCall';
  g_urlAuthySetup = g_urlIAccountsBaseline + '/api/Authy/ServiceCall?guidServiceID={0}&guidSessionID={1}&strDeviceCode={2}&strSMSFlowID={3}';
  g_urlAuthyInstructions = g_urlIAccountsBaseline + '/api/AuthyInstructions/ServiceCall?guidServiceID={0}&guidSessionID={1}&strDeviceType={2}';
  g_urlAuthyVerify = g_urlIAccountsBaseline + '/api/Authy/ServiceCall';
  g_urlVerifyEmail = g_urlIAccountsBaseline + '/VerifyEmailM.aspx';
  g_urlPasswordSubmitPhoneNumberForVerification = g_urlIAccountsBaseline + '/api/PasswordSubmitPhoneNumberForVerification/ServiceCall';
  g_urlResendVerificationEmail = g_urlIAccountsBaseline + '/api/EmailVerificationResend/ServiceCall';
  g_urlPasswordSMSCodeSubmit = g_urlIAccountsBaseline + '/api/PasswordSMSCodeSubmit/ServiceCall';
  g_urlRequestInvitation = g_urlIAccountsBaseline + '/api/RequestInvitation/ServiceCall';
  g_urlInvitationCodeSubmit = g_urlIAccountsBaseline + '/api/SubmitInvitationCode/ServiceCall';
  g_urlSettingsName = g_urlIAccountsBaseline + '/api/SettingsName/ServiceCall';
  g_urlSettingsPassword = g_urlIAccountsBaseline + '/api/SettingsPassword/ServiceCall';
  g_urlSettingsCloseAccount = g_urlIAccountsBaseline + '/api/SettingsCloseAccount/ServiceCall';
  g_urlSettingsEmail = g_urlIAccountsBaseline + '/api/SettingsEmail/ServiceCall';
  g_urlSettingsAddTwitter = g_urlIAccountsBaseline + '/api/TwitterAuthUrl/ServiceCall';
  g_urlTwitter = g_urlIAccountsBaseline + '/api/Twitter/ServiceCall';
  g_urlGiftCardCatalog = g_urlIAccountsBaseline + '/api/GiftCardCatalog/ServiceCall';
  g_urlGiftCardCatalogValues = g_urlIAccountsBaseline + '/api/GiftCardCatalogValues/ServiceCall';
  g_urlCatalogValues = g_urlIAccountsBaseline + '/api/CatalogValues/CatalogValuesGet';
  g_urlGiftCardPayment = g_urlIAccountsBaseline + '/api/GiftCardPurchase/ServiceCall';
  g_urlGiftCardInventory = g_urlIAccountsBaseline + '/api/GiftCardInventory/ServiceCall';
  g_urlPurchase = g_urlIAccountsBaseline + '/api/Purchase/ServiceCall';
  g_urlLimits = g_urlIAccountsBaseline + '/api/Limits/ServiceCall';
  g_urlPurchasePromotion = g_urlIAccountsBaseline + '/api/PurchasePromotion/ServiceCall';
  g_urlPurchaseSell = g_urlIAccountsBaseline + '/api/PurchaseSell/ServiceCall';
  g_urlAmazonDirect = g_urlIAccountsBaseline + '/api/AmazonDirect/ServiceCall';
  g_urlStarbucksDirect = g_urlIAccountsBaseline + '/api/StarbucksDirect/ServiceCall';
  g_urlBitcoinDirect = g_urlIAccountsBaseline + '/api/BitcoinDirect/ServiceCall';
  g_urlGetNextStaticTime = g_urlIAccountsBaseline + '/api/GetNextStaticTime/GetNextStaticTime';

  g_urlPostNewShippingAddress = g_urlIAccountsBaseline + '/api/Shipping/VerifyAddress';
  g_urlFinalizeShipment = g_urlIAccountsBaseline + '/api/Shipping/FinalizeShipping';
  g_urlPollShippingInfoFinal = g_urlIAccountsBaseline + '/api/Shipping/PollShippingInfoFinal';

  g_urlBitcoinDirectSubmitNewLoginCredentials = g_urlIAccountsBaseline + '/api/BitcoinDirectNewCredentials/SubmitNewLoginCredentialsAmazon';

  g_urlBitcoinDirectToAmazonZincPromptClaimGiftCard = g_urlIAccountsBaseline + '/api/BitcoinDirectToAmazonZincPromptClaimGiftCard/ClaimGiftCard';

  g_urlBitcoinDirectSubmitAmazon2FA = g_urlIAccountsBaseline + '/api/BitcoinDirectSubmitAmazon2FA/SubmitAmazon2FA';

    g_urlAuctionsBuyBidsList = g_urlIAccountsBaseline + '/api/Auctions/BuyBidsList';

    g_urlAuctionsBuyBids = g_urlIAccountsBaseline + '/api/Auctions/BuyBids';

    g_urlAuctionsBid = g_urlIAccountsBaseline + '/api/AuctionsBid/Bid';

  if (AmIinWallet()) {
    InactivityTimerStart(10000);
  }
}
function AmIinWallet() {
  if (g_defaultCurrency == null)
    return false;
  else
    return true;
}

function SetUserEarnBitcoinOffset(offset) {
  g_userEarnBitcoinOffset = offset;
}

function SetLoginRegisterURL(urlLoginRegister) {
  g_urlLoginRegister = urlLoginRegister;
}
function SetUserLoggedIn(boolUserLoggedIn) {
  g_boolUserLoggedIn = boolUserLoggedIn;
  if (boolUserLoggedIn) {
    $('.classUserLoggedIn').show();
    $('.classUserLoggedOut').hide();
  }
  else {
    $('.classUserLoggedIn').hide();
    $('.classUserLoggedOut').show();
  }

  if (boolUserLoggedIn) {
    g_InactivityTimer = true;
    InactivityTimerTimeoutReset();
  }

}

function SetEarnBitcoinOptions(jsonEarnBitcoinOptions) {
  g_arrayEarnBitcoinOptions = JSON.parse(jsonEarnBitcoinOptions);
}

function SetAuthyState(boolAuthyEnabled) {
  g_boolAuthyEnabled = boolAuthyEnabled;
  $('.classNoteSMSSlowGetAuthy').hide();
  $('.classAuthy').hide();
  $('.classAuthyDefault').show();
  if (boolAuthyEnabled) {
    g_guidCodeFlowID = null;
    $('.classAuthyDisabled').hide();
    $('.classAuthyEnabled').show();
    $('#boxAuthyCodeAtLoginCodeLabel').html('Enter the 6-digit two-factor authorization code from the <i>Authy</i> app:');
  }
  else {
    $('.classAuthyEnabled').hide();
    $('.classAuthyDisabled').show();
    if (null != g_objLoginData) {
      $('#boxAuthyCodeAtLoginCodeLabel').html('We just sent you SMS code to <span class="iPayYouLogoA"><b>xxxxxx-' + g_objLoginData.PhoneLast4 + '</b></span>.&nbsp;&nbsp;Enter code below:');
      $('.classNoteSMSSlowGetAuthy').show();
    }
  }
}

function GridLoaded(strGridGroupName) {
  AdjustHeightOnResize(strGridGroupName);
}
function MenuLoaded(strRow) {
  AdjustHeightOnResizeFull('divMarketing');

  if (strRow == 'GiftCardInventory') {
    if (null != GridGroups['gridGiftCard']['GridItem'].arrayGridRowData && GridGroups['gridGiftCard']['GridItem'].arrayGridRowData.length > 0)
      AdjustHeightOnResize('gridGiftCard');
  }
  else if (strRow == 'TxHistory') {
    if (null != GridGroups['gridTxHistory']['GridItem'].arrayGridRowData && GridGroups['gridTxHistory']['GridItem'].arrayGridRowData.length > 0)
      AdjustHeightOnResize('gridTxHistory');
  }
  else if (strRow == 'AddressBook') {
    if (null != GridGroups['gridAddressBook']['GridItem'].arrayGridRowData && GridGroups['gridAddressBook']['GridItem'].arrayGridRowData.length > 0)
      AdjustHeightOnResize('gridAddressBook');
  }
  else if (strRow == 'ListOfSavedBanks') {
    if (null != GridGroups['gridBankSellAccounts']['GridItem'].arrayGridRowData && GridGroups['gridBankSellAccounts']['GridItem'].arrayGridRowData.length > 0)
      AdjustHeightOnResize('gridBankSellAccounts');
  }
  else if (strRow == 'DepositFromBank') {
    if (null != GridGroups['gridBankBuyAccounts'] && null != GridGroups['gridBankBuyAccounts']['GridItem'].arrayGridRowData && GridGroups['gridBankBuyAccounts']['GridItem'].arrayGridRowData.length > 0)
      AdjustHeightOnResize('gridBankBuyAccounts');
  }

}
function AdjustHeightOnResize(strGridToResize) {
  // $('#frameWallet').height($(window).height() - $('#rowHeader').height() - 12);
  var gridOuterName = strGridToResize + '_outer';
  var gridToResize = $('#' + gridOuterName);

  var tableInnerName = strGridToResize + '_table';
  var tableInner = $('#' + tableInnerName);
  var heightInner = tableInner.height();

  if (null != gridToResize) {
    try {
      var top = gridToResize.position().top;
      var maxHeight = window.innerHeight - top - $('#rowHeader').height() - 20;
      var heightTable = gridToResize.height(); // $('#' + tableInner).height();

      if (top > 0) {
        if (heightTable > maxHeight || heightInner > heightTable)
          gridToResize.css('height', maxHeight);
      }
    }
    catch (e) {
      top = 0;
    }
  }
}
function AdjustHeightOnResizeFull(strGridToResize) {
  // $('#frameWallet').height($(window).height() - $('#rowHeader').height() - 12);
  var gridOuter = strGridToResize + '_outer';
  var tableInner = strGridToResize + '_table';

  var gridToResize = $('#' + gridOuter);
  if (null != gridToResize) {
    try {
      var top = gridToResize.position().top;
      var maxHeight = window.innerHeight - top - $('#rowHeader').height() - 20;
      var heightTable = $('#' + tableInner).height();

      if (top > 0) {
        if (heightTable + 20 > maxHeight)
          gridToResize.css('height', heightTable + 20);
        else
          gridToResize.css('height', maxHeight);
      }

      //if (strGridToResize == 'divMarketing') {
      //    var heightTopPart = $('#divMarketing_empowers').height() + $('#divMarketing_separator').height();
      //    var heightOuter = $(gridToResize).height();
      //    var heightArrows = $('#divMarketing_arrows').height();

      //    $('#' + tableInner).css('height', heightOuter - heightArrows - heightTopPart);
      //$('#divMarketing_arrows').css({ top: $('#' + tableInner).position().top + $('#' + tableInner).height() - 10, position: 'absolute' });
      //}
    }
    catch (e) {
      top = 0;
    }
  }
}

// functions - images - begin
function ImagesForPageLoad() {
  $.ajax({
    url: g_urlImages,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_objImagesByPriority = JSON.parse(response.jsonData);
        privImagesForPageLoadAtPriority(g_priorityImagesCurrent);
      }
    }
  });
}

function privImagesForPageLoadAtPriority(Priority) {
  if (Object.keys(g_objImagesByPriority.dictImagesByPriority).length > 0) {
    var priorityHighest = g_objImagesByPriority.dictImagesByPriority[Object.keys(g_objImagesByPriority.dictImagesByPriority)[Object.keys(g_objImagesByPriority.dictImagesByPriority).length - 1]][0].imagePriority;
    if (Priority <= priorityHighest) {
      if (null == g_objImagesByPriority.dictImagesByPriority[Priority]) {
        privImagesForPageLoadAtPriority(Priority + 1);
      }
      else {
        for (index = 0; index < g_objImagesByPriority.dictImagesByPriority[Priority].length; index++) {
          var currency = g_objImagesByPriority.dictImagesByPriority[Priority][index].Currency;
          if (currency == null || currency == g_defaultCurrency) {
            var classImage = g_objImagesByPriority.dictImagesByPriority[Priority][index].imageClass;
            var idImage = g_objImagesByPriority.dictImagesByPriority[Priority][index].imageID;
            var imageURL = g_objImagesByPriority.dictImagesByPriority[Priority][index].imageURL;

            if (null != idImage) {
              $('#' + idImage).attr("src", imageURL);
            }
            else if (null != classImage) {
              $('.' + classImage).attr("src", imageURL);
            }
          }
        }
      }
      privImagesForPageLoadAtPriority(Priority + 1);

    }
  }


}
// functions - images - end

// functions - inactivity - begin
function InactivityTimerStart(msTimeout) {
  if (null != g_InactivityTimer) {
    clearTimeout(g_InactivityTimer);
    g_InactivityTimer = null;
  }

  g_InactivityTimerEnabled = true;
  g_boolReadyForNextPing = true;
  g_InactivityTimer = setTimeout(function () { InactivityTimerTimeout(false); }, msTimeout);
}
function InactivityTimerTimeoutReset() {
  g_boolInactivityTimerReset = true;
  $.fancybox.close();
}

function InactivityTimerTimeout() {
  g_InactivityTimerEnabled = false;
  if (null != g_InactivityTimer) {
    clearTimeout(g_InactivityTimer);
    g_InactivityTimer = null;
  }

  if (g_guidSessionID == null || g_guidSessionID == '00000000-0000-0000-0000-000000000000')
    return;

  if (null != g_urlIAccountsInactivityCheck && g_boolReadyForNextPing) {
    g_boolReadyForNextPing = false;
    var boolResetTimer = g_boolInactivityTimerReset;
    g_boolInactivityTimerReset = false;
    var urlInactivityPing = g_urlIAccountsInactivityCheck + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&boolResetTimer=' + boolResetTimer;
    $.ajax({
      url: urlInactivityPing,
      success: function (response) {
        var secondsToExpire = response;
        g_boolReadyForNextPing = true;
        g_secondsToExpiration = secondsToExpire;
        CheckTimeoutNextSteps();
      },
      failure: function (response) {
        g_boolReadyForNextPing = true;
        InactivityTimerStart(1000);

      },
      error: function (e, status) {
        g_boolReadyForNextPing = true;
        InactivityTimerStart(1000);
      }
    });
  }
}
function CheckTimeoutNextSteps() {
  if (g_secondsToExpiration <= 0) {
    if (g_strShortcodeCommand == null || g_strShortcodeCommand == 'Unknown') {
      window.location = g_urlLogoutLanding;
    }
    else {
      window.location = window.location.href;
    }

    return;
  }

  $('#idTimeout').text(g_secondsToExpiration);
  $('#btnInactivityCancel').removeClass('Disabled').addClass('btn-primary');
  if (g_boolInactivityTimerReset == false && g_strShortcodeCommand == null && g_secondsToExpiration <= 60 && $('#idInactivityTimeout').css('display') == 'none') {
    $.fancybox($('#idInactivityTimeout'));
  }
  else if (g_secondsToExpiration > 60 && $('#idInactivityTimeout').css('display') != 'none') {
    $.fancybox.close();
  }

  if (g_boolUserLoggedIn || (g_strShortcodeCommand != null && g_strShortcodeCommand != 'Unknown')) {
    if (g_secondsToExpiration > 120)
      InactivityTimerStart(10000);
    else if (g_secondsToExpiration > 70)
      InactivityTimerStart(5000);
    else
      InactivityTimerStart(1000);
  }

}
// functions - inactivity - end

// functions - marketing - begin
function GetNextMaintenance() {
  $.get(g_urlGetNextStaticTime).done(result => {
    if (result.responsecode === 'SUCCESS') {
      var date = new Date(result.data.StaticTime);
      $('.classNoStaticScheduled').hide();
      $('.classStaticScheduled').show();
      $('#staticSchedule').text(date.toLocaleString() + ' For the following reason: ' + result.data.Reason);
    }
  });
}
function MarketingRotate() {
  var msTransition = 2000;
  $(MarketingGetCurrentCellID()).show();
  setInterval(function () {
    MarketingHideCurrentDisplayNext(msTransition);
  }, 20000);
}
function MarketingHideCurrentDisplayNext(msTransition) {
  var cellMarketingCurrent = MarketingGetCurrentCellID();
  $(cellMarketingCurrent).fadeTo(msTransition, 0, function () { $(cellMarketingCurrent).css('visibility', 'hidden'); MarketingDisplayNext(msTransition); });
}
function MarketingGetCurrentCellID() {
  if (g_idMarketingSlide == 0)
    return '#tblMarketingName';
  //else if (g_idMarketingSlide == 2)
  //   return '#tblMarketingDeals';
  else if (g_idMarketingSlide == 1)
    return '#tblMarketingEarn';

  // return '#tblMarketing1';
}
function MarketingGetNextCellID() {
  g_idMarketingSlide++;
  if (g_idMarketingSlide > 1)         // back to first announcement
    g_idMarketingSlide = 1;

  return MarketingGetCurrentCellID();
}
function MarketingDisplayNext(msTransition) {
  $('.classRowNameInCorner').show();
  $('.classRowNameInCorner').css('visibility', 'visible');
  $('.classRowNameInCorner').fadeTo(msTransition, 1, function () { });

  var cellMarketingNext = MarketingGetNextCellID();
  MarketingDisplay(cellMarketingNext, msTransition);
}
function MarketingDisplay(cellToDisplay, msTransition) {
  $('.classMarketingCells').hide();
  $(cellToDisplay).show();
  $(cellToDisplay).css('visibility', 'visible');
  $(cellToDisplay).fadeTo(msTransition, 1, function () { });

}
// functions - marketing - end

// functions - wallet - begin
function PollConversionRate() {
  setInterval(function () {
    GetConversionRate();
  }, 10000);
}
function GetConversionRate() {
  var intRandom = Math.round(Math.random() * 100000);
  if (g_boolReadyForPriceCheck) {
    g_boolReadyForPriceCheck = false;
    $.ajax({
      url: g_urlConversionRate + '&iRandom=' + intRandom,
      success: function (rate) {
        g_boolReadyForPriceCheck = true;
        dictRate = rate.dictExchangeRatePerCurrency;
        for (var key in dictRate) {
          if (dictRate[key] != g_dictConversionRate[key] && dictRate[key] != 0) {
            UpdateWalletBalances(key, g_satoshiWalletBalanceUsable[key], g_satoshiWalletBalanceUsable[key], g_satoshiWalletBalancePending[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_dictConversionRate[key], dictRate[key]);
          }

        }


      }, dataType: 'json'
    });
  }

}
function UsdBtcReset() {
  USDEntryReset();
  BTCEntryReset();
  privProcessDepositRequest(0);
}
function USDEntryReset() {
  $('.USDAmountEntry').val('');
  $('.BTCAmountConverted').html('0.00000000');
  g_strAmount_LastKnownGoodUSD = '';
}
function BTCEntryReset() {
  $('.BTCAmountEntry').val('');
  $('.USDAmountConverted').html('0.00');
  g_strAmount_LastKnownGoodBTC = '';
}
function timeoutX() {
  fired = 1;
}
function SetEarnBitcoinDiscountPercent(floatEarnBitcoinDiscountBonus) {
  //g_floatEarnBitcoinDiscountPercent = floatEarnBitcoinDiscountPercent;
  //g_floatEarnBitcoinDiscountPercentSub100 = floatEarnBitcoinDiscountPercentSub100;
  g_floatEarnBitcoinDiscountBonus = floatEarnBitcoinDiscountBonus;

  for (var key in g_dictConversionRate) {
    for (var keyOptionEB in g_arrayEarnBitcoinOptions) {
      //var floatEarnBitcoinConversionRateCurrent;
      optionEB = g_arrayEarnBitcoinOptions[keyOptionEB];
      if (optionEB.type == 0) {
        $('.classEarnBitcoinDiscountPct' + optionEB.pctBaseFor100OrOver.toFixed(0).replace('.', '')).text(numberWithCommas((optionEB.pctBaseFor100OrOver).toFixed(1)));
      }
      else {
        for (var keyOptionEBPhysical in optionEB.listEarnOptionPhysicalOptions) {
          var optionEBPhysical = optionEB.listEarnOptionPhysicalOptions[keyOptionEBPhysical];
          var pctBaseConversionRate = optionEBPhysical.pctBaseConversionRate - g_floatEarnBitcoinDiscountBonus;
          if (pctBaseConversionRate < optionEBPhysical.pctMinimumConversionRate) {
            pctBaseConversionRate = optionEBPhysical.pctMinimumConversionRate;
          }
          $('.classEarnBitcoinDiscountPct_' + optionEBPhysical.merchant + optionEBPhysical.centsValue).text(numberWithCommas((pctBaseConversionRate).toFixed(1)));
        }
      }

    }
  }


}



function SetConversionRate(CurrencyCode, floatConversionRate) {

  var boolHigherRate = false;
  var boolLowerRate = false;
//  if (g_floatEarnBitcoinDiscountPercent == g_floatEarnBitcoinDiscountPercentSub100) {
//    $('.classEarnBitcoinSub100RateDifferent').hide();
//    $('.classEarnBitcoinSub100RateSame').show();
//  } else {
//    $('.classEarnBitcoinSub100RateDifferent').show();
//    $('.classEarnBitcoinSub100RateSame').hide();
//  }

  //$('.classEarnBitcoinDiscountPct').text(g_floatEarnBitcoinDiscountPercent.toFixed(1));
  //$('.classEarnBitcoinSub100DiscountPct').text(g_floatEarnBitcoinDiscountPercentSub100.toFixed(1));
  if (CurrencyCode == g_defaultCurrency) {
    if (floatConversionRate > g_dictConversionRate[CurrencyCode]) {
      privAnimateBackgroundColor('.classEarnBitcoinRate', '#6AFB92', 2000, 1000);
      privAnimateBackgroundColor('.classEarnBitcoinRateSub100', '#6AFB92', 2000, 1000);
      boolHigherRate = true;
    }
    else if (floatConversionRate < g_dictConversionRate[CurrencyCode]) {
      privAnimateBackgroundColor('.classEarnBitcoinRate', '#FFDFDD', 2000, 1000);
      privAnimateBackgroundColor('.classEarnBitcoinRateSub100', '#FFDFDD', 2000, 1000);
      boolLowerRate = true;
    }
  }

  g_dictConversionRate[CurrencyCode] = floatConversionRate;

  for (var keyOptionEB in g_arrayEarnBitcoinOptions) {
    var floatEarnBitcoinConversionRateCurrent, floatEarnBitcoinConversionRateCurrentSub100;
    optionEB = g_arrayEarnBitcoinOptions[keyOptionEB];
    var objBestRates = [];
    if (optionEB.type == 0) {
      var pctBaseConversionRateSub100 = optionEB.pctBaseForUnder100;
      var pctBaseConversionRate = optionEB.pctBaseFor100OrOver - g_floatEarnBitcoinDiscountBonus;
      if (pctBaseConversionRate < optionEB.pctMinimum)
        pctBaseConversionRate = optionEB.pctMinimum;

      //$('.classEarnBitcoinDiscountBestPct_Digital_' + optionEB.merchant).text(pctBaseConversionRate.toFixed(1));
      floatEarnBitcoinConversionRateCurrent = g_dictConversionRate[CurrencyCode] / (1 - pctBaseConversionRate / 100);
      floatEarnBitcoinConversionRateCurrentSub100 = g_dictConversionRate[CurrencyCode] / (1 - pctBaseConversionRateSub100 / 100);
      $('.classEBBestRate_Digital_' + optionEB.merchant + '_' + CurrencyCode).text('$' + numberWithCommas(floatEarnBitcoinConversionRateCurrent.toFixed(2)));
      $('.classEBDigital' + CurrencyCode + '_' + optionEB.merchant).text('$' + numberWithCommas((floatEarnBitcoinConversionRateCurrent).toFixed(2)));
      $('.classEBDigitalSub100' + CurrencyCode + '_' + optionEB.merchant).text('$' + numberWithCommas((floatEarnBitcoinConversionRateCurrentSub100).toFixed(2)));
      $('.classEBBestRatePct_Digital_' + optionEB.merchant).text(pctBaseConversionRate.toFixed(1));
      $('.classEBDigitalPctSub100_' + optionEB.merchant).text(pctBaseConversionRateSub100.toFixed(1));

      if (g_EarnBitcoinOptionSelected == optionEB.sequence && CurrencyCode == g_defaultCurrency) {
        if (g_EarnBitcoinCalculatorQuantitySub100Rate) {
          $('.classCalculatorEBFinal').html((g_EarnBitcoinCalculatorValueSelected * g_EarnBitcoinCalculatorQuantitySelected / floatEarnBitcoinConversionRateCurrentSub100).toFixed(8));
        }
        else {
          $('.classCalculatorEBFinal').html((g_EarnBitcoinCalculatorValueSelected * g_EarnBitcoinCalculatorQuantitySelected / floatEarnBitcoinConversionRateCurrent).toFixed(8));
        }
       
      }

      if (boolHigherRate) {
        privAnimateBackgroundColor('.classEarnBitcoinRate' + CurrencyCode + '_' + optionEB.pctBaseFor100OrOver.toFixed(0).replace('.', ''), '#6AFB92', 2000, 1000);
        privAnimateBackgroundColor('.classEBBestRate_' + CurrencyCode, '#6AFB92', 2000, 1000);
      }
      else if (boolLowerRate) {
        privAnimateBackgroundColor('.classEarnBitcoinRate' + CurrencyCode + '_' + optionEB.pctBaseFor100OrOver.toFixed(0).replace('.', ''), '#FFDFDD', 2000, 1000);
        privAnimateBackgroundColor('.classEBBestRate_' + CurrencyCode, '#FFDFDD', 2000, 1000);
      }
    }
    else {
      if (optionEB.listEarnOptionPhysicalOptions.length == 0) {
        var pctBaseConversionRate = optionEB.pctBaseFor100OrOver - g_floatEarnBitcoinDiscountBonus;
        if (pctBaseConversionRate < optionEB.pctMinimum)
          pctBaseConversionRate = optionEB.pctMinimum;

        $('.classEBBestRatePct_Physical_' + optionEB.merchant).text(pctBaseConversionRate.toFixed(1));

        floatEarnBitcoinConversionRateCurrent = g_dictConversionRate[CurrencyCode] / (1 - pctBaseConversionRate / 100);
        $('.classEBBestRate_Physical_' + optionEB.merchant + '_' + CurrencyCode).text('$' + numberWithCommas(floatEarnBitcoinConversionRateCurrent.toFixed(2)));
        if (boolHigherRate) {
          privAnimateBackgroundColor('.classEBBestRate_' + CurrencyCode, '#6AFB92', 2000, 1000);
        }
        else if (boolLowerRate) {
          privAnimateBackgroundColor('.classEBBestRate_' + CurrencyCode, '#FFDFDD', 2000, 1000);
        }
      }
      else {
        for (var keyOptionEBPhysical in optionEB.listEarnOptionPhysicalOptions) {
          var optionEBPhysical = optionEB.listEarnOptionPhysicalOptions[keyOptionEBPhysical];
          var pctBaseConversionRate = optionEBPhysical.pctBaseConversionRate - g_floatEarnBitcoinDiscountBonus;
          if (pctBaseConversionRate < optionEBPhysical.pctMinimumConversionRate)
            pctBaseConversionRate = optionEBPhysical.pctMinimumConversionRate;

          floatEarnBitcoinConversionRateCurrent = g_dictConversionRate[CurrencyCode] / (1 - pctBaseConversionRate / 100);

          if (objBestRates[optionEB.merchant] == null || objBestRates[optionEB.merchant] > pctBaseConversionRate) {
            objBestRates[optionEB.merchant] = pctBaseConversionRate;
            $('.classEBBestRatePct_Physical_' + optionEB.merchant).text(pctBaseConversionRate.toFixed(1));
            $('.classEBBestRate_Physical_' + optionEB.merchant + '_' + CurrencyCode).text('$' + numberWithCommas(floatEarnBitcoinConversionRateCurrent.toFixed(2)));
            if (boolHigherRate) {
              privAnimateBackgroundColor('.classEBBestRate_' + optionEB.merchant + '_' + CurrencyCode, '#6AFB92', 2000, 1000);
            }
            else if (boolLowerRate) {
              privAnimateBackgroundColor('.classEBBestRate_' + optionEB.merchant + '_' + CurrencyCode, '#FFDFDD', 2000, 1000);
            }
          }

          $('.classEarnBitcoinRate' + CurrencyCode + '_' + optionEBPhysical.merchant + optionEBPhysical.centsValue).text('$' + numberWithCommas((floatEarnBitcoinConversionRateCurrent).toFixed(2)));
          if (optionEBPhysical.centsValue == g_EarnBitcoinPhysicalValueSelected && optionEBPhysical.merchant == g_EarnBitcoinPhysicalMerchantSelected && CurrencyCode == g_defaultCurrency) {
            $('.classEarnBitcoinRateActive').html('&nbsp;$' + numberWithCommas((floatEarnBitcoinConversionRateCurrent).toFixed(2)) + '&nbsp;');
            $('.classEarnBitcoinFinal').html('&nbsp;฿&nbsp;' + (g_EarnBitcoinPhysicalValueSelected / 100 / floatEarnBitcoinConversionRateCurrent).toFixed(8) + '&nbsp;');

            if (boolHigherRate) {
              privAnimateBackgroundColor('.classEarnBitcoinRateActive', '#6AFB92', 2000, 1000);
              privAnimateBackgroundColor('.classEarnBitcoinFinal', '#6AFB92', 2000, 1000);
            }
            else if (boolLowerRate) {
              privAnimateBackgroundColor('.classEarnBitcoinRateActive', '#FFDFDD', 2000, 1000);
              privAnimateBackgroundColor('.classEarnBitcoinFinal', '#FFDFDD', 2000, 1000);
            }
          }
          if (boolHigherRate) {
            privAnimateBackgroundColor('.classEarnBitcoinRate' + CurrencyCode + '_' + optionEBPhysical.merchant + optionEBPhysical.centsValue, '#6AFB92', 2000, 1000);
          }
          else if (boolLowerRate) {
            privAnimateBackgroundColor('.classEarnBitcoinRate' + CurrencyCode + '_' + optionEBPhysical.merchant + optionEBPhysical.centsValue, '#FFDFDD', 2000, 1000);
          }

        }
      }

    }


  }



  $('.' + CurrencyCode + 'ConversionRate').text('$' + numberWithCommas(g_dictConversionRate[CurrencyCode].toFixed(2)));
  SetMinFeeForCurrenciesObject(g_minFeesForCurrencies);
}
function SetSupportedCurrencies(supportedCurrencies) {
  SetSupportedCurrenciesObject(JSON.parse(supportedCurrencies));
}
function SetSupportedCurrenciesObject(objSupportedCurrencies) {
  g_supportedCurrencies = objSupportedCurrencies;
  $('.classCurrencyDependent').hide();
  if (null != g_defaultCurrency) {
    $('.classCoinNameLong').text(g_supportedCurrencies[g_defaultCurrency].DescLong);
    $('.classCoinNameShort').text(g_supportedCurrencies[g_defaultCurrency].Code);
    $('.classActiveCurrency').attr("src", g_supportedCurrencies[g_defaultCurrency].UrlLg);
    $('.class' + g_defaultCurrency + 'Active').show();
  }
}
function SetMinFeeForCurrencies(minFeesForCurrencies) {
  SetMinFeeForCurrenciesObject(JSON.parse(minFeesForCurrencies));
}
function SetMinFeeForCurrenciesObject(objFeesForCurrencies) {
  g_minFeesForCurrencies = objFeesForCurrencies;

  for (var key in g_dictConversionRate) {
    if (null != g_minFeesForCurrencies[key]) {
      floatMinFeeForCurrency = g_minFeesForCurrencies[key] / 1e8 * g_dictConversionRate[key];
      $('.MinFee_' + key).text('$' + numberWithCommas(floatMinFeeForCurrency.toFixed(2)));
    }
  }
}
function SetBitcoinAddress(defaultCurrency, jsonBitcoinAddress) {
  var listBitcoinAddresses = JSON.parse(jsonBitcoinAddress);

  g_defaultCurrency = defaultCurrency;
  g_BTCAddressesAll = listBitcoinAddresses;
  g_BTCAddress = listBitcoinAddresses[defaultCurrency].AddrNext;
  SetBitcoinAddressInUI();
}
function SetBitcoinAddressInUI() {
  for (var currency in g_BTCAddressesAll) {
    $('.class' + currency + 'Address').text(g_BTCAddressesAll[currency].AddrNext);
    $('.class' + currency + 'AddressLink').html('<a target="_blank" href="' + g_arrayLinkPrefixForAddress[currency] + g_BTCAddressesAll[currency].AddrNext + '">' + '<img src="i/OnBlockchain.jpg" height="20" />' + '</a>');
  }
}
function SetUserName(strUserName) {
  g_UserName = strUserName;
  if ('' == strUserName) {
    $('.classUserName').html('<a href="">Set Your Name</a>').removeClass('iPayYouBackA').addClass('lnkSetUserName');
    $('.lnkSetUserName').unbind().click(function () {
      g_boolPushState = false;
      MenuClick('LeftMenu', 'Settings');
      g_boolPushState = true;
      MenuSubClick('LeftMenu', 'Settings', 'Personal');
      $('#lnkChangeName').click();
      return false;
    });
    $('#cellUserNameMain').text('');
  }
  else {
    $('.classUserName').text(strUserName).removeClass('lnkSetUserName');
    $('#cellNameMain').addClass('iPayYouBackA');
  }
}
function SetUserEmail(strUserEmail) {
  g_UserEmail = strUserEmail;
  $('.classUserEmail').text(strUserEmail);
}
function SetSubscribedStatus(boolSubscribed) {
  g_boolSubscribed = boolSubscribed;

  if (boolSubscribed) {
    $('.classSubscriptionStatus').removeClass('GreenItalic').removeClass('RedItalic').addClass('GreenItalic').text('Subscribed');
    $('.classSubscriptionUnsubscribed').hide();
    $('.classSubscriptionSubscribed').show();
  }
  else {
    $('.classSubscriptionStatus').removeClass('GreenItalic').removeClass('RedItalic').addClass('RedItalic').text('Unsubscribed');
    $('.classSubscriptionSubscribed').hide();
    $('.classSubscriptionUnsubscribed').show();
  }
}
function SetSecurityLevel(boolLevel1, boolLevel2a, boolLevel2aInReview, boolLevel2b, boolLevel2bInReview, boolGlideraRegistered, boolPhoneValidated) {
  g_SecurityLevel1 = boolLevel1;
  g_SecurityLevel2a = boolLevel2a;
  g_SecurityLevel2b = boolLevel2b;
  g_SecurityLevel2aInReview = boolLevel2aInReview;
  g_SecurityLevel2bInReview = boolLevel2bInReview;
  g_SecurityGlideraRegistered = boolGlideraRegistered;
  g_SecurityGlideraPhoneValidated = boolPhoneValidated;
  g_SecurityLevel2 = g_SecurityLevel2a && g_SecurityLevel2b;

  var boolLevel2aToDo = false;
  var boolLevel2bToDo = false;

  $('.classNeedLevel1').hide();
  $('.classConfirmedLevel1').hide();
  $('.classLevelHave1Need2').hide();
  $('.classIfNeedL2BeforeL1IsFalse').hide();
  $('#rowLevel1ProfileKBA').hide();

  $('.classNeedLevel2').hide();
  $('.classNeedLevel2a').hide();
  $('.classNeedLevel2b').hide();
  $('.classLevel2PendingReview').hide();
  $('.classConfirmedLevel2').hide();
  $('.classConfirmedLevel2a').hide();
  $('.classConfirmedLevel2b').hide();
  $('.classLevel2aPendingReview').hide();
  $('.classLevel2bPendingReview').hide();
  $('.classCongratulationsForL1L2').hide();
  $('.classNeedGlideraRegistered').hide();
  $('.classNeedGlideraPhone').hide();

  // Level2 must come first
  if (boolLevel2aInReview) {
    $('.classLevel2aPendingReview').show();

    if (null == g_timerSecurityProfile && g_PageReady) {
      g_timerSecurityProfile = setTimeout(function () { GetSecurityLevelOfUser(); }, 1000);
    }

    boolLevel2aToDo = true;
  }
  else if (!g_SecurityLevel2a) {
    $('.classNeedLevel2a').show();
    boolLevel2aToDo = true;
  }
  else {
    $('.classConfirmedLevel2a').show();
  }


  if (boolLevel2bInReview) {
    $('.classLevel2bPendingReview').show();

    if (null == g_timerSecurityProfile) {
      g_timerSecurityProfile = setTimeout(function () { GetSecurityLevelOfUser(); }, 1000);
    }

    boolLevel2bToDo = true;
  }
  else if (!g_SecurityLevel2b) {
    $('.classNeedLevel2b').show();
    boolLevel2bToDo = true;
  }
  else {
    $('.classConfirmedLevel2b').show();
  }


  if (!boolLevel2aToDo && !boolLevel2bToDo) {
    $('.classCongratulationsForL1L2').show();
    $('.classConfirmedLevel2').show();
  }
  else if (boolLevel2aInReview || boolLevel2bInReview) {
    $('.classLevel2PendingReview').show();
  }
  else {
    $('.classNeedLevel2').show();
  }



  if (!boolLevel2aInReview && !boolLevel2bInReview && null != g_timerSecurityProfile) {
    clearInterval(g_timerSecurityProfile);
    g_timerSecurityProfile = null;
  }

  //if (g_SecurityLevel2) {
  if (!g_SecurityGlideraRegistered) {
    $('.classNeedGlideraRegistered').show();
    $('#tblBankOptions').hide();
  }
  else {
    $('.classGlideraRegistered').show();
    if (!g_SecurityGlideraPhoneValidated) {
      $('.classNeedGlideraPhone').show();
      $('.classGlideraSteps').show();
      $('.classGlideraPhoneInUse').hide();
      $('#boxGlideraPhoneValidation').hide();
      $('#btnVerifyGlideraPhoneCode').hide();
      $('#tblBankOptions').hide();
    } else {
      $('.classGlideraComplete').show();
      $('#tblBankOptions').show();
    }
  }
  //}

  if (!g_SecurityLevel1) {
    $('.classNeedLevel1').show();
  }
  else {
    $('.classConfirmedLevel1').show();
  }

  if (g_SecurityLevel1 && !g_SecurityLevel2)
    $('.classLevelHave1Need2').show();

  if (g_SecurityGlideraPhoneValidated && g_SecurityLevel1 && !boolLevel2aInReview && boolLevel2aToDo) {
    $('.classGlideraPhoneRegisteredButNeedPictureID').show();
  }
  else {
    $('.classGlideraPhoneRegisteredButNeedPictureID').hide();
  }

  if (g_SecurityLevel1 && g_SecurityLevel2a && !g_SecurityLevel2b) {
    $('.classGlideraNeedAdditionalVerification').show();
  }

  if (!g_SecurityLeve2BeforeLevel1) {
    $('.classIfNeedL2BeforeL1IsFalse').show();
  }


}
function SetWalletBalanceInSatoshi(CurrencyCode, satoshiWalletBalanceUsable, satoshiWalletBalancePending /*, satoshiWalletBalanceConfirmed */) {

  $('.classWalletBalancePending' + CurrencyCode).text((satoshiWalletBalancePending / 1e8).toFixed(8));
  $('.classFiatWalletBalancePending' + CurrencyCode).text('$' + numberWithCommas((satoshiWalletBalancePending / 1e8 * g_dictConversionRate[CurrencyCode]).toFixed(2)));

  if (satoshiWalletBalancePending > 0)
    $('.classRowBitcoinDepositPending' + CurrencyCode).fadeIn(1000);
  else
    $('.classRowBitcoinDepositPending' + CurrencyCode).fadeOut(1000);



  g_satoshiWalletBalanceUsable[CurrencyCode] = satoshiWalletBalanceUsable;
  g_satoshiWalletBalancePending[CurrencyCode] = satoshiWalletBalancePending;
  //g_satoshiWalletBalanceConfirmed = satoshiWalletBalanceConfirmed;

  $('.' + CurrencyCode + 'WalletBalance').text((g_satoshiWalletBalanceUsable[CurrencyCode] / 1e8).toFixed(8));

  var FiatBTCWalletBalanceUsable = privFiatBalanceFromSatoshi(g_satoshiWalletBalanceUsable[CurrencyCode], g_dictConversionRate[CurrencyCode]);

  SetWalletBalanceInFiat(CurrencyCode, FiatBTCWalletBalanceUsable);
}
function SetWalletBalanceInFiat(CurrencyCode, FiatBTCWalletBalanceUsable) {
  $('.Fiat' + CurrencyCode + 'WalletBalance').text('$' + numberWithCommas(FiatBTCWalletBalanceUsable.toFixed(2)));

  var FiatCombinedWalletBalance = privGetCombinedFiatBalance();
  $('.FiatCombinedWalletBalance').text('$' + numberWithCommas(FiatCombinedWalletBalance.toFixed(2)));
}
function GetWalletBalance() {
  if (!g_boolUserLoggedIn || !g_TxHistoryLoaded || g_boolInsideGetWalletBalanceCall) {
    return;
  }

  g_boolInsideGetWalletBalanceCall = true;
  blankInput = {}
  $.ajax({
    type: 'POST',
    url: g_urlBlockchainBalance + '?' + GetQueryParametersForSessionAndService(),
    data: JSON.stringify(blankInput),
    contentType: "application/json; charset=utf-8",
    success: function (objJSONBalance) {
      g_boolInsideGetWalletBalanceCall = false;
      if (objJSONBalance.responsecode == 'SUCCESS') {
        var boolTransactionDetected = false;
        var objBalances = objJSONBalance.data.dictBalances;
        for (key in objBalances) {
          if (objBalances[key].SatoshiBalanceConfirmed + objBalances[key].SatoshiBalanceUnconfirmedInternal != g_satoshiBalanceTotalFromTxHistory.dictBalances[key].SatoshiBalanceConfirmed + g_satoshiBalanceTotalFromTxHistory.dictBalances[key].SatoshiBalanceUnconfirmedInternal)
            boolTransactionDetected = true;
          else if (objBalances[key].SatoshiBalanceUnconfirmedExternal != g_satoshiBalanceTotalFromTxHistory.dictBalances[key].SatoshiBalanceUnconfirmedExternal)
            boolTransactionDetected = true;
        }

        if (boolTransactionDetected) {
          g_TxHistoryLoaded = false;
          TxHistoryList('gridTxHistory', 1);
          InventoryItemList('gridGiftCard', g_loadTypes.All);
        }
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      g_boolInsideGetWalletBalanceCall = false;
    },
    failure: function (response) {
      g_boolInsideGetWalletBalanceCall = false;
    }
  });
}
function GetWalletBalancePoll() {
  g_GetWalletBalancePoll = setInterval(function () {
    GetWalletBalance();
  }, 5000);
}
function UpdateWalletBalances(CurrencyCode, satoshiBalanceOld, satoshiBalanceNew, satoshiBalanceOldPending, satoshiBalanceNewPending, ConversionRateOld, ConversionRateNew) {

  var boolBalanceChanged = false;
  var BTCBalanceOld = satoshiBalanceOld / 1e8;
  var BTCBalanceNew = satoshiBalanceNew / 1e8;

  var BTCBalanceOldPending = satoshiBalanceOldPending / 1e8;
  var BTCBalanceNewPending = satoshiBalanceNewPending / 1e8;

  var FiatBalanceOld = privFiatBalanceFromSatoshi(satoshiBalanceOld, ConversionRateOld);
  var FiatBalanceNew = privFiatBalanceFromSatoshi(satoshiBalanceNew, ConversionRateNew);

  var FiatBalanceOldPending = privFiatBalanceFromSatoshi(BTCBalanceOldPending * 1e8, ConversionRateOld);
  var FiatBalanceNewPending = privFiatBalanceFromSatoshi(BTCBalanceNewPending * 1e8, ConversionRateNew);

  var FiatBankOldPending = privFiatBalanceFromSatoshi(g_satoshiBankPending[g_defaultCurrency], ConversionRateOld);
  var FiatBankNewPending = privFiatBalanceFromSatoshi(g_satoshiBankPending[g_defaultCurrency], ConversionRateNew);

  SetWalletBalanceInSatoshiLightweight(CurrencyCode, g_satoshiWalletBalanceUsableLightweight[CurrencyCode], g_satoshiWalletBalancePendingLightweight[CurrencyCode]);

  if (CurrencyCode == g_defaultCurrency) {
    if (FiatBankOldPending != FiatBankNewPending && null != FiatBankNewPending) {
      $('.classLabelFiatBankDepositPending').text('$' + numberWithCommas(FiatBankNewPending.toFixed(2)));
      if (FiatBankNewPending > FiatBankOldPending)
        privAnimateBackgroundColor('.classCellFiatBankDepositPending', '#6AFB92', 2000, 1000);
      else
        privAnimateBackgroundColor('.classCellFiatBankDepositPending', '#FFDFDD', 2000, 1000);
    }
  }
  if (FiatBankOldPending != FiatBankNewPending && null != FiatBankNewPending) {
    $('.classLabelFiatBankDepositPending' + CurrencyCode).text('$' + numberWithCommas(FiatBankNewPending.toFixed(2)));
    if (FiatBankNewPending > FiatBankOldPending)
      privAnimateBackgroundColor('.classCellFiatBankDepositPending' + CurrencyCode, '#6AFB92', 2000, 1000);
    else
      privAnimateBackgroundColor('.classCellFiatBankDepositPending' + CurrencyCode, '#FFDFDD', 2000, 1000);
  }


  if (ConversionRateNew != ConversionRateOld) {
    //$('.BTCConversionRate').text('$' + numberWithCommas(ConversionRateNew.toFixed(2)));

    if (ConversionRateNew > ConversionRateOld)
      privAnimateBackgroundColor('.' + CurrencyCode + 'ConversionRate', '#6AFB92', 2000, 1000);
    else
      privAnimateBackgroundColor('.' + CurrencyCode + 'ConversionRate', '#FFDFDD', 2000, 1000);

    SetConversionRate(CurrencyCode, ConversionRateNew);
  }

  if (CurrencyCode == g_defaultCurrency) {
    if (satoshiBalanceNew + satoshiBalanceNewPending != satoshiBalanceOld + satoshiBalanceOldPending && satoshiBalanceNewPending != -1 && satoshiBalanceOldPending != -1) {
      boolBalanceChanged = true;

      if (satoshiBalanceNew + satoshiBalanceNewPending > satoshiBalanceOld + satoshiBalanceOldPending) {
        //$('#rowDepositDetected').fadeIn(1000);
        //setTimeout(function () { $('#rowDepositDetected').fadeOut(1000) }, 10000);
        $('#cellDepositWithdrawalDetected').text('Added to account');
        $('#lblFIATTransferDetected').text('$' + ((BTCBalanceNew + BTCBalanceNewPending - BTCBalanceOld - BTCBalanceOldPending) * ConversionRateNew).toFixed(2));
        $('#cellFIATTransferDetected').removeClass('LessMoney').addClass('MoreMoney');
        $('.classDepositWithdrawalDetected').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
        setTimeout(function () { $('.classDepositWithdrawalDetected').css({ visibility: "visible", opacity: 1.0 }).animate({ opacity: 0.0 }) }, 30000);
        AddressBookList('gridAddressBook', 1);
        //$('#cellBTCDepositDetected').text((BTCBalanceNew + BTCBalanceNewPending - BTCBalanceOld - BTCBalanceOldPending).toFixed(8));
      }
      else {
        //$('#rowSpendDetected').fadeIn(1000);
        //setTimeout(function () { $('#rowSpendDetected').fadeOut(1000) }, 10000);
        $('#cellDepositWithdrawalDetected').text('Spent from account');
        $('#lblFIATTransferDetected').text('$' + ((BTCBalanceOld + BTCBalanceOldPending - BTCBalanceNew - BTCBalanceNewPending) * ConversionRateNew).toFixed(2));
        $('#cellFIATTransferDetected').addClass('LessMoney').removeClass('MoreMoney');
        $('.classDepositWithdrawalDetected').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 });
        setTimeout(function () { $('.classDepositWithdrawalDetected').css({ visibility: "visible", opacity: 1.0 }).animate({ opacity: 0.0 }) }, 30000);
        //$('#cellBTCSpendDetected').text((BTCBalanceOld + BTCBalanceOldPending - BTCBalanceNew - BTCBalanceNewPending).toFixed(8));
      }
    }
  }

  $('.' + CurrencyCode + 'WalletBalance').text(BTCBalanceNew.toFixed(8));
  if (satoshiBalanceNew != satoshiBalanceOld && satoshiBalanceOld != -1) {

    if (satoshiBalanceNew > satoshiBalanceOld) {
      privAnimateBackgroundColor('.' + CurrencyCode + 'WalletBalance', '#6AFB92', 2000, 1000);
    }
    else {
      privAnimateBackgroundColor('.' + CurrencyCode + 'WalletBalance', '#FFDFDD', 2000, 1000);
    }
  }


  if (CurrencyCode == g_defaultCurrency) {
    if (satoshiBalanceNewPending != satoshiBalanceOldPending && satoshiBalanceOldPending != -1) {
      boolBalanceChanged = true;

      $('.WalletBalancePending').text(BTCBalanceNewPending.toFixed(8));

      if (satoshiBalanceNewPending > 0)
        $('.classRowBitcoinDepositPending').fadeIn(1000);
      else
        $('.classRowBitcoinDepositPending').fadeOut(1000);

      if (satoshiBalanceNewPending > satoshiBalanceOldPending) {
        privAnimateBackgroundColor('.WalletBalancePending', '#6AFB92', 2000, 1000);
      }
      else {
        privAnimateBackgroundColor('.WalletBalancePending', '#FFDFDD', 2000, 1000);
      }
    }


    if (boolBalanceChanged) {
      g_boolTransactionDetected = false;
      //$('.USDAmount').val('');
      //$('.BTCAmount').text('0.00000000');
      UsdBtcReset();
      $('#rowGeneratingQRCode').css('visibility', 'hidden');

      g_strAmount_LastKnownGood = '';
      SetWalletBalanceInSatoshi(CurrencyCode, satoshiBalanceNew, satoshiBalanceNewPending /*, g_satoshiWalletBalanceConfirmed*/);
    }

    if (FiatBalanceNewPending != FiatBalanceOldPending && satoshiBalanceOldPending != -1) {
      $('.FiatWalletBalancePending').text('$' + numberWithCommas(FiatBalanceNewPending.toFixed(2)));

      if (FiatBalanceNewPending > FiatBalanceOldPending)
        privAnimateBackgroundColor('.FiatWalletBalancePending', '#6AFB92', 2000, 1000);
      else if (FiatBalanceNewPending < FiatBalanceOldPending)
        privAnimateBackgroundColor('.FiatWalletBalancePending', '#FFDFDD', 2000, 1000);
    }
  }

  $('.classWalletBalancePending' + CurrencyCode).text(BTCBalanceNewPending.toFixed(8));

  if (satoshiBalanceNewPending != satoshiBalanceOldPending && satoshiBalanceOldPending != -1) {
    boolBalanceChanged = true;

    if (satoshiBalanceNewPending > 0)
      $('.classRowBitcoinDepositPending' + CurrencyCode).fadeIn(1000);
    else
      $('.classRowBitcoinDepositPending' + CurrencyCode).fadeOut(1000);

    if (satoshiBalanceNewPending > satoshiBalanceOldPending) {
      privAnimateBackgroundColor('.classWalletBalancePending' + CurrencyCode, '#6AFB92', 2000, 1000);
    }
    else {
      privAnimateBackgroundColor('.classWalletBalancePending' + CurrencyCode, '#FFDFDD', 2000, 1000);
    }
  }


  if (FiatBalanceNewPending != FiatBalanceOldPending && satoshiBalanceOldPending != -1) {
    $('.classFiatWalletBalancePending' + CurrencyCode).text('$' + numberWithCommas(FiatBalanceNewPending.toFixed(2)));

    if (FiatBalanceNewPending > FiatBalanceOldPending)
      privAnimateBackgroundColor('.classFiatWalletBalancePending' + CurrencyCode, '#6AFB92', 2000, 1000);
    else if (FiatBalanceNewPending < FiatBalanceOldPending)
      privAnimateBackgroundColor('.classFiatWalletBalancePending' + CurrencyCode, '#FFDFDD', 2000, 1000);
  }

  if (FiatBalanceNew != FiatBalanceOld && satoshiBalanceOld != -1) {
    SetWalletBalanceInFiat(CurrencyCode, FiatBalanceNew);
    AddressesUsedComputeFiat();

    if (FiatBalanceNew > FiatBalanceOld) {
      privAnimateBackgroundColor('.Fiat' + CurrencyCode + 'WalletBalance', '#6AFB92', 2000, 1000);
      privAnimateBackgroundColor('.FiatCombinedWalletBalance', '#6AFB92', 2000, 1000);
      //            if (g_defaultCurrency == CurrencyCode)
      //                privAnimateBackgroundColor('.Fiat' + CurrencyCode + 'WalletBalance', '#6AFB92', 2000, 1000);
    }
    else if (FiatBalanceNew < FiatBalanceOld) {
      privAnimateBackgroundColor('.Fiat' + CurrencyCode + 'WalletBalance', '#FFDFDD', 2000, 1000);
      privAnimateBackgroundColor('.FiatCombinedWalletBalance', '#FFDFDD', 2000, 1000);
      //            if (g_defaultCurrency == CurrencyCode)
      //                privAnimateBackgroundColor('.Fiat' + CurrencyCode + 'WalletBalance', '#FFDFDD', 2000, 1000);
    }
  }

}
function privGetCombinedFiatBalance() {
  var fiatCombinedBalance = 0.0;
  for (var key in g_supportedCurrencies) {
    fiatCombinedBalance += g_dictConversionRate[key] * g_satoshiWalletBalanceUsable[key] / 1e8;
  }

  return fiatCombinedBalance;
}
function privProcessFundsInput(control, input) {
  var btcAmount = privUSDAmountEntry(control, input);
  if (-1 == btcAmount)
    return;
}
function privProcessDepositRequest(btcAmount) {

  if (-1 == btcAmount)
    return;

  $('#cellScanQRCode').hide();
  $('#cellScanQRCodeWithoutSatoshi').hide();
  $('#rowGeneratingQRCode').css('visibility', 'visible');
  $('#cellGeneratingQRCode').fadeIn();
  satoshiAmount = btcAmount * 100000000;

  var qrCodeText;

  if (g_defaultCurrency == 'BTC') {
    qrCodeText = 'bitcoin:' + g_BTCAddress + '?message=Deposit BTC into iPayYou account'.replace(/ /g, "%20");
  }
  else if (g_defaultCurrency == 'BCH') {
    qrCodeText = g_BTCAddress + '?message=Deposit BCH into iPayYou account'.replace(/ /g, "%20");
  }
  else if (g_defaultCurrency == 'BSV') {
    qrCodeText = g_BTCAddress + '?message=Deposit BSV into iPayYou account'.replace(/ /g, "%20");
  }


  if (0 < btcAmount)
    qrCodeText += '&amount=' + btcAmount.toFixed(8);

  $('#cellQRCode').empty();
  $('#cellQRCode').qrcode({
    "text": qrCodeText
  });



  if (g_EnteredAmountBlank == false && btcAmount > 0) {
    if (g_strAmount_LastKnownGoodUSD != '') {
      $('#FiatDepositAmount').html(numberWithCommas(parseFloat(g_strAmount_LastKnownGoodUSD).toFixed(2)));
      $('.symbolAmount').html('$&nbsp;');
    }
    else {
      $('#FiatDepositAmount').html(numberWithCommas(parseFloat(g_strAmount_LastKnownGoodBTC).toFixed(8)));
      $('.symbolAmount').html('&#3647;&nbsp;');
    }

    $('#cellScanQRCode').show();
    $('#cellScanQRCodeWithoutSatoshi').hide();
  }
  else {
    $('#cellScanQRCode').hide();
    $('#cellScanQRCodeWithoutSatoshi').show();
  }

}
function privUSDAmountEntry(control, input) {
  if ('.' == input) {
    g_strAmount_LastKnownGoodUSD = '0.';
    input = '0.';
    control.val(g_strAmount_LastKnownGood);
  }
  if ($.isNumeric(input) || input == '')
    g_strAmount_LastKnownGoodUSD = input;
  else {
    control.val(g_strAmount_LastKnownGoodUSD);
    return -1;
  }

  if (input == '')
    g_EnteredAmountBlank = true;
  else
    g_EnteredAmountBlank = false;

  btcAmount = input / g_dictConversionRate[g_defaultCurrency];
  /*
  if (btcAmount * 1e8 > g_satoshiWalletBalanceUsable[g_defaultCurrency]) {
    btcAmount = g_satoshiWalletBalanceUsable[g_defaultCurrency] / 1e8;
  }
  else if (g_satoshiWalletBalanceUsable[g_defaultCurrency] / 1e8 * g_dictConversionRate[g_defaultCurrency] - input < 0.01) {
    btcAmount = g_satoshiWalletBalanceUsable[g_defaultCurrency] / 1e8;
  }
  */
  $('.BTCAmountConverted').text(numberWithCommas(btcAmount.toFixed(8)));

  return btcAmount;
}
function privUSDAmountEntryForCurrency(control, input, strCurrencyCode) {
  if ('.' == input) {
    g_strAmount_LastKnownGoodUSD = '0.';
    input = '0.';
    control.val(g_strAmount_LastKnownGood);
  }
  if ($.isNumeric(input) || input == '')
    g_strAmount_LastKnownGoodUSD = input;
  else {
    control.val(g_strAmount_LastKnownGoodUSD);
    return -1;
  }

  if (input == '')
    g_EnteredAmountBlank = true;
  else
    g_EnteredAmountBlank = false;

  satoshiAmount = input / g_dictConversionRate[strCurrencyCode] * 1e8;
  if (satoshiAmount > g_satoshiWalletBalanceUsable[strCurrencyCode])
    satoshiAmount = g_satoshiWalletBalanceUsable[strCurrencyCode];
  btcAmount = satoshiAmount / 1e8;
  $('.BTCAmountConverted').text(numberWithCommas(btcAmount.toFixed(8)));

  return btcAmount;
}
function privBTCAmountEntry(control, input) {
  if ('.' == input) {
    g_strAmount_LastKnownGoodBTC = '0.';
    input = '0.';
    control.val(g_strAmount_LastKnownGoodBTC);
  }
  if ($.isNumeric(input) || input == '')
    g_strAmount_LastKnownGoodBTC = input;
  else {
    control.val(g_strAmount_LastKnownGoodBTC);
    return -1;
  }

  if (input == '')
    g_EnteredAmountBlank = true;
  else
    g_EnteredAmountBlank = false;

  usdAmount = input * g_dictConversionRate[g_defaultCurrency];
  $('.USDAmountConverted').text(numberWithCommas(usdAmount.toFixed(2)));

  return usdAmount;
}
function privBTCAmountEntryForCurrency(control, input, strCurrency) {
  if ('.' == input) {
    g_strAmount_LastKnownGoodBTC = '0.';
    input = '0.';
    control.val(g_strAmount_LastKnownGoodBTC);
  }
  if ($.isNumeric(input) || input == '')
    g_strAmount_LastKnownGoodBTC = input;
  else {
    control.val(g_strAmount_LastKnownGoodBTC);
    return -1;
  }

  if (input == '')
    g_EnteredAmountBlank = true;
  else
    g_EnteredAmountBlank = false;

  usdAmount = input * g_dictConversionRate[strCurrency];
  $('.USDAmountConverted').text(numberWithCommas(usdAmount.toFixed(2)));

  return usdAmount;
}
function privFiatBTCWalletBalance() {
  return privFiatBalanceFromSatoshi(g_satoshiWalletBalanceUsable[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency]);
}
function privFiatBTCWalletBalanceForCurrency(strCurrency) {
  return privFiatBalanceFromSatoshi(g_satoshiWalletBalanceUsable[strCurrency], g_dictConversionRate[strCurrency]);
}
function privFiatBalanceFromBTC(btcBalance, floatConversionRate) {
  return privFiatBalanceFromSatoshi(btcBalance * 1e8, floatConversionRate);
}
function privFiatBalanceFromSatoshi(satoshiBalance, floatConversionRate) {
  satoshiBalance = Math.round(satoshiBalance);
  return Math.round(satoshiBalance / 1e8 * floatConversionRate * 100.0) / 100.0;
}
// functions - wallet - end

// functions - walletdisplay - begin
function SendPaymentPageInit(pageStatus) {
  ClearErrors();
  ClearEntryFields();

  $('.classWalletWithdraw').hide();
  $('.MenuRow').hide();
  $('.classSendFundsDefault').show();
  $('#tblBalance').show();

  if (pageStatus == 'SendPaymentSubmenuClicked') {
    $('.menuWallet').show();
    AddressBookDisplay('InvokeNew');
  }
  else if (pageStatus == 'CreateNewPayee') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'SendFunds');
    StateCurrentMainPush('WithdrawChoices', 'NewPayee');
    StateCurrentPush();
    $('.menuWallet').show();
    AddressBookDisplay('CreateNewPayee');
  }
}
// functions - wallet display - end

// functions - walletwithdraw - begin
function BTCPaymentContractGet() {
  ClearErrors();

  $('#boxPassword_Edit').val('');
  $('#boxNoteForRecipient_Edit').val('');

  modelParams = {};
  modelParams.guidServiceID = g_guidServiceID;
  modelParams.guidSessionID = g_guidSessionID;
  modelParams.guidAddressBookEntry = g_strPayeeAddressBookID;
  modelParams.strPayeeAddress = g_strPayeeAddress;
  modelParams.strPayeeName = g_strPayeeName;
  modelParams.longTwitterID = g_longPayeeTwitterID;
  modelParams.CurrencyCode = g_defaultCurrency;

  if ('' == g_strAmount_LastKnownGoodUSD)
    floatAmount_LastKnownGoodUSD = 0;
  else
    floatAmount_LastKnownGoodUSD = parseFloat(g_strAmount_LastKnownGoodUSD);

  if ('' == g_strAmount_LastKnownGoodBTC)
    g_strAmount_LastKnownGoodBTC = 0;
  else
    floatAmount_LastKnownGoodBTC = parseFloat(g_strAmount_LastKnownGoodBTC);

  var floatFiatWalletBalance = (g_satoshiWalletBalanceUsable[g_defaultCurrency] / 1e8 * g_dictConversionRate[g_defaultCurrency]);

  if (floatAmount_LastKnownGoodUSD > 0 && floatAmount_LastKnownGoodUSD.toFixed(2) == floatFiatWalletBalance.toFixed(2)) {
    //modelParams.fiatPaymentInCents = Math.round(floatFiatWalletBalance * 100);
    modelParams.satoshiPayment = g_satoshiWalletBalanceUsable[g_defaultCurrency];
  }
  else if (floatAmount_LastKnownGoodUSD > 0) {
    //        modelParams.satoshiPayment = Math.round(floatAmount_LastKnownGood * 1e8 / g_dictConversionRate[g_defaultCurrency]);
    modelParams.fiatPaymentInCents = Math.round(floatAmount_LastKnownGoodUSD * 100);
    modelParams.satoshiPayment = 0;
  }
  else {
    modelParams.fiatPaymentInCents = 0;
    modelParams.satoshiPayment = Math.round(floatAmount_LastKnownGoodBTC * 1e8);
  }


  $.ajax({
    type: 'PATCH',
    url: g_urlBTCPaymentContract,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        modelBTCPaymentContract = JSON.parse(response.jsonData);

        btcPayeeWillReceive = modelBTCPaymentContract.satoshiPaymentToPayee / 1e8;
        btcExpediteFee = modelBTCPaymentContract.satoshiExpediteFee / 1e8;
        dblConversionRate = modelBTCPaymentContract.ConversionRate;

        UpdateWalletBalances(g_defaultCurrency, g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency], dblConversionRate);

        fiatPayeeWillReceive = privFiatBalanceFromSatoshi(modelBTCPaymentContract.satoshiPaymentToPayee, g_dictConversionRate[g_defaultCurrency]);
        fiatExpediteFee = privFiatBalanceFromSatoshi(modelBTCPaymentContract.satoshiExpediteFee, g_dictConversionRate[g_defaultCurrency]);

        if (modelBTCPaymentContract.boolBalanceAdjusted)
          $('.classInsufficientBalanceSend').show();
        else
          $('.classInsufficientBalanceSend').hide();

        $('.PayeeWillReceive_Label').text(fiatPayeeWillReceive.toFixed(2));
        $('.BTCPayeeWillReceive_Label').text(btcPayeeWillReceive.toFixed(8));
        $('.BTCTxConversionRate_Label').text('$' + numberWithCommas(dblConversionRate.toFixed(2)));


        $('.FiatExpediteFee_Label').text(fiatExpediteFee.toFixed(2));
        $('.BTCExpediteFee_Label').text(btcExpediteFee.toFixed(8));

        fiatTotalWithdrawal = privFiatBalanceFromSatoshi(modelBTCPaymentContract.satoshiPaymentToPayee + modelBTCPaymentContract.satoshiExpediteFee, g_dictConversionRate[g_defaultCurrency]);
        $('.boxAmountToSendTotal_Label').text(fiatTotalWithdrawal.toFixed(2));
        $('.BTCboxAmountToSendTotal_Label').text(((modelBTCPaymentContract.satoshiPaymentToPayee + modelBTCPaymentContract.satoshiExpediteFee) / 1e8).toFixed(8));

        g_guidContractFlowID = modelBTCPaymentContract.guidFlowID;

        ClearEntryFields();
        ClearErrors();

        $('#rowAmountToSendEdit').hide();
        $('.classSendFundsContinue').hide();
        $('.classEnterPassword').show();
        $('.classAmountToSendConfirm').show();
        $('#boxNoteForRecipient_Edit').focus();

        //FillOutConfirmationDisplay();

        g_idBtnCancel = 'AmountChange';

      }
      else if (response.responsecode == 'TRANSACTION_TOO_SMALL') {
        $('.classAddressBookPaymentContractError').html('<b>Payment amount too small</b> (needs to be at least ฿ 0.0005)');
        ButtonAction('btnContinueSendMoney', 'enable');
      }
      else if (response.responsecode == 'NOT_ENOUGH_FUNDS') {
        $('.classAddressBookPaymentContractError').html('You do not have enough funds to cover both, payment and network fee');
        ButtonAction('btnContinueSendMoney', 'enable');
      }

      else {
        $('.classAddressBookPaymentContractError').html('Unable to obtain Payment contract -- <b>' + response.responsecode + '</b> : ' + response.errordescription);
        ButtonAction('btnContinueSendMoney', 'enable');
      }
    },
    failure: function (response) {
      $('.classAddressBookPaymentContractError').html('Unable to obtain Payment contract - please try again');
      ButtonAction('btnContinueSendMoney', 'enable');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classAddressBookPaymentContractError').html('Unable to obtain Payment contract - please try again');
      ButtonAction('btnContinueSendMoney', 'enable');
    }

  });

  return false;
}
function BTCPaymentContractSubmit() {
  ClearErrors();

  var modelContractSubmit = {};
  modelContractSubmit.guidSessionID = g_guidSessionID;
  modelContractSubmit.guidServiceID = g_guidServiceID;
  modelContractSubmit.guidFlowID = g_guidContractFlowID;
  modelContractSubmit.strPayerNote = $('#boxNoteForRecipient_Edit').val().trim();
  //modelContractSubmit.strSMSOrAuthyCode = $('#boxWithdrawAuthyCode_Edit').val().trim();

  if (!g_boolAuthyEnabled)
    modelContractSubmit.strSMSFlowID = g_guidCodeFlowID;

  GetWalletBalancePoll();

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractSubmit),
    url: g_urlBTCPaymentContract,

    success: function (response) {


      if (response.responsecode == 'SUCCESS') {
        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);


      }
      else if (response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'INVALID_2FA' || response.responsecode == 'EXPIRED') {
        $('.classAddressBookPaymentContractError').html('Wrong or expired authentication code');
        ButtonAction('btnPayNow', 'enable');
        $('#boxPassword_Edit').focus();
      }
      else if (response.responsecode == 'TRANSACTION_TOO_LARGE') {
        ButtonAction('btnPayNow', 'reset');
        var strTxTooLargeResponse = response.jsonData;
        var objTxTooLargeResponse = JSON.parse(strTxTooLargeResponse);
        $('#cellMaxAvailToSend').text('$' + numberWithCommas(objTxTooLargeResponse.fiatUSDAvailable.toFixed(2)));
        $("#spanTooLongPeriodSendBTC").text(objTxTooLargeResponse.strTooLargePeriod);
        $('#cellAvailToSendBTCDate').addClass('UTCTime').text(objTxTooLargeResponse.dtComeBackAfter);
        ConvertUTCToLocal();
        $('#rowBTCSendTooLarge').show();
      }
      else {
        $('.classAddressBookPaymentContractError').html('Unable to submit payment: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        ButtonAction('btnPayNow', 'enable');
        $('#boxPassword_Edit').focus();
      }
    },
    failure: function (response) {
      $('.classAddressBookPaymentContractError').text('Response Code: ' + response.responsecode);
    },
    error: function (e, status) {

      $('.classAddressBookPaymentContractError').text('Response Code: ' + e.status + ' (' + status + ')');
      ButtonAction('btnPayNow', 'enable');
      $('#boxPassword_Edit').focus();
    }
  });

  return false;
}
function CheckAmountToDeposit() {
  var floatAmount_LastKnownGood;
  if (g_EnteredAmountBlank)
    floatAmount_LastKnownGood = 0;
  else
    floatAmount_LastKnownGood = parseFloat(g_strAmount_LastKnownGood);

  if (floatAmount_LastKnownGood == 0) {
    ButtonAction('btnContinueDepositFromSyn', 'disable');
  }
  else
    ButtonAction('btnContinueDepositFromSyn', 'enable');
  return false;

}
function CheckAmountToReceive() {
  var floatAmount_LastKnownGood;
  if (g_EnteredAmountBlank) {
    floatAmount_LastKnownGoodUSD = 0;
    floatAmount_LastKnownGoodBTC = 0;
  }
  else {
    floatAmount_LastKnownGoodUSD = parseFloat(g_strAmount_LastKnownGoodUSD);
    floatAmount_LastKnownGoodBTC = parseFloat(g_strAmount_LastKnownGoodBTC);
  }

  var usdAmountUSDInput = floatAmount_LastKnownGoodUSD;

  var usdAmountBTCInput = 0;

  if (floatAmount_LastKnownGoodBTC > 0) {
    usdAmountBTCInput = floatAmount_LastKnownGoodBTC * g_dictConversionRate[g_defaultCurrency];
  }

  if (usdAmountUSDInput > g_Limits.dictLimits['BTCSendDaily']) {
    $(".BTCAmountConverted").html('<font color="red">exceeds daily funding limit</font>');
    return false;
  }
  else if (usdAmountBTCInput > g_Limits.dictLimits['BTCSendDaily']) {
    $(".USDAmountConverted").html('<font color="red">exceeds daily funding limit</font>');
    return false;
  }

  return true;
}


function CheckAmountToSend(boolProcessing) {
  var floatAmount_LastKnownGood;
  if (g_EnteredAmountBlank) {
    floatAmount_LastKnownGoodUSD = 0;
    floatAmount_LastKnownGoodBTC = 0;
  }
  else {
    floatAmount_LastKnownGoodUSD = parseFloat(g_strAmount_LastKnownGoodUSD);
    floatAmount_LastKnownGoodBTC = parseFloat(g_strAmount_LastKnownGoodBTC);
  }

  var floatFiatWalletBalance = privFiatBTCWalletBalance();
  if (floatAmount_LastKnownGoodUSD > floatFiatWalletBalance) {
    $(".BTCAmountConverted").html('<font color="red">exceeds available balance</font>');
    ButtonAction('btnContinueSendMoney', 'disable');
    return false;
  }
  else if (Math.round(floatAmount_LastKnownGoodBTC * 1e8) > g_satoshiWalletBalanceUsable[g_defaultCurrency]) {
    $(".USDAmountConverted").html('<font color="red">exceeds available balance</font>');
    ButtonAction('btnContinueSendMoney', 'disable');
    return false;
  }
  else if (floatAmount_LastKnownGoodUSD == 0 && floatAmount_LastKnownGoodBTC == 0) {
    ButtonAction('btnContinueSendMoney', 'disable');
    return false;
  }
  else {
    if (!boolProcessing) {
      ButtonAction('btnContinueSendMoney', 'enable');
      if (g_strAmount_LastKnownGoodUSD != '')
        $('#boxAmountToSendInUSD_Edit').focus();
      else
        $('#boxAmountToSendInBTC_Edit').focus();
    }

    if (floatFiatWalletBalance == floatAmount_LastKnownGood || floatFiatWalletBalance == floatAmount_LastKnownGoodUSD) {
      g_floatSatoshi_LastKnownGood = g_satoshiWalletBalanceUsable[g_defaultCurrency];
      $(".BTCAmount").html((g_floatSatoshi_LastKnownGood / 1e8).toFixed(8));
    }
    else if (floatAmount_LastKnownGoodUSD > 0)
      g_floatSatoshi_LastKnownGood = floatAmount_LastKnownGoodUSD / g_dictConversionRate[g_defaultCurrency] * 1e8;
    else
      g_floatSatoshi_LastKnownGood = floatAmount_LastKnownGoodBTC * 1e8;

    return true;
  }

}
// functions - walletwithdraw - end

// functions - phonenumber - begin
function SetCountryAndPhoneNumber(strCountryCodeISO, strCountryFriendly, strPhoneNumber) {
  g_CountryCodeEntered = strCountryCodeISO;
  g_CountrySelected = strCountryFriendly;

  if (g_CountryCodeEntered == 'US' || g_CountryCodeEntered == 'PR') {
    $('.classUSPhoneNumber').show();
    $('.classNonUSPhoneNumber').hide();
  }
  else {
    $('.classUSPhoneNumber').hide();
    $('.classNonUSPhoneNumber').show();
  }
  SetPhoneNumber(strPhoneNumber);
  //g_PhoneNumberForDisplay = '+' + strCountryCode + '-' + g_PhoneNumberForDisplay;

  $('.classPhoneNumber').text(g_PhoneNumberForDisplay);
}
function SetPhoneNumber(strPhoneNumber) {

  if (null == strPhoneNumber)
    return;

  // do this 4 times in case user types in multiple dashes, etc
  g_PhoneNumberPure = strPhoneNumber.replace('-', '').replace('(', '').replace(')', '').replace('.', '');
  g_PhoneNumberPure = g_PhoneNumberPure.replace('-', '').replace('(', '').replace(')', '').replace('.', '');
  g_PhoneNumberPure = g_PhoneNumberPure.replace('-', '').replace('(', '').replace(')', '').replace('.', '');
  g_PhoneNumberPure = g_PhoneNumberPure.replace('-', '').replace('(', '').replace(')', '').replace('.', '');
  g_PhoneNumberForDisplay = strPhoneNumber;

  $('.classPhoneNumber').text(g_PhoneNumberForDisplay);
}
function PhoneFriendly(strPhoneOrig) {
  strPhoneNew = strPhoneOrig.replace('.', '').replace('-', '').replace(' ', '').replace(')', '').replace('(', '');
  if (strPhoneNew.length != 10)
    return strPhoneOrig;

  strPhoneNew = strPhoneNew.substring(0, 3) + '-' + strPhoneNew.substring(3, 6) + '-' + strPhoneNew.substring(6, 10);
  return strPhoneNew;
}
// functions - phonenumber - end

// functions - withdrawsyn - begin
function privDepositSynCheckIfToEnableDepositSynNow() {
  boolAgreement = $('#chkAgreeToSynBuy').is(":checked");

  if (boolAgreement)
    ButtonAction('btnDepositSynNow', 'enable');
  else
    ButtonAction('btnDepositSynNow', 'disable');

}
function privDepositSynCheckToEnableContinue() {
  ClearErrors();
  var input = $('#boxFiatAmountToDepositFromSyn_Edit').val();
  privProcessFundsInput($('#boxFiatAmountToDepositFromSyn_Edit'), input);
  input = $('#boxFiatAmountToDepositFromSyn_Edit').val();  // reread this again
  g_FiatDepositRequested = parseFloat(input);

  if (g_FiatDepositRequested > 0) {
    ButtonAction('btnContinueDepositFromSyn', 'enable');
  }
  else {
    ButtonAction('btnContinueDepositFromSyn', 'disable');
  }
}
function privWithdrawSynCheckToEnableContinue() {
  ClearErrors();
  var input = $('#boxFiatAmountToWithdrawToSyn_Edit').val();
  var btcAmount = privUSDAmountEntry($('#boxFiatAmountToWithdrawToSyn_Edit'), input);

  input = $('#boxFiatAmountToWithdrawToSyn_Edit').val();  // reread this again
  g_FiatWithdrawalRequested = parseFloat(input);

  var FiatBTCWalletBalance = privFiatBalanceFromSatoshi(g_satoshiWalletBalanceUsable[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency]);

  if (g_FiatWithdrawalRequested > FiatBTCWalletBalance) {
    $('.BankWithdraw_Error').text('Exceeds maximum balance available to withdraw');
    ButtonAction('btnContinueWithdrawalToSyn', 'disable');
    g_idBtnDefault = '';
  }
  else if (g_FiatWithdrawalRequested > 2000) {
    $('.BankWithdraw_Error').text('Exceeds daily maximum withdrawal');
    ButtonAction('btnContinueWithdrawalToSyn', 'disable');
    g_idBtnDefault = '';
  }
  else {
    if (g_FiatWithdrawalRequested > 0) {
      ButtonAction('btnContinueWithdrawalToSyn', 'enable');
    }
    else {
      ButtonAction('btnContinueWithdrawalToSyn', 'disable');
    }
  }

}
function BankDepositGetContract() {
  SynTimerCancel();
  ClearErrors();

  $('#boxDepositSynAuthyCode_Edit').val('');

  $.ajax({
    type: 'GET',
    url: g_urlBankAccountContract + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&guidBankAccountID=' + g_guidSelectedBankAccount.ID + '&fiatAmountInCentsToDepositIntoIPayYou=' + Math.round(g_FiatDepositRequested * 100) + '&CurrencyCode=' + g_defaultCurrency,

    success: function (response) {
      ButtonAction('btnContinueDepositFromSyn', 'enable');
      if (response.responsecode == 'SUCCESS') {

        modelBankAccountContract = JSON.parse(response.jsonData);

        btcWithdrawalFromBank = modelBankAccountContract.satoshiBankDepositOrWithdrawal / 1e8;
        btcExpediteFee = modelBankAccountContract.satoshiExpediteFee / 1e8;
        dblConversionRate = modelBankAccountContract.ConversionRate;

        // UpdateWalletBalances(g_defaultCurrency, g_satoshiWalletBalanceUsable, g_satoshiWalletBalanceUsable, g_satoshiWalletBalancePending, g_satoshiWalletBalancePending, g_dictConversionRate[g_defaultCurrency], dblConversionRate);

        fiatWithdrawalFromBank = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiBankDepositOrWithdrawal, dblConversionRate);
        fiatExpediteFee = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiExpediteFee, dblConversionRate);

        $('#fiatDepositIntoIPayYou').text((fiatWithdrawalFromBank - fiatExpediteFee).toFixed(2));
        $('#btcDepositIntoIPayYou').text((btcWithdrawalFromBank - btcExpediteFee).toFixed(8));
        $('#fiatDepositExpediteFee').text(fiatExpediteFee.toFixed(2));
        $('#lblDepositSynExplanation').html(modelBankAccountContract.strFeeExplanationForDisplay);
        $('#cellDepositSynConversionRate').text('$' + numberWithCommas(dblConversionRate.toFixed(2)));

        fiatTotalWithdrawal = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiBankDepositOrWithdrawal, dblConversionRate);
        $('#fiatTotalWithdrawalFromBank').text(fiatTotalWithdrawal.toFixed(2));
        $('#idDepositExpectedCompletion').text(modelBankAccountContract.strDateExpected);
        g_guidContractSynFlowID = modelBankAccountContract.guidFlowID;

        DisplayBank('ConfirmDeposit');
      }
      else if (response.responsecode == 'TRANSACTION_TOO_SMALL') {
        $('.classBankAccountContractError').html('Transaction minimum: <b>$100</b>');
      }
      else if (response.responsecode == 'TEMPORARILY_SUSPENDED') {
        $('.classBankAccountContractError').html(response.errordescription);
      }
      else {
        $('.classBankAccountContractError').html('Unable to obtain BankAccount contract -- <b>' + response.responsecode + '</b> : ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('.classBankAccountContractError').html('Unable to obtain BankAccount contract - please try again');
      ButtonAction('btnContinueDepositFromSyn', 'enable');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classBankAccountContractError').html('Unable to obtain BankAccount contract - please try again');
      ButtonAction('btnContinueDepositFromSyn', 'enable');
    }

  });

  return false;

}
function BankWithdrawalGetContract() {
  SynTimerCancel();
  ClearErrors();

  $('#boxWithdrawSynAuthyCode_Edit').val('');

  $.ajax({
    type: 'GET',
    url: g_urlBankAccountContract + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&guidBankAccountID=' + g_guidSelectedBankAccount.ID + '&fiatAmountInCentsToDepositIntoBank=' + Math.round(g_FiatWithdrawalRequested * 100) + '&CurrencyCode=' + g_defaultCurrency,

    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        modelBankAccountContract = JSON.parse(response.jsonData);

        btcWithdrawalToBank = modelBankAccountContract.satoshiBankDepositOrWithdrawal / 1e8;
        btcExpediteFee = modelBankAccountContract.satoshiExpediteFee / 1e8;
        dblConversionRate = modelBankAccountContract.ConversionRate;

        UpdateWalletBalances(g_defaultCurrency, g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency], dblConversionRate);

        fiatWithdrawalToBank = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiBankDepositOrWithdrawal, g_dictConversionRate[g_defaultCurrency]);
        fiatExpediteFee = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiExpediteFee, g_dictConversionRate[g_defaultCurrency]);

        if (modelBankAccountContract.boolBalanceAdjusted)
          $('#spanInsufficientBalance').show();
        else
          $('#spanInsufficientBalance').hide();

        $('#fiatWithdrawalToBank').text(fiatWithdrawalToBank.toFixed(2));
        $('#btcWithdrawalToBank').text(btcWithdrawalToBank.toFixed(8));
        $('#cellWithdrawalExpediteFeeExplanation').html(modelBankAccountContract.strFeeExplanationForDisplay);
        $('.BTCTxConversionRate_Label').text('$' + numberWithCommas(dblConversionRate.toFixed(2)));

        $('#fiatWithdrawalExpediteFee').text(fiatExpediteFee.toFixed(2));
        $('#labelBTCWithdrawalExpediteFee').css("visibility", "visible");
        $('#btcWithdrawalExpediteFee').css("visibility", "visible");
        $('#btcWithdrawalExpediteFee').text(btcExpediteFee.toFixed(8));

        fiatTotalWithdrawal = privFiatBalanceFromSatoshi(modelBankAccountContract.satoshiBankDepositOrWithdrawal + modelBankAccountContract.satoshiExpediteFee, g_dictConversionRate[g_defaultCurrency]);
        $('#fiatTotalWithdrawal').text(fiatTotalWithdrawal.toFixed(2));
        $('#btcTotalWithdrawal').text((btcWithdrawalToBank + btcExpediteFee).toFixed(8));

        g_guidContractSynFlowID = modelBankAccountContract.guidFlowID;

        SynTimerRestart();

        ButtonAction('btnContinueWithdrawalToSyn', 'reset');
        $('#rowAmountToWithdrawToSynEdit').hide();
        $('#rowAmountToWithdrawToSynConfirm').show();
        g_idBtnCancel = 'btnCancelAmountToWithdrawToSynConfirm';
        $('#boxWithdrawSynAuthyCode_Edit').focus();
        ButtonAction('btnWithdrawSynNow', 'enable');

      }
      else if (response.responsecode == 'NOT_ENOUGH_FUNDS') {
        $('.classBankAccountContractError').html('Unable to sell Coin <br />' + response.errordescription);
        ButtonAction('btnContinueWithdrawalToSyn', 'enable');
      }
      else if (response.responsecode == 'TEMPORARILY_SUSPENDED') {
        ButtonAction('btnContinueWithdrawalToSyn', 'enable');
      }
      else {
        $('.classBankAccountContractError').html('Unable to obtain BankAccount contract -- <b>' + response.responsecode + '</b> : ' + response.errordescription);
        ButtonAction('btnContinueWithdrawalToSyn', 'enable');
      }
    },
    failure: function (response) {
      $('.classBankAccountContractError').html('Unable to obtain BankAccount contract - please try again');
      ButtonAction('btnContinueWithdrawalToSyn', 'enable');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classBankAccountContractError').html('Unable to obtain BankAccount contract - please try again');
      ButtonAction('btnContinueWithdrawalToSyn', 'enable');
    }

  });

  return false;
}
function BankSynDepositNow() {
  ClearErrors();
  SynTimerPause();

  var modelContractSubmit = {};
  modelContractSubmit.guidSessionID = g_guidSessionID;
  modelContractSubmit.guidServiceID = g_guidServiceID;
  modelContractSubmit.guidFlowID = g_guidContractSynFlowID;
  modelContractSubmit.CurrencyCode = g_defaultCurrency;
  //modelContractSubmit.strSMSOrAuthyCode = $('#boxDepositSynAuthyCode_Edit').val().trim();

  if (!g_boolAuthyEnabled)
    modelContractSubmit.strSMSFlowID = g_guidCodeFlowID;

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractSubmit),
    url: g_urlBankAccountContract,

    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        SynTimerCancel();

        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);

      }
      else if (response.responsecode == 'EXPIRED') {
        SynTimerCancel();

        PageDisplayBankDeposit('BankAccountSelected');
        $('.classBankAccountContractError').html('Unable to submit purchase: Request Expired - please resubmit');

      }
      else if (response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'INVALID_2FA' || response.responsecode == 'EXPIRED') {
        $('.classBankAccountContractError').html('Wrong or expired authentication code');
        SynTimerRestart();
        privDepositSynCheckIfToEnableDepositSynNow();
      }
      else if (response.responsecode == 'TRANSACTION_TOO_LARGE') {
        SynTimerCancel();
        var strTxTooLargeResponse = response.jsonData;
        var objTxTooLargeResponse = JSON.parse(strTxTooLargeResponse);
        ButtonAction('btnDepositSynNow', 'reset');
        ButtonAction('btnDepositSynNow', 'disable');
        $('#cellMaxAvailToDeposit').text('$' + numberWithCommas(objTxTooLargeResponse.fiatUSDAvailable.toFixed(2)));
        $("#spanTooLongPeriod").text(objTxTooLargeResponse.strTooLargePeriod);
        $('#cellAvailToDepositDate').addClass('UTCTime').text(objTxTooLargeResponse.dtComeBackAfter);
        ConvertUTCToLocal();
        $('#rowDepositSynTooLarge').show();
      }
      else {
        SynTimerRestart();
        $('.classBankAccountContractError').html('Unable to submit purchase: ' + response.responsecode + ' (' + response.errordescription + ')');
        privDepositSynCheckIfToEnableDepositSynNow();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      SynTimerRestart();
      $('.classBankAccountContractError').html('Unable to submit purchase: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      privDepositSynCheckIfToEnableDepositSynNow();
    },
    failure: function (response) {
      SynTimerRestart();
      $('.classBankAccountContractError').html('Unable to submit purchase - please cancel and try again');
      privDepositSynCheckIfToEnableDepositSynNow();
    }
  });

  return false;

}
function BankSynWithdrawNow() {
  ClearErrors();
  SynTimerPause();

  var modelContractSubmit = {};
  modelContractSubmit.guidSessionID = g_guidSessionID;
  modelContractSubmit.guidServiceID = g_guidServiceID;
  modelContractSubmit.guidFlowID = g_guidContractSynFlowID;
  modelContractSubmit.strSMSOrAuthyCode = $('#boxWithdrawSynAuthyCode_Edit').val().trim();
  modelContractSubmit.CurrencyCode = g_defaultCurrency;

  if (!g_boolAuthyEnabled)
    modelContractSubmit.strSMSFlowID = g_guidCodeFlowID;

  GetWalletBalancePoll();

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractSubmit),
    url: g_urlBankAccountContract,

    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        SynTimerCancel();

        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);
      }
      else if (response.responsecode == 'TRANSACTION_TOO_LARGE') {
        var strTxTooLargeResponse = response.jsonData;
        var objTxTooLargeResponse = JSON.parse(strTxTooLargeResponse);
        SynTimerCancel();
        ButtonAction('btnWithdrawSynNow', 'reset');
        ButtonAction('btnWithdrawSynNow', 'disable');
        $('#cellMaxAvailToWithdraw').text('$' + numberWithCommas(objTxTooLargeResponse.fiatUSDAvailable.toFixed(2)));
        $('#cellAvailToWithdrawDate').addClass('UTCTime').text(objTxTooLargeResponse.dtComeBackAfter);
        ConvertUTCToLocal();
        $('#rowWithdrawalSynTooLarge').show();
      }
      else if (response.responsecode == 'EXPIRED') {
        $('.classBankAccountContractError').html('Unable to submit bitcoin sale: Request Expired - please resubmit');
        SynTimerCancel();
        $('#rowAmountToWithdrawToSynConfirm').hide();
        $('#rowAmountToWithdrawToSynEdit').show();
        privWithdrawSynCheckToEnableContinue();
        $('#boxFiatAmountToWithdrawToSyn_Edit').focus();
        g_idBtnCancel = 'btnCancelBankSelectedWithdrawal';

      }
      else if (response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'INVALID_2FA') {
        $('.classBankAccountContractError').html('Wrong or expired authentication code');
        SynTimerRestart();
        ButtonAction('btnWithdrawSynNow', 'enable');
      }
      else {
        SynTimerRestart();
        $('.classBankAccountContractError').html('Unable to submit bitcoin sale: ' + response.responsecode + ' (' + response.errordescription + ')');
        ButtonAction('btnWithdrawSynNow', 'enable');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      SynTimerRestart();
      $('.classBankAccountContractError').html('Unable to submit bitcoin sale: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      ButtonAction('btnWithdrawSynNow', 'enable');
    },
    failure: function (response) {
      SynTimerRestart();
      $('.classBankAccountContractError').html('Unable to submit bitcoin sale - please cancel and try again');
      ButtonAction('btnWithdrawSynNow', 'enable');
    }
  });

  return false;
}
function SynConfirmationTimeout() {
  if (null == g_SynConfirmationTimeout)
    return;

  g_countdownSynConfirmationExpiration -= 5;
  if (g_countdownSynConfirmationExpiration <= 0) {
    SynTimerCancel();
    $('#' + g_idBtnCancel).click();
    //$('#rowAmountToWithdrawToSynConfirm').hide();
    //$('#rowAmountToWithdrawToSynEdit').show();
    //privWithdrawSynCheckToEnableContinue();
    //$('#boxFiatAmountToWithdrawToSyn_Edit').focus();
    //g_idBtnCancel = 'btnCancelBankSelectedWithdrawal';
  }
  else {
    SynTimerRestart();
  }
}
function SynTimerDisplay(secondsTimer) {
  g_countdownSynConfirmationExpiration = secondsTimer;
  minutes = Math.floor(g_countdownSynConfirmationExpiration / 60.0);
  seconds = g_countdownSynConfirmationExpiration - minutes * 60;

  if (g_countdownSynConfirmationExpiration <= 10) {
    strPrefix = '<font color=\'red\'>';
    strSuffix = '</font';
  }
  else {
    strPrefix = '';
    strSuffix = '';
  }

  $('.classSynConfirmationExpirationCountdown').html(strPrefix + pad(minutes, 1) + ':' + pad(seconds, 2) + strSuffix);
  $('.classSynConfirmationTimer').css("visibility", "visible");
}
function SynTimerRestart() {
  SynTimerDisplay(g_countdownSynConfirmationExpiration);
  g_SynConfirmationTimeout = setTimeout(function () { SynConfirmationTimeout(); }, 5000);
}
function SynTimerPause() {
  $('.classSynConfirmationTimer').css("visibility", "hidden");
  if (null != g_SynConfirmationTimeout) {
    clearTimeout(g_SynConfirmationTimeout);
    g_SynConfirmationTimeout = null;
  }
}
function SynTimerCancel() {
  g_guidContractSynFlowID = null;
  if (null != g_SynConfirmationTimeout) {
    clearTimeout(g_SynConfirmationTimeout);
    g_SynConfirmationTimeout = null;
    SynTimerDisplay(g_countdownSynConfirmationExpiration_Initial);
    $('.classSynConfirmationTimer').css("visibility", "visible");
    $.fancybox.close();
  }
}
// functions - withdrawsyn - end

// functions - banksyn - begin
function privSynCheckToEnableBankVerify() {
  var boolVerifyEnable = true;

  if ($('#editBankUsername_Edit').val().trim() == '')
    boolVerifyEnable = false;

  if (boolVerifyEnable && $('#editBankPassword_Edit').val().trim() == '')
    boolVerifyEnable = false;

  if (boolVerifyEnable)
    ButtonAction('btnVerifyBankCredentials', 'enable');
  else
    ButtonAction('btnVerifyBankCredentials', 'disable');
}
function privSynCheckToEnableBankByRoutingContinue() {
  var boolEnable = true;

  if ($('#editBankRoutingNumber_Edit').val().trim() == '')
    boolEnable = false;

  if ($('#editBankAccountNumber_Edit').val().trim() == '')
    boolEnable = false;

  if (boolEnable)
    ButtonAction('btnVerifyBankByRoutingContinue', 'enable');
  else
    ButtonAction('btnVerifyBankByRoutingContinue', 'disable');
}
function privSynCheckToEnableBankByRoutingContinue2() {
  var boolEnable = true;

  if ($('#editBankRoutingNumberReenter_Edit').val().trim() == '')
    boolEnable = false;

  if ($('#editBankAccountNumberReenter_Edit').val().trim() == '')
    boolEnable = false;

  if (boolEnable)
    ButtonAction('btnVerifyBankByRoutingContinue2', 'enable');
  else
    ButtonAction('btnVerifyBankByRoutingContinue2', 'disable');
}
function privSynCheckToEnableBankByRoutingSubmit() {
  var boolEnable = true;

  if ($('#boxBankRoutingAccountNickname_Edit').val().trim() == '')
    boolEnable = false;

  if (boolEnable)
    ButtonAction('btnVerifyBankByRoutingSubmit', 'enable');
  else
    ButtonAction('btnVerifyBankByRoutingSubmit', 'disable');
}
function BankAccountList(strGridGroupID, LoadType) {
  $.ajax({
    type: 'GET',
    url: g_urlBankAccount + '?LoadType=' + LoadType + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&GridGroupID=' + strGridGroupID,      // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        arrayGridItemList = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          // now load the rest of the rows
          $('#loading' + strGridGroupID).show();
          BankAccountList(strGridGroupID, 1);
        }
        else {
          $('#loading' + strGridGroupID).hide();
          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            g_BankAccountList = {};
            $('#noavailable' + strGridGroupID).show();
          }
          else {
            $('#noavailable' + strGridGroupID).hide();
            GridReplaceRows(strGridGroupID, arrayGridItemList);
            g_BankAccountList = arrayGridItemList;
          }
          g_BankAccountLoaded = true;
          //privDisplayWithdrawDeposit()
        }
      }
      else {
        $('.classLoadBankAccountError').html('Unable to load address book: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('.classLoadBankAccountError').html('Unable to load address book - please try again');
    }
  });
  return false;
}
function BankAccountItemDelete(strGridGroupID, guidBankAccountItemID) {
  $.ajax({
    type: "DELETE",
    url: g_urlBankAccount + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&guidBankAccountItemID=' + guidBankAccountItemID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        GridRowItemDelete('gridBankBuyAccounts', guidBankAccountItemID);
        GridRowItemDelete('gridBankSellAccounts', guidBankAccountItemID);
      }
      else {
        $('.classLoadBankAccountError').html('Unable to delete address book entry: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('.classLoadBankAccountError').html('Unable to delete address book entry - please try again');
    }
  });

  return false;
}
function BankRegister() {
  bankRegistration = {};

  bankRegistration.bank_username = $('#editBankUsername_Edit').val().trim();
  bankRegistration.bank_password = $('#editBankPassword_Edit').val().trim();
  bankRegistration.bank_code = g_idBankSelected;

  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.strJson = JSON.stringify(bankRegistration);

  $.ajax({
    type: 'POST',
    url: g_urlBankAccount,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        ObtainGlideraBuyLimits();
        BankAccountList("gridBankBuyAccounts", 1);
        BankAccountList("gridBankSellAccounts", 1);
        MenuClick('WithdrawToBank', 'BankList');
        //DisplayBank('ListOfSavedBanks');
      }
      else if (response.responsecode == 'UNAUTHENTICATED') {
        ButtonAction('btnVerifyBankCredentials', 'enable');
        $('#editBankPassword_Edit').val('').focus();
        $('.classBankRegisterError').html('Invalid Username or Password - please try again');
      }
      else if (response.responsecode == 'S_SYN_MFA') {
        var objMFA = JSON.parse(response.jsonData);
        g_tokenBankMFA = objMFA.mfaQuestionUuid;
        g_strMFAQuestion = objMFA.mfaQuestion;
        $('.classBankMFAQuestion').text(g_strMFAQuestion);

        DisplayBank('BankMFA');
      }
      else if (response.responsecode == 'CONFLICT') {
        $('.classBankRegisterError').html('Bank account already registered, please refresh page.');
        ButtonAction('btnVerifyBankCredentials', 'enable');
      }
      else if (response.responsecode == 'MERCHANT_CREDENTIALS') {
        $('.classBankRegisterError').html('<b>Invalid username or password</b><br />' + response.errordescription);
        $('#editBankUsername_Edit').val('');
        $('#editBankPassword_Edit').val('');
        $('#editBankUsername_Edit').focus();
        ButtonAction('btnVerifyBankCredentials', 'enable');
      }
      else if (response.responsecode == 'GLIDERA_ERROR') {
        $('.classBankRegisterError').html(response.errordescription);
        ButtonAction('btnVerifyBankCredentials', 'enable');
      }
      else if (response.responsecode == 'INTERNAL_SERVER_ERROR') {
        $('.classBankRegisterError').html(response.errordescription);
        ButtonAction('btnVerifyBankCredentials', 'enable');
      } else {
        //MenuSubClick('LeftMenu', 'Settings', 'Level1');
        ButtonAction('btnVerifyBankCredentials', 'enable');

        $('.classBankRegisterError').html('Error submitting bank credentials: <b>' +
          response.responsecode +
          ' (' +
          response.errordescription +
          ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //MenuSubClick('LeftMenu', 'Settings', 'Level1');
      ButtonAction('btnVerifyBankCredentials', 'enable');
      $('.classBankRegisterError').html('Error submitting bank credentials: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
function BankSubmitMFA() {
  bankMFA = {};
  bankMFA.access_token = g_tokenBankMFA;
  bankMFA.mfa_answer = $('#boxBankMFAAnswer_Edit').val().trim();
  bankMFA.bank_code = g_idBankSelected;

  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.strJson = JSON.stringify(bankMFA);

  $.ajax({
    type: 'PUT',
    url: g_urlBankAccount,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        ObtainGlideraBuyLimits();
        BankAccountList("gridBankBuyAccounts", 1);
        BankAccountList("gridBankSellAccounts", 1);
        MenuClick('WithdrawToBank', 'BankList');
        //DisplayBank('ListOfSavedBanks');
      }
      else if (response.responsecode == 'INVALID_INPUT') {
        ButtonAction('btnBankMFASubmit', 'enable');
        $('.classBankMFAError').html('Invalid answer provided.  Please try again.');
      }
      else if (response.responsecode == 'S_SYN_MFA') {
        var objMFA = JSON.parse(response.jsonData);
        g_tokenBankMFA = objMFA.mfaQuestionUuid;
        if (objMFA.mfaQuestion != g_strMFAQuestion) {
          g_strMFAQuestion = objMFA.mfaQuestion;

          $('.classBankMFAQuestion').text(g_strMFAQuestion);

          DisplayBank('BankMFA');
        }
        else {
          ButtonAction('btnBankMFASubmit', 'enable');
          $('.classBankMFAError').html('Invalid answer: <b>please try again</b>');
        }
      }
      else if (response.responsecode == 'BANK_DENIED') {
        ButtonAction('btnBankMFASubmit', 'enable');
        $('.classBankMFAError').html('Invalid answer: <b>please try again</b>');
      } else if (response.responsecode == 'CONFLICT') {
        $('.classBankRegisterError').html('Bank account already registered, please refresh page.');
      } else {
        //MenuSubClick('LeftMenu', 'Settings', 'Level1');
        ButtonAction('btnBankMFASubmit', 'enable');
        $('.classBankMFAError').html('Error submitting answer: <b>' +
          response.responsecode +
          ' (' +
          response.errordescription +
          ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //MenuSubClick('LeftMenu', 'Settings', 'Level1');
      ButtonAction('btnBankMFASubmit', 'enable');
      $('.classBankMFAError').html('Error submitting answer: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
function BankRegisterByRoutingAccount() {
  bankRegistration = {};

  bankRegistration.bank_routing = g_strBankRoutingNumber;
  bankRegistration.bank_account = g_strBankAccountNumber;
  bankRegistration.bank_account_type = g_strBankAccountType;
  bankRegistration.bank_account_nickname = g_strBankAccountNickname;

  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.strJson = JSON.stringify(bankRegistration);

  $.ajax({
    type: 'PATCH',
    url: g_urlBankAccount,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        BankAccountList("gridBankSellAccounts", 1);
        MenuClick('WithdrawToBank', 'BankList');
      }

      else if (response.responsecode == 'SYN_ERROR') {
        DisplayBank('BankCredentialsByRoutingAccount');
        $('.classBankRegisterError').html('Error submitting bank information: <b>' + response.errordescription + '</b>');
      }
      else {
        DisplayBank('BankCredentialsByRoutingAccount');
        $('.classBankRegisterError').html('Error submitting bank information: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      DisplayBank('BankCredentialsByRoutingAccount');
      $('.classBankRegisterError').html('Error submitting bank information: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
function BankAccountSelected(objGridRowData) {
  ClearEntryFields();
  ClearErrors();

  g_guidSelectedBankAccount = objGridRowData;

  $('.classBankSelected').html(objGridRowData.strHTMLRowWithoutDelete);
  DisplayBank('BankAccountSelected');
}
function privDisplayWithdrawDeposit() {
  if (g_stateWalletWithdrawDeposit == 'withdraw') {
    $('.classWalletDepositFromBank').hide();
    $('.classWalletWithdrawToBank').show();
  }
  else if (g_stateWalletWithdrawDeposit == 'deposit') {
    $('.classWalletWithdrawToBank').hide();
    $('.classWalletDepositFromBank').show();
  }
}
// functions - banksyn - end

// functions - twitter - begin
function TwitterAddSubmit() {

  var twitterAuthUrl;

  createCookieTopLevelDomain('userSession', g_guidSessionID, 1);

  $.ajax({
    type: 'GET',
    url: g_urlSettingsAddTwitter + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&strSMSOrAuthyCode=' + $('#authySettingsSocialTwitterPassword_Edit').val().trim() + '&strSMSFlowID=' + g_guidCodeFlowID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        objTwitterData = JSON.parse(response.jsonData);
        createCookieTopLevelDomain('guidTwitterFlow', objTwitterData.FlowId, 1);
        document.location = objTwitterData.AuthUrl;
      }
      else if (response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'INVALID_2FA' || response.responsecode == 'EXPIRED') {
        $('#authySettingsSocialTwitterPassword_Error').html('Wrong or expired authentication code');
        ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'reset');
        ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
        $('#boxPassword_Edit').focus();
      }
      else {
        $('#cellSettingsError').html('Unable to register Twitter account: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'reset');
        ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
        $('#authySettingsSocialTwitterPassword_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'reset');
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
      $('#authySettingsSocialTwitterPassword_Edit').focus();
      $('#cellSettingsError').html('Unable to register Twitter account - please try again');
    },
    failure: function (response) {
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'reset');
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
      $('#authySettingsSocialTwitterPassword_Edit').focus();
      $('#cellSettingsError').html('Unable to register Twitter account - please try again');
    }

  });
}
function TwitterRemoveSubmit() {

  var twitterAuthUrl;

  var modelParams = {};
  modelParams.serviceid = g_guidServiceID;
  modelParams.sessionid = g_guidSessionID;
  modelParams.flowGuid = g_guidCodeFlowID;
  modelParams.strSMSOrAuthyCode = $('#authySettingsSocialTwitterRemove_Edit').val().trim();

  $.ajax({
    type: 'DELETE',
    url: g_urlSettingsAddTwitter,
    data: JSON.stringify(modelParams),
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_TwitterID = '';
        SettingsPageInit('Social');
      }
      else if (response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'INVALID_2FA' || response.responsecode == 'EXPIRED') {
        $('#authySettingsSocialTwitterRemove_Error').html('Wrong or expired authentication code');
        ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'reset');
        ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'enable');
        $('#authySettingsSocialTwitterRemove_Edit').focus();
      }
      else {
        $('#cellSettingsError').html('Unable to remove Twitter account: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'reset');
        ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'enable');
        $('#authySettingsSocialTwitterRemove_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'reset');
      ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'enable');
      $('#authySettingsSocialTwitterRemove_Edit').focus();
      $('#cellSettingsError').html('Unable to remove Twitter account - please try again');
    },
    failure: function (response) {
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'reset');
      ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
      $('#authySettingsSocialTwitterRemove_Edit').focus();
      $('#cellSettingsError').html('Unable to remove Twitter account - please try again');
    }

  });
}
function TwitterGetIDFromTokens(flowGuid, tokenVerifier) {

  var modelParams = {};
  modelParams.serviceid = g_guidServiceID;
  modelParams.sessionid = g_guidSessionID;
  modelParams.flowGuid = flowGuid;
  modelParams.tokenVerifier = tokenVerifier;

  $.ajax({
    type: 'POST',
    url: g_urlSettingsAddTwitter,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        var strTwitterID = response.TwitterID;
        var urlNew = response.redirecturl;
        if (null != urlNew && '' != urlNew)
          window.location = urlNew;
        else
          TwitterGetIDFromTokensSUCCESS(strTwitterID);
      }
      else if (response.responsecode == 'SECOND_FACTOR_NOT_VERIFIED') {
        g_guidSessionID = response.sessionid;
        g_objLoginData = {};
        g_objLoginData.Email = response.Email;
        g_objLoginData.PhoneLast4 = response.PhoneLast4;
        strAuthyEnabled = response.AuthyEnabled;
        if (strAuthyEnabled == 'True')
          SetAuthyState(true);
        else
          SetAuthyState(false);

        g_enumPageToDisplay = 'pageVerify2FA';
        PageInit();
      }
      else {
        TwitterGetIDFromTokensFAILURE(response.responsecode, response.errordescription, response.TwitterID, response.sessionid);
      }
    },
    failure: function (response) {
      TwitterGetIDFromTokensFAILURE('CATASTROPHIC', '', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      TwitterGetIDFromTokensFAILURE('CATASTROPHIC', '', '');
    }
  });

}
function TwitterGetHandleFromID(idTwitter, strWhoseHandle) {

  var strURL = g_urlTwitter + '?idTwitter=' + idTwitter;


  $.ajax({
    type: 'GET',
    url: strURL,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        var objTwitterData = JSON.parse(response.jsonData);
        TwitterGetHandleFromIDSUCCESS(strWhoseHandle, objTwitterData);
      }
      else {
        TwitterGetHandleFromIDFAILURE(strWhoseHandle, idTwitter, 'Unable to obtain Twitter handle: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      TwitterGetHandleFromIDFAILURE(strWhoseHandle, idTwitter, 'Unable to obtain Twitter handle - please refresh page');
    },
    failure: function (response) {
      TwitterGetHandleFromIDFAILURE(strWhoseHandle, idTwitter, 'Unable to obtain Twitter handle - please refresh page');
    }
  });
}
// functions - twitter - end

// functions - txhistory - begin
function privBitcoinDirectCredentialsCheckToEnableSubmit() {
  var strLoginID = $('#boxTxHistoryEnterLoginID_Edit').val();
  var strPassword = $('#boxTxHistoryEnterPassword_Edit').val();
  var str2FACode = $('#boxTxHistory2FA_Edit').val();

  if (str2FACode.trim() == '') {
    if (strLoginID.trim() == '' || strPassword.trim() == '') {
      ButtonAction('btnTxHistoryCredentialsSubmit', 'disable');
    }
    else {
      ButtonAction('btnTxHistoryCredentialsSubmit', 'enable');
    }
  }
  else {
    ButtonAction('btnTxHistoryCredentialsSubmit', 'enable');
  }
}
function USDViewAttach() {
  $('#tblUSDBTCView').prop('style').visibility = 'visible';
  //$('#cellUSDBTCView').text('USD View');
  $('.classHistoryUSDView').text('Switch to Coin View');
  $('.classHistoryBTC').hide();
  $('.classHistoryUSD').show();
  g_txhistoryUSDBTCView = 'usd';
}
function TxHistoryCancellationHandersAttach() {
  $('.cellViewGiftCards').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    MenuClick('LeftMenu', 'Inventory');
    // MenuClick('Inventory', 'InventoryActive');
    event.stopPropagation();
    return false;
  });

  $('.cellTrackPackage').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    g_TxHistoryList.every(function (itemTxHistory, index) {
      if (itemTxHistory.ID == strItemID) {
        var urlTrackLink = 'https://www.amazon.com/progress-tracker/package/ref=oh_aui_hz_st_btn?_encoding=UTF8&itemId=a&orderId=' + itemTxHistory.strPayerNote;
        window.open(urlTrackLink, '_blank');
        return false;
      }
      else
        return true;
      
    });
    event.stopPropagation();
    return false;
  });

  $('.classEnterNewCredentials').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    ChangeAmazonDirectCredentials(strItemID);
    return false;
  });

  $('.classEnter2FA').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    EnterAmazonDirect2FA(strItemID);
    return false;
  });


  $('.cellCancel').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $(this).hide();
    $('#cellCancelLoading_' + strItemID).show();
    TxHistoryItemCancelGetContract(strItemID);
    event.stopPropagation();
    return false;
  });

  $('.cellCancelSend').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    TxHistoryItemCancelSendConfirm(strItemID);
    event.stopPropagation();
    return false;
  });

  $('.cellCancelPurchase').unbind().click(function (event) {
    $('.cellConfirmCancel').hide();
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $('#cellCancelConfirmation_' + strItemID).fadeIn(500);
    InventoryItemList('gridGiftCard', g_loadTypes.All);
    event.stopPropagation();
    return false;
  });




  $('.cellConfirmCancel').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $('#gridTxHistory_status_' + strItemID).hide();
    $('#gridTxHistory_deleteworking_' + strItemID).show();

    PurchaseCancelIfUnfunded(strItemID, function () { GridRowItemDelete('gridTxHistory', strItemID); TxHistoryList('gridTxHistory', 1); InventoryItemList('gridGiftCard', g_loadTypes.All); }, function () { TxHistoryList('gridTxHistory', 1); InventoryItemList('gridGiftCard', g_loadTypes.All); });
    event.stopPropagation();
    return false;
  });

  $('.cellTxHistoryVerifyLevel1').unbind().click(function (event) {
    g_boolPushState = false;
    MenuClick('LeftMenu', 'Settings');
    g_boolPushState = true;
    MenuSubClick('LeftMenu', 'Settings', 'Level1');
    event.stopPropagation();
    return false;
  });

  $('.cellTxHistoryVerifyLevel2').unbind().click(function (event) {
    g_boolPushState = false;
    MenuClick('LeftMenu', 'Settings');
    g_boolPushState = true;
    MenuSubClick('LeftMenu', 'Settings', 'Level2');
    event.stopPropagation();
    return false;
  });
}
function ChangeAmazonDirectCredentials(strItemID) {
  ClearEntryFields();
  ClearErrors();

  g_txhistoryItemSelected = privGridItemData('gridTxHistory', strItemID);
  strDetailTitle = "<img src=\"i/AmazonBrandNew.png\" />&nbsp;&nbsp;Bitcoin to Amazon.com";
  $('#cellTxHistoryReason').text('Invalid Amazon.com credentials entered');
  $(".classTxHistoryTransferStatus").text("FAILED");
  $('.classTxHistory2FA').hide();
  $('.classTxHistoryCredentials').show();
  $('#TxHistoryEnterCredentialsTitle').html(strDetailTitle);

  btcTransfer = g_txhistoryItemSelected.satoshiAmountPayee / 1e8;
  fiatTransfer = btcTransfer * g_txhistoryItemSelected.dblConversionRate;
  $('.classTxHistoryUSDTransfer').html('$' + numberWithCommas(fiatTransfer.toFixed(2)));

  $('.classTxHistoryLoginID').text(g_txhistoryItemSelected.strPayerNote);
  $.fancybox($('#divChangeAmazonDirectCredentials'));
  $('#boxTxHistoryEnterLoginID_Edit').focus();
}
function EnterAmazonDirect2FA(strItemID) {
  ClearEntryFields();
  ClearErrors();

  g_txhistoryItemSelected = privGridItemData('gridTxHistory', strItemID);
  strDetailTitle = "<img src=\"i/AmazonBrandNew.png\" />&nbsp;&nbsp;Bitcoin to Amazon.com";
  $('#cellTxHistoryReason').text('Need Amazon.com 2nd Factor Authorization Code');
  $(".classTxHistoryTransferStatus").text("Incomplete");
  $('.classTxHistoryCredentials').hide();
  $('.classTxHistory2FA').show();
  $('#TxHistoryEnterCredentialsTitle').html(strDetailTitle);

  btcTransfer = g_txhistoryItemSelected.satoshiAmountPayee / 1e8;
  fiatTransfer = btcTransfer * g_txhistoryItemSelected.dblConversionRate;
  $('.classTxHistoryUSDTransfer').html('$' + numberWithCommas(fiatTransfer.toFixed(2)));

  $('.classTxHistoryLoginID').text(g_txhistoryItemSelected.strPayerNote);
  $.fancybox($('#divChangeAmazonDirectCredentials'));
  $('#boxTxHistory2FA_Edit').focus();
}
function TxHistoryList(strGridGroupID, LoadType) {
  g_cntTxHistoryListCalls++;

  $.ajax({
    type: 'GET',
    url: g_urlTxHistory + '?LoadType=' + LoadType + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&CurrencyCode=' + g_defaultCurrency,    // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objHistoryReturn = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          arrayGridItemList = objHistoryReturn.TxHistory;
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          $('#loading' + strGridGroupID).show();
          // now load the rest of the rows
          TxHistoryList(strGridGroupID, 1);
          USDViewAttach();

        }
        else {
          if (response.responsecode != 'NOENTRY' && objHistoryReturn.TxHistory.length > 0) {
            if (objHistoryReturn.TxHistory.length > 5) {
              $('.classExploreIPYServicesTxHistory').hide();
            }
            else {
              $('.classExploreIPYServicesTxHistory').show();
            }
            if (g_boolNavigateToTxHistory) {
              g_boolNavigateToTxHistory = false;
              g_boolPushState = false;
              MenuClick('LeftMenu', 'Wallet');
              g_boolPushState = true;

              $.fancybox.close();
              ButtonAction('btnConfirmCancellation', 'reset');
              ShortcutToTxHistory();
            }
            $('#noavailable' + strGridGroupID).hide();
            arrayGridItemList = objHistoryReturn.TxHistory;
            GridReplaceRows(strGridGroupID, arrayGridItemList);
            g_satoshiBankPending = objHistoryReturn.Balance.dictSatoshiBankPending;

            for (key in g_satoshiBankPending) {
              if (g_satoshiBankPending[key] > 0) {
                btcBankPending = g_satoshiBankPending[key] / 1e8;
                fiatBankPending = btcBankPending * g_dictConversionRate[key];
                $('.classLabelBankDepositPending' + key).html(btcBankPending.toFixed(8));
                $('.classLabelFiatBankDepositPending' + key).html('$' + numberWithCommas(fiatBankPending.toFixed(2)));
                $('.classRowBankDepositPending' + key).show();

                if (key == g_defaultCurrency) {
                  $('.classLabelBankDepositPending').html(btcBankPending.toFixed(8));
                  $('.classLabelFiatBankDepositPending').html('$' + numberWithCommas(fiatBankPending.toFixed(2)));
                  $('.classRowBankDepositPending').show();
                }

              }
              else {
                $('.classRowBankDepositPending' + key).hide();
                if (key == g_defaultCurrency) {
                  $('.classRowBankDepositPending').hide();
                }
              }
            }

            TxHistoryProcessTwitterHandles(arrayGridItemList);
            TxHistoryProcessPurchaseFunds(arrayGridItemList);

          }
          else {
            GridReplaceRows(strGridGroupID, null);
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
            $('.classExploreIPYServicesTxHistory').show();
          }

          g_satoshiBalanceTotalFromTxHistory = objHistoryReturn.Balance;

          if (response.responsecode == 'NOENTRY' || arrayGridItemList == null || arrayGridItemList.length == 0) {
            g_TxHistoryList = [];
            g_TxHistoryLoaded = true;
          }
          else {
            g_TxHistoryList = arrayGridItemList;
            g_TxHashes = TxHistoryExtractHashes(arrayGridItemList);
            g_TxHistoryLoaded = true;
            //var objBalance = objHistoryReturn.Balance;
            for (key in g_satoshiWalletBalanceUsable) {
              UpdateWalletBalances(key, g_satoshiWalletBalanceUsable[key], objHistoryReturn.Balance.dictBalances[key].SatoshiBalanceConfirmed + objHistoryReturn.Balance.dictBalances[key].SatoshiBalanceUnconfirmedInternal, g_satoshiWalletBalancePending[key], objHistoryReturn.Balance.dictBalances[key].SatoshiBalanceUnconfirmedExternal, g_dictConversionRate[key], g_dictConversionRate[key]);
            }
            TxHistoryCancellationHandersAttach();
          }

          SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
          AdjustHeightOnResize(strGridGroupID);
        }
      }
      else {
        $('#cellLoadTxHistoryError').html('Unable to load transaction history: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellLoadTxHistoryError').html('Unable to load transaction history - please try again');
    }
  });
  return false;
}
function TxHistoryExtractHashes(arrayGridItemList) {
  var hashes = [];
  arrayGridItemList.forEach(function (itemTxHistory) {
    if (itemTxHistory.PayerToPayeeTxID != null && itemTxHistory.PayerToPayeeTxID != '')
      hashes[itemTxHistory.PayerToPayeeTxID] = itemTxHistory;
    if (itemTxHistory.PayerToEscrowTxID != null && itemTxHistory.PayerToEscrowTxID != '')
      hashes[itemTxHistory.PayerToEscrowTxID] = itemTxHistory;
    if (itemTxHistory.EscrowToPayerTxID != null && itemTxHistory.EscrowToPayerTxID != '')
      hashes[itemTxHistory.EscrowToPayerTxID] = itemTxHistory;
    if (itemTxHistory.PayeeToPayerTxID != null && itemTxHistory.PayeeToPayerTxID != '')
      hashes[itemTxHistory.PayeeToPayerTxID] = itemTxHistory;
  });

  return hashes;
}
function TxHistoryAddTransaction(hashTx) {
  if (!g_TxHistoryLoaded)
    return;

  modelTxHistoryAdd = {}
  modelTxHistoryAdd.guidServiceID = g_guidServiceID;
  modelTxHistoryAdd.guidSessionID = g_guidSessionID;
  modelTxHistoryAdd.strTxID = hashTx;

  $.ajax({
    type: 'POST',
    url: g_urlTxHistory,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelTxHistoryAdd),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        TxHistoryList('gridTxHistory', 1);
        /*
        objHistoryReturn = JSON.parse(response.jsonData);
        arrayGridItemList = objHistoryReturn.TxHistory;
        GridReplaceRows('gridTxHistory', arrayGridItemList);
        TxHistoryCancellationHandersAttach();
        TxHistoryProcessTwitterHandles(arrayGridItemList);
        TxHistoryProcessPurchaseFunds(arrayGridItemList);
        g_TxHistoryList = arrayGridItemList;
        g_TxHashes = TxHistoryExtractHashes(arrayGridItemList);
        g_TxHistoryLoaded = true;
        var objBalance = objHistoryReturn.Balance;
        UpdateWalletBalances(g_defaultCurrency, g_satoshiWalletBalanceUsable, objBalance.SatoshiBalanceUsable, g_satoshiWalletBalancePending, objBalance.SatoshiBalanceUnconfirmedExternal, g_dictConversionRate[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency]);
        SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2, g_SecurityLevel2InReview);
        */
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      a = 5;
    },
    failure: function (response) {
      a = 6;
    }
  });

}
function TxHistoryItemCancelGetContract(strItemID) {
  paramsCancellation = {};
  paramsCancellation.serviceid = g_guidServiceID;
  paramsCancellation.sessionid = g_guidSessionID;
  paramsCancellation.strContractID = strItemID;

  $.ajax({
    type: 'POST',
    url: g_urlTxHistoryCancel,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(paramsCancellation),
    success: function (response) {
      $('.classCancelLoading').hide();
      $('.cellCancel').show();
      if (response.responsecode == 'SUCCESS') {
        modelCancelTxReturn = JSON.parse(response.jsonData);
        var guidCancelFlowID = modelCancelTxReturn.guidContractFlowID;
        var dblConversionRate = modelCancelTxReturn.ConversionRate;
        var satoshiFee = modelCancelTxReturn.satoshiFee;
        var satoshiRefund = modelCancelTxReturn.satoshiRefund;
        var strFeeExplanationForDisplay = modelCancelTxReturn.FeeExplanationForDisplay;
        TxHistoryItemCancelConfirm2(strItemID, guidCancelFlowID, dblConversionRate, satoshiFee, satoshiRefund, strFeeExplanationForDisplay);
      }
      else if (response.responsecode == 'INVALID_CONTRACT') {
        $('#errorTxCancellation').html('Unable to cancel transaction <br /> (Your recipient may have recently claimed it)<br />');
        TxHistoryList('gridTxHistory', 1);
        ButtonAction('btnConfirmCancellation', 'enable');

      }
      else {
        $('#errorTxCancellation').html('Error cancelling transaction: ' + response.responsecode + '<br />(' + response.errordescription + ')');
        ButtonAction('btnConfirmCancellation', 'enable');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classCancelLoading').hide();
      $('.cellCancel').show();

      $('#errorTxCancellation').text('Error cancelling transaction: ' + xhr.statusText);
      ButtonAction('btnConfirmCancellation', 'enable');
    }

  });

}
function TxHistoryItemCancelConfirm2(strItemID, guidCancelFlowID, dblConversionRate, satoshiFee, satoshiRefund, strFeeExplanationForDisplay) {
  ButtonAction('btnConfirmCancellation', 'reset');

  g_guidCancelFlowID = guidCancelFlowID;
  g_ContractIDToBeCancelled = strItemID;
  var satoshiOriginalTransaction = satoshiFee + satoshiRefund;
  var objGridItem = privGridItemData('gridTxHistory', strItemID);
  TxHistoryItemSelected(objGridItem);

  if (satoshiRefund < 0) {
    $('#rowNotEnoughFunds').show();
    ButtonAction('btnConfirmCancellation', 'disable');
    $('#rowTxCancellationNote').hide();
  }
  else {
    $('#rowNotEnoughFunds').hide();
    $('#rowTxCancellationNote').show();
  }


  $('#rowTxHistoryCancellation').show();
  $('#rowTxHistoryCancellationDetails').show();
  $('#editCancellationNote_Edit').focus();
  $('#TxHistoryDetailTitle').html('<font color="red">Cancellation</font>');
  $('#btcTxHistoryDetailTransactionAmount').text((satoshiOriginalTransaction / 1e8).toFixed(8));
  var fiatTransactionAmount = satoshiOriginalTransaction / 1e8 * dblConversionRate;
  $('#fiatTxHistoryDetailTransactionAmount').text('$' + fiatTransactionAmount.toFixed(2));

  $('#cellCancellationFeeExplanationForDisplay').html(strFeeExplanationForDisplay);

  var satoshiExpeditedFeeSuggested = satoshiFee;
  var floatBTCExpediteFee = satoshiExpeditedFeeSuggested / 1e8;
  var floatFiatExpediteFee = privFiatBalanceFromSatoshi(satoshiExpeditedFeeSuggested, dblConversionRate);

  $('#btcTxHistoryDetailCancellationFee').text(floatBTCExpediteFee.toFixed(8));
  $('#fiatTxHistoryDetailCancellationFee').text('$' + floatFiatExpediteFee.toFixed(2));

  $('#btcTxHistoryDetailTotalPaymentCancellation').text(((satoshiRefund) / 1e8).toFixed(8));
  $('#fiatTxHistoryDetailTotalPaymentCancellation').text('$' + (Math.round((fiatTransactionAmount - floatFiatExpediteFee) * 100) / 100.0).toFixed(2));
}
function TxHistoryItemCancelSendConfirm(strItemID) {
  var objGridItem = privGridItemData('gridTxHistory', strItemID);
  TxHistoryItemSelected(objGridItem);
  $('#rowTxHistoryCancellation').show();
  $('#rowTxHistoryCancellationDetails').hide();
  $('#editCancellationNote_Edit').focus();
  $('#TxHistoryDetailTitle').html('<font color="red">Cancel Send of Item</font>');
}
function TxHistoryItemSelected(objGridItem) {
  ClearEntryFields();
  ClearErrors();
  boolIncludePaidTo = false;
  booIncludeReceivedFrom = false;

  $('.cellConfirmCancel').hide();
  g_txhistoryItemSelected = objGridItem;
  g_ContractIDToBeCancelled = g_txhistoryItemSelected.ID;
  $('#rowTxHistoryCancellation').hide();
  $('#rowTxHistoryCancellationDetails').show();
  timestampTx = new Date(objGridItem.dtTransaction)
  strTimestampTx = $.datepicker.formatDate('M d, yy', timestampTx) + ' ' + timeFormatter(timestampTx);
  $('#TxHistoryDetailTimestamp').text(strTimestampTx);
  if (null != g_supportedCurrencies[objGridItem.CurrencyCode])
    $('.classCoinNameLongDetail').text(g_supportedCurrencies[objGridItem.CurrencyCode].DescLong);
  $('#rowTxDetailStatus').hide();
  $('#rowBankAccount').hide();
  $('#rowExpediteFee').show();
  $('#rowTotalLine').show();
  $('#rowTotalPayment').show();
  $('#rowTxHistoryAmount').show();
  $('#rowPurchaseDetailQuantity').show();
  $('#rowEarnBitcoinOrderValue').hide();
  $('#rowReceivedFrom').hide();
  $('#rowPaidTo').hide();
  $('#lblFee').text('iPayYou + Blockchain Fee:');
  $('#lblTotal').text('Total Payment:');
  $('#lblTxHistoryAmountLabel').text('Amount:');
  $('#lblTxHistoryReceivedFrom').text('Received From:');
  $('#lblTxHistoryRewardReason').text('Reason:');
  $('#lblTxHistoryNoteFromSender').text('Note from Sender:');
  $('.CorrelatedTransaction').hide();
  $('.classTxHistoryInBitcoin').show();
  $('.classTxHistoryDetailBlockchainInfo').show();
  $('#rowPurchaseDetail').hide();
  $('.classTxHistoryDetailUnfunded').hide();
  $('.classTxHistoryAwaitingInventory').hide();
  $('#rowTxHistoryPayerNote').hide();
  $('#cellTxHistoryDetailPurchaseDescBottom').show();
  $('#cellTxHistoryDetailPurchaseDescMiddle').hide();
  $('#lblSellerFee').text('Seller Fee:')
  $('#rowSellerFee').hide();
  $('#TxHistoryDetailPaidToLabel').html('Sent to:');
  $('#rowTxAddressForEBDeposit').hide();
  $('#classCustomEBWithdrawalFee').hide();
  $('#rowConversionRateLine').hide();
  $('#rowEBEarned').hide();
  $('#rowCustomEBFee').hide();

  var strDetailTitle = objGridItem.strTxType;



  satoshiAmountTotal = objGridItem.satoshiAmountPayee + objGridItem.satoshiAmountExpediteFee + objGridItem.satoshiSellerFee;
  //fiatAmount = satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate;
  var satoshiAmountPayee = objGridItem.satoshiAmountPayee;
  if (satoshiAmountPayee < 0)
    satoshiAmountPayee = 0;

  $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
  $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountPayee / 1e8).toFixed(8));
  $('#fiatTxHistoryDetailExpediteFee').text('$' + (objGridItem.satoshiAmountExpediteFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
  $('#btcTxHistoryDetailExpediteFee').text((objGridItem.satoshiAmountExpediteFee / 1e8).toFixed(8));
  $('#fiatTxHistoryDetailTotalPayment').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
  $('#btcTxHistoryDetailTotalPayment').text((satoshiAmountTotal / 1e8).toFixed(8));

  if (objGridItem.strPayerNote != '' && objGridItem.strPayerNote != null) {
    $('#rowTxHistoryPayerNote').show();
    $('#lblTxHistoryPayerNote').html(objGridItem.strPayerNote);
  }

  if (objGridItem.strTxType == 'ItemSent') {
    strDetailTitle = "Item Sent to Friend";
    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#rowTxHistoryAmount').hide();
    $('.classTxHistoryDetailBlockchainInfo').hide();
    boolIncludePaidTo = true;

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }

  }
  else if (objGridItem.strTxType == 'RewardSent') {
    strDetailTitle = "Reward Sent";
    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#rowTxHistoryAmount').hide();
    $('.classTxHistoryDetailBlockchainInfo').hide();
    $('#rowRewardReason').show();
    $('#TxHistoryDetailRewardReason').html('<b>' + objGridItem.RewardReason + '</b>');
    boolIncludePaidTo = true;

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }


  }
  else if (objGridItem.strTxType == 'XFerFrom') {
    strDetailTitle = "Swapped From Currency";
    $('#lblPaymentAmount').text('Currency Sold:');
    $('#lblFee').text('iPayYou + Transfer Fees:');

    $('#TxHistoryDetailStatus').html('<font color=\"green\">First Part of Transaction</font>');
    $('#rowTxDetailStatus').show();

    $('.CorrelatedTransaction').removeClass('LessMoneyDeep').addClass('MoreMoneyDeep').show();
    $('.CorrelatedTransaction').text('View Second Part of Transaction');
    $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
  }
  else if (objGridItem.strTxType == 'XFerTo') {
    strDetailTitle = "Swapped To Currency";
    $('#lblPaymentAmount').text('Currency Purchased:');
    $('#lblFee').text('iPayYou + Transfer Fees:');

    $('#TxHistoryDetailStatus').html('<font color=\"green\">Second Part of Transaction</font>');
    $('#rowTxDetailStatus').show();

    $('.CorrelatedTransaction').removeClass('LessMoneyDeep').addClass('MoreMoneyDeep').show();
    $('.CorrelatedTransaction').text('View First Part of Transaction');
    $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    if (objGridItem.ContractStatus == 'XFerPending') {
      $('#TxHistoryDetailPayerToPayeeTxID').text('');
      $('#TxHistoryDetailPayerToPayeeTxStatus').html('<font color="brown"><b>Pending sale</b></front>');
    }

  }
  else if (objGridItem.strTxType == 'EarnBitcoin') {
    strDetailTitle = "You Earned Coin";
    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#rowPurchaseDetailQuantity').hide();
    $('#rowEarnBitcoinOrderValue').show();
    $('.classTxHistoryDetailBlockchainInfo').hide();
    $('#lblTxHistoryNoteFromSender').text('Amazon.com order number:');
    $('#rowTxDetailStatus').show();
    $('#lblPaymentAmount').text('Conversion Rate:');
    $('#fiatTxHistoryDetailBankDeposit').text('$' + numberWithCommas((objGridItem.dblConversionRate).toFixed(2)));
    $('.classTxHistoryInBitcoin').hide();
    $('#rowExpediteFee').hide();
    //$('#lblTotal').html('<b>Total Earned:</b>');
    $('.classTxHistoryInBitcoinTotal').show();
    $('#lblSellerFee').text('Flat blockchain fee:');
    $('#rowConversionRateLine').show();
    $('#rowEBEarned').show();
    $('#fiatTxHistoryEBEarned').text('$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)));
    $('#btcTxHistoryEBEarned').text((objGridItem.CatalogItemUSDAmount / objGridItem.dblConversionRate).toFixed(8));
    $('#btcTxHistoryDetailTotalPayment').text((objGridItem.CatalogItemUSDAmount / objGridItem.dblConversionRate - 1.0 * objGridItem.satoshiSellerFee / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailTotalPayment').text('');
    $('.classCustomEBWithdrawalFee').text((1.0 * objGridItem.satoshiSellerFee / 1e8).toFixed(8));
    if (null != objGridItem.strBitcoinAddress && '' != objGridItem.strBitcoinAddress) {
      $('.classCustomEBWalletAddressSelectedTxHistory').html('<a href="' + g_arrayLinkPrefixForAddress[objGridItem.CurrencyCode] + objGridItem.strBitcoinAddress + '" target="_blank">' + objGridItem.strBitcoinAddress + '</a>');
      
      $('.classCustomEBWithdrawalFeeCurrency').text(objGridItem.CurrencyCode);
      $('#rowTxAddressForEBDeposit').show();
      $('#classCustomEBWithdrawalFee').show();
    }
    boolIncludePaidTo = false;
    if (objGridItem.ContractStatus == 'EarnAwaiting') {
      if (objGridItem.satoshiAmountPayee > 0) {
        $('#rowSellerFee').show();
        if (objGridItem.Quantity == 1) {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Awaiting 1 physical card</b></span>');
        }
        else {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Awaiting ' + objGridItem.Quantity.toFixed(0) + ' physical cards</b></span>');
        }
        
        $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');

      }
      else {
        $('#rowTxHistoryAmount').hide();
        $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Awaiting e-cards</b></span>');
        $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:brown;">undetermined</span>');
        $('#rowCustomEBFee').show();
      }
    }
    else if (objGridItem.ContractStatus == 'EarnValidating') {
      $('#rowSellerFee').show();
      if (objGridItem.satoshiAmountPayee > 0) {
        if (objGridItem.Quantity == 1) {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Validating 1 physical card</b></span>');
        }
        else {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Validating physical cards</b></span>');
        }
        
      }
      else {
        if (objGridItem.Quantity == 1) {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Validating 1 e-card</b></span>');
        }
        else {
          $('#TxHistoryDetailStatus').html('<span style="color:brown;"><b>Validating ' + objGridItem.Quantity + ' e-cards</b></span>');
        }  
      }
      
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
    }
    else if (objGridItem.ContractStatus == 'EarnAccepted') {
      $('#rowSellerFee').show();
      $('#TxHistoryDetailStatus').html('<span style="color:green;"><b>Order Accepted</b></span>');
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
    }
    else if (objGridItem.ContractStatus == 'EarnComplete') {
      $('#rowSellerFee').show();
      $('#TxHistoryDetailStatus').html('<span style="color:green;"><b>Received Coin</b></span>');
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
      $('.classTxHistoryDetailBlockchainInfo').show();
    }
    else if (objGridItem.ContractStatus == 'EarnRejected') {
      strDetailTitle = "Order Rejected";
      $('#rowTxHistoryAmount').hide();
      $('#TxHistoryDetailStatus').html('<span style="color:red;"><b>Order Rejected</b></span>');
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
    }
    else if (objGridItem.ContractStatus == 'EarnDuplicate') {
      strDetailTitle = "Duplicate Order";
      $('#rowTxHistoryAmount').hide();
      $('#TxHistoryDetailStatus').html('<span style="color:red;"><b>Duplicate Order</b></span>');
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
    }
    else if (objGridItem.ContractStatus == 'EarnCancelled') {
      strDetailTitle = "Order Cancelled on Amazon";
      $('#rowTxHistoryAmount').hide();
      $('#TxHistoryDetailStatus').html('<span style="color:red;"><b>Order Cancelled on Amazon</b></span>');
      $('#spanTxHistoryDetailEarnOrderValue').html('<span style="color:green; font-weight:bold;">' + '$' + numberWithCommas(objGridItem.CatalogItemUSDAmount.toFixed(2)) + '</span>');
    }



  }
  else if (objGridItem.strTxType == 'TxToAmazon') {
    strDetailTitle = "<img src=\"i/AmazonBrandNew.png\" />&nbsp;&nbsp;Bitcoin to Amazon.com";
    $('#lblTxHistoryNoteFromSender').text('Amazon.com account login name:');
    $('#lblPaymentAmount').text('Amount withdrawn:');
    $('#lblTotal').text('Transferred to Amazon.com account:')
    $('#lblFee').text('Network fee:');

    $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountTotal / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailExpediteFee').text('$' + (objGridItem.satoshiAmountExpediteFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailExpediteFee').text((objGridItem.satoshiAmountExpediteFee / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailTotalPayment').text('$' + (objGridItem.satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailTotalPayment').text((objGridItem.satoshiAmountPayee / 1e8).toFixed(8));

    $('#fiatTxHistoryDetailSellerFee').text('$' + (objGridItem.satoshiSellerFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailSellerFee').text((objGridItem.satoshiSellerFee / 1e8).toFixed(8));

    $('#lblSellerFee').text('iPayYou Amazon Transfer Fee:');
    $('#rowSellerFee').show();
  }
  else if (objGridItem.strTxType == 'TxToStarbucks') {
    strDetailTitle = "<img src=\"i/starbucks_logo_sm2.png\" />&nbsp;&nbsp;Bitcoin to Starbucks";
    $('#lblTxHistoryNoteFromSender').text('Starbucks account login name:');
    $('#lblPaymentAmount').text('Amount withdrawn:');
    $('#lblTotal').text('Transferred to Starbucks account:')
    $('#lblFee').text('Network fee:');

    $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountTotal / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailExpediteFee').text('$' + (objGridItem.satoshiAmountExpediteFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailExpediteFee').text((objGridItem.satoshiAmountExpediteFee / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailTotalPayment').text('$' + (objGridItem.satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailTotalPayment').text((objGridItem.satoshiAmountPayee / 1e8).toFixed(8));

    $('#fiatTxHistoryDetailSellerFee').text('$' + (objGridItem.satoshiSellerFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailSellerFee').text((objGridItem.satoshiSellerFee / 1e8).toFixed(8));

    $('#lblSellerFee').text('iPayYou Starbucks Transfer Fee:')
    $('#rowSellerFee').show();
  }
  else if (objGridItem.strTxType == 'RewardReceived') {

    strDetailTitle = "Reward Received From iPayYou";

    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#rowReceivedFrom').show();
    $('#rowRewardReason').show();
    $('#TxHistoryDetailRewardReason').html('<b>' + objGridItem.RewardReason + '</b>');
    $('#rowTxHistoryAmount').hide();
    $('.classTxHistoryDetailBlockchainInfo').hide();
    booIncludeReceivedFrom = true;

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction cancelled by sender</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }


  }
  else if (objGridItem.strTxType == 'ItemReceived') {
    
    strDetailTitle = "Item Received from Friend";

    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#rowReceivedFrom').show();
    $('#rowTxHistoryAmount').hide();
    $('.classTxHistoryDetailBlockchainInfo').hide();
    booIncludeReceivedFrom = true;

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction cancelled by sender</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }
  }
  else if (objGridItem.strTxType == 'ItemSold') {
    strDetailTitle = "Item Sold";
    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#lblPaymentAmount').text('Item Value:');
    $('#lblFee').text('Restocking fee:');
    $('#lblTotal').text('You received:');


    $('#fiatTxHistoryDetailBankDeposit').text('$' + (objGridItem.satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailBankDeposit').text((objGridItem.satoshiAmountPayee / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailExpediteFee').text('$' + (objGridItem.satoshiAmountExpediteFee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailExpediteFee').text((objGridItem.satoshiAmountExpediteFee / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailTotalPayment').text('$' + ((objGridItem.satoshiAmountPayee - objGridItem.satoshiAmountExpediteFee) / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailTotalPayment').text(((objGridItem.satoshiAmountPayee - objGridItem.satoshiAmountExpediteFee) / 1e8).toFixed(8));

    $('.classTxHistoryInBitcoin').hide();
    $('.classTxHistoryInBitcoinTotal').show();
    if (objGridItem.PayerToPayeeTxID == '') {
      $('.classTxHistoryDetailBlockchainInfo').hide();

    }


    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }

  }
  else if (objGridItem.strTxType == 'Purchase') {
    $('#rowPurchaseDetail').show();
    $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
    $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
    $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
    $('#lblPaymentAmount').text('Purchase Amount:');
    $('#lblTxHistoryAmountLabel').text('Payment:');
    $('#lblFee').text('Network Fee:');

    if (objGridItem.ContractStatus == 'PurchaseFunds') {
      $('.classTxHistoryInBitcoin').hide();
      $('.classTxHistoryDetailBlockchainInfo').hide();
      $('.classTxHistoryDetailUnfunded').show();
    }
    else if (objGridItem.ContractStatus == 'PurchaseInventory' && objGridItem.Status == 0) {
      $('.classTxHistoryAwaitingInventory').show();
    }
  }
  else if (objGridItem.strTxType == 'CancellationByYou') {
    strDetailTitle = "Cancellation By You";

    if (objGridItem.ContractStatus == 'SendComplete') {
      $('#rowTxHistoryAmount').hide();
      $('.classTxHistoryDetailBlockchainInfo').hide();
      $('#rowPurchaseDetailQuantity').hide();
      $('#cellTxHistoryDetailPurchaseDescBottom').hide();
      $('#cellTxHistoryDetailPurchaseDescMiddle').show();
      $('#rowPurchaseDetail').show();
      $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
      $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
      $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
      $('#TxHistoryDetailPaidToLabel').html('Oringally sent to:');
      boolIncludePaidTo = true;
    }
    else {
      $('#lblPaymentAmount').text('Original Transaction:');
      $('#lblFee').text('Cancellation Fee:');
      $('#lblTotal').text('Total Refund:');

      $('#fiatTxHistoryDetailTotalPayment').text('$' + (objGridItem.satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
      $('#btcTxHistoryDetailTotalPayment').text((objGridItem.satoshiAmountPayee / 1e8).toFixed(8));
      $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
      $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountTotal / 1e8).toFixed(8));
    }

    $('#TxHistoryDetailStatus').html('<font color=\"green\">Cancellation Successful</font>');
    $('#rowTxDetailStatus').show();

    $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
    $('.CorrelatedTransaction').text('View Cancelled Transaction');
    $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);


  }
  else if (objGridItem.strTxType == 'CancellationByOther') {
    strDetailTitle = "Cancellation by Sender";
    $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
    $('.CorrelatedTransaction').text('View Cancelled Transaction');
    $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    $('#TxHistoryDetailStatus').html('<font color=\"brown\">Cancellation</font>');
    $('#rowTxDetailStatus').show();


    if (objGridItem.ContractStatus == 'SendComplete') {
      $('#rowTxHistoryAmount').hide();
      $('.classTxHistoryDetailBlockchainInfo').hide();
      $('#rowPurchaseDetailQuantity').hide();
      $('#cellTxHistoryDetailPurchaseDescBottom').hide();
      $('#cellTxHistoryDetailPurchaseDescMiddle').show();
      $('#rowPurchaseDetail').show();
      $('#imgTxHistoryDetail').prop('src', objGridItem.Thumbnail);
      $('.classTxHistoryDetailPurchaseDesc').html(objGridItem.strItemName);
      $('#spanTxHistoryDetailPurchaseQuantity').text(objGridItem.Quantity);
      $('#TxHistoryDetailPaidToLabel').html('Item returned  to:');
      boolIncludePaidTo = true;
    }
    else {
      $('#rowExpediteFee').hide();
      $('#rowTotalLine').hide();
      $('#rowTotalPayment').hide();

      $('#rowReceivedFrom').show();

      $('#lblPaymentAmount').text('You Refunded:');

      $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
      $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountTotal / 1e8).toFixed(8));

      if (objGridItem.strName != null) {
        if (objGridItem.strEmailAddress != null && objGridItem.strEmailAddress != '')
          $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strName + '</b> (' + objGridItem.strEmailAddress + ')');
        else
          $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strName);
      }
      else {
        if (objGridItem.strEmailAddress != null && objGridItem.strEmailAddress != '')
          $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strEmailAddress + '</b>');
        else
          $('#TxHistoryDetailReceivedFrom').html('');
      }
    }
  }
  else if (objGridItem.strTxType == 'Refund') {
    strDetailTitle = "Refund";
    $('#rowExpediteFee').hide();
    $('#rowTotalLine').hide();
    $('#rowTotalPayment').hide();
    $('#lblPaymentAmount').text('Refunded:');
    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Original transaction failed</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Original Transaction');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }
  }
  else if (objGridItem.strTxType == 'DepositSyn') {
    strDetailTitle = g_supportedCurrencies[objGridItem.CurrencyCode].DescLong + " Purchase";
    $('#lblPaymentAmount').text('Withdrawal from Bank:');
    $('#rowBankAccountSyn').show();
    $('#TxHistoryDetailBankAccount').html(objGridItem.BankAccount + '&nbsp;&nbsp;' + objGridItem.Last4ForDisplay);
    $('#fiatTxHistoryDetailBankDeposit').text('$' + (satoshiAmountTotal / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailBankDeposit').text((satoshiAmountTotal / 1e8).toFixed(8));
    $('#fiatTxHistoryDetailTotalPayment').text('$' + (objGridItem.satoshiAmountPayee / 1e8 * objGridItem.dblConversionRate).toFixed(2));
    $('#btcTxHistoryDetailTotalPayment').text((objGridItem.satoshiAmountPayee / 1e8).toFixed(8));
    $('#lblTotal').text('Total Deposit:');
    $('.classTxHistoryInBitcoin').hide();
    $('.classTxHistoryTotalInBitcoin').show();
  }
  else if (objGridItem.strTxType == 'WithdrawalSyn') {
    strDetailTitle = "Withdrawal";
    $('#lblPaymentAmount').text('Bank Deposit:');
    $('#rowBankAccountSyn').show();
    $('#TxHistoryDetailBankAccount').html(objGridItem.BankAccount + '&nbsp;&nbsp;' + objGridItem.Last4ForDisplay);

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Refund');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }

  }
  else if (objGridItem.strTxType == 'Sent' || objGridItem.strTxType == 'ExternalPayment') {
    if ("ExternalPayment" == objGridItem.strTxType)
      strDetailTitle = "External Payment";

    $('#lblPaymentAmount').text('Payee Received:');

    boolIncludePaidTo = true;

    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }

  }
  else if (objGridItem.strTxType == 'Received' || objGridItem.strTxType == 'Deposit') {
    $('#lblPaymentAmount').text('You Received:');
    $('#rowExpediteFee').hide();
    $('#rowTotalLine').hide();
    $('#rowTotalPayment').hide();

    booIncludeReceivedFrom = true;


    if (null != objGridItem.OtherTransactionID && '' != objGridItem.OtherTransactionID) {
      $('#TxHistoryDetailStatus').html('<font color=\"brown\">Transaction Cancelled</font>');
      $('#rowTxDetailStatus').show();

      $('.CorrelatedTransaction').addClass('LessMoneyDeep').removeClass('MoreMoneyDeep').show();
      $('.CorrelatedTransaction').text('View Cancellation');
      $('.CorrelatedTransaction').prop('id', objGridItem.OtherTransactionID);
    }

  }
  else if (objGridItem.strTxType == 'PmtStripePending') {
    $('#TxHistoryDetailStatus').html('<font color=\"brown\">Pending Transfer</font>');
    $('#rowTxDetailStatus').show();
  }


  if (booIncludeReceivedFrom) {
    $('#rowReceivedFrom').show();
    if (objGridItem.strName != null) {
      if (objGridItem.strEmailAddress != null && objGridItem.strEmailAddress != '')
        $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strName + '</b> (' + objGridItem.strEmailAddress + ')');
      else
        $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strName);
    }
    else {
      if (objGridItem.strEmailAddress != null && objGridItem.strEmailAddress != '')
        $('#TxHistoryDetailReceivedFrom').html('<b>' + objGridItem.strEmailAddress + '</b>');
      else
        $('#TxHistoryDetailReceivedFrom').html('');
    }

  }

  else if (boolIncludePaidTo) {
    $('#rowPaidTo').show();

    if (null != objGridItem.strEmailAddress && '' != objGridItem.strEmailAddress)
      strAddress = objGridItem.strEmailAddress;
    else if (null != objGridItem.strBitcoinAddress && '' != objGridItem.strBitcoinAddress)
      strAddress = objGridItem.strBitcoinAddress;
    else
      strAddress = '';

    if (null != objGridItem.strName && '' != objGridItem.strName)
      strName = '<b>' + objGridItem.strName + '</b>';
    else
      strName = '';

    if (objGridItem.longTwitterID > 0) {
      $('#TxHistoryDetailPaidTo').hide();
      $('#TxHistoryDetailPaidToTwitter').show();
      $('.img_classTxHistoryDetail').removeClass().addClass('img_classTxHistoryDetail').addClass('imgTwitter_' + objGridItem.longTwitterID);
      $('.handle_classTxHistoryDetail').removeClass().addClass('handle_classTxHistoryDetail').addClass('handleTwitter_' + objGridItem.longTwitterID);
      TwitterGetHandleFromID(objGridItem.longTwitterID, 'OtherHandle');
    }
    else {
      $('#TxHistoryDetailPaidTo').show();
      $('#TxHistoryDetailPaidToTwitter').hide();

      if ('' == strName)
        strPaidTo = '<b>' + strAddress + '</b>';
      else if ('' == strAddress)
        strPaidTo = '<b>' + strName + '</b>';
      else
        strPaidTo = '<b>' + strName + '</b>&nbsp;&nbsp;-&nbsp;&nbsp;' + strAddress;

      $('#TxHistoryDetailPaidTo').html(strPaidTo);
      $('#TxHistoryDetailReceivedFrom').html(strPaidTo);
    }

  }


  $('#TxHistoryDetailTitle').html(strDetailTitle);
  $('#TxHistoryDetailContractID').text(objGridItem.IDForDisplay);


  if (null != objGridItem.PayerToPayeeTxID) {

    $('#TxHistoryDetailPayerToPayeeTxID').html('<a id="' + objGridItem.PayerToPayeeTxID + '_' + objGridItem.CurrencyCode + '_TxID" class="PayeeTxID" target="_blank" href="">' + objGridItem.PayerToPayeeTxID + '</a>');

    if (objGridItem.PayerToPayeeTxBlock == null || objGridItem.PayerToPayeeTxBlock == 0 || objGridItem.PayerToPayeeTxBlock == -1) {
      if (objGridItem.strTxType == 'DepositSyn' && objGridItem.PayerToPayeeTxID == '')
        $('.classTxHistoryDetailBlockchainInfo').hide();
      else
        $('#TxHistoryDetailPayerToPayeeTxStatus').html('<font color="brown"><b>Pending blockchain transfer</b></font>');
    }
    else
      $('#TxHistoryDetailPayerToPayeeTxStatus').html('<font color="green"><b>Confirmed</b></font>');

  }
  else {
    if (objGridItem.strTxType == 'DepositSyn') {
      $('.classTxHistoryDetailBlockchainInfo').hide();
    }
  }

  $('.PayeeTxID').click(function () {
    splitTx = $(this).attr('id').split('_');
    txID = splitTx[0];
    txCurrency = splitTx[1];
    if (txCurrency == 'BTC')
      urlBlockchain = 'https://blockchain.info/tx/' + txID;
    else if (txCurrency == 'BCH')
      urlBlockchain = 'https://explorer.bitcoin.com/bch/tx/' + txID;
    else if (txCurrency == 'BSV')
      urlBlockchain = 'https://blockchair.com/bitcoin-sv/transaction/' + txID;
    window.open(urlBlockchain, '_blank');
    return false;
  });

  $('#TxHistoryDetailTimestamp').addClass('UTCTime');
  ConvertUTCToLocal();

  $.fancybox($('#divTxHistoryDetail'));

  //$('#divTxHistoryDetail').dialog();
  //$('#divTxHistoryDetail').fadeIn();
}
function TxHistoryProcessTwitterHandles(arrayGridItemList) {
  $.each(arrayGridItemList, function (key, itemTxHistory) {
    if (itemTxHistory.longTwitterID > 0) {
      TwitterGetHandleFromID(itemTxHistory.longTwitterID, 'OtherHandle');
    }
  });
}
function TxHistoryProcessPurchaseFunds(arrayGridItemList) {

  var cntItems = arrayGridItemList.length;
  for (i = 0; i < cntItems; i++) {
    itemTxHistory = arrayGridItemList[i];
    //if (itemTxHistory.ContractStatus == 'PurchaseFunds' && itemTxHistory.PayerToPayeeTxID != '')
    //  TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'PurchaseFunds', 60000);
    if (itemTxHistory.ContractStatus == 'PurchaseInventory' && itemTxHistory.strTxType == 'TxToAmazon')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'PurchaseInventory', 5000);
    else if (itemTxHistory.ContractStatus == 'PurchaseInventory' && itemTxHistory.strTxType == 'TxToStarbucks')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'PurchaseInventory', 5000);
    else if (itemTxHistory.ContractStatus == 'PurchaseInventory')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'PurchaseInventory', 5000);
    else if (itemTxHistory.ContractStatus == 'ZincNextAF')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'ZincNextAF', 5000);
    else if (itemTxHistory.ContractStatus == 'ZincPushed')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'ZincPushed', 5000);
    else if (itemTxHistory.ContractStatus == 'ZincStartedAF')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'ZincStartedAF', 5000);
    else if (itemTxHistory.ContractStatus == 'EarnAwaiting' && HoursToNow(itemTxHistory.dtTransaction) < 1)
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'EarnAwaiting', 60000);
    else if (itemTxHistory.ContractStatus == 'XFerPending')
      TxHistoryReadContractRefreshIfChanged(itemTxHistory.ID, 'XFerPending', 5000);
    else if (itemTxHistory.PayerToPayeeTxID != '' && itemTxHistory.PayerToPayeeTxID != null && itemTxHistory.Status == -1)
      TxHistoryVerifyTx(itemTxHistory.CurrencyCode, itemTxHistory.PayerToPayeeTxID, 3000);

  }

  function TxHistoryVerifyTx(CurrencyCode, strTxID, valTimeout) {
    var modelTxParams = {};
    modelTxParams.guidSessionID = g_guidSessionID;
    modelTxParams.guidServiceID = g_guidServiceID;
    modelTxParams.CurrencyCode = CurrencyCode;
    modelTxParams.TxID = strTxID;

    $.ajax({
      type: 'POST',
      url: g_urlTxHistory,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(modelTxParams),
      success: function (response) {
        if (response.responsecode == 'SUCCESS') {
          var StatusCurrent = response.jsonData;
          if (StatusCurrent != -1) {
            TxHistoryList('gridTxHistory', 1);
            InventoryItemList('gridGiftCard', g_loadTypes.All);
          }
          else 
            setTimeout(function () { TxHistoryVerifyTx(CurrencyCode, strTxID); }, valTimeout);
        }
      }
    });
  }
  /*
  $.each(arrayGridItemList, function (key, itemTxHistory) {
      if (itemTxHistory.ContractStatus == 'PurchaseFunds' && itemTxHistory.PayerToPayeeTxID != '') {
          TxHistoryList('gridTxHistory', 1);
      }
  });
  */
}
function TxHistoryReadContractRefreshIfChanged(ContractID, StatusChangeFrom, valTimeout) {
  var cntTxHistoryListCalls = g_cntTxHistoryListCalls;

  var modelContractParams = {};
  modelContractParams.guidSessionID = g_guidSessionID;
  modelContractParams.guidServiceID = g_guidServiceID;
  modelContractParams.StatusChangeFrom = StatusChangeFrom;
  modelContractParams.ContractID = ContractID;

  $.ajax({
    type: 'PATCH',
    url: g_urlTxHistory,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        var StatusCurrent = response.jsonData;
        if (StatusCurrent != StatusChangeFrom) {
          if (cntTxHistoryListCalls == g_cntTxHistoryListCalls) {
            TxHistoryList('gridTxHistory', 1);
            InventoryItemList('gridGiftCard', g_loadTypes.All);
          }
        }
        else if (cntTxHistoryListCalls == g_cntTxHistoryListCalls)
          setTimeout(function () { TxHistoryReadContractRefreshIfChanged(ContractID, StatusChangeFrom, valTimeout); }, valTimeout);

      }
    }
  });

  return false;
}
function SubmitBitcoinDirectNewCredentials(strNewLogin, strNewPassword, str2FACode, strContractID) {

  return $.ajax(
    {
      url: g_urlBitcoinDirectSubmitNewLoginCredentials + '?' + GetQueryParametersForSessionAndService(),
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(new newCredentialsBitcoinDirectToAmazon(strNewLogin, strNewPassword, str2FACode, strContractID))
    }
  )
    .then(result => {

      if (result.responsecode != 'SUCCESS') {
        $('#cellTxHistoryCredentialsSubmitError').html('<b>Unable to submit credentials</b> - ' + result.responsecode);
        ButtonAction('btnTxHistoryCredentialsSubmit', 'reset');

      }

      else {
        $.fancybox.close();
        ReadAmazonCredentials();
        TxHistoryList('gridTxHistory', 1);
        //ButtonAction('btnTxHistoryCredentialsSubmit', 'reset');

      }

    }, fail => {
      ButtonAction('btnTxHistoryCredentialsSubmit', 'reset');
      $('#cellTxHistoryCredentialsSubmitError').html('<b>Unable to submit credentials</b>');
    });
}
function BitcoinDirectToAmazonZincPromptClaimGiftCard(strContractID) {

  return $.ajax(
    {
      url: g_urlBitcoinDirectToAmazonZincPromptClaimGiftCard + '?' + GetQueryParametersForSessionAndService(),
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: strContractID
    }
  )
    .then(result => {
      if (result.responsecode != 'SUCCESS') {
        $('#cellTxHistoryClaimError').html('<b>Unable to claim gift card</b> - ' + result.responsecode);
        ButtonAction('btnTxHistoryClaimGiftCard', 'reset');
      }
      else {
        g_boolNavigateToInventory = true;
        InventoryItemList('gridGiftCard', g_loadTypes.All);
        TxHistoryList('gridTxHistory', 1);
      }


    }, (xhr, ajaxOptions, thrownError) => {

      ButtonAction('btnTxHistoryClaimGiftCard', 'reset');
      $('#cellTxHistoryClaimError').html('<b>Unable to claim gift card</b>');

    });
}
// functions - txhistory - end

// functions - addressbook - begin
function AddressBookList(strGridGroupID, LoadType) {
  $.ajax({
    type: 'GET',
    url: g_urlAddressBook + '?LoadType=' + LoadType + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&CurrencyCode=' + g_defaultCurrency,      // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        arrayGridItemList = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          // now load the rest of the rows
          AddressBookList(strGridGroupID, 1);
        }
        else {

          GridReplaceRows(strGridGroupID, arrayGridItemList);
          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            $('#noavailable' + strGridGroupID).show();
            g_AddressBookList = {};
            $('.classExploreIPYServicesAddressBook').show();
            //MenuClick('WithdrawChoices', 'NewPayee');
          }
          else {
            if (arrayGridItemList.length > 5) {
              $('.classExploreIPYServicesAddressBook').hide();
            } else {
              $('.classExploreIPYServicesAddressBook').show();
            }
            $('#noavailable' + strGridGroupID).hide();
            g_AddressBookList = arrayGridItemList;
            AddressBookProcessTwitterHandles(arrayGridItemList);
            //MenuClick('WithdrawChoices', 'AddressBook');
          }
          g_AddressBookLoaded = true;
        }
      }
      else {
        $('#cellLoadAddressBookError').html('Unable to load address book: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellLoadAddressBookError').html('Unable to load address book - please try again');
    }
  });
  return false;
}
function AddressBookItemDelete(strGridGroupID, guidAddressBookItemID) {
  $.ajax({
    type: "DELETE",
    url: g_urlAddressBook + '?strSessionID=' + g_guidSessionID + '&strAddressBookItemID=' + guidAddressBookItemID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        GridRowItemDelete(strGridGroupID, guidAddressBookItemID);
      }
      else {
        $('#cellLoadAddressBookError').html('Unable to delete address book entry: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellLoadAddressBookError').html('Unable to delete address book entry - please try again');
    }
  });

  return false;
}
function AddressBookItemSelected(objGridRowData) {
  g_strPayeeAddress = objGridRowData.strPayeeAddress;
  g_strPayeeName = objGridRowData.strName;
  g_strPayeeComment = objGridRowData.strComment;
  g_strPayeeAddressBookID = objGridRowData.ID;
  g_longPayeeTwitterID = objGridRowData.longTwitterID;
  g_boolInternalPayee = objGridRowData.boolInternalPayee;

  $('#ToBePlacedInAddressBook').removeClass('StatusError').removeClass('StatusWorking').addClass('StatusSuccess');
  $('#ToBePlacedInAddressBook').text("Selected from Address Book");

  AddressBookDisplay('DisplayPayee');
}
function AddressBookProcessTwitterHandles(arrayGridItemList) {
  $.each(arrayGridItemList, function (key, itemAddressBook) {
    if (itemAddressBook.longTwitterID > 0) {
      TwitterGetHandleFromID(itemAddressBook.longTwitterID, 'OtherHandle');
    }
  });
}
function CheckIfToEnableCreateNewPayeeButton() {
  if ($('#PayeeAddress_Edit').val() == '') {
    $('#cellSendPaymentClearEntriesActive').hide();
    $('#cellSendPaymentClearEntriesInactive').show();
    ButtonAction('btnContinueCreateNewPayee', 'disable');
  }
  else {
    $('#cellSendPaymentClearEntriesInactive').hide();
    $('#cellSendPaymentClearEntriesActive').show();
    ButtonAction('btnContinueCreateNewPayee', 'enable');
  }
}
function AddressBookCreateNewPayee(boolConfirmed) {
  g_strPayeeAddressBookID = null;
  g_guidContractFlowID = null;

  modelParams = {};
  modelParams.Confirmed = boolConfirmed;
  modelParams.BitcoinAddress = g_strPayeeAddress;
  modelParams.CurrencyCode = g_defaultCurrency;

  $.ajax({
    type: 'POST',
    url: g_urlAddressVerify,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      ButtonAction('btnContinueCreateNewPayee', 'enable');

      if (response.responsecode == 'SUCCESS') {

        objPayeeCreateResponse = JSON.parse(response.jsonData);

        if (!boolConfirmed && !objPayeeCreateResponse.boolInternalPayee) {
          $('#rowContinueCreateNewPayee').hide();
          $('#rowUnderstandReWrongAddress').show();
          g_idBtnCancel = 'lnkUnderstandReWrongAddressCancel';
        }
        else {


          if (objPayeeCreateResponse.modelTwitter != null) {
            objTwitterData = objPayeeCreateResponse.modelTwitter;
            g_strPayeeAddress = '@' + objTwitterData.Handle;
            g_longPayeeTwitterID = objTwitterData.Id;
          }
          else
            g_longPayeeTwitterID = 0;

          g_boolInternalPayee = objPayeeCreateResponse.boolInternalPayee;

          if (g_boolAddToAddressBook == true) {
            var modelAddressBookItemInput = {};
            var modelAddressBookItem = {};
            g_strPayeeName = g_strPayeeName.replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/=/g, '');
            modelAddressBookItem.strPayeeName = g_strPayeeName;
            modelAddressBookItem.strPayeeAddress = g_strPayeeAddress;
            modelAddressBookItem.strPayeeNote = g_strPayeeComment;
            modelAddressBookItem.longPayeeTwitterID = g_longPayeeTwitterID;

            modelAddressBookItemInput.modelAddressBookItem = modelAddressBookItem;
            modelAddressBookItemInput.guidSessionID = g_guidSessionID;
            modelAddressBookItemInput.guidServiceID = g_guidServiceID;
            modelAddressBookItemInput.CurrencyCode = g_defaultCurrency;

            $('#ToBePlacedInAddressBook').removeClass('StatusSuccess').removeClass('StatusError').addClass('StatusWorking');
            $('#ToBePlacedInAddressBook').text("Adding to Address Book.....");

            $.ajax({
              type: "POST",
              url: g_urlAddressBook,
              contentType: "application/json; charset=utf-8",
              data: JSON.stringify(modelAddressBookItemInput),
              success: function (response) {
                if (response.responsecode == 'SUCCESS') {
                  itemGridRowData = JSON.parse(response.jsonData);
                  AddressBookList('gridAddressBook', 1);

                  $('#ToBePlacedInAddressBook').removeClass('StatusWorking').addClass('StatusSuccess');
                  $('#ToBePlacedInAddressBook').text('Added to address book');
                }
                else if (response.responsecode == 'DUPLICATE') {
                  itemGridRowData = JSON.parse(response.jsonData);
                  GridReplaceRow('gridAddressBook', itemGridRowData[0]);
                  $('#ToBePlacedInAddressBook').removeClass('StatusWorking').addClass('StatusSuccess');
                  $('#ToBePlacedInAddressBook').text('Already in Address Book');
                  AddressBookProcessTwitterHandles(itemGridRowData);
                }
                else {
                  $('#ToBePlacedInAddressBook').removeClass('StatusWorking').addClass('StatusError');
                  $('#ToBePlacedInAddressBook').text('ERROR: Unable to add to address book: ' + response.errordescription);
                }
              },
              failure: function (response) {
                $('#ToBePlacedInAddressBook').removeClass('StatusWorking').addClass('StatusError');
                $('#ToBePlacedInAddressBook').text('<font color="red"><b>ERROR: Unable to add to address book</b></font>');
              }
            });
          }
          else
            $('#ToBePlacedInAddressBook').text('');

          AddressBookDisplay('DisplayPayee');
        }
      }
      else {
        $('#PayeeAddress_Error').html(response.errordescription);
        return;
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('#PayeeAddress_Error').html('Error:' + xhr.statusText);
      ButtonAction('btnContinueCreateNewPayee', 'enable');
    },
    dataType: "json"
  });

  return false;
}
// functions - addressbook - end

// functions - giftcardscatalog - begin
function GiftCardRedeemOnAmazon(ClaimCode) {
  window.open('https://www.amazon.com/gc/redeem/?_encoding=UTF8&claimCode=' + ClaimCode, 'Amazon.com');
}
function GiftCardCatalogBrandsList(strGridGroupID, catalogCategory, loadType) {
  if (loadType == g_loadTypes.Empty) {
    GridClearRows(strGridGroupID);
  }

  $.ajax({
    type: 'GET',
    url: g_urlGiftCardCatalog + '?loadType=' + loadType + '&catalogCategory=' + catalogCategory + '&gridId=' + strGridGroupID + '&' + GetQueryParametersForSessionAndService(),    // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objListRowsReturn = JSON.parse(response.jsonData);
        if (loadType == g_loadTypes.Empty) {
          arrayGridItemList = objListRowsReturn.BrandsAvailable;
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          $('#loading' + strGridGroupID).show();

          // now load the rest of the rows
          GiftCardCatalogBrandsList(strGridGroupID, catalogCategory, g_loadTypes.All);

        }
        else {
          if (response.responsecode != 'NOENTRY' && objListRowsReturn.BrandsAvailable.length > 0) {
            arrayGridItemList = objListRowsReturn.BrandsAvailable;
            GridReplaceRows(strGridGroupID, arrayGridItemList);
          }
          else {
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
            return;
          }

          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            g_BrandsAvailableList[catalogCategory] = [];
          }
          else {
            g_BrandsAvailableList[catalogCategory] = arrayGridItemList;
          }

          if (delayedload_GridGroupName == 'gridGiftCardCatalogBrands') {
            if (delayedload_GridItemId == 'SafewayGC') {
              ShortcutToSafeway();
            }
            else if (delayedload_GridItemId == 'UberGC') {
              ShortcutToUber();
            }
            else if (delayedload_GridItemId == 'AmazonGC') {
              ShortcutToAmazon();
            }
            else if (delayedload_GridItemId == 'BestBuyGC') {
              ShortcutToBestBuy();
            }
          }
        }
      }
      else {
        $('#cellGiftCardsError').html('Unable to load gift card brands: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellGiftCardsError').html('Unable to load gift card brands - please reload page');
    }
  });
  return false;
}
function GiftCardValuesList(strGridGroupID, catalogCategory, loadType, ItemGiftCardBrandSelected, ItemCatalogBrandSelectedRetailerName) {
  if (loadType == g_loadTypes.Empty) {
    GridClearRows(strGridGroupID);
  }

  $.ajax({
    type: 'GET',
    url: g_urlGiftCardCatalogValues + '?loadType=' + loadType + '&catalogCategory=' + catalogCategory + '&BatchID=' + ItemGiftCardBrandSelected + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID,    // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objListRowsReturn = JSON.parse(response.jsonData);
        if (loadType == g_loadTypes.Empty) {
          arrayGridItemList = objListRowsReturn.OffersAvailable;
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          // now load the rest of the rows
          $('#loading' + strGridGroupID).show();
          $('.classGiftCardsSelectedBrand').html(ItemCatalogBrandSelectedRetailerName);
          GiftCardValuesList(strGridGroupID, catalogCategory, g_loadTypes.All, ItemGiftCardBrandSelected, ItemCatalogBrandSelectedRetailerName);
        }
        else {
          if (response.responsecode != 'NOENTRY' && objListRowsReturn.OffersAvailable != null && objListRowsReturn.OffersAvailable.length > 0) {
            arrayGridItemList = objListRowsReturn.OffersAvailable;
            GridReplaceRows(strGridGroupID, arrayGridItemList);
            if ('' != g_CardIDToSelect) {
              GiftCardValueSelected(privGridItemData(strGridGroupID, g_CardIDToSelect));
              g_CardIDToSelect = '';
            }
          }
          else {
            GridReplaceRows(strGridGroupID, null);
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
            $('.classCancelGiftCardBrand').click('input', function (e) {
              GiftCardPageInit('SelectBrand');
              return false;
            });


            return;
          }

          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            g_BrandsValuesList = [];
          }
          else {
            g_BrandsValuesList = arrayGridItemList;
          }

          // delay to allow time for pictures to load

          setTimeout(function () { AdjustHeightOnResize('gridGiftCardCatalogValues'); }, 300);

        }
      }
      else {
        $('#cellLoadGiftCardsValuesError').html('Unable to load gift cards available for purchase: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellLoadGiftCardsValuesError').html('Unable to load gift cards available for purchase - please reload page');
    }
  });
  return false;
}
function GiftCardCatalogSelected(objGridRowData) {
  g_gridItemGiftCardBrandSelected = objGridRowData;
  GiftCardPageInit('BrandSelected');
}
function GiftCardValueSelected(objGridRowData) {
  g_ItemForPurchaseSelected = objGridRowData;
  GiftCardPageInit('ValueSelected');

}
function GiftCardItemSelected(objGridItem) {

}
function GiftCardItemOpenView(objGridItem) {
  ClearEntryFields();
  ClearErrors();

  InventorySelectedItemSet(objGridItem);
  g_fancyboxFocus = '';
  $('.classRowGiftCardBarcode').hide();
  $('#rowGiftCardPrint').hide();
  $('.classGiftCardDetails').hide();
  $('.classGiftCardDetailsDefault').show();
  $('.classGiftCardDetailAmazonDirect').hide();
  $('.classGiftCardClaimBarcodeWaiting').show();
  $('.classGiftCardClaimBarcodeDone').hide();
  $('.classMerchantSpecificRedemptionInstructions').hide();
  $('.classShippingInfo').hide();

  if (g_GridCatalogItemSelected.ContractType == 'CancelSend')
    $('.classGiftCardDetailFromLabel').text('Send cancelled to:');
  else
    $('.classGiftCardDetailFromLabel').text('From:');

  $('.classGiftCardDetailInventoryID').text(g_GridCatalogItemSelected.IDForDisplay);

  if (g_GridCatalogItemSelected.IsPurchased) {
    $('.classGiftCardPurchasedFromIPAYYOU').show();

  }

  if (g_GridCatalogItemSelected.ContractType == 'BitcoinDirect') {
    $('.classGiftCardPurchasedFromIPAYYOU').show();
    // $('.classGiftCardDetailAmazonDirect').show();
    $('#cellGiftCardAmazonDirectValue').text('$' + numberWithCommas(g_GridCatalogItemSelected.USDValue.toFixed(2)));
  }

  if (g_GridCatalogItemSelected.ClaimCode != '') {
    if (g_GridCatalogItemSelected.BrandType == 'AmazonGC' || g_GridCatalogItemSelected.BrandType == 'AmazonZinc')
      $('.classGiftCardDetailRedeemOnAmazon').show();
    else {
      $('.classGiftCardDetailRedeemOnAmazon').hide();
      if (g_GridCatalogItemSelected.BrandType == 'NetflixGC' || g_GridCatalogItemSelected.BrandType == 'ITunesGC' || g_GridCatalogItemSelected.BrandType == 'eBayGC' || g_GridCatalogItemSelected.BrandType == 'piaVPNGC') {
        if (g_GridCatalogItemSelected.BrandType == 'piaVPNGC') {
          $('.classInternetPrivateAccessRedemptionInstructions').show();
        }
      }
      else {
        $('.classGiftCardDetailClaimImg').attr('src', g_urlIAccountsBaseline + '/BarcodeView-' + g_GridCatalogItemSelected.ClaimCode.replace(' ', ''));

        $('#imgGiftCardDetailClaim').unbind()
          .on('load', function () {
            $('.classGiftCardClaimBarcodeWaiting').hide();
            $('.classGiftCardClaimBarcodeDone').show();
          });

        $('.classRowGiftCardBarcode').show();
        $('#rowGiftCardPrint').show();
      }
    }

    $('.classGiftCardDetailClaimCode').show();
    $('.classReplaceIfClaimCode_' + g_GridCatalogItemSelected.ID).hide();
    $('.classClaimCode').text(g_GridCatalogItemSelected.ClaimCode).show();
    if (g_GridCatalogItemSelected.PinCode != '') {
      $('.classPinCode').text(g_GridCatalogItemSelected.PinCode);
      $('.classPinCodeEnvenlope').show();
    }
  }
  else if (g_GridCatalogItemSelected.enumContractStatus == 'PurchaseComplete' || g_GridCatalogItemSelected.enumContractStatus == 'SendComplete' || g_GridCatalogItemSelected.enumContractStatus == 'ZincError') {
    $('#rowGiftCardDetailAvailable').show();
  }

  var dtObtained = g_GridCatalogItemSelected.dtTransaction;
  $('.classGiftCardDetailObtainedOn').addClass('UTCTime').text(dtObtained);

  if (g_GridCatalogItemSelected.enumContractStatus == 'SendComplete') {
    $('.classGiftCardDetailReceivedFrom').html('<b>' + g_GridCatalogItemSelected.ReceivedFromName + '</b> - ' + g_GridCatalogItemSelected.ReceivedFromEmail);
    $('.classRowGiftCardReceivedFromFriend').show();
    $('.classGiftCardPurchasedFromIPAYYOU').hide();
  }

  if (g_GridCatalogItemSelected.ReceivedFromNote != '' && g_GridCatalogItemSelected.ReceivedFromNote != null) {
    $('.classRowGiftCardDetailPayerNote').show();
    $('.classGiftCardDetailPayerNote').html(g_GridCatalogItemSelected.ReceivedFromNote);
  }
  else
    $('.classRowGiftCardDetailPayerNote').hide();

  ConvertUTCToLocal();

  ShippingPageDisplay('init');

  $.fancybox($('#divGiftCardDetail'));



  if ('' != g_fancyboxFocus) {
    $('#' + g_fancyboxFocus).focus();
  }

}
// functions - giftcardscatalog - end

// functions - giftcards - begin
function updateTotalAmount() {
  ClearErrors();

  var count = $("#cardQuantity").val();
  if (g_ItemForPurchaseSelected != null) {
    if (count > g_ItemForPurchaseSelected.MaxQuantity) {
      $('#cellGiftCardPriceTotal').addClass('Error').text('Exceeds available inventory');
      ButtonAction('btnGiftCardReviewPurchase', 'disable');
    }
    else {
      var fiatPriceForCards = count * (g_ItemForPurchaseSelected.USDItemPrice * (1 - g_percentDiscount / 100));
      $('#cellGiftCardPriceTotal').removeClass('Error').text('$' + numberWithCommas(fiatPriceForCards.toFixed(2)));
      if (count > 0)
        ButtonAction('btnGiftCardReviewPurchase', 'enable');
      else
        ButtonAction('btnGiftCardReviewPurchase', 'disable');
    }
  }
}
function ApplyGiftCardPromotion() {
  var promotionCode = $('#boxPromotionCode_Edit').val().trim();

  PurchasePromotionCheck(g_ItemForPurchaseSelected, promotionCode, ApplyGiftCardPromotionSUCCESS, ApplyGiftCardPromotionFAILED);
}
function ApplyGiftCardPromotionSUCCESS(promotionCode, response) {
  $('.classPromotionDiscountNotApplied').hide();
  $('.classPromotionDiscountApplied').show();
  g_percentDiscount = response.DiscountPercent;
  g_promotionCode = promotionCode;
  $('.classPercentDiscountApplied').html(g_percentDiscount);
  updateTotalAmount();
}
function ApplyGiftCardPromotionFAILED(promotionCode, error, description) {

  if (promotionCode.length > 15)
    promotionCode = promotionCode.substring(0, 12) + '...';

  if (error == 'PROMOTION_INVALID') {
    $('#errorGiftCardPromotion').html('Invalid promotion code: <b>' + promotionCode + '</b>');
  }
  else if (error == 'PROMOTION_EXPIRED') {
    $('#errorGiftCardPromotion').html('Promotion already expired');
  }
  else if (error == 'PROMOTION_NOT_YET_ACTIVE') {
    $('#errorGiftCardPromotion').html('Promotion not yet active');
  } else {
    var errorSuffix = '';
    if (description != '') {
      errorSuffix = ' <b>' + description + '</b>';
      error = '';
    }
    else
      error = '<b>' + error + '</b>';

    error = '&nbsp;&nbsp;' + error;

    $('#errorGiftCardPromotion').html('Could not submit promotion code: <br />' + error + errorSuffix);
  }

  $('#boxPromotionCode_Edit').val('');
  $('#boxPromotionCode_Edit').focus();
  ButtonAction('btnPromotionApply', 'reset');
}
function privCheckIfToEnableAppyPromotion() {
  ClearErrors();
  if ($('#boxPromotionCode_Edit').val().trim() == '')
    ButtonAction('btnPromotionApply', 'disable');
  else
    ButtonAction('btnPromotionApply', 'enable');
}
function GiftCardReviewPurchaseSUCCESS() {
  g_boolNavigateToTxHistory = true;
  TxHistoryList('gridTxHistory', 1);
  InventoryItemList('gridGiftCard', g_loadTypes.All);
}
function GiftCardReviewPurchaseFAILURE(errorcode, errordesc, jsonData) {
  if (errorcode == 'NO_INVENTORY_AVAILABLE') {
    GiftCardValuesList('gridGiftCardCatalogValues', g_catalogCategories.GiftCards, g_loadTypes.All, g_gridItemGiftCardBrandSelected.ID, g_gridItemGiftCardBrandSelected.RetailerName);
    $('#cellGiftCardsPurchaseError').html('No inventory of this card is currently available - <a href="" class="classCancelGiftCardValue">please select a different card</a>');
    $('.classCancelGiftCardValue').click('input', function (e) {
      GiftCardPageInit('BrandSelected');
      return false;
    });
    AdjustHeightOnResize('gridGiftCardCatalogValues');


  }
  else if (errorcode == 'NOT_LOGGED_IN') {
    $('#cellGiftCardsPurchaseError').html('<b>You need to be logged in to make a purchase</b><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
    AttachClassPleaseLoginController();

  }

  else if (errorcode == 'NOT_ENOUGH_FUNDS') {

    //if ('' == g_promotionCode) {
    //    g_boolNavigateToTxHistory = true;
    //    TxHistoryList('gridTxHistory', 1);
    //    InventoryItemList('gridGiftCard', 1);
    //}
    //else {
    $('#cellGiftCardsPurchaseError').html('<b>You do not have enough funds to purchase</b><br />' + errordesc);
    //}
  }
  else if (errorcode == 'TRANSACTION_TOO_LARGE') {
    var strTxTooLargeResponse = jsonData;
    var objTxTooLargeResponse = JSON.parse(strTxTooLargeResponse);
    $('#cellMaxAvailToPurchaseGC').text('$' + numberWithCommas(objTxTooLargeResponse.fiatUSDAvailable.toFixed(2)));
    $("#spanTooLongPeriodGC").text(objTxTooLargeResponse.strTooLargePeriod);
    $('#cellAvailToPurchaseGCDate').addClass('UTCTime').text(objTxTooLargeResponse.dtComeBackAfter);
    ConvertUTCToLocal();
    $('#rowGiftCardsTooLarge').show();
  }
  else if (errorcode == 'TEMPORARILY_SUSPENDED') {

    $('#cellGiftCardsPurchaseError').html(errordesc);

  }
  else {
    $('#cellGiftCardsPurchaseError').html('Unable to purchase gift card -- ' + errorcode);
  }

  ButtonAction('btnGiftCardReviewPurchase', 'reset');
}
function InventoryItemArchive(objGridItem) {
  $('#gridGiftCard_opened_' + objGridItem.ID).hide();
  $('#gridGiftCard_archiveworking_' + objGridItem.ID).show();
  PurchaseArchive(objGridItem, true, GridCardArchiveSUCCESS, GridCardArchiveFAILURE);
}
function GridCardArchiveSUCCESS(objGridItem) {
  InventoryItemList('gridGiftCard', g_loadTypes.All);
  InventoryItemList('gridGiftCardArchive', g_loadTypes.All);
}
function GridCardArchiveFAILURE(objGridItem, errorCode, errorDesc) {
  InventoryItemList('gridGiftCard', g_loadTypes.All);
  InventoryItemList('gridGiftCardArchive', g_loadTypes.All);
}
function GiftCardItemUnarchive(objGridItem) {
  $('#gridGiftCard_archived_' + objGridItem.ID).hide();
  $('#gridGiftCard_unarchiveworking_' + objGridItem.ID).show();
  PurchaseArchive(objGridItem, false, GridCardUnarchiveSUCCESS, GridCardUnarchiveFAILURE);
}
function GridCardUnarchiveSUCCESS(objGridItem) {
  InventoryItemList('gridGiftCard', g_loadTypes.All);
  InventoryItemList('gridGiftCardArchive', g_loadTypes.All);
  MenuClick('Inventory', 'InventoryActive');
}
function GridCardUnarchiveFAILURE(objGridItem, errorCode, errorDesc) {
  InventoryItemList('gridGiftCard', g_loadTypes.All);
  InventoryItemList('gridGiftCardArchive', g_loadTypes.All);
}
function GiftCardItemSendSUCCESS() {
  TxHistoryList('gridTxHistory', 1);
  InventoryItemList('gridGiftCard', g_loadTypes.All);
  InventoryItemList('gridGiftCardArchive', g_loadTypes.All);
  ShortcutToTxHistory();
}
function GiftCardItemSendFAILURE(errorCode, errorDesc) {
  if (errorCode == 'UNAUTHENTICATED' || errorCode == 'INVALID_2FA' || errorCode == 'EXPIRED') {
    $('.classAddressBookPaymentContractError').html('Wrong or expired authentication code');
  }
  else if (errorCode == 'INVALID_INPUT_BITCOIN') {
    $('.classAddressBookPaymentContractError').html('Cannot send item to a bitcoin address -- <b>Send by email</b>');
  }
  else {
    $('.classAddressBookPaymentContractError').text('Unable to send Gift -- ' + errorCode);
  }


  ButtonAction('btnPayNow', 'enable');
}
// functions - giftcards - end

// functions - glidera - begin
function VerifyGlideraPhone(code) {

  $.ajax({
    type: 'POST',
    url: g_urlVerifyGlideraPhone + '?sessionid=' + g_guidSessionID,
    contentType: "application/json; charset=utf-8",
    data: code,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        location.reload();
      }
      else {
        $('#AuthyCodeGlidera_Edit').val('');
        $('#AuthyCodeGlidera_Edit').focus();
        ButtonAction('btnGlideraPhoneValidate', 'reset');
        $('#AuthyCodeGlidera_Error').html('Code could not be validated');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('#AuthyCodeGlidera_Edit').val('');
      $('#AuthyCodeGlidera_Edit').focus();
      ButtonAction('btnGlideraPhoneValidate', 'reset');
      $('#AuthyCodeGlidera_Error').html('Code could not be validated');
    }
  });
}
// functions - glidera - end


// functions - catalog - begin
function privCheckIfToEnableAppyCatalogPromotion() {
  ClearErrors();
  if ($('#boxPromotionCodeCatalog_Edit').val().trim() == '')
    ButtonAction('btnPromotionApplyCatalog', 'disable');
  else
    ButtonAction('btnPromotionApplyCatalog', 'enable');
}
function ApplyCatalogPromotion() {
  var promotionCode = $('#boxPromotionCodeCatalog_Edit').val().trim();

  PurchasePromotionCheck(g_GridCatalogItemSelected, promotionCode, ApplyCatalogPromotionSUCCESS, ApplyCatalogPromotionFAILED);
}
function ApplyCatalogPromotionSUCCESS(promotionCode, response) {
  $('.classPromotionDiscountNotAppliedCatalog').hide();
  $('.classPromotionDiscountAppliedCatalog').show();
  g_percentDiscount = response.DiscountPercent;
  g_promotionCode = promotionCode;
  $('.classPercentDiscountAppliedCatalog').html(g_percentDiscount);
  updateTotalAmountCatalog();
}
function ApplyCatalogPromotionFAILED(promotionCode, error, description) {

  $('#rowCatalogPromotionError').show();

  if (promotionCode.length > 15)
    promotionCode = promotionCode.substring(0, 12) + '...';

  if (error == 'PROMOTION_INVALID') {
    $('#errorCatalogPromotion').html('Invalid promotion code: <b>' + promotionCode + '</b>');
  }
  else if (error == 'PROMOTION_EXPIRED') {
    $('#errorCatalogPromotion').html('Promotion already expired');
  }
  else if (error == 'PROMOTION_NOT_YET_ACTIVE') {
    $('#errorCatalogPromotion').html('Promotion not yet active');
  } else {
    var errorSuffix = '';
    if (description != '') {
      errorSuffix = ' <b>' + description + '</b>';
      error = '';
    }
    else
      error = '<b>' + error + '</b>';

    error = '&nbsp;&nbsp;' + error;

    $('#errorCatalogPromotion').html('Could not submit promotion code: <br />' + error + errorSuffix);
  }

  $('#boxPromotionCodeCatalog_Edit').val('');
  $('#boxPromotionCodeCatalog_Edit').focus();
  ButtonAction('btnPromotionApplyCatalog', 'reset');
}
function CatalogReviewPurchaseSUCCESS() {
  g_boolNavigateToTxHistory = true;
  TxHistoryList('gridTxHistory', 1);
  InventoryItemList('gridGiftCard', g_loadTypes.All);
}
function CatalogReviewPurchaseFAILURE(errorcode, errordesc, jsonData) {
  if (errorcode == 'NO_INVENTORY_AVAILABLE') {
    CatalogValuesList('gridCatalogCatalogValues', g_catalogCategories.Catalogs, g_loadTypes.All, g_gridItemCatalogBrandSelected.ID, g_gridItemCatalogBrandSelected.RetailerName);
    $('#cellCatalogsPurchaseError').html('No inventory of this card is currently available - <a href="" class="classCancelCatalogValue">please select a different card</a>');
    $('.classCancelCatalogValue').click('input', function (e) {
      CatalogPageInit('BrandSelected');
      return false;
    });
    AdjustHeightOnResize('gridCatalogCatalogValues');


  }
  else if (errorcode == 'NOT_LOGGED_IN') {
    $('#cellCatalogsPurchaseError').html('<b>You need to be logged in to make a purchase</b><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
    AttachClassPleaseLoginController();

  }

  else if (errorcode == 'NOT_ENOUGH_FUNDS') {

    //if ('' == g_promotionCode) {
    //    g_boolNavigateToTxHistory = true;
    //    TxHistoryList('gridTxHistory', 1);
    //    InventoryItemList('gridGiftCard', 1);
    //}
    //else {
    $('#cellCatalogsPurchaseError').html('<b>You do not have enough funds to purchase</b><br />' + errordesc);
    //}
  }
  else if (errorcode == 'TRANSACTION_TOO_LARGE') {
    var strTxTooLargeResponse = jsonData;
    var objTxTooLargeResponse = JSON.parse(strTxTooLargeResponse);
    $('#cellMaxAvailToPurchaseGC').text('$' + numberWithCommas(objTxTooLargeResponse.fiatUSDAvailable.toFixed(2)));
    $("#spanTooLongPeriodGC").text(objTxTooLargeResponse.strTooLargePeriod);
    $('#cellAvailToPurchaseGCDate').addClass('UTCTime').text(objTxTooLargeResponse.dtComeBackAfter);
    ConvertUTCToLocal();
    $('#rowCatalogsTooLarge').show();
  }
  else
    $('#cellCatalogsPurchaseError').html('Unable to purchase gift card -- ' + errorcode);

  ButtonAction('btnCatalogReviewPurchase', 'reset');
}
function CatalogGetValuesList(loadType, strGridGroupID, catalogCategory, ItemCatalogBrandSelected, ItemCatalogBrandSelectedRetailerName) {
  var strGridGroupID = 'gridAvailableHardwareWallets';

  if (loadType == g_loadTypes.Empty) {
    GridClearRows(strGridGroupID);
  }

  $.ajax({
    type: 'GET',
    url: g_urlCatalogValues + '?loadType=' + loadType + '&strGridID=' + strGridGroupID + '&catalogCategory=' + catalogCategory + '&BatchID=' + ItemCatalogBrandSelected + '&serviceid=' + g_guidServiceID + '&sessionid=' + g_guidSessionID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objListRowsReturn = JSON.parse(response.jsonData);
        if (loadType == g_loadTypes.Empty) {
          arrayGridItemList = objListRowsReturn.OffersAvailable;
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);
          // now load the rest of the rows
          $('#loading' + strGridGroupID).show();
          g_CatalogBrandsValuesList[ItemCatalogBrandSelected] = [];
          //$('.classCatalogsSelectedBrand').html(ItemCatalogBrandSelectedRetailerName);
          CatalogGetValuesList(g_loadTypes.All, strGridGroupID, catalogCategory, ItemCatalogBrandSelected, ItemCatalogBrandSelectedRetailerName);
        }
        else {
          g_CatalogBrandsValuesList[ItemCatalogBrandSelected] = [];
          if (response.responsecode != 'NOENTRY' && objListRowsReturn.OffersAvailable != null && objListRowsReturn.OffersAvailable.length > 0) {
            g_CatalogBrandsValuesList[ItemCatalogBrandSelected] = objListRowsReturn.OffersAvailable;
            GridReplaceRows(strGridGroupID, g_CatalogBrandsValuesList[ItemCatalogBrandSelected]);

            if (delayedload_GridGroupName == 'gridAvailableHardwareWallets') {
              if (delayedload_GridItemId == 'LedgerWallet') {
                CatalogItemSelected(privGridItemData('gridAvailableHardwareWallets', g_CatalogIDToSelect));
              }
            }
          }
          else {
            GridReplaceRows(strGridGroupID, null);
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
          }
        }
      }
    }
  });
  return false;

}
function updateTotalAmountCatalog() {
  ClearErrors();

  var count = $("#itemQuantity").val();
  if (g_GridCatalogItemSelected != null) {
    if (g_GridCatalogItemSelected.MaxQuantity != -1 && count > g_GridCatalogItemSelected.MaxQuantity) {
      $('#cellCatalogPriceTotal').addClass('Error').text('Exceeds available inventory');
      ButtonAction('btnCatalogReviewPurchase', 'disable');
    }
    else {
      var fiatPriceForCards = count * (g_GridCatalogItemSelected.USDItemPrice * (1 - g_percentDiscount / 100));
      $('#cellCatalogPriceTotal').removeClass('Error').text('$' + numberWithCommas(fiatPriceForCards.toFixed(2)));
      if (count > 0)
        ButtonAction('btnCatalogReviewPurchase', 'enable');
      else
        ButtonAction('btnCatalogReviewPurchase', 'disable');
    }
  }
}
function CatalogItemSelected(brandDetails) {
  g_GridCatalogItemSelected = brandDetails;
  CatalogPageInit('ValueSelected');
}
// functions - catalog - end


// functions - amazondirect - begin
function BindAmazonDirectHandlers() {
  $('.classAmazonDirectChangeAmount').unbind().click(function () {
    g_objAmazonContract = null;
    DisplayAmazonCredentials(false, true);
    return false;
  });
}
function CheckIfToEnableAmazonApply() {
  var strAmazonLogin = $('#boxAmazonLoginEmail_Edit').val().trim();
  var strAmazonPassword = $('#boxAmazonPassword_Edit').val().trim();

  if ('' != strAmazonLogin && '' != strAmazonPassword)
    ButtonAction('btnAmazonApplyCredentials', 'enable');
  else
    ButtonAction('btnAmazonApplyCredentials', 'disable');
}
function DisplayAmazonCredentials(pageEnterCredentialsOverride, boolDisplayPayment) {
  g_boolAmazonCredentialsOverride = pageEnterCredentialsOverride;

  $('.classAmazonDirectCredentialsReplacing').hide();
  if (null != g_objAmazonCredentials) {
    $('.classBoxAmazonLoginEmailDisplay').text(g_objAmazonCredentials.Login);
    if (g_objAmazonCredentials.strStatus == 'Unverified') {
      $('.classAmazonLoginPasswordDisplay').hide();
      $('.classAmazonLoginEmailDisplay').attr('colspan', 2);
    }
    else
      $('.classAmazonLoginEmailDisplay').attr('colspan', 1);

  }

  if (null != g_objAmazonCredentials && !pageEnterCredentialsOverride) {
    $('.classAmazonDirectCredentialsEnter').hide();
    $('.classAmazonDirectCredentialsDisplay').show();
  }
  else {
    $('.classAmazonDirectCredentialsDisplay').hide();
    $('.classAmazonDirectCredentialsEnter').show();
    $('#boxAmazonLoginEmail_Edit').focus();
    if (pageEnterCredentialsOverride) {
      $('.classAmazonDirectCredentialsReplacing').show();
      g_idBtnCancel = 'lnkAmazonCredentialsCancel';
    }
  }

  if (boolDisplayPayment)
    DisplayAmazonPayment();

}
function DisplayAmazonPayment() {
  ClearEntryFields();
  ClearErrors();

  if (null == g_objAmazonContract) {
    $('.classAmazonDirectAmountReview').hide();
    $('.classAmazonDirectAmountEnter').show();
    $('#boxAmountToSendToAmazon_Edit').focus();

    g_idBtnCancel = '';

    $('.classBitcoinDirectSend').hide();
    $('#rowReviewTransactionAmazon').show();
    ButtonAction('boxAmazonDirectSend', 'disable');
  }
  else {

    $('.classBitcoinDirectSend').show();
    $('#rowReviewTransactionAmazon').hide();

    btcPayeeWillReceive = g_objAmazonContract.satoshiPaymentToPayee / 1e8;
    btcExpediteFee = g_objAmazonContract.satoshiExpediteFee / 1e8;
    btcSellerFee = g_objAmazonContract.satoshiSellerFee / 1e8;

    fiatPayeeWillReceive = privFiatBalanceFromSatoshi(g_objAmazonContract.satoshiPaymentToPayee, g_objAmazonContract.ConversionRate);
    fiatSellerFee = privFiatBalanceFromSatoshi(g_objAmazonContract.satoshiSellerFee, g_objAmazonContract.ConversionRate);
    fiatExpediteFee = privFiatBalanceFromSatoshi(g_objAmazonContract.satoshiExpediteFee, g_objAmazonContract.ConversionRate);

    if (g_objAmazonCredentials != null && !g_boolAmazonCredentialsOverride)
      ButtonAction('boxAmazonDirectSend', 'enable');
    else
      ButtonAction('boxAmazonDirectSend', 'disable');

    if (g_objAmazonContract.boolBalanceAdjusted)
      $('.classInsufficientBalanceSend').show();
    else
      $('.classInsufficientBalanceSend').hide();

    $('.PayeeWillReceive_Label').text(fiatPayeeWillReceive.toFixed(2));
    $('.BTCPayeeWillReceive_Label').text(btcPayeeWillReceive.toFixed(8));

    $('.FiatIPYFee_Label').text(fiatSellerFee.toFixed(2));
    $('.BTCIPYFee_Label').text(btcSellerFee.toFixed(8));

    $('.FiatExpediteFee_Label').text(fiatExpediteFee.toFixed(2));
    $('.BTCExpediteFee_Label').text(btcExpediteFee.toFixed(8));

    $('.BTCIPYFeeExplanation_Label').text(g_objAmazonContract.FeeExplanation);

    fiatTotalWithdrawal = privFiatBalanceFromSatoshi(g_objAmazonContract.satoshiPaymentToPayee + g_objAmazonContract.satoshiSellerFee + g_objAmazonContract.satoshiExpediteFee, g_dictConversionRate[g_defaultCurrency]);
    $('.boxAmountToSendTotal_Label').text(fiatTotalWithdrawal.toFixed(2));
    $('.BTCboxAmountToSendTotal_Label').text(((g_objAmazonContract.satoshiPaymentToPayee + g_objAmazonContract.satoshiSellerFee + g_objAmazonContract.satoshiExpediteFee) / 1e8).toFixed(8));

    g_guidContractFlowID = g_objAmazonContract.guidFlowID;

    g_idBtnCancel = 'lnkAmazonDirectChangeAmount';



    $('.classAmazonDirectAmountEnter').hide();
    $('.classAmazonDirectAmountReview').show();
  }
}
function ReadAmazonCredentials() {
  $.ajax({
    type: 'GET',
    url: g_urlAmazonDirect + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID,
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_objAmazonCredentials = JSON.parse(response.jsonData);
        DisplayAmazonCredentials(false, true);
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();
      }
      else if (response.responsecode == 'NOENTRY') {
        DisplayAmazonCredentials(false, true);
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();
      }
      else {
        CheckIfToEnableAmazonApply();
        $('.classAmazonSubmitCredentialsError').html('Error reading Amazon.com credentials: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        $('#boxAmazonLoginEmail_Edit').focus();
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      CheckIfToEnableAmazonApply();
      $('.classAmazonSubmitCredentialsError').html('Error reading Amazon.com credentials: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      $('#boxAmazonLoginEmail_Edit').focus();
      $('.GridItemBitcoinDirectWorking').hide();
      $('.GridItemBitcoinDirectValue').show();
    }
  });

}
function ApplyAmazonCredentials(strAmazonLogin, strAmazonPassword) {
  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.MerchantLogin = strAmazonLogin;
  modelInput.MerchantPassword = strAmazonPassword;

  $.ajax({
    type: 'POST',
    url: g_urlAmazonDirect,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        if (null != g_objAmazonContract)
          AmazonDirectContractGet();
        else
          ReadAmazonCredentials();
      }
      else {
        CheckIfToEnableAmazonApply();
        $('.classAmazonSubmitCredentialsError').html('Error submitting Amazon.com credentials: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        $('#boxAmazonLoginEmail_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      CheckIfToEnableAmazonApply();
      $('.classAmazonSubmitCredentialsError').html('Error submitting Amazon.com credentials: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      $('#boxAmazonLoginEmail_Edit').focus();
    }
  });
}
function AmazonDirectContractGet() {
  ClearErrors();

  g_objAmazonContract = null;

  modelParams = {};
  modelParams.guidServiceID = g_guidServiceID;
  modelParams.guidSessionID = g_guidSessionID;
  modelParams.CurrencyCode = g_defaultCurrency;
  fiatAmountSelected = g_objBitcoinDirectSelected.USDItemPrice;

  // var floatAmount_LastKnownGood = fiatAmountSelected; // parseFloat(g_strAmount_LastKnownGood);
  var floatFiatWalletBalance = (g_satoshiWalletBalanceUsable[g_defaultCurrency] / 1e8 * g_dictConversionRate[g_defaultCurrency]);

  if (fiatAmountSelected.toFixed(2) == floatFiatWalletBalance.toFixed(2)) {
    //modelParams.fiatPaymentInCents = Math.round(floatFiatWalletBalance * 100);
    modelParams.satoshiPayment = g_satoshiWalletBalanceUsable[g_defaultCurrency];
  }
  else {
    //        modelParams.satoshiPayment = Math.round(floatAmount_LastKnownGood * 1e8 / g_dictConversionRate[g_defaultCurrency]);
    modelParams.fiatPaymentInCents = Math.round(fiatAmountSelected * 100);
    modelParams.satoshiPayment = 0;
  }

  $.ajax({
    type: 'PATCH',
    url: g_urlAmazonDirect,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {

        g_objAmazonContract = JSON.parse(response.jsonData);

        dblConversionRate = g_objAmazonContract.ConversionRate;
        UpdateWalletBalances(g_defaultCurrency, g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalanceUsable[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_satoshiWalletBalancePending[g_defaultCurrency], g_dictConversionRate[g_defaultCurrency], dblConversionRate);
        $('.classConversionRateReview').text('$' + numberWithCommas(dblConversionRate.toFixed(2)));
        ReadAmazonCredentials();
      }
      else if (response.responsecode == 'NOT_LOGGED_IN') {
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();

        $('.classAmazonAmountToTransferError').html('<b>You need to be logged in to make a purchase</b><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
        AttachClassPleaseLoginController();

      }
      else if (response.responsecode == 'NOT_ENOUGH_FUNDS') {
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();


        $('.classAmazonAmountToTransferError').html('<b>Not Enough Funds</b><br />' + response.errordescription);
      }
      else {
        $('.GridItemBitcoinDirectWorking').hide();
        $('.GridItemBitcoinDirectValue').show();


        $('.classAmazonAmountToTransferError').html('Error applying amount: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        //$('#boxAmountToSendToAmazon_Edit').focus();
        //ButtonAction('btnApplyFundsToAmazon', 'reset');                
      }
    },
    failure: function (response) {
      $('.GridItemBitcoinDirectWorking').hide();
      $('.GridItemBitcoinDirectValue').show();

      $('.classAmazonAmountToTransferError').html('Error applying amount - please try again');
      $('#boxAmountToSendToAmazon_Edit').focus();
      //ButtonAction('btnApplyFundsToAmazon', 'reset');

    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.GridItemBitcoinDirectWorking').hide();
      $('.GridItemBitcoinDirectValue').show();

      $('.classAmazonAmountToTransferError').html('Error applying amount - please try again');
      $('#boxAmountToSendToAmazon_Edit').focus();
      //ButtonAction('btnApplyFundsToAmazon', 'enable');
      ReadAmazonCredentials();
    }
  });
}
function AmazonDirectContractSubmit() {
  if (null == g_objAmazonContract)
    return;

  modelSubmit = {};
  modelSubmit.guidServiceID = g_guidServiceID;
  modelSubmit.guidSessionID = g_guidSessionID;
  modelSubmit.guidFlowID = g_objAmazonContract.guidFlowID;
  modelSubmit.MerchantCredentialsHash = g_objAmazonCredentials.hashMerchantCredentials;

  g_objAmazonContract = null;

  $.ajax({
    type: 'PUT',
    url: g_urlAmazonDirect,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelSubmit),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);
      }
      else if (response.responsecode == 'EXPIRED') {
        $('.classAmazonDirectSendError').html('Request expired - <a href="" class="classAmazonDirectChangeAmount">please try again</a>');
        BindAmazonDirectHandlers();
        g_objAmazonContract = null;
        ButtonAction('boxAmazonDirectSend', 'reset');
      }
      else if (response.responsecode == 'TEMPORARILY_SUSPENDED') {
        $('.classAmazonDirectSendError').text(response.errordescription);
        g_objAmazonContract = null;
        ButtonAction('boxAmazonDirectSend', 'reset');
      }
      else {
        $('.classAmazonDirectSendError').html('Request failed - <a href="" class="classAmazonDirectChangeAmount">please try again</a>');
        BindAmazonDirectHandlers();
        g_objAmazonContract = null;
        ButtonAction('boxAmazonDirectSend', 'reset');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classAmazonDirectSendError').html('Request failed - <a href="" class="classAmazonDirectChangeAmount">please try again</a>');
      BindAmazonDirectHandlers();
      g_objAmazonContract = null;
      ButtonAction('boxAmazonDirectSend', 'reset');
    }
  });

}
// functions - amazondirect - end

// functions - bitcoindirect - begin
function BitcoinDirectItemSelected(objGridRowData) {
  g_objBitcoinDirectSelected = objGridRowData;
  $('.GridItemBitcoinDirectValue_' + objGridRowData.ID).hide();
  $('.GridItemBitcoinDirectWorking_' + objGridRowData.ID).show();

  if (objGridRowData.RetailerName == 'Amazon.com')
    AmazonDirectContractGet();
}
// functions - bitcoindirect - end


// functions - earnbitcoin - begin

function SetEBWithdrawalAddress(strAddress) {
  g_strCustomEBAddress = strAddress;
}

function SetEBEmailAddress(strAddress) {
  g_EBEmailAddress = strAddress;
}

function SetEBWithdrawalFee(satoshiFee) {
  g_satoshiCustomEBFee = satoshiFee;
  var btcFee = satoshiFee / 1e8;
  g_strCustomEBFee = (btcFee).toFixed(btcFee.toString().length-2);
}

function InitializeEBWithdrawalAddress() {
  $('.classEBCustomAddressFee').text(g_strCustomEBFee);

  if (g_boolDefaultEBWallet && g_strCustomEBAddress == '') {
    SwitchToDefaultEBWallet();
  }
  else {
    SwitchToCustomEBWallet('');
  }
}

function SwitchToCustomEBWallet(idCheckbox) {
  g_idBtnCancel = '';
  ClearEntryFields();
  $('.classCustomerEBWallet_Error').hide();
  $('.classCustomWalletErrorRow').hide();
  $('.classCustomWalletFeeRow').show();
  $('.classPaddingWithoutCustomerEBEntryBox').hide();
  $('.classCheckedNoCustomEBWallet').hide();
  $('.classCheckedYesCustomEBWallet').show();
  $('.classCustomEBWalletNoAddressSelected').hide();
  $('.classCustomEBWalletEnterAddress').hide();
  $('.classCustomEBWalletAddressSelectedRow').hide();
  if (g_strCustomEBAddress == '' || g_boolCustomEBWalletAddressChange) {
    g_boolCustomEBWalletAddressChange = false;
    $('.classCustomEBWalletEnterAddress').show();

    var strDigitalPhysical = idCheckbox.split('_')[1];
    $('#boxCustomEBWalletAddress_' + strDigitalPhysical + '_Edit').focus();

    g_idBtnCancel = 'lnkCustomEBWalletCancel_Digital';
  }
  else {
    $('.classCustomEBWalletAddressSelectedRow').show();
    $('.classCustomEBWalletAddressSelected').html('<a href="' + g_arrayLinkPrefixForAddress[g_defaultCurrency] + g_strCustomEBAddress + '" target="_blank">' + g_strCustomEBAddress + '</a>');
  }
}

function SwitchToDefaultEBWallet() {
  g_idBtnCancel = '';
  $('.classCustomerEBWallet_Error').hide();
  $('.classCustomWalletErrorRow').hide();
  $('.classPaddingWithoutCustomerEBEntryBox').show();
  $('.classCheckedYesCustomEBWallet').hide();
  $('.classCheckedNoCustomEBWallet').show();
  $('.classCustomWalletFeeRow').show();
  $('.classCustomEBWalletEnterAddress').hide();
  $('.classCustomEBWalletAddressSelectedRow').hide();
  if (g_strCustomEBAddress == '') {
    $('.classCustomWalletFeeRow').hide();
    $('.classCustomEBWalletNoAddressSelected').show();
  }
  else {
    $('.classPaddingWithoutCustomerEBEntryBox').hide();
    $('.classCustomEBWalletAddressSelectedRow').show();
  }
}

function CheckToEnableCustomEBWalletSave(idControl) {
  $('.classCustomerEBWallet_Error').hide();
  $('.classCustomWalletErrorRow').hide();
  $('.classCustomWalletFeeRow').show();
  var strDigitalPhysical = idControl.split('_')[1];

  var strInput = $('#' + idControl).val().trim();
  if (strInput == null || strInput == '') {
    ButtonAction('btnCustomEBWalletAddressSave_' + strDigitalPhysical, 'disable');
  }
  else {
    ButtonAction('btnCustomEBWalletAddressSave_' + strDigitalPhysical, 'enable');
  }
}

function SaveCustomEBAddress(idControl) {
  var strDigitalPhysical = idControl.split('_')[1];
  var strBitcoinAddress = $('#boxCustomEBWalletAddress_' + strDigitalPhysical + '_Edit').val();
  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.CurrencyCode = g_defaultCurrency;
  modelInput.BitcoinAddress = strBitcoinAddress.trim();

  $.ajax({
    type: 'POST',
    url: g_urlEarnCustomWallet,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode === 'SUCCESS') {
        g_strCustomEBAddress = strBitcoinAddress.trim();
        SwitchToCustomEBWallet('');
      }
      else {
        ButtonAction('btnCustomEBWalletAddressSave_' + strDigitalPhysical, 'reset');
        $('.classCustomWalletFeeRow').hide();
        $('.classCustomWalletErrorRow').show();
        $('.classCustomWallet_Error').html(response.errordescription);
        $('#boxCustomEBWalletAddress_' + strDigitalPhysical + '_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnCustomEBWalletAddressSave_' + strDigitalPhysical, 'reset');
      $('.classCustomWalletFeeRow').hide();
      $('.classCustomWalletErrorRow').show();
      $('.classCustomWallet_Error').html('Error saving custom Earn <span class="classCoinNameLong" /> address: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      $('#boxCustomEBWalletAddress_' + strDigitalPhysical + '_Edit').focus();
    }
  });

}

function EarnBitcoinList(strGridGroupID, LoadType) {
  $.ajax({
    type: 'GET',
    url: g_urlEarnBitcoinOptions + '?LoadType=' + LoadType + '&strGridID=' + strGridGroupID + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&strCurrencyCode=' + g_defaultCurrency,      // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        arrayGridItemList = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);

          $('#noavailable' + strGridGroupID).hide();
          $('#loading' + strGridGroupID).show();

          // now load the rest of the rows
          EarnBitcoinList(strGridGroupID, 1);
        }
        else {

          GridReplaceRows(strGridGroupID, arrayGridItemList);
          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
            g_EarnBitcoinOptions[strGridGroupID] = {};
          }
          else {
            $('#noavailable' + strGridGroupID).hide();
            g_EarnBitcoinOptions[strGridGroupID] = arrayGridItemList;
            SetConversionRate(g_defaultCurrency, g_dictConversionRate[g_defaultCurrency]);
          }
        }
      }
    },
    failure: function (response) {
      
    }
  });
  return false;
}
function EarnBitcoinListDigital(sequence) {
  $('.classEBDigitalMerchant').html(g_arrayEarnBitcoinOptions[sequence].merchantfriendly);
  $('.classEBDigitalLandingURLToPurchase').attr("href", g_arrayEarnBitcoinOptions[sequence].urlAmazon);
  $('.classEBDigitalPic1').attr("src", g_arrayEarnBitcoinOptions[sequence].urlPic1);
  $('.classEBDigitalPic2').attr("src", g_arrayEarnBitcoinOptions[sequence].urlPic2);
  $('.classEarnBitcoinRate').removeAttr('class').addClass('payoutprice').addClass('classEarnBitcoinRate').addClass('ConversionRateStyle').addClass('classEBDigital' + g_defaultCurrency + '_' + g_arrayEarnBitcoinOptions[sequence].merchant);
  $('.classEarnBitcoinRateSub100').removeAttr('class').addClass('payoutprice').addClass('classEarnBitcoinRateSub100').addClass('ConversionRateStyle').addClass('classEBDigitalSub100' + g_defaultCurrency + '_' + g_arrayEarnBitcoinOptions[sequence].merchant);
  $('.classEBDiscountPct').removeAttr('class').addClass('classEBDiscountPct').addClass('classEBBestRatePct_Digital_' + g_arrayEarnBitcoinOptions[sequence].merchant);
  $('.classEBDiscountPctSub100').removeAttr('class').addClass('classEBDiscountPctSub100').addClass('classEBDigitalPctSub100_' + g_arrayEarnBitcoinOptions[sequence].merchant);
  if (g_arrayEarnBitcoinOptions[sequence].pctBaseFor100OrOver == g_arrayEarnBitcoinOptions[sequence].pctBaseForUnder100) {
    $('.classEarnBitcoinSub100RateDifferent').hide();
  }
  else {
    $('.classEarnBitcoinSub100RateDifferent').show();
  }
  SetConversionRate(g_defaultCurrency, g_dictConversionRate[g_defaultCurrency]);
  
    
}

function EarnBitcoinListPhysical(strGridGroupID, LoadType, sequence) {
  $.ajax({
    type: 'GET',
    url: g_urlEarnBitcoinOptionsPhysical + '?LoadType=' + LoadType + '&strGridID=' + strGridGroupID + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&strCurrencyCode=' + g_defaultCurrency + '&sequence=' + sequence,       // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        arrayGridItemList = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          GridLoadEmptyRow(strGridGroupID, strEmptyRow);
          GridReplaceRows(strGridGroupID, null);

          $('#noavailable' + strGridGroupID).hide();
          $('#loading' + strGridGroupID).show();

          // now load the rest of the rows
          EarnBitcoinListPhysical(strGridGroupID, 1, sequence);
        }
        else {

          GridReplaceRows(strGridGroupID, arrayGridItemList);
          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            $('#loading' + strGridGroupID).hide();
            $('#noavailable' + strGridGroupID).show();
            g_EarnBitcoinOptions[strGridGroupID] = {};
          }
          else {
            $('#noavailable' + strGridGroupID).hide();
            g_EarnBitcoinOptions[strGridGroupID] = arrayGridItemList;
            SetConversionRate(g_defaultCurrency, g_dictConversionRate[g_defaultCurrency]);
            SetEarnBitcoinDiscountPercent(g_floatEarnBitcoinDiscountBonus);
          }
        }
      }
      
    },
    failure: function (response) {

    }
  });
  return false;
}

function CheckIfToEnableEarnBitcoinContinue() {
  strAmazonOrderNumber = $('#boxEBDigitalOrderNumber_Edit').val();
  if (strAmazonOrderNumber.trim() === '')
    ButtonAction('btnAmazonOrderNumberContinue', 'disable');
  else
    ButtonAction('btnAmazonOrderNumberContinue', 'enable');
}


function CheckIfToEnableEarnBitcoinPhysicalSubmit() {
  strAmazonOrderNumber = $('#boxAmazonOrderNumberPhysical_Edit').val();
  if (strAmazonOrderNumber.trim() === '')
    ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'disable');
  else
    ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'enable');
}



function CheckIfToEnableEarnBitcoinSubmit() {
  var idOption = idOptionEditControl.split('_')[0].split('boxAmazonOrderNumberOption')[1];
  strAmazonOrderNumber = $('#' + idOptionEditControl).val();
  if (strAmazonOrderNumber.trim() === '')
    ButtonAction('btnAmazonOrderNumberSubmit', 'disable');
  else
    ButtonAction('btnAmazonOrderNumberSubmit', 'enable');
}
function BitcoinEarnSubmitAmazonOrderNumber(strAmazonOrderNumber, idOption) {
  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.OrderNumber = strAmazonOrderNumber;
  modelInput.centsValue = -1;
  modelInput.Merchant = g_arrayEarnBitcoinOptions[idOption].merchant;
  modelInput.CurrencyCode = g_defaultCurrency;
  modelInput.CustomEBAddress = g_strCustomEBAddress;
  modelInput.CustomEBFee = g_satoshiCustomEBFee;

  $.ajax({
    type: 'POST',
    url: g_urlEarnBitcoinSubmitAmazon,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode === 'SUCCESS') {
        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);
      }
      else if (response.responsecode === 'INVALID_INPUT') {
        $('.classAmazonEarnBitcoinError').text(response.errordescription);
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
      }
      else if (response.responsecode === 'DUPLICATE') {
        $('.classAmazonEarnBitcoinError').text('Duplicate order number');
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
      }
      else if (response.responsecode === 'TEMPORARILY_SUSPENDED') {
        $('.classAmazonEarnBitcoinError').text(response.errordescription);
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
      }
      else if (response.responsecode === 'INVALID_TYPE') {
        $('.classAmazonEarnBitcoinError').html('<b>Physical cards for this order already received.&nbsp;&nbsp;&nbsp;&nbsp;<a href="" onclick="ShortcutToEarnBitcoin(); return false;">Submit physical card order</a></b>');
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
      }
      else if (response.responsecode ===  'NOT_LOGGED_IN') {
        $('.classAmazonEarnBitcoinError').html('<b>You need to be logged in to Earn <span class="classCoinNameLong"></span> </b> <br /><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
        AttachClassPleaseLoginController();
        SetSupportedCurrenciesObject(g_supportedCurrencies);
      }
      else {
        ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
        $('.classAmazonEarnBitcoinError').html('Error submitting Amazon.com order number: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
        $('#boxAmazonSafewayOrderNumber_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnAmazonOrderNumberSubmit', 'reset');
      $('.classAmazonEarnBitcoinError').html('Error submitting Amazon.com order number: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      $('#boxAmazonSafewayOrderNumber_Edit').focus();
    }
  });

}
function BitcoinEarnSubmitAmazonOrderNumberPhysical(strAmazonOrderNumber, merchant, centsValue) {

  if (g_strCustomEBAddress == '' || g_strCustomEBAddress == null) {
    ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'enable');
    $('.classSpaceForCustomEBAddress').css("background-color", "#fff3f3");
    $('.classAmazonEarnBitcoinError').text('Let us know where to send your funds');
  } else {

    modelInput = {};
    modelInput.serviceid = g_guidServiceID;
    modelInput.sessionid = g_guidSessionID;
    modelInput.OrderNumber = strAmazonOrderNumber;
    modelInput.Merchant = merchant;
    modelInput.centsValue = centsValue;
    modelInput.CurrencyCode = g_defaultCurrency;
    modelInput.CustomEBAddress = g_strCustomEBAddress;
    modelInput.CustomEBFee = g_satoshiCustomEBFee;

    $.ajax({
      type: 'POST',
      url: g_urlEarnBitcoinSubmitAmazon,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(modelInput),
      success: function (response) {
        if (response.responsecode === 'SUCCESS') {
          g_boolNavigateToTxHistory = true;
          TxHistoryList('gridTxHistory', 1);
        }
        else if (response.responsecode === 'INVALID_INPUT') {
          $('.classAmazonEarnBitcoinError').text('Invalid Amazon.com order number');
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
        }
        else if (response.responsecode === 'INVALID_TYPE') {
          $('.classAmazonEarnBitcoinError').html('<b>Digital e-cards for this order already received.&nbsp;&nbsp;&nbsp;&nbsp;<a href="" onclick="ShortcutToEarnBitcoin(); return false;">Submit digital order</a></b>');
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
        }
        else if (response.responsecode === 'DUPLICATE') {
          $('.classAmazonEarnBitcoinError').text('Duplicate order number');
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
        }
        else if (response.responsecode === 'TEMPORARILY_SUSPENDED') {
          $('.classAmazonEarnBitcoinError').text(response.errordescription);
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
        }
        else if (response.responsecode === 'NOT_LOGGED_IN') {
          $('.classAmazonEarnBitcoinError').html('<b>You need to be logged in to Earn <span class="classCoinNameLong"></span> </b> <br /><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
          AttachClassPleaseLoginController();
          SetSupportedCurrenciesObject(g_supportedCurrencies);
        }
        else {
          $('.classAmazonEarnBitcoinError').html('Error submitting Amazon.com order number: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
          ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
          $('#boxAmazonOrderNumberPhysical_Edit').focus();
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $('.classAmazonEarnBitcoinError').html('Error submitting Amazon.com order number: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
        ButtonAction('btnAmazonOrderNumberPhysicalSubmit', 'reset');
        $('#boxAmazonOrderNumberPhysical_Edit').focus();
      }
    });
  }
}
function EarnBitcoinItemSelected(objGridRowData) {
  if (g_boolUserLoggedIn)
    MenuSubClick('LeftMenu', 'EarnTrade', 'EarnOption' + objGridRowData.ID);
  else
    window.location = g_urlLoginRegister;
}

function ProcessEarnBitcoinPhysicalSelectedIfNecessary() {
  if (g_EarnBitcoinPhysicalGridSelected != null) {
    g_EarnBitcoinPhysicalValueSelected = 0;
    EarnBitcoinPhysicalSelected(g_EarnBitcoinPhysicalGridSelected);
  }
}

function EarnBitcoinPhysicalSelected(objGridRowData) {
  ClearEntryFields();
  if (g_EarnBitcoinPhysicalValueSelected === 0) {
    g_EarnBitcoinPhysicalGridSelected = objGridRowData;
    g_EarnBitcoinPhysicalValueSelected = objGridRowData.centsValue;
    g_EarnBitcoinPhysicalQuantitySelected = objGridRowData.quantity;
    g_EarnBitcoinPhysicalMerchantSelected = objGridRowData.merchant;
    $('#tblEarnBitcoinPhysicalCardSelected').empty();
    var strHTMLRow = objGridRowData.strHTMLRow.replace('GridItem_row_Hover', '').replace('GridItem_row_Dotted', '');
    $('#tblEarnBitcoinPhysicalCardSelected').append(strHTMLRow);
    $('.classEarnBitcoinPhysicalUSDSelected').text((g_EarnBitcoinPhysicalValueSelected / 100.0).toFixed(2));
    $('.classEarnBitcoinPhysicalUSDPerCardSelected').text((g_EarnBitcoinPhysicalValueSelected / g_EarnBitcoinPhysicalQuantitySelected / 100.0).toFixed(2));
    $('.classEarnBitcoinPhysicalQuantityOfCardsSelected').text(g_EarnBitcoinPhysicalQuantitySelected.toFixed(0));
    $('.classEarnPhysicalMerchant').html(g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].merchantfriendly);
    $('.classPhysicalCardAddToCart').attr('src', objGridRowData.urlPicHelp1);
    $('.classPhysicalCardProceedToCheckout').attr('src', objGridRowData.urlPicHelp2);
    $('.classEarnPhysicalPreSelect').hide();
    $('.classEarnPhysicalPostSelect').show();
    $('.classPhysicalStep7').show();
    SetConversionRate(g_defaultCurrency, g_dictConversionRate[g_defaultCurrency]);
    SetEarnBitcoinDiscountPercent(g_floatEarnBitcoinDiscountBonus);
    GridAttachHandlers();
    if (objGridRowData.urlPicHelp1.length > 10) {
      ButtonAction('btnEarnBitcoinPhysicalAccessWishlist', 'enable');
      ButtonAction('btnPhysicalAdditionalInstructionsExpand', 'enable');
    }
    g_idBtnCancel = 'lnkEarnBitcoinPhysicalSelectCancel';
  }
  else {
    //EarnBitcoinPageInit('EarnOption', g_EarnBitcoinOptionSelected);
  }
}

function EarnCalculator() {
  ButtonAction('btnEBCalculatorGoToAmazon', 'reset');
  $('#editCalculatorQuantity_Edit').val('1');
  $('#editCalculatorValue_Edit').val('100');
  $.fancybox($('#divEarnCalculator'));
  ButtonAction('btnEBCalculator', 'reset');
  $('#editCalculatorQuantity_Edit').focus();
  EarnCalculatorCompute();
  g_idBtnCancel = 'lnkEarnCalculatorCancel';
}

function EarnCalculatorValidateAndCompute() {
  var boolQuantityValidated = false;
  var boolValueValidated = false;
  var quantity = $('#editCalculatorQuantity_Edit').val();
  if (quantity == '') {
    boolQuantityValidated = true;
  }
  else if (quantity.indexOf('.') >= 0 || !$.isNumeric(quantity)) {
    $('#editCalculatorQuantity_Edit').val(g_EarnBitcoinCalculatorQuantitySelected);
  }
  else if (quantity.indexOf('0') == 0) {
    $('#editCalculatorQuantity_Edit').val(g_EarnBitcoinCalculatorQuantitySelected);
  }
  else if (quantity < 0 || quantity > 10) {
    $('#editCalculatorQuantity_Edit').val(g_EarnBitcoinCalculatorQuantitySelected);
    $('#editCalculatorQuantity_Error').html('Quantity must be between 1 and 10');
  }
  else {
    boolQuantityValidated = true;
  }

  if (boolQuantityValidated) {
    var value = $('#editCalculatorValue_Edit').val();
    if (value == '') {
      boolValueValidated = true;
    }
    else if (!$.isNumeric(value)) {
      $('#editCalculatorValue_Edit').val(g_EarnBitcoinCalculatorValueSelected);
    }
    else if (value.indexOf('0') == 0) {
      $('#editCalculatorValue_Edit').val(g_EarnBitcoinCalculatorValueSelected);
    }
    else if (value < 25) {
      $('#editCalculatorValue_Error').html('Value of card must be at least $25');
      boolValueValidated = true;
    }
    else if (value > 200) {
      $('#editCalculatorValue_Edit').val(g_EarnBitcoinCalculatorValueSelected);
      $('#editCalculatorValue_Error').html('Value of card must be at most $200');
    }
    else {
      boolValueValidated = true;
    }

  }


  if (boolQuantityValidated && boolValueValidated) {
    EarnCalculatorCompute();    
  }


}

function EarnCalculatorCompute() {
  g_EarnBitcoinCalculatorQuantitySelected = $('#editCalculatorQuantity_Edit').val();
  g_EarnBitcoinCalculatorValueSelected = $('#editCalculatorValue_Edit').val();
  var total = g_EarnBitcoinCalculatorQuantitySelected * g_EarnBitcoinCalculatorValueSelected;
  $('.classUSDCalculatorTotalPurchase').text(numberWithCommas(total.toFixed(2)));
  $('.classCalculatorEBRateActive').removeAttr('class').addClass('classCalculatorEBRateActive');
  if (total / g_EarnBitcoinCalculatorQuantitySelected >= 100.0) {
    $('#cellEBCalculatorRateOver100').show();
    $('#cellEBCalculatorRateSub100').hide();
    g_EarnBitcoinCalculatorQuantitySub100Rate = false;
  }
  else {
    $('#cellEBCalculatorRateOver100').hide();
    $('#cellEBCalculatorRateSub100').show();
    $('.classCalculatorEBRateActive').addClass('classEBDigitalSub100' + g_defaultCurrency + '_' + g_arrayEarnBitcoinOptions[g_EarnBitcoinOptionSelected].merchant);
    g_EarnBitcoinCalculatorQuantitySub100Rate = true;
  }

  SetConversionRate(g_defaultCurrency, g_dictConversionRate[g_defaultCurrency]);
}

// functions - earnbitcoin - end

// functions - purchase - begin
function PurchaseReview(quantity, itemSelected, funcSucceeded, funcFailed) {

  var modelPurchaseSelected = {};
  modelPurchaseSelected.guidSessionID = g_guidSessionID;
  modelPurchaseSelected.guidServiceID = g_guidServiceID;
  modelPurchaseSelected.guidParentServiceID = itemSelected.guidParentServiceID;
  modelPurchaseSelected.USDItemPrice = itemSelected.USDItemPrice;
  modelPurchaseSelected.promotionCode = g_promotionCode;
  modelPurchaseSelected.guidCatalogOfferID = itemSelected.ID;
  modelPurchaseSelected.Quantity = quantity;
  modelPurchaseSelected.CurrencyCode = g_defaultCurrency;
  $.ajax({
    type: 'PATCH',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelPurchaseSelected),
    url: g_urlPurchase,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        funcSucceeded();
      }
      else {
        funcFailed(response.responsecode, response.errordescription, response.jsonData);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '', '');
    }

  });
}
function PurchaseArchive(objGridItem, boolArchive, funcSucceeded, funcFailed) {
  objPurchaseArchiveParams = {};
  objPurchaseArchiveParams.sessionid = g_guidSessionID;
  objPurchaseArchiveParams.serviceid = g_guidServiceID;
  objPurchaseArchiveParams.guidInventoryID = objGridItem.ID;
  objPurchaseArchiveParams.boolArchive = boolArchive;


  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(objPurchaseArchiveParams),
    url: g_urlPurchase,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        funcSucceeded(objGridItem);
      }
      else {
        funcFailed(objGridItem, response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '');
    }

  });
}
function PurchaseCancelIfUnfunded(ContractID, funcSucceeded, funcFailed) {
  objCancellationRequest = {};
  objCancellationRequest.guidSessionID = g_guidSessionID;
  objCancellationRequest.guidServiceID = g_guidServiceID;
  objCancellationRequest.ContractID = ContractID;

  $.ajax({
    type: 'DELETE',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(objCancellationRequest),
    url: g_urlPurchase,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        funcSucceeded();
      }
      else {
        funcFailed(response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '');
    }

  });

}
function PurchaseSendToFriend(funcSucceeded, funcFailed) {
  var modelContractSubmit = {};
  modelContractSubmit.guidSessionID = g_guidSessionID;
  modelContractSubmit.guidServiceID = g_guidServiceID;
  modelContractSubmit.strItemSenderNote = $('#boxNoteForRecipient_Edit').val().trim();
  //modelContractSubmit.strSMSOrAuthyCode = $('#boxWithdrawAuthyCode_Edit').val().trim();
  modelContractSubmit.guidAddressBookEntry = g_strPayeeAddressBookID;
  modelContractSubmit.strItemReceiverAddress = g_strPayeeAddress;
  modelContractSubmit.strItemReceiverName = g_strPayeeName;
  modelContractSubmit.longItemReceiverTwitterID = g_longPayeeTwitterID;
  modelContractSubmit.guidInventoryID = g_GridCatalogItemSelected.ID;

  if (!g_boolAuthyEnabled)
    modelContractSubmit.strSMSFlowID = g_guidCodeFlowID;

  $.ajax({
    type: 'PUT',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractSubmit),
    url: g_urlPurchase,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        funcSucceeded();
      }
      else {
        funcFailed(response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '');
    }

  });

}
function PurchasePromotionCheck(itemSelected, promotionCode, funcSucceeded, funcFailed) {
  var modelPromotionCheck = {};
  modelPromotionCheck.guidSessionID = g_guidSessionID;
  modelPromotionCheck.guidServiceID = g_guidServiceID;
  modelPromotionCheck.promotionCode = promotionCode;
  modelPromotionCheck.guidCatalogOfferID = itemSelected.ID;

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelPromotionCheck),
    url: g_urlPurchasePromotion,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        objResponse = JSON.parse(response.jsonData);
        funcSucceeded(promotionCode, objResponse);
      }
      else {
        funcFailed(promotionCode, response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed(promotionCode, 'please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed(promotionCode, 'please try again', '');
    }

  });
}
// functions - purchase - end

// functions - purchasesell - begin
function PurchaseSellContractGet(funcSucceeded, funcFailed) {
  modelPurchaseSellContractRequest = {};
  modelPurchaseSellContractRequest.guidSessionID = g_guidSessionID;
  modelPurchaseSellContractRequest.guidServiceID = g_guidServiceID;
  modelPurchaseSellContractRequest.guidInventoryID = g_GridCatalogItemSelected.ID;
  modelPurchaseSellContractRequest.CurrencyCode = g_defaultCurrency;

  $.ajax({
    type: 'PATCH',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelPurchaseSellContractRequest),
    url: g_urlPurchaseSell,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        objResponse = JSON.parse(response.jsonData);
        funcSucceeded(objResponse);
      }
      else {
        funcFailed(response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '');
    }

  });
}
function PurchaseSellContractSubmit(guidContractFlow, funcSucceeded, funcFailed) {
  modelPurchaseSellContractSubmit = {};
  modelPurchaseSellContractSubmit.sessionid = g_guidSessionID;
  modelPurchaseSellContractSubmit.serviceid = g_guidServiceID;
  modelPurchaseSellContractSubmit.guidFlowID = guidContractFlow;

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelPurchaseSellContractSubmit),
    url: g_urlPurchaseSell,
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'DELAYED') {

        funcSucceeded();
      }
      else {
        funcFailed(response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed('please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed('please try again', '');
    }

  });
}
// functions - purchasesell - end


// functions - inventory - begin
function InventoryHandersAttach() {
  $('.cellMakeADeposit').unbind().click(function (event) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    ShortcutToBuyBitcoin();
    event.stopPropagation();
    return false;
  });

  $('.classViewOpenGiftCard').click('input', function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $.each(GridGroups['gridGiftCard']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
      if (itemGiftCard.ID == strItemID) {
        GiftCardItemOpenView(itemGiftCard);
        return false;
      }
    });
    return false;
  });

  $('.classOneClickRedeemOnAmazon').click('input', function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $.each(GridGroups['gridGiftCard']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
      if (itemGiftCard.ID == strItemID) {
        GiftCardRedeemOnAmazon(itemGiftCard.ClaimCode);
        return false;
      }
    });

    return false;
  });

  $('.classSendInventoryToFriend').click('input', function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    if (strItemID == null)
      InventorySendToFriend(g_GridCatalogItemSelected);
    else
      $.each(GridGroups['gridGiftCard']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
        if (itemGiftCard.ID == strItemID) {
          InventorySendToFriend(itemGiftCard);
          return false;
        }
      });
    return false;
  });

  $('.classSellBackInventory').unbind().click(function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    if (strItemID == null)
      InventorySellToUs(g_GridCatalogItemSelected);
    else
      $.each(GridGroups['gridGiftCard']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
        if (itemGiftCard.ID == strItemID) {
          g_GridCatalogItemSelected = itemGiftCard;
          InventorySellToUs(itemGiftCard);
          return false;
        }
      });
    return false;
  });

  $('.classInventoryArchive').unbind().click(function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $.each(GridGroups['gridGiftCard']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
      if (itemGiftCard.ID == strItemID) {
        InventoryItemArchive(itemGiftCard);
        return false;
      }
    });
    return false;
  });

  $('.classUnarchiveInventory').unbind().click(function (e) {
    idRow = $(this).prop('id');
    strItemID = idRow.split('_')[1];
    $.each(GridGroups['gridGiftCardArchive']['GridItem'].arrayGridRowData, function (key, itemGiftCard) {
      if (itemGiftCard.ID == strItemID) {
        GiftCardItemUnarchive(itemGiftCard);
        return false;
      }
    });
    return false;
  });

}
function InventoryItemList(strGridGroupID, LoadType) {
  var giftCardList;
  if (g_InventoryListReadyToPoll[strGridGroupID] == null)
    g_InventoryListReadyToPoll[strGridGroupID] = true;

  if (g_InventoryListReadyToPoll[strGridGroupID]) {
    g_InventoryListReadyToPoll[strGridGroupID] = false;
    $.ajax({
      type: 'GET',
      url: g_urlGiftCardInventory + '?loadType=' + LoadType + '&strGridID=' + strGridGroupID + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID,    // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
      success: function (response) {
        g_InventoryListReadyToPoll[strGridGroupID] = true;

        if (g_boolNavigateToInventory) {
          ButtonAction('btnTxHistoryClaimGiftCard', 'reset');
          $.fancybox.close();
          ShortcutToMyInventory();
          g_boolNavigateToInventory = false;
        }

        if (response.responsecode == 'SUCCESS') {

          giftCardList = JSON.parse(response.jsonData);
          if (LoadType == g_loadTypes.Empty) {
            strEmptyRow = giftCardList[0].strHTMLRow;
            GridLoadEmptyRow(strGridGroupID, strEmptyRow);
            GridReplaceRows(strGridGroupID, null);
            $('#noavailable' + strGridGroupID).hide();
            $('#loading' + strGridGroupID).show();
            // now load the rest of the rows
            if (strGridGroupID == 'gridInventoryShortlink')
              InventoryItemList(strGridGroupID, g_loadTypes.Shortlink);
            else
              InventoryItemList(strGridGroupID, g_loadTypes.All);
          }
          else {
            if (response.responsecode != 'NOENTRY' && giftCardList.length > 0) {
              GridReplaceRows(strGridGroupID, giftCardList);
              InventoryHandersAttach();
              AdjustHeightOnResize(strGridGroupID);

              if (giftCardList.length > 5) {
                $('.classOtherServices_' + strGridGroupID).hide();
              }
              else {
                $('.classOtherServices_' + strGridGroupID).show();
              }

              if (strGridGroupID == 'gridGiftCard') {
                var cntGiftCards = giftCardList.length;
                var cntGiftCardsUsable = 0;
                for (i = 0; i < cntGiftCards; i++) {
                  if (giftCardList[i].enumContractStatus == 'PurchaseComplete' || giftCardList[i].enumContractStatus == 'SendComplete' || giftCardList[i].enumContractStatus == 'ZincError')
                    cntGiftCardsUsable++;
                }


                if (cntGiftCardsUsable > 0) {
                  var lblCards;
                  if (cntGiftCardsUsable > 1)
                    lblCards = ' active items';
                  else
                    lblCards = ' active item';
                  $('.classGiftCardCount').text(cntGiftCardsUsable + lblCards);
                  $('.classGiftCardCountNumber').text(cntGiftCardsUsable + lblCards);
                }
                else {
                  $('.classGiftCardCount').html('<i>No inventory</i>');
                  $('.classGiftCardCountNumber').text('0 active items');
                }

              }

              InventoryProcessTwitterHandles(giftCardList);
            }
            else {
              GridReplaceRows(strGridGroupID, null);
              $('#noavailable' + strGridGroupID).show();
              $('#loading' + strGridGroupID).hide();
              $('#noavailable' + strGridGroupID).show();
              $('.classOtherServices_' + strGridGroupID).show();

              if (strGridGroupID == 'gridGiftCard')
                $('.classGiftCardCount').html('<i>No inventory</i>');

              return;
            }
          }
        }
        else {
          $('#cellLoadGiftCardError').html('Unable to load gift card inventory: ' + response.errordescription);
        }
      },
      failure: function (response) {
        g_InventoryListReadyToPoll[strGridGroupID] = true;
        $('#cellLoadGiftCardError').html('Unable to load gift card inventory - please try again');

        if (g_boolNavigateToInventory) {
          ButtonAction('btnTxHistoryClaimGiftCard', 'reset');
          $.fancybox.close();
          ShortcutToMyInventory();
          g_boolNavigateToInventory = false;
        }

      }
    });
  }
  return false;
}
function GiftCardClaimCodeGet(guidInventoryID) {
  var modelClaimCodeRequest = {};
  modelClaimCodeRequest.serviceid = g_guidServiceID;
  modelClaimCodeRequest.sessionid = g_guidSessionID;
  modelClaimCodeRequest.guidInventoryID = guidInventoryID;

  $('.classGiftCardDetailWarningViewClaim').hide();
  $('.classGiftCardDetailWarningWorking').show();
  $('.classClaimCode').removeClass().addClass('classClaimCode').addClass('classClaimCode_' + guidInventoryID);


  $.ajax({
    type: 'PATCH',
    url: g_urlGiftCardInventory,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelClaimCodeRequest),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        objClaimCode = JSON.parse(response.jsonData);
        $.fancybox.close();
        g_GridCatalogItemSelected.ClaimCode = objClaimCode.ClaimCode;
        if (objClaimCode.PinCode != '') {
          //$('.classPinCode_' + guidInventoryID).text(objClaimCode.PinCode);
          //$('.classPinCodeEnvenlope_' + guidInventoryID).show();
          g_GridCatalogItemSelected.PinCode = objClaimCode.PinCode;
        }

        if (g_GridCatalogItemSelected.enumCardStatus == 'assigned' || g_GridCatalogItemSelected.enumCardStatus == 'reserved') {
          g_GridCatalogItemSelected.enumCardStatus = 'opened';

          if (g_strShortcodeCommand == 'Balance') {
            InventoryItemList('gridInventoryShortlink', g_loadTypes.Empty);
          }
          else {
            InventoryItemList('gridGiftCard', g_loadTypes.All);
          }
        }

        if (g_strShortcodeCommand == 'Balance') {
          DisplayShortCode('inventory');
        }
        else {
          GiftCardItemOpenView(g_GridCatalogItemSelected);
        }

      }
      else if (response.responsecode == 'NO_INVENTORY_AVAILABLE') {
        $('.classGiftCardDetailWarningWorking').hide()
        $('.classGiftCardDetailWarningViewClaim').show()
        $('#lnkViewClaimCodeConfirmed').hide();
        $('.classClaimCodeError').html('<b>Claim code view temporarily delayed.</b> <br /></br />Please try again in 1 hour.  If problem persists, contact <b>Support@iPayYou.io</b><br /><br />');
      }
      else {
        $('.classClaimCodeError').html('Unable to obtain claim code: <b>' + response.responsecode + '</b>');
        $('.classGiftCardDetailWarningWorking').hide()
        $('.classGiftCardDetailWarningViewClaim').show()
      }
    },
    failure: function (response) {
      $('.classClaimCodeError').text('Unable to obtain claim code - <b>please try again</b>');
      $('.classGiftCardDetailWarningWorking').hide()
      $('.classGiftCardDetailWarningViewClaim').show()

    }
  });

  return false;

}
function InventoryProcessTwitterHandles(arrayGridItemList) {
  $.each(arrayGridItemList, function (key, itemInventory) {
    if (itemInventory.longTwitterID > 0) {
      TwitterGetHandleFromID(itemInventory.longTwitterID, 'TwitterSender');
    }
  });
}
function InventorySellToUs(objGridItem) {
  $.fancybox.close();

  InventorySelectedItemSet(objGridItem)
  InventoryInit('InventorySellToUs');

}
function InventorySendToFriend(objGridItem) {
  $.fancybox.close();

  InventorySelectedItemSet(objGridItem)
  InventoryInit('InventorySendToFriend');

}
function InventorySelectedItemSet(objGridItem) {
  g_GridCatalogItemSelected = objGridItem;
  $('.classSelectedGiftCardImage').prop('src', objGridItem.Thumbnail);
  $('.classGiftCardDetailDesc').text(objGridItem.DescriptionShort);
  $('.classSelectedGiftCardUSDValue').text('$' + numberWithCommas((objGridItem.USDValue).toFixed(2)));
}
function InventorySellContractGetSUCCESS(modelContractSellResponse) {
  g_guidItemSellContractFlow = modelContractSellResponse.guidContractFlow;
  ButtonAction('btnGiftCardSellNow', 'enable');
  $('#cellSelectedGiftCardUSDRestockingFeeWorking').hide();
  $('.classSelectedGiftCardUSDRestockingFee').text('$' + numberWithCommas((g_GridCatalogItemSelected.USDValue - modelContractSellResponse.fiatUSDFinalRefund).toFixed(2)));
  $('.classSelectedGiftCardUSDYouWillReceive').text('$' + numberWithCommas(modelContractSellResponse.fiatUSDFinalRefund.toFixed(2)));

  $('.classSelectedGiftCardUSDRestockingFee').show();
  $('#cellSelectedGiftCardUSDRestockingFee').show();

}
function InventorySellContractGetFAILURE(errorCode, errorDesc) {
  ButtonAction('btnGiftCardSellNow', 'reset');
  $('#cellSelectedGiftCardUSDRestockingFeeWorking').hide();
  $('#cellSellGiftCardError').show();
}
function InventorySellContractSubmitSUCCESS() {
  ShortcutToTxHistory();
  TxHistoryList('gridTxHistory', 1);
  InventoryItemList('gridGiftCard', g_loadTypes.All);
}
function InventorySellContractSubmitFAILURE(errorcode, errordesc) {
  ButtonAction('btnGiftCardSellNow', 'reset');
  $('#cellSelectedGiftCardUSDRestockingFeeWorking').hide();
  $('#cellSellGiftCardError').show();
}
// functions - inventory - end

// functions - addressesused - begin
function AddressesCurrentForDeposit(strGridGroupID, LoadType) {
  $.ajax({
    type: 'GET',
    url: g_urlAddressesUsed + '?LoadType=' + LoadType + '&strGridName=' + strGridGroupID + '&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&strAddressTypeRequested=CurrentForDeposit' + '&CurrencyCode=' + g_defaultCurrency,      // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        arrayGridItemList = JSON.parse(response.jsonData);
        if (LoadType == 0) {
          strEmptyRow = arrayGridItemList[0].strHTMLRow;
          Grid2LoadEmptyRow(strGridGroupID, strEmptyRow);
          Grid2ReplaceRows(strGridGroupID, null);
          $('#loading' + strGridGroupID).show();
          // now load the rest of the rows
          AddressesCurrentForDeposit(strGridGroupID, 1);
        }
        else {

          Grid2ReplaceRows(strGridGroupID, arrayGridItemList);
          if (response.responsecode == 'NOENTRY' || arrayGridItemList.length == 0) {
            $('#noavailable' + strGridGroupID).show();
            g_AddressCurrentForDeposit = {};
          }
          else {
            g_AddressCurrentForDeposit = arrayGridItemList;
          }

          SetSupportedCurrenciesObject(g_supportedCurrencies);
          AddressesUsedComputeFiat();
        }
      }
      else {
        $('#cellLoadAddressBookError').html('Unable to load address book: ' + response.errordescription);
      }
    },
    failure: function (response) {
      $('#cellLoadAddressBookError').html('Unable to load address book - please try again');
    }
  });
  return false;

}
function AddressesUsedWithBalance(strGridName, LoadType) {

}
function AddressesUsedWithNoBalance(strGridName, LoadType) {

}
function AddressesUsedComputeFiat() {
  $.each(g_AddressCurrentForDeposit, function (index, value) {
    if (value.strBitcoinAddress != null) {
      var floatUSDEquivalent = value.satoshiBalance / 1e8 * g_dictConversionRate[g_defaultCurrency];
      var strUSDEquivalent = '<b>$' + numberWithCommas(floatUSDEquivalent.toFixed(2)) + '</b>';
      $('.classUSDEquivalent_' + value.strBitcoinAddress.replace(':', '')).html(strUSDEquivalent);

    }
  });
}
// functions - addressesused - end

// functions - currencies - begin
function NavigateToCurrency(currencyCode) {
  // clear the menu state so we end up back at welcome screen.
  // eraseCookie('menuState1');
  if (g_boolUserLoggedIn) {
    window.location.href = window.location.origin + '?user=' + g_guidSessionID + '&cu=' + currencyCode;
  }
  else {
    window.location.href = window.location.origin + '?cu=' + currencyCode;
  }

}
function CurrencyUpdateDefault(NewDefaultCurrencyCode) {

  var modelParams = {};
  modelParams.guidSessionID = g_guidSessionID;
  modelParams.guidServiceID = g_guidServiceID;
  modelParams.CurrencyCode = NewDefaultCurrencyCode;

  $.ajax({
    type: 'PATCH',
    url: g_urlCurrency,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        NavigateToCurrency(NewDefaultCurrencyCode);
      }
      else
        ButtonAction('btnSetDefault' + NewDefaultCurrencyCode, 'enable');
    }
  });

  return false;
}
function CurrencyUpdateDefaultFromSelect(NewDefaultCurrencyCode) {

  var modelParams = {};
  modelParams.guidSessionID = g_guidSessionID;
  modelParams.guidServiceID = g_guidServiceID;
  modelParams.CurrencyCode = NewDefaultCurrencyCode;

  $.ajax({
    type: 'PATCH',
    url: g_urlCurrency,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        NavigateToCurrency(NewDefaultCurrencyCode);
      }
      else {
        $('#idDefaultCurrencyError').html('<b>' + response.responsecode + '</b> (' + response.errordescription + ')');
        ButtonAction('btnOpenWallet', 'reset');
        ButtonAction('btnOpenWallet', 'enable');
      }
    }
  });

  return false;
}
// functions - currencies - end


// functions - currenciesbetween - begin
function TransferAmountChange() {
  ClearErrors();
  $('.classAmountToTransferConfirm').hide();
  $('#rowAmountToTransferEdit').show();

  if ('' == g_strAmount_LastKnownGoodUSD)
    $('#boxAmountToTransferInBTC_Edit').focus();
  else
    $('#boxAmountToTransferInUSD_Edit').focus();

  ButtonAction('btnTransferContinue', 'reset');
  ButtonAction('btnTransferContinue', 'enable');

  g_idBtnCancel = 'lnkTransferCancel';

}
function CurrenciesTransferAddHandlers() {
  $('.classTransferAmountChange').click(function () {
    TransferAmountChange();
    return false;
  });


  $('.classUnchecked_To').unbind().click(function () {
    return false;
  });

  $('.classChecked_To').unbind().click(function () {
    return false;
  });

  $('.classUnchecked_From').unbind().click(function () {

    $('.rowCurrency_From').hide();
    g_strSelectedCurrencyFrom = $(this).prop('id').split('_')[0];

    if (g_strSelectedCurrencyFrom === 'BTC')
      g_strSelectedCurrencyTo = 'BCH';
    else
      g_strSelectedCurrencyTo = 'BTC';


    $('#idRowCurrency_From_' + g_strSelectedCurrencyFrom).show();
    $('#' + g_strSelectedCurrencyFrom + '_Unchecked_From').hide();
    $('#' + g_strSelectedCurrencyFrom + '_Checked_From').show();

    $('.rowCurrencyGap_From').hide();
    $('#idRowCurrencyGap_From_' + g_strSelectedCurrencyFrom).show();
    $('#' + g_strSelectedCurrencyFrom + '_CurrencyLink_From').removeClass('classUnchecked_From').addClass('classChecked_From');

    $('.classCellToCurrency').show();
    $('.classExploreIPYServicesSwapCurrencies').hide();

    $('#idRowCurrencyGap_To_' + g_strSelectedCurrencyFrom).hide();
    $('#idRowCurrency_To_' + g_strSelectedCurrencyFrom).hide();
    $('.classCheckbox_To').hide();

    $('.classCoinNameLongTransferFrom').text(g_supportedCurrencies[g_strSelectedCurrencyFrom].DescLong);
    $('.classCoinNameLongTransferTo').text(g_supportedCurrencies[g_strSelectedCurrencyTo].DescLong);
    $('.classCoinNameShortTransferFrom').text(g_strSelectedCurrencyFrom);
    $('.classCoinNameShortTransferTo').text(g_strSelectedCurrencyTo);
    $('#boxAmountToTransferInBTC_Edit').attr('placeholder', 'Enter amount in ' + g_supportedCurrencies[g_strSelectedCurrencyFrom].DescLong);
    $('#rowAmountToTransferEdit').show();

    $('#boxAmountToTransferInUSD_Edit').focus();

    g_idBtnCancel = 'lnkTransferCancel';

    CurrenciesTransferAddHandlers();

    return false;
  });


  $('.classChecked_From').unbind().click(function () {

    DisplayBetweenCurrencies('Init');

    return false;
  });
}
function CheckAmountToTransfer(boolProcessing) {
  ButtonAction('btnTransferContinue', 'disable');
  floatAmount_LastKnownGoodUSD = 0;
  floatAmount_LastKnownGoodBTC = 0;

  var floatAmount_LastKnownGood;
  if (!g_EnteredAmountBlank) {
    if ('' != g_strAmount_LastKnownGoodUSD)
      floatAmount_LastKnownGoodUSD = parseFloat(g_strAmount_LastKnownGoodUSD);

    if ('' != g_strAmount_LastKnownGoodBTC)
      floatAmount_LastKnownGoodBTC = parseFloat(g_strAmount_LastKnownGoodBTC);
  }

  var floatFiatWalletBalance = privFiatBTCWalletBalanceForCurrency(g_strSelectedCurrencyFrom);
  if (floatAmount_LastKnownGoodUSD > floatFiatWalletBalance) {
    $(".BTCAmountConverted").html('<font color="red">exceeds available balance</font>');
    //ButtonAction('btnTransferContinue', 'disable');
    return false;
  }
  else if (Math.round(floatAmount_LastKnownGoodBTC * 1e8) > g_satoshiWalletBalanceUsable[g_strSelectedCurrencyFrom]) {
    $(".USDAmountConverted").html('<font color="red">exceeds available balance</font>');
    //ButtonAction('btnTransferContinue', 'disable');
    return false;
  }
  else if (floatAmount_LastKnownGoodUSD == 0 && floatAmount_LastKnownGoodBTC == 0) {
    //ButtonAction('btnTransferContinue', 'disable');
    return false;
  }
  else {
    ButtonAction('btnTransferContinue', 'enable');
    if (!boolProcessing) {
      //ButtonAction('btnTransferContinue', 'enable');
      if (g_strAmount_LastKnownGoodUSD != '')
        $('#boxAmountToTransferInUSD_Edit').focus();
      else
        $('#boxAmountToTransferInBTC_Edit').focus();
    }

    if (floatFiatWalletBalance == floatAmount_LastKnownGood || floatFiatWalletBalance == floatAmount_LastKnownGoodUSD) {
      g_floatSatoshi_LastKnownGood = g_satoshiWalletBalanceUsable[g_strSelectedCurrencyFrom];
      $(".BTCAmount").html((g_floatSatoshi_LastKnownGood / 1e8).toFixed(8));
    }
    else if (floatAmount_LastKnownGoodUSD > 0)
      g_floatSatoshi_LastKnownGood = floatAmount_LastKnownGoodUSD / g_dictConversionRate[g_strSelectedCurrencyFrom] * 1e8;
    else
      g_floatSatoshi_LastKnownGood = floatAmount_LastKnownGoodBTC * 1e8;

    return true;
  }
}
function BetweenCurrenciesContractGet() {
  ClearErrors();

  modelParams = {};
  modelParams.guidServiceID = g_guidServiceID;
  modelParams.guidSessionID = g_guidSessionID;
  //modelParams.guidAddressBookEntry = g_strPayeeAddressBookID;
  //modelParams.strPayeeAddress = g_strPayeeAddress;
  //modelParams.strPayeeName = g_strPayeeName;
  //modelParams.longTwitterID = g_longPayeeTwitterID;
  modelParams.CurrencyCodeFrom = g_strSelectedCurrencyFrom;
  modelParams.CurrencyCodeTo = g_strSelectedCurrencyTo;

  if ('' == g_strAmount_LastKnownGoodUSD)
    floatAmount_LastKnownGoodUSD = 0;
  else
    floatAmount_LastKnownGoodUSD = parseFloat(g_strAmount_LastKnownGoodUSD);

  if ('' == g_strAmount_LastKnownGoodBTC)
    g_strAmount_LastKnownGoodBTC = 0;
  else
    floatAmount_LastKnownGoodBTC = parseFloat(g_strAmount_LastKnownGoodBTC);

  var floatFiatWalletBalance = (g_satoshiWalletBalanceUsable[g_strSelectedCurrencyFrom] / 1e8 * g_dictConversionRate[g_strSelectedCurrencyFrom]);

  if (floatAmount_LastKnownGoodUSD > 0 && floatAmount_LastKnownGoodUSD.toFixed(2) == floatFiatWalletBalance.toFixed(2)) {
    //modelParams.fiatPaymentInCents = Math.round(floatFiatWalletBalance * 100);
    modelParams.satoshiPayment = g_satoshiWalletBalanceUsable[g_strSelectedCurrencyFrom];
  }
  else if (floatAmount_LastKnownGoodUSD > 0) {
    //        modelParams.satoshiPayment = Math.round(floatAmount_LastKnownGood * 1e8 / g_dictConversionRate[g_defaultCurrency]);
    modelParams.fiatPaymentInCents = Math.round(floatAmount_LastKnownGoodUSD * 100);
    modelParams.satoshiPayment = 0;
  }
  else {
    modelParams.fiatPaymentInCents = 0;
    modelParams.satoshiPayment = Math.round(floatAmount_LastKnownGoodBTC * 1e8);
  }


  $.ajax({
    type: 'PATCH',
    url: g_urlBetweenCurrenciesContract,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        ClearErrors();

        modelBetweenCurrenciesContract = JSON.parse(response.jsonData);

        g_guidContractFlowID = modelBetweenCurrenciesContract.guidFlowID;

        btcPayeeWillReceive = modelBetweenCurrenciesContract.satoshiPaymentToPayee / 1e8;
        dblConversionRateTo = modelBetweenCurrenciesContract.ConversionRateTo;
        dblConversionRateFrom = modelBetweenCurrenciesContract.ConversionRateFrom;
        fiatPayeeWillReceive = privFiatBalanceFromSatoshi(modelBetweenCurrenciesContract.satoshiPaymentToPayee, dblConversionRateTo);

        $('.PayeeWillReceive_Label').text(numberWithCommas(fiatPayeeWillReceive.toFixed(2)));
        $('.BTCPayeeWillReceive_Label').text(btcPayeeWillReceive.toFixed(8));
        $('.ConversionRateTo_Label').text('$' + numberWithCommas(dblConversionRateTo.toFixed(2)));
        $('.ConversionRateFrom_Label').text('$' + numberWithCommas(dblConversionRateFrom.toFixed(2)));
        $('#lblTransferFeeExplanation').text(modelBetweenCurrenciesContract.FeeExplanation);

        btcExpediteFee = modelBetweenCurrenciesContract.satoshiExpediteFee / 1e8;
        fiatExpediteFee = privFiatBalanceFromSatoshi(modelBetweenCurrenciesContract.satoshiExpediteFee, dblConversionRateFrom);
        $('.FiatExpediteFee_Label').text(numberWithCommas(fiatExpediteFee.toFixed(2)));
        $('.BTCExpediteFee_Label').text(btcExpediteFee.toFixed(8));

        if (modelBetweenCurrenciesContract.boolBalanceAdjusted)
          $('.classInsufficientBalanceSend').show();
        else
          $('.classInsufficientBalanceSend').hide();


        fiatTotalWithdrawal = privFiatBalanceFromSatoshi(modelBetweenCurrenciesContract.satoshiPayerToSend, dblConversionRateFrom);
        $('.boxAmountToSendTotal_Label').text(numberWithCommas(fiatTotalWithdrawal.toFixed(2)));
        $('.BTCboxAmountToSendTotal_Label').text(((modelBetweenCurrenciesContract.satoshiPayerToSend) / 1e8).toFixed(8));

        g_guidContractFlowID = modelBetweenCurrenciesContract.guidFlowID;


        $('.classAmountToTransferConfirm').show();
        $('#rowAmountToTransferEdit').hide();
        ButtonAction('btnTransferSubmit', 'reset');

        g_idBtnCancel = 'lnkTransferAmountChange';

      }
      else if (response.responsecode == 'TRANSACTION_TOO_SMALL') {
        $('.classBetweenCurrenciesContractError').html('<b>Swap amount too small</b> - ' + response.errordescription);
        ButtonAction('btnTransferContinue', 'enable');
      }
      else if (response.responsecode == 'NOT_ENOUGH_FUNDS') {
        $('.classBetweenCurrenciesContractError').html('You do not have enough funds to cover both, transfer and network fee');
        ButtonAction('btnTransferContinue', 'enable');
      }
      else if (response.responsecode == 'UNABLE_TO_TRANSFER') {
        $('.classBetweenCurrenciesContractError').html('Unable to swap currencies - please try again later');
        ButtonAction('btnTransferContinue', 'enable');
      }
      else if (response.responsecode == 'TEMPORARILY_SUSPENDED') {
        $('.classBetweenCurrenciesContractError').text(response.errordescription);
        ButtonAction('btnTransferContinue', 'enable');
      }
      else {
        $('.classBetweenCurrenciesContractError').html('Unable to obtain Swap contract -- <b>' + response.responsecode + '</b> : ' + response.errordescription);
        ButtonAction('btnTransferContinue', 'enable');
      }
    },
    failure: function (response) {
      $('.classBetweenCurrenciesContractError').html('Unable to obtain Swap contract - please try again');
      ButtonAction('btnTransferContinue', 'enable');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classBetweenCurrenciesContractError').html('Unable to obtain Swap contract - please try again');
      ButtonAction('btnTransferContinue', 'enable');
    }

  });

  return false;
}
function BetweenCurrenciesContractSubmit() {
  ClearErrors();

  var modelContractSubmit = {};
  modelContractSubmit.guidSessionID = g_guidSessionID;
  modelContractSubmit.guidServiceID = g_guidServiceID;
  modelContractSubmit.guidFlowID = g_guidContractFlowID;

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelContractSubmit),
    url: g_urlBetweenCurrenciesContract,

    success: function (response) {


      if (response.responsecode == 'SUCCESS') {
        g_boolNavigateToTxHistory = true;
        TxHistoryList('gridTxHistory', 1);
      }
      else if (response.responsecode == 'EXPIRED') {
        $('#errorBetweenCurrenciesSubmit').html('Your transaction expired - <a href="" class="classTransferAmountChange">cancel</a> and try again');
        ButtonAction('btnTransferSubmit', 'reset');
        ButtonAction('btnTransferSubmit', 'disable');
        CurrenciesTransferAddHandlers();
      }
      else {
        $('#errorBetweenCurrenciesSubmit').html('Unable to submit transfer: <b>' + response.responsecode + '<br/>(' + response.errordescription + ')</b>');
        ButtonAction('btnTransferSubmit', 'enable');
      }
    },
    failure: function (response) {
      $('#errorBetweenCurrenciesSubmit').text('Response Code: ' + response.responsecode);
    },
    error: function (e, status) {

      $('#errorBetweenCurrenciesSubmit').text('Response Code: ' + e.status + ' (' + status + ')');
      ButtonAction('btnTransferSubmit', 'enable');
      $('#boxPassword_Edit').focus();
    }
  });

  return false;
}
// functions - currenciesbetween - end


// functions - shipping - begin
function SubmitShippingAddress() {

  return $.ajax(
    {
      url: g_urlPostNewShippingAddress + '?' + GetQueryParametersForSessionAndService(),
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(g_currentShippingAddress)
    }
  )
    .then(result => {
      if (result.responsecode !== 'SUCCESS') {
        if (result.responsecode == 'ADDRESS_UNDELIVERABLE') {
          $('#shippingAddressError').html('Invalid address provided - please double-check and resubmit.<br /><br / >If you feel your address is correct, please contact us at <b>Support@iPayYou.io</b>');
        }
        else {
          $('#shippingAddressError').text(result.errordescription);
        }
        $('#boxShippingAddressStreet_Edit').focus();
        ButtonAction('btnVerifyShippingAddress', 'reset');
        ButtonAction('btnVerifyShippingAddress', 'enable');
        return;
      }

      g_currentShippingAddress = $.extend(new ShippingAddress(), result.data);

      ShippingPageDisplay('confirmShipping');

    }, fail => { });
}
function FinalizeShipment() {
  return $.ajax(
    {
      url: g_urlFinalizeShipment + '?' + GetQueryParametersForSessionAndService(),
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(new FinalShippingInfoFromUser(g_GridCatalogItemSelected.ID, g_currentShippingAddress.AddressId))
    }
  ).then(result => {
    if (result.responsecode !== 'SUCCESS') {
      if (result.responsecode === 'UNAUTHORIZED') {
        $('#shippingAddressError').html('Cannot update shipping address - you no longer own this item');
        InventoryItemList('gridGiftCard', g_loadTypes.All);
      }
      else if (result.responsecode == 'DUPLICATE') {
        $('#shippingAddressError').html('Cannot update shipping address - already provided');
        InventoryItemList('gridGiftCard', g_loadTypes.All);
      }
      else {
        $('#shippingAddressError').html('<b>' + result.responsecode + '</b> - ' + result.errordescription);
      }

      ButtonAction('btnFinalizeShipment', 'reset');
      return;
    }

    g_GridCatalogItemSelected.ShippingInformation = new ShippingInformationForUser(new FinalShippingInfoForUser('', ''), true, g_shippingStatus.ShippingLocationReceived, g_currentShippingAddress);
    ShippingPageDisplay('displayShipping');
    InventoryItemList('gridGiftCard', g_loadTypes.All);

    if (g_GridCatalogItemSelected.enumCardStatus == 'Internal') {
      PollShippingInfoFinal(g_GridCatalogItemSelected);
    }


  });
}
function PollShippingInfoFinal(inventoryItem) {
  // step 0.5  

  return $.ajax(
    {
      url: g_urlPollShippingInfoFinal + '?inventoryId=' + inventoryItem.ID + '&' + GetQueryParametersForSessionAndService(),
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
    }
  ).then(result => {
    // step 1.5       

    if (result.responsecode === 'NOENTRY') {

      setTimeout(function () { PollShippingInfoFinal(inventoryItem); }, 2000);

      //return new Promise(function (resolve) { setTimeout(resolve, 2000) })
      //    .then(resolve => PollShippingInfoFinal(inventoryItem));
    }
    else if (result.responsecode !== 'SUCCESS') {
      $('#shippingAddressError').text(result.errordescription);

    }
    else {
      var finalShippingInfoForUser = new FinalShippingInfoForUser(result.data.TrackingId, result.data.Carrier);
      inventoryItem.ShippingInformation.FinalShippingInfoForUser = finalShippingInfoForUser;

      if (finalShippingInfoForUser.TrackingId == null || finalShippingInfoForUser.TrackingId == '') {
        setTimeout(function () { PollShippingInfoFinal(inventoryItem); }, 2000);
      }
      else {
        InventoryItemList('gridGiftCard', g_loadTypes.All);
        ShippingPageDisplay('displayShipping');
      }

    }


  });

  //return 5;
  // implement .fail
}
function privEnableSubmitShippingInformation() {
  ClearErrors();
  if (g_currentShippingAddress.isReadyToSubmit()) {
    ButtonAction('btnVerifyShippingAddress', 'enable');
  }
  else {
    ButtonAction('btnVerifyShippingAddress', 'disable');
  }
}
// functions - shipping - end



// functions - vpnprotection - begin
function initVPNMap() {

  g_VPNGoogleLoaded = true;

  if (g_VPNProtectionLoaded) {
    loadVPNMap();
  }


}
function loadVPNMap() {

  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('cellVPNMap'), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });

}
function VPNGetVisibleInfo() {
  $.ajax({
    type: 'POST',
    url: g_urlVPNVisibleInfoGet,
    contentType: "application/json; charset=utf-8",
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        vpnVisibleDetails = JSON.parse(response.jsonData);
        $('.classIPAddress').text(vpnVisibleDetails.query);
        $('.classVPNISP').text(vpnVisibleDetails.isp);
        $('.classVPNCity').text(vpnVisibleDetails.city);
        $('.classVPNState').text(vpnVisibleDetails.region);
        $('.classVPNCountry').text(vpnVisibleDetails.country);

        var urlEmbed2 = 'https://maps.googleapis.com/maps/api/v1/staticmap?key=AIzaSyBMF4gjuYvKe-ge-mEUJJcIVUwiQp78ETE';
        var urlEmbed = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBMF4gjuYvKe-ge-mEUJJcIVUwiQp78ETE&size=400x150';
        urlEmbed2 = urlEmbed + '&center=' + vpnVisibleDetails.lat + ',' + vpnVisibleDetails.lon + '&zoom=11';
        urlEmbed = urlEmbed + '&center=' + vpnVisibleDetails.lat + ',' + vpnVisibleDetails.lon + '&zoom=10';
        urlEmbed = urlEmbed + '&markers=color:red%7Clabel:%7C' + vpnVisibleDetails.lat + ',' + vpnVisibleDetails.lon;

        $('#frameVPNMap').attr('src', urlEmbed);
      }

    }
  });
}
function VPNCatalogBrandsList() {
  $.ajax({
    type: 'GET',
    url: g_urlGiftCardCatalog + '?loadType=' + g_loadTypes.All + '&gridId=undefined&catalogCategory=' + g_catalogCategories.VPN + '&' + GetQueryParametersForSessionAndService(),
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objListRowsReturn = JSON.parse(response.jsonData);

        if (response.responsecode != 'NOENTRY' && objListRowsReturn.BrandsAvailable.length > 0) {
          arrayGridItemList = objListRowsReturn.BrandsAvailable;
          g_BrandsAvailableList.VPN = arrayGridItemList;
          if (g_BrandsAvailableList.VPN.length > 0) {
            g_VPNBrandSelected = g_BrandsAvailableList.VPN[0];
            $('#cellVPNDisclaimer').html(g_VPNBrandSelected.BrandDisclaimer);
          }
        }
      }
    }
  });
  return false;
}
function VPNGetValuesList() {
  $.ajax({
    type: 'GET',
    url: g_urlGiftCardCatalogValues + '?loadType=' + g_loadTypes.All + '&catalogCategory=' + g_catalogCategories.VPN + '&BatchID=piaVPNGC&guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID,    // LoadType=1 => load all (LoadType=0 => load blank html row to display in case of no entries)
    success: function (response) {
      if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
        objListRowsReturn = JSON.parse(response.jsonData);
        if (response.responsecode != 'NOENTRY' && objListRowsReturn.OffersAvailable != null && objListRowsReturn.OffersAvailable.length > 0) {
          arrayGridItemList = objListRowsReturn.OffersAvailable;
          g_VPNValuesList = arrayGridItemList;
          if (g_VPNValuesList.length > 0) {
            g_VPNValueSelected = g_VPNValuesList[0];
            UpdateTotalAmountVPN();
          }
          return;
        }
      }
    }
  });
  return false;

}
function PurchasePromotionCheckVPN(itemSelected, promotionCode, funcSucceeded, funcFailed) {
  var modelPromotionCheck = {};
  modelPromotionCheck.guidSessionID = g_guidSessionID;
  modelPromotionCheck.guidServiceID = g_guidServiceID;
  modelPromotionCheck.promotionCode = promotionCode;
  modelPromotionCheck.guidCatalogOfferID = itemSelected.ID;

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelPromotionCheck),
    url: g_urlPurchasePromotion,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {

        objResponse = JSON.parse(response.jsonData);
        funcSucceeded(promotionCode, objResponse);
      }
      else {
        funcFailed(promotionCode, response.responsecode, response.errordescription);
      }
    },
    failure: function (response) {
      funcFailed(promotionCode, 'please try again', '');
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFailed(promotionCode, 'please try again', '');
    }

  });
}
function UpdateTotalAmountVPN() {
  var fiatPriceForVPN = 1 * (g_VPNValueSelected.USDItemPrice * (1 - g_percentDiscount / 100));
  $('#cellPriceTotalVPN').removeClass('Error').text('$' + numberWithCommas(fiatPriceForVPN.toFixed(2)));

}
function privCheckIfToEnableAppyPromotionVPN() {
  ClearErrors();
  if ($('#boxPromotionCodeVPN_Edit').val().trim() == '')
    ButtonAction('btnPromotionApplyVPN', 'disable');
  else
    ButtonAction('btnPromotionApplyVPN', 'enable');
}
function ApplyGiftCardPromotionVPN() {
  var promotionCode = $('#boxPromotionCodeVPN_Edit').val().trim();

  PurchasePromotionCheckVPN(g_VPNValueSelected, promotionCode, ApplyGiftCardPromotionVPN_SUCCESS, ApplyGiftCardPromotionVPN_FAILED);
}
function ApplyGiftCardPromotionVPN_SUCCESS(promotionCode, response) {
  $('.classPromotionDiscountNotAppliedVPN').hide();
  $('.classPromotionDiscountAppliedVPN').show();
  g_percentDiscount = response.DiscountPercent;
  g_promotionCode = promotionCode;
  $('.classPercentDiscountAppliedVPN').html(g_percentDiscount);
  UpdateTotalAmountVPN();
}
function ApplyGiftCardPromotionVPN_FAILED(promotionCode, error, description) {

  if (promotionCode.length > 15)
    promotionCode = promotionCode.substring(0, 12) + '...';

  if (error == 'PROMOTION_INVALID') {
    $('#errorGiftCardPromotionVPN').html('Invalid promotion code: <b>' + promotionCode + '</b>');
  }
  else if (error == 'PROMOTION_EXPIRED') {
    $('#errorGiftCardPromotionVPN').html('Promotion already expired');
  }
  else if (error == 'PROMOTION_NOT_YET_ACTIVE') {
    $('#errorGiftCardPromotionVPN').html('Promotion not yet active');
  } else {
    var errorSuffix = '';
    if (description != '') {
      errorSuffix = ' <b>' + description + '</b>';
      error = '';
    }
    else
      error = '<b>' + error + '</b>';

    error = '&nbsp;&nbsp;' + error;

    $('#errorGiftCardPromotionVPN').html('Could not submit promotion code: <br />' + error + errorSuffix);
  }

  $('#boxPromotionCodeVPN_Edit').val('');
  $('#boxPromotionCodeVPN_Edit').focus();
  ButtonAction('btnPromotionApplyVPN', 'reset');
}
function VPNPurchaseFAILURE(errorcode, errordesc, jsonData) {
  if (errorcode == 'NO_INVENTORY_AVAILABLE') {
    GiftCardValuesList('gridGiftCardCatalogValues', g_catalogCategories.GiftCards, g_loadTypes.All, g_gridItemGiftCardBrandSelected.ID, g_gridItemGiftCardBrandSelected.RetailerName);
    $('#cellVPNPurchaseError').html('No inventory is currently available - please try again later');
  }
  else if (errorcode == 'NOT_LOGGED_IN') {
    $('#cellVPNPurchaseError').html('<b>You need to be logged in to make a purchase</b><br /><a href="" class="classPleaseLogin">Login or Create Account</a>');
    AttachClassPleaseLoginController();

  }
  else if (errorcode == 'NOT_ENOUGH_FUNDS') {

    //if ('' == g_promotionCode) {
    //    g_boolNavigateToTxHistory = true;
    //    TxHistoryList('gridTxHistory', 1);
    //    InventoryItemList('gridGiftCard', 1);
    //}
    //else {
    $('#cellVPNPurchaseError').html('<b>You do not have enough funds to purchase</b><br />' + errordesc);
    //}
  }
  else
    $('#cellVPNPurchaseError').html('Unable to purchase -- ' + errorcode);

  ButtonAction('btnPayNowVPN', 'reset');
}
// functions - vpnprotection - end

// functions - limits - begin
function ObtainLimits() {

  var modelLimitsInput = {};
  modelLimitsInput.sessionid = g_guidSessionID;
  modelLimitsInput.serviceid = g_guidServiceID;
  $.ajax({
    type: 'PATCH',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelLimitsInput),
    url: g_urlLimits,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_Limits = JSON.parse(response.jsonData);
        $('.classLimitGCDaily').html('$' + numberWithCommas(g_Limits.dictLimits['GiftCardDaily'].toFixed(2)));
        $('.classLimitBTCDaily').html('$' + numberWithCommas(g_Limits.dictLimits['BTCSendDaily'].toFixed(2)));
      }
      else {
        ObtainLimitsFailed();
      }
    },
    failure: function (response) {
      ObtainLimitsFailed();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ObtainLimitsFailed();
    }

  });
}
function ObtainGlideraBuyLimits() {
  var modelParams = {};
  modelParams.sessionid = g_guidSessionID;
  modelParams.serviceid = g_guidServiceID;

  $.ajax({
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    url: g_urlGlideraLimits,
    data: JSON.stringify(modelParams),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        var glideraLimits = JSON.parse(response.jsonData);
        $('#dailyBuyRemaining').text(glideraLimits.dailyBuyRemaining);
        $('#monthlyBuyRemaining').text(glideraLimits.monthlyBuyRemaining);
        $('#maximumDailyBuy').text(glideraLimits.dailyBuy);
        $('#maximumMonthlyBuy').text(glideraLimits.monthlyBuy);

      }
      else {
        GetGlideraLimitsFailed();
      }
    },
    failure: function (response) {
      GetGlideraLimitsFailed();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      GetGlideraLimitsFailed();
    }

  });
}
function GetGlideraLimitsFailed() {
  $('#dailyBuyRemaining').text('unknown');
  $('#monthlyBuyRemaining').text('unknown');
  $('#maximumDailyBuy').text('unknown');
  $('#maximumMonthlyBuy').text('unknown');
}
function ObtainLimitsFailed() {
  $('.classLimitGCDaily').html('<i>unavailable</i>');
  $('.classLimitBTCDaily').html('<i>unavailable</i>');
}
// functions - limits - end

// functions - settings - begin
function UnsubscribeSUCCESS() {
  $('.classSubscribeUnsubscribeAction').show();
  $('.classSubscribeUnsubscribePleaseWait').hide();
  SetSubscribedStatus(false);
}
function UnsubscribeFAILURE(message) {
  $('#cellSettingsSubscribeUnsubscribeError').html(message);
  $('.classSubscribeUnsubscribeAction').show();
  $('.classSubscribeUnsubscribePleaseWait').hide();
}
function ResubscribeSUCCESS() {
  $('.classSubscribeUnsubscribeAction').show();
  $('.classSubscribeUnsubscribePleaseWait').hide();
  SetSubscribedStatus(true);
}
function ResubscribeFAILURE(message) {
  $('#cellSettingsSubscribeUnsubscribeError').html(message);
  $('.classSubscribeUnsubscribeAction').show();
  $('.classSubscribeUnsubscribePleaseWait').hide();
}
function CheckIfToEnableNameChange() {
  var strFirstName = $('#boxChangeFirstName_Edit').val().trim();
  var strLastName = $('#boxChangeLastName_Edit').val().trim();

  if (strFirstName != '' && strLastName != '')
    ButtonAction('btnChangeName', 'enable');
  else
    ButtonAction('btnChangeName', 'disable');
}
function CheckIfToEnablePhoneChange1() {
  var strPhoneNumber = $('#boxChangePhone_Edit').val().trim();
  if (strPhoneNumber != '')
    ButtonAction('btnSettingsChangePhone1', 'enable');
  else
    ButtonAction('btnSettingsChangePhone1', 'disable');
}
function CheckIfToEnablePhoneChange2() {
  var strVerificationCode = $('#verificationCode_Edit').val().trim();
  if (strVerificationCode != '')
    ButtonAction('btnSettingsChangePhone2', 'enable');
  else
    ButtonAction('btnSettingsChangePhone2', 'disable');
}
function CheckIfToEnablePasswordChange() {
  var strCurrentPassword = $('#boxSettingsPasswordOld_Edit').val().trim();
  var strNewPassword = $('#boxSettingsPasswordNew_Edit').val().trim();
  var strNewPasswordRetype = $('#boxSettingsPasswordNewRetype_Edit').val().trim();
  var strAuthyCode = $('#authySettingsPassword_Edit').val().trim();

  if (strNewPassword != '' && strNewPassword.length < 8) {
    ButtonAction('btnSettingsPasswordChangeSubmit', 'disable');
    $('#boxSettingsPasswordNew_Error').html('New password must be at least 8 characters long');
  }
  else if (strCurrentPassword == '' || strNewPassword == '' || strNewPasswordRetype == '') {
      if (strNewPassword.length >= 8) {
          $('#boxSettingsPasswordNew_Error').text('');
      }

      ButtonAction('btnSettingsPasswordChangeSubmit', 'disable');
  }
  else if (strNewPassword != strNewPasswordRetype && '' != strNewPassword && '' != strNewPasswordRetype) {
    ButtonAction('btnSettingsPasswordChangeSubmit', 'disable');
    $('#boxSettingsPasswordNewRetype_Error').text('Passwords do not match');
  }
  else if (strAuthyCode == '') {
      ButtonAction('btnSettingsPasswordChangeSubmit', 'disable');
      $('#boxSettingsPasswordNewRetype_Error').text('');
  }
  else {
    ButtonAction('btnSettingsPasswordChangeSubmit', 'enable');
  }
}
function CheckIfToEnableAccountClose() {
  var strAuthyCode = $('#authySettingsCloseAccount_Edit').val().trim();
  var strOldPassword = $('#boxSettingsPasswordOld2_Edit').val().trim();

  if (strAuthyCode == '' || strOldPassword == '')
    ButtonAction('btnSettingsCloseAccount', 'disable');
  else
    ButtonAction('btnSettingsCloseAccount', 'enable');
}
function CheckIfToEnableEmailChange() {
  var strNewEmail = $('#boxSettingsNewEmail_Edit').val().trim();
  var strAuthyCode = $('#authySettingsEmail_Edit').val().trim();

  if ('' == strNewEmail)
    ButtonAction('btnSubmitEmailChange', 'disable');
  else {
    arrayEmailSplit = strNewEmail.split(' ');
    if (arrayEmailSplit.length > 1) {
      $('#boxSettingsNewEmail_Error').text('Invalid email format');
      ButtonAction('btnSubmitEmailChange', 'disable');
      return;
    }
    else {
      arrayEmailSplit = strNewEmail.split('@');
      if (arrayEmailSplit.length != 2) {
        $('#boxSettingsNewEmail_Error').text('Invalid email format');
        ButtonAction('btnSubmitEmailChange', 'disable');
        return;
      }
      else {
        arrayEmailSplit2 = arrayEmailSplit[1].split('.');
        if (arrayEmailSplit2.length < 2) {
          $('#boxSettingsNewEmail_Error').text('Invalid email format');
          ButtonAction('btnSubmitEmailChange', 'disable');
          return;
        }
        else if (arrayEmailSplit2[1].trim() == '') {
          $('#boxSettingsNewEmail_Error').text('Invalid email format');
          ButtonAction('btnSubmitEmailChange', 'disable');
          return;
        }
      }
    }
  }

  if ('' == strAuthyCode)
    ButtonAction('btnSubmitEmailChange', 'disable');
  else
    ButtonAction('btnSubmitEmailChange', 'enable');
}
function CheckIfToEnableTwitterChange() {
  var strAuthyCode = $('#authySettingsSocialTwitterPassword_Edit').val().trim();
  if (null == strAuthyCode || '' == strAuthyCode)
    ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'disable');
  else
    ButtonAction('btnSettingsSocialTwitterChangeSubmit', 'enable');
}
function CheckIfToEnableTwitterRemove() {
  var strAuthyCode = $('#authySettingsSocialTwitterRemove_Edit').val().trim();
  if (null == strAuthyCode || '' == strAuthyCode)
    ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'disable');
  else
    ButtonAction('btnSettingsSocialTwitterRemoveSubmit', 'enable');
}
function CheckIfToEnableFacebookChange() {
  var strAuthyCode = $('#authySettingsSocialFacebookPassword_Edit').val().trim();
  if (null == strAuthyCode || '' == strAuthyCode)
    ButtonAction('btnSettingsSocialFacebookChangeSubmit', 'disable');
  else
    ButtonAction('btnSettingsSocialFacebookChangeSubmit', 'enable');
}
function NameChangeSubmit() {
  var strFirstName = $('#boxChangeFirstName_Edit').val().trim();
  var strLastName = $('#boxChangeLastName_Edit').val().trim();

  $.ajax({
    type: 'GET',
    url: g_urlSettingsName + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID + '&strNewFirstName=' + strFirstName + '&strNewLastName=' + strLastName,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        strName = response.jsonData;
        SetUserName(strName);
        SettingsPageInit('NameSuccess');
        ButtonAction('btnChangeName', 'reset');
      }
      else {
        ButtonAction('btnChangeName', 'reset');
        ButtonAction('btnChangeName', 'enable');
        $('#cellSettingsError').html('Unable to submit name change: ' + response.responsecode + ' (' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnChangeName', 'reset');
      ButtonAction('btnChangeName', 'enable');
      $('#cellSettingsError').html('Unable to submit name change - please try again');
    },
    failure: function (response) {
      ButtonAction('btnChangeName', 'reset');
      ButtonAction('btnChangeName', 'enable');
      $('#cellSettingsError').html('Unable to submit name change - please try again');
    }
  });
  return false;
}
function CloseAccountSubmit() {
  var strCurrentPassword = $('#boxSettingsPasswordOld2_Edit').val().trim();
  var strAuthyCode = $('#authySettingsCloseAccount_Edit').val().trim();

  if (null == g_guidCodeFlowID)
    g_guidCodeFlowID = '';

  var modelCredentials = {};
  modelCredentials.serviceid = g_guidServiceID;
  modelCredentials.sessionid = g_guidSessionID;
  modelCredentials.strSMSFlowID = g_guidCodeFlowID;
  modelCredentials.strSMSOrAuthyCode = strAuthyCode;
  modelCredentials.strCurrentPassword = strCurrentPassword;

  $.ajax({
    type: 'POST',
    url: g_urlSettingsCloseAccount,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelCredentials),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_boolSkipExitConfirmation = true;
        $('.classLogout').html('<i>logging out...</i>');
        privLogout();
      }
      else if (response.responsecode == 'INVALID_2FA') {
        ClearEntryFields();
        $('#authySettingsCloseAccount_Error').html('Wrong or expired authentication code');
        ButtonAction('btnSettingsCloseAccount', 'reset');
        SettingsPageInit('SettingsCloseAccount');
      }
      else if (response.responsecode == 'UNAUTHENTICATED') {
        ClearEntryFields();
        $('#boxSettingsPasswordOld2_Error').html('Incorrect password entered');
        ButtonAction('btnSettingsCloseAccount', 'reset');
        SettingsPageInit('SettingsCloseAccount');
      }

      else {
        ClearEntryFields();
        ButtonAction('btnSettingsCloseAccount', 'reset');
        $('#cellSettingsError').html('Unable to close account: ' + response.responsecode + ' (' + response.errordescription + ')');
        SettingsPageInit('SettingsCloseAccount');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ClearEntryFields();
      ButtonAction('btnSettingsCloseAccount', 'reset');
      $('#cellSettingsError').html('Unable to close account - please try again');
      SettingsPageInit('SettingsCloseAccount');
    },
    failure: function (response) {
      ClearEntryFields();
      ButtonAction('btnSettingsCloseAccount', 'reset');
      $('#cellSettingsError').html('Unable to close account - please try again');
      SettingsPageInit('SettingsCloseAccount');
    }
  });
  return false;
}
function PasswordChangeSubmit() {
  var strCurrentPassword = $('#boxSettingsPasswordOld_Edit').val().trim();
  var strNewPassword = $('#boxSettingsPasswordNew_Edit').val().trim();
  var strAuthyCode = $('#authySettingsPassword_Edit').val().trim();

  if (null == g_guidCodeFlowID)
    g_guidCodeFlowID = '';

  var modelCredentials = {};
  modelCredentials.serviceid = g_guidServiceID;
  modelCredentials.sessionid = g_guidSessionID;
  modelCredentials.strSMSFlowID = g_guidCodeFlowID;
  modelCredentials.strSMSOrAuthyCode = strAuthyCode;
  modelCredentials.strCurrentPassword = strCurrentPassword;
  modelCredentials.strNewPassword = strNewPassword;

  $.ajax({
    type: 'POST',
    url: g_urlSettingsPassword,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelCredentials),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
        SettingsPageInit('SettingsPasswordChangeSuccess');
      }
      else if (response.responsecode == 'INVALID_2FA') {
        ClearEntryFields();
        $('#authySettingsPassword_Error').html('Wrong or expired authentication code');
        ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
        SettingsPageInit('SettingsPasswordChange');
      }
      else if (response.responsecode == 'UNAUTHENTICATED') {
        ClearEntryFields();
        $('#boxSettingsPasswordOld_Error').html('Incorrect password entered');
        ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
        SettingsPageInit('SettingsPasswordChange');
      }

      else {
        ClearEntryFields();
        ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
        $('#cellSettingsError').html('Unable to submit password change: ' + response.responsecode + ' (' + response.errordescription + ')');
        SettingsPageInit('SettingsPasswordChange');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ClearEntryFields();
      ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
      $('#cellSettingsError').html('Unable to submit password change - please try again');
      SettingsPageInit('SettingsPasswordChange');
    },
    failure: function (response) {
      ClearEntryFields();
      ButtonAction('btnSettingsPasswordChangeSubmit', 'reset');
      $('#cellSettingsError').html('Unable to submit password change - please try again');
      SettingsPageInit('SettingsPasswordChange');
    }
  });
  return false;
}
function EmailChangeSubmit() {
  var strNewEmail = $('#boxSettingsNewEmail_Edit').val().trim();
  var strAuthyCode = $('#authySettingsEmail_Edit').val().trim();

  if (null == g_guidCodeFlowID)
    g_guidCodeFlowID = '';

  var modelCredentials = {};
  modelCredentials.serviceid = g_guidServiceID;
  modelCredentials.sessionid = g_guidSessionID;
  modelCredentials.strEmail = strNewEmail;
  modelCredentials.strSMSFlowID = g_guidCodeFlowID;
  modelCredentials.strSMSOrAuthyCode = strAuthyCode;

  $.ajax({
    type: 'POST',
    url: g_urlSettingsEmail,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelCredentials),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        ButtonAction('btnSubmitEmailChange', 'reset');
        $('.classSettingEmailNewAddress').text(strNewEmail);
        SettingsPageInit('SettingsEmailChangeSuccess');
      }
      else if (response.responsecode == 'DUPLICATE') {
        $('#boxSettingsNewEmail_Error').html('An iPayYou account with this email address already exists');
        ButtonAction('btnSubmitEmailChange', 'reset');
        ButtonAction('btnSubmitEmailChange', 'enable');
        $('#authySettingsEmail_Edit').val('');
        $('#boxSettingsNewEmail_Edit').focus();
      }
      else if (response.responsecode == 'INVALID_2FA') {
        $('#authySettingsEmail_Edit').val('');
        $('#authySettingsEmail_Error').html('Wrong or expired authentication code');
        ButtonAction('btnSubmitEmailChange', 'reset');
        $('#authySettingsEmail_Edit').focus();
      }
      else {
        ButtonAction('btnSubmitEmailChange', 'reset');
        ButtonAction('btnSubmitEmailChange', 'enable');
        $('#cellSettingsError').html('Unable to submit email change: ' + response.responsecode + ' (' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnSubmitEmailChange', 'reset');
      ButtonAction('btnSubmitEmailChange', 'enable');
      $('#cellSettingsError').html('Unable to submit email change - please try again');
    },
    failure: function (response) {
      ButtonAction('btnSubmitEmailChange', 'reset');
      ButtonAction('btnSubmitEmailChange', 'enable');
      $('#cellSettingsError').html('Unable to submit email change - please try again');
    }
  });
  return false;
}
function PhoneChangeSubmit() {
  g_strPhoneForVerification = '+' + $('#countryCode').val() + '-' + PhoneFriendly($('#boxChangePhone_Edit').val().trim());
  strPhoneRaw = '+' + $('#countryCode').val() + '-' + $('#boxChangePhone_Edit').val().trim();
  RequestAuthCode(strPhoneRaw, PhoneChangeSubmitSuccess, PhoneChangeSubmitFailure, false);
  return false;
}
function PhoneChangeSubmitSuccess(response) {
  ButtonAction('btnSettingsChangePhone1', 'reset');
  SettingsPageInit('SettingsPhoneChangeSuccess');
}
function PhoneChangeSubmitFailure(response) {
  ButtonAction('btnSettingsChangePhone1', 'enable');

  if (response.responsecode == 'TOO_MANY_CALLS')
    $('#cellSettingsError').html('Unable to send verification code: <b>Too many requests - please try again in 60 minutes</b>');
  else
    $('#cellSettingsError').html('Unable to send verification code: <b>Check your number and try again</b>');
}
function PhoneChangeCodeSubmit() {
  VerifySMSCodeModel = {};
  VerifySMSCodeModel.serviceid = g_guidServiceID;
  VerifySMSCodeModel.sessionid = g_guidSessionID;
  VerifySMSCodeModel.RememberMeFor30Days = false;
  VerifySMSCodeModel.strSMSFlowID = g_guidCodeFlowID;
  VerifySMSCodeModel.strSMSOrAuthyCode = $('#verificationCode_Edit').val();

  $.ajax({
    type: 'POST',
    url: g_urlPasswordSMSCodeSubmit,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(VerifySMSCodeModel),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        SettingsPageInit('SettingsPhoneCodeVerificationSuccess');
      }
      else {
        $('#verificationCode_Error').text('Incorrect or expired verification code');
        $('#verificationCode_Edit').val('');
        ButtonAction('btnSettingsChangePhone2', 'reset');
        $('#verificationCode_Edit').focus();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('#cellSettingsError').text('Error in sending out phone verification request: ' + xhr.statusText);
      ButtonAction('btnSettingsChangePhone2', 'enable');
    }
  });
}
// functions - settings - end


// functions - securityprofile - begin
function ResetLicensePic() {
  ClearErrors();
  $('.classImgUploaded').hide();
  g_idBtnCancel = '';
  $('.classImgNotUploaded').show();
  control = $('#inputFile');
  control.replaceWith(control = control.clone(true));
}
function ResetConsentVideo() {
  ClearErrors();
  $('.classVideoUploaded').hide();
  g_idBtnCancel = '';
  $('.classVideoNotUploaded').show();
  control = $('#inputVideo');
  control.replaceWith(control = control.clone(true));
}
function GetSecurityLevelOfUser() {
  g_timerSecurityProfile = null;

  $.ajax({
    type: 'GET',
    url: g_urlSecurityProfile + '?guidServiceID=' + g_guidServiceID + '&guidSessionID=' + g_guidSessionID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        objSecurityLevel = JSON.parse(response.jsonData);
        if (objSecurityLevel.Level2PictureIDSucceeded != g_SecurityLevel2a ||
          objSecurityLevel.Level2PictureIDInProcess != g_SecurityLevel2aInReview ||
          objSecurityLevel.Level2VideoConsentSucceeded != g_SecurityLevel2b ||
          objSecurityLevel.Level2VideoConsentInProcess != g_SecurityLevel2bInReview ||
          objSecurityLevel.GlideraRegistered != g_SecurityGlideraRegistered ||
          objSecurityLevel.GlideraPhoneConfirmed != g_SecurityGlideraPhoneValidated) {

          // ResetLicensePic();
          // ResetConsentVideo();
          SetSecurityLevel(objSecurityLevel.Level1Succeeded,
            objSecurityLevel.Level2PictureIDSucceeded,
            objSecurityLevel.Level2PictureIDInProcess,
            objSecurityLevel.Level2VideoConsentSucceeded,
            objSecurityLevel.Level2VideoConsentInProcess,
            objSecurityLevel.GlideraRegistered,
            objSecurityLevel.GlideraPhoneConfirmed);
        }
        else {
          if (g_timerSecurityProfile == null)
            g_timerSecurityProfile = setTimeout(function () { GetSecurityLevelOfUser(); }, 10000);
        }
        /*
        if (!objSecurityLevel.Level2InReview && !objSecurityLevel.Level2Confirmed) {
            ResetLicensePic();
            ResetConsentVideo();
        }
        */
      }
      else {
        if (g_timerSecurityProfile == null) {
          g_timerSecurityProfile = setTimeout(function () { GetSecurityLevelOfUser(); }, 10000);
        }
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (g_timerSecurityProfile == null) {
        g_timerSecurityProfile = setTimeout(function () { GetSecurityLevelOfUser(); }, 10000);
      }
    }
  });
}
function NavigateGlidera() {
  // createCookie('userSession', g_guidSessionID, 1);
  $.ajax({
    type: 'GET',
    url: g_urlGlideraNavigate +
      '?guidServiceID=' +
      g_guidServiceID +
      '&guidSessionID=' +
      g_guidSessionID,


    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        var targetUrl = JSON.parse(response.jsonData);
        document.location = targetUrl;
      }
      else {
        ButtonAction('btnRegisterWithGlidera', 'reset');
        $('#idNavigateToGlideraError').html('Error navigating to Glidera: <b>' +
          response.responsecode +
          '<br /> (' +
          response.errordescription +
          ')</b>');

      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnRegisterWithGlidera', 'reset');
      $('#idNavigateToGlideraError').html('Error navigating to Glidera: <b>' +
        xhr.status +
        ' (' +
        xhr.statusText +
        ')</b>');
    }
  });
}
function SendGlideraText() {

  $.ajax({
    type: 'POST',
    url: g_urlGlideraSendText + '?sessionid=' + g_guidSessionID,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        // location.reload();
      }
      else if (response.responsecode == 'CONFLICT') {
        $('.classGlideraStep3').hide();
        $('.classNoAuthySendCode').show();
        $('.classNoAuthyCodeSent').hide();
        $('.classNeedGlideraPhone').hide();
        $('.classGlideraPhoneInUse').show();

      }
      else {
        $('#btnSendGlideraText').hide();
        $('#boxGlideraPhoneValidation').show();
        $('#btnVerifyGlideraPhoneCode').show();
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //$('#idSecurityProfileError').html('Error submitting Level1 verification: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
function SubmitForLevel1Approval() {
  modelIAccountsLevel1Input = {};
  modelIAccountsLevel1Input.serviceid = g_guidServiceID;
  modelIAccountsLevel1Input.sessionid = g_guidSessionID;
  modelIAccountsLevel1Input.strStreetAddress = $('#boxSecurityProfileStreet_Edit').val().trim();
  modelIAccountsLevel1Input.strPostalCode = $('#boxSecurityProfilePostalCode_Edit').val().trim();
  modelIAccountsLevel1Input.strCountryISOCode = g_CountrySelected.strISOCountryCode2;
  modelIAccountsLevel1Input.strCountryFriendly = g_CountrySelected.strCountryFriendly;
  modelIAccountsLevel1Input.strPhoneNumber = g_PhoneNumberForDisplay;
  modelIAccountsLevel1Input.strPhoneCountryCode = g_CountryCodeEntered;
  modelIAccountsLevel1Input.strBirthdate = $('#boxSecurityProfileBirthDate_Edit').val().trim();
  modelIAccountsLevel1Input.strDocValue = $('#boxSecurityProfileSSN_Edit').val();
  //modelIAccountsLevel1Input.strCity = $('#boxSecurityProfileCity_Edit').val();
  //modelIAccountsLevel1Input.strStateCode = $('#boxSecurityProfileStateCode_Edit').val();

  $.ajax({
    type: 'POST',
    url: g_urlSecurityProfileLevel1,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelIAccountsLevel1Input),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        SetSecurityLevel(true, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
        //      MenuSubClick('LeftMenu', 'Settings', 'Level2');
      }
      else if (response.responsecode == 'INVALID_INPUT') {
        $('#boxSecurityProfileBirthDate_Error').html(response.errordescription);
        $('#boxSecurityProfileBirthDate_Edit').focus();
        ButtonAction('btnSubmitSecurityProfile', 'reset');
        ButtonAction('btnSubmitSecurityProfile', 'enable');
      }
      else if (response.responsecode == 'CONFLICT') {
        $('#idSecurityProfileError').html('Error submitting Level1 verification: <br /><b> ' + response.errordescription + '</b>');
        ButtonAction('btnSubmitSecurityProfile', 'reset');
        ButtonAction('btnSubmitSecurityProfile', 'enable');

      }
      else if (response.responsecode == 'LEVEL1_NOT_VERIFIED') {
        if (response.errordescription == 'need document') {
          g_SecurityLeve2BeforeLevel1 = true;
          SetSecurityLevel(false, false, false, false, false, false, false);
          $('#btnSubmitSecurityProfile').hide();
          $('#NeedToVerifyLevel2BeforeLevel1').show();
        }
        else {
          $('#idSecurityProfileError').html('We are unable to verify your security profile based on the information you provided. <br />  Please re-check and try again.');
          ButtonAction('btnSubmitSecurityProfile', 'reset');
          ButtonAction('btnSubmitSecurityProfile', 'enable');
          $('#boxSecurityProfileStreet_Edit').focus();
        }
      }
      else {
        $('#idSecurityProfileError').text('Error submitting Level1 verification: ' + response.responsecode + ' (' + response.errordescription + ')');
        ButtonAction('btnSubmitSecurityProfile', 'reset');
        ButtonAction('btnSubmitSecurityProfile', 'enable');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('#idSecurityProfileError').html('Error submitting Level1 verification: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
      ButtonAction('btnSubmitSecurityProfile', 'reset');
      ButtonAction('btnSubmitSecurityProfile', 'enable');
    }
  });
}
function SubmitForLevel1KBAApproval() {
  g_objKBA.answers[0].answer_id = $('input[name="KBA_Q1"]:checked').val();
  g_objKBA.answers[1].answer_id = $('input[name="KBA_Q2"]:checked').val();
  g_objKBA.answers[2].answer_id = $('input[name="KBA_Q3"]:checked').val();
  g_objKBA.answers[3].answer_id = $('input[name="KBA_Q4"]:checked').val();
  g_objKBA.answers[4].answer_id = $('input[name="KBA_Q5"]:checked').val();

  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;
  modelInput.strJson = JSON.stringify(g_objKBA);

  $.ajax({
    type: 'POST',
    url: g_urlSecurityProfileLevel1KBA,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        SetSecurityLevel(true, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
        MenuSubClick('LeftMenu', 'Settings', 'Level2');
      }
      else {
        MenuSubClick('LeftMenu', 'Settings', 'Level1');
        $('#idSecurityProfileError').html('Error submitting Level1 verification: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      MenuSubClick('LeftMenu', 'Settings', 'Level1');
      $('#idSecurityProfileError').html('Error submitting Level1 verification: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
function UploadLevel2Picture() {
  var data = new FormData();

  var files = $("#inputFile").get(0).files;

  // Add the uploaded image content to the form data collection
  if (files.length > 0) {
    data.append("UploadedImage", files[0]);
  }

  // Make Ajax request with the contentType = false, and procesDate = false
  var ajaxRequest = $.ajax({
    type: "POST",
    url: g_urlSecurityProfileLevel2 + '?serviceid=' + g_guidServiceID + '&sessionid=' + g_guidSessionID + '&type=lic',
    contentType: false,
    processData: false,
    data: data,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        var statusKYC = JSON.parse(response.jsonData);
        if (statusKYC.Level2PictureIDSucceeded || statusKYC.Level2PictureIDInProcess)
          location.reload();
        else {
          //g_SecurityLeve2BeforeLevel1 = false;
          //g_SecurityLevel2a = true;
          //g_SecurityLevel2aInReview = true;
          //SettingsPageInit('Level2aPicture');
          //                $('#rowLevel2UploadPhysicalID').hide();
          $('#cellErrorUploadLevel2Pic').html('Error uploading drivers license: <b>Not a valid license</b>');
          ButtonAction('btnSubmitDriversLic', 'enable');
        }
      }
      else if (response.responsecode == 'NOENTRY') {
        $('#cellErrorUploadLevel2Pic').html('Error uploading drivers license: <b>Not a valid license</b>');
        ButtonAction('btnSubmitDriversLic', 'enable');
      }
      else if (response.responsecode == 'INVALID_INPUT') {
        $('#cellErrorUploadLevel2Pic').html('Error uploading drivers license: <b>Review guidelines</b>');
        ButtonAction('btnSubmitDriversLic', 'enable');
      }
      else {
        ButtonAction('btnSubmitDriversLic', 'enable');
        $('#cellErrorUploadLevel2Pic').html('Error uploading Drivers License: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnSubmitDriversLic', 'enable');
      $('#cellErrorUploadLevel2Pic').html('Error uploading Drivers License: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }

  });

}
function UploadLevel2Video() {
  var data = new FormData();

  var files = $("#inputVideo").get(0).files;

  // Add the uploaded image content to the form data collection
  if (files.length > 0) {
    data.append("UploadedImage", files[0]);
  }

  // Make Ajax request with the contentType = false, and procesDate = false
  var ajaxRequest = $.ajax({
    type: "POST",
    url: g_urlSecurityProfileLevel2 + '?serviceid=' + g_guidServiceID + '&sessionid=' + g_guidSessionID + '&type=vid',
    contentType: false,
    processData: false,
    data: data,
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        g_SecurityLevel2b = true;
        g_SecurityLevel2bInReview = true;
        SettingsPageInit('Level2bVideo');
      }
      else if (response.responsecode == 'NOENTRY') {
        $('#cellErrorUploadLevel2Video').html('Error uploading Consent Video: <b>Not a Valid Consent</b>');
        ButtonAction('btnSubmitConsentVideo', 'enable');
      }
      else if (response.responsecode == 'INVALID_INPUT') {
        $('#cellErrorUploadLevel2Video').html('Error uploading Consent Video: <b>Only .MP4 file formats accepted</b>');
        ButtonAction('btnSubmitConsentVideo', 'enable');
      }
      else {
        ButtonAction('btnSubmitConsentVideo', 'enable');
        $('#cellErrorUploadLevel2Video').html('Error uploading Consent Video: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnSubmitConsentVideo', 'enable');
      $('#cellErrorUploadLevel2Video').html('Error uploading Consent Video: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }

  });

}
function privSecurityProfileCheckToEnableSubmit() {
  var boolSubmitEnable = true;

  //    if (g_CountrySelected == null)
  //        boolSubmitEnable = false;

  //    if (boolSubmitEnable && $('#entrySecurityProfilePhone').is(":visible") && $('#boxSecurityProfilePhone_Edit').val().trim() == '')
  //        boolSubmitEnable = false;

  if (boolSubmitEnable && $('#boxSecurityProfileStreet_Edit').val().trim() == '')
    boolSubmitEnable = false;

  if (boolSubmitEnable && $('#boxSecurityProfilePostalCode_Edit').val().trim() == '')
    boolSubmitEnable = false;

  if (boolSubmitEnable && $('#boxSecurityProfileBirthDate_Edit').val().trim() == '')
    boolSubmitEnable = false;

  if (boolSubmitEnable && $('#boxSecurityProfileSSN_Edit').val().trim() == '')
    boolSubmitEnable = false;

  if (boolSubmitEnable) {
    ButtonAction('btnSubmitSecurityProfile', 'enable');
  }
  else
    ButtonAction('btnSubmitSecurityProfile', 'disable');
}
function privSecurityProfileCheckToEnableKBASubmit() {
  var boolSubmitEnable = true;

  if (!$('input[name="KBA_Q1"]:checked').val())
    boolSubmitEnable = false;

  if (boolSubmitEnable && !$('input[name="KBA_Q2"]:checked').val())
    boolSubmitEnable = false;

  if (boolSubmitEnable && !$('input[name="KBA_Q3"]:checked').val())
    boolSubmitEnable = false;

  if (boolSubmitEnable && !$('input[name="KBA_Q4"]:checked').val())
    boolSubmitEnable = false;

  if (boolSubmitEnable && !$('input[name="KBA_Q5"]:checked').val())
    boolSubmitEnable = false;

  if (boolSubmitEnable)
    ButtonAction('btnSubmitKBAAnswers', 'enable');
  else
    ButtonAction('btnSubmitKBAAnswers', 'disable');
}
function readIDFromDisk(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#imgDriversLic').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
function readConsentFromDisk(input) {
  if (input.files && input.files[0]) {
    //var reader = new FileReader();

    /*
    reader.onload = function (e) {
        var URL = window.URL;
        var binaryData = [];
        binaryData.push(e.target.result);
        var fileURL = window.URL.createObjectURL(new Blob(binaryData));
        
        //$('#videoConsent').src = fileURL;
        $('#videoConsent').attr('src', fileURL);
        $('#videoConsent').load();
    }
    */
    //reader.readAsDataURL(input.files[0]);
    var URL = window.URL || window.webkitURL;
    fileURL = URL.createObjectURL(input.files[0]);
    $('#videoConsent').attr('src', fileURL);
    $('#videoConsent').attr('type', 'video/mp4; codec="mp4a.40.5"');
    $('#videoConsent').load();
  }
}
// functions - securityprofile - end



// functions - shortcuts - begin
function ShortcutToTxHistory() {
  MenuClick('LeftMenu', 'TxHistory');
  return false;
}

function ShortcutToRewardsLevels()
{
  g_boolPushState = false;
  MenuClick('LeftMenu', 'RewardsLevels');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'RewardsLevels', 'RewardsLevelsIntro');

}

function ShortcutToShopping()
{
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Shopping');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Shopping', 'ShoppingIntro');

}

function ShortcutToReceiveBitcoin() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Wallet');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Wallet', 'ReceiveFunds');
}
function ShortcutToPreviouslyUsed() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Wallet');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Wallet', 'AddressesUsed');
}
function ShortcutToAmazonDirect() {
  MenuClick('LeftMenu', 'AmazonDirect');
}
function ShortcutToMyInventory() {
  MenuClick('LeftMenu', 'Inventory');
}
function ShortcutToSettingsPersonal() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Settings');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Settings', 'Personal');
}
function ShortcutToLoyaltyAbout() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Loyalty');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Loyalty', 'LoyaltyAbout');
}
function ShortcutToEarnBitcoin() {
  //MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'EarnIntro');
}
function ShortcutToEarnBitcoinHelp() {
  //MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = false;
  MenuClick('LeftMenu', 'FAQ');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'FAQ', 'EarningBitcoin');
}
function ShortcutToBuyBitcoin() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'BuyAll');

}
function ShortcutToBuyHardwareWallet() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Shopping');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Shopping', 'HardwareWallets');
}
function ShortcutToSellBitcoin() {
  //MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'SellAll');
}
/*
function ShortcutToEarnBitcoinViaSafeway() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'EarnViaSafeway');
}
*/
function ShortcutToEarnBitcoinOption(cntOption) {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'EarnOption' + cntOption);
}

function ShortcutToSwapCurrencies() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'EarnTrade');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'EarnTrade', 'SwapAll');

}
function ShortcutToSwitchCurrencies() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Settings');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Settings', 'AllCurrencies');

}
function ShortcutToLevel1Validation() {
  //g_boolPushState = false;
  //MenuClick('LeftMenu', 'Settings');
  //g_boolPushState = true;
  //MenuSubClick('LeftMenu', 'Settings', 'Level1');
}
function ShortcutToChangePhone() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Settings');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Settings', 'Personal');
  SettingsPageInit('SettingsPhoneChange');
}
function ShortcutToGiftcards() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Shopping');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Shopping', 'GiftCards');

}
function ShortcutToVPN() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'Shopping');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'Shopping', 'VPNProtection');

}
function ShortcutToAmazon() {
  ShortcutToGiftcards();
  g_gridItemGiftCardBrandSelected = privGridItemData('gridGiftCardCatalogBrands', 'AmazonGC');
  GiftCardCatalogSelected(g_gridItemGiftCardBrandSelected);
  g_CardIDToSelect = '';
}
function ShortcutToBestBuy() {
  ShortcutToGiftcards();
  g_gridItemGiftCardBrandSelected = privGridItemData('gridGiftCardCatalogBrands', 'BestBuyGC');
  GiftCardCatalogSelected(g_gridItemGiftCardBrandSelected);
  g_CardIDToSelect = '';
}

function ShortcutToStarbucks() {
  ShortcutToGiftcards();
  g_gridItemGiftCardBrandSelected = privGridItemData('gridGiftCardCatalogBrands', 'StarbucksGC');
  GiftCardCatalogSelected(g_gridItemGiftCardBrandSelected);
  g_CardIDToSelect = '';
}
function ShortcutToSafeway() {
  ShortcutToGiftcards();
  GiftCardCatalogSelected(privGridItemData('gridGiftCardCatalogBrands', 'SafewayGC'));
  g_CardIDToSelect = '0a267d29-eebd-40b3-8125-d7b80fe3ab1a';
}
function ShortcutToUber() {
  ShortcutToGiftcards();
  GiftCardCatalogSelected(privGridItemData('gridGiftCardCatalogBrands', 'UberGC'));
  g_CardIDToSelect = '2f6174c6-80b5-461e-a7bc-4f06dfa21dca';
}
function ShortcutToLedger() {
  ShortcutToBuyHardwareWallet();
  delayedload_GridGroupName = 'gridAvailableHardwareWallets';
  delayedload_GridItemId = 'LedgerWallet'
  g_CatalogIDToSelect = 'ca83e6e0-d1e1-4420-92eb-183acd5ff1fb';
}
function ShortcutToDeals() {
  MenuClick('LeftMenu', 'Deals');
}

function ShortcutToSupport() {
  g_boolPushState = false;
  MenuClick('LeftMenu', 'FAQ');
  g_boolPushState = true;
  MenuSubClick('LeftMenu', 'FAQ', 'ContactUs');

}

function ShortCutToAuctionsLive() {
    g_boolPushState = false;
    MenuClick('LeftMenu', 'Auctions');
    g_boolPushState = true;
    MenuSubClick('LeftMenu', 'Auctions', 'AuctionsLive');

}

// functions - shortcuts - end

// functions - subscribeunsubscribe - begin
function Resubscribe(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID) {
  SubscribeUnsubscribe(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, 0);
}
function Unsubscribe(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID) {
  SubscribeUnsubscribe(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, 1);
}
function SubscribeUnsubscribe(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, flagSubscribe0Unsubscribe1) {
  paramUnusbscribe = {};
  paramUnusbscribe.guidOnBehalfOfServiceID = guidServiceID;
  paramUnusbscribe.guidUserIDForService = guidOnBehalfOfUserID;
  paramUnusbscribe.guidSessionID = guidSessionID;
  if (flagSubscribe0Unsubscribe1 == 0)
    paramUnusbscribe.Unsubscribe = false;
  else
    paramUnusbscribe.Unsubscribe = true;

  $.ajax({
    type: 'POST',
    url: g_urlSubscribeUnsubscribe,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(paramUnusbscribe),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        funcSUCCESS();
      }
      else {
        funcFAILURE('Error unsubscribing: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFAILURE('Error unsubscribing: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
// functions - subscribeunsubscribe - end



// functions - beta - begin
function BetaAddRemoveSuccess() {
  location.reload();
}
function SettingsBetaFailure(textError) {
  $('#cellSettingsBetaError').html(textError);
  $('.classBetaPleaseWait').hide();
  $('.classBetaStatus').show();
}
function LoyaltyBetaAddFailure(textError) {
  $('#cellJoinLoyaltyBetaError').html(textError);
  ButtonAction('btnJoinLoyaltyBeta', 'enable');
}
function BetaRemove(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID) {
  BetaAddRemove(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, 0);
}
function BetaAdd(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID) {
  BetaAddRemove(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, 1);
}
function BetaAddRemove(funcSUCCESS, funcFAILURE, guidServiceID, guidOnBehalfOfUserID, guidSessionID, flagBetaAdd1Remove0) {
  ClearErrors();
  paramBeta = {};
  paramBeta.guidOnBehalfOfServiceID = guidServiceID;
  paramBeta.guidUserIDForService = guidOnBehalfOfUserID;
  paramBeta.guidSessionID = guidSessionID;
  if (flagBetaAdd1Remove0 == 0)
    paramBeta.BetaAdd = false;
  else
    paramBeta.BetaAdd = true;

  $.ajax({
    type: 'POST',
    url: g_urlBeta,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(paramBeta),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        funcSUCCESS();
      }
      else {
        funcFAILURE('Error with Beta request: <b>' + response.responsecode + ' (' + response.errordescription + ')</b>');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      funcFAILURE('Error with Beta request: <b>' + xhr.status + ' (' + xhr.statusText + ')</b>');
    }
  });
}
// functions - beta - end




// functions - authy - begin
function RequestAuthCodeSuccess(response) {
  g_cntSMSRetries = 0;
}
function RequestAuthCodeFailure(response) {
  if (response.responsecode == 'SMSSENDINGFAILURE' && g_cntSMSRetries < 3) {
    g_cntSMSRetries = g_cntSMSRetries + 1;

    setTimeout(function () {
      RequestAuthCode('', RequestAuthCodeSuccess, RequestAuthCodeFailure, false);
    }, 3000);
  }
  else if (response.responsecode == 'SMSSENDINGFAILURE') {
    $('.classNoAuthyCodeSent').hide();
    $('.classNoAuthySendCode').show();

    g_cntSMSRetries = 0;
    strErrorText = 'Unable to send code - please request code again';
    $('#' + g_AuthyRequestID + '_Error').text(strErrorText);
  }
  else {
    $('.classNoAuthyCodeSent').hide();
    $('.classNoAuthySendCode').show();

    g_cntSMSRetries = 0;
    strErrorText = 'Error requesting authy code: ' + response.responsecode + ' (' + response.errordescription + ')';
    $('#' + g_AuthyRequestID + '_Error').text(strErrorText);
  }
}
function RequestAuthCode(strPhoneNumber, funcSuccess, funcFailure, boolSendByMail) {

  if (g_guidOnBehalfOfUserID == null)
    g_guidOnBehalfOfUserID = '';

  sendVerificationCodeModel = {};
  sendVerificationCodeModel.sessionid = g_guidSessionID;
  sendVerificationCodeModel.serviceid = g_guidServiceID;
  sendVerificationCodeModel.guidOnBehalfOfUserID = g_guidOnBehalfOfUserID;
  sendVerificationCodeModel.PhoneNumber = strPhoneNumber;
  sendVerificationCodeModel.SendByEmail = boolSendByMail;


  $.ajax({
    type: 'POST',
    url: g_urlPasswordSubmitPhoneNumberForVerification,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(sendVerificationCodeModel),
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        g_guidCodeFlowID = response.FlowID;
        funcSuccess(response);
      }
      else {
        funcFailure(response);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      response = {};
      response.responsecode = xhr.status;
      response.errordescription = xhr.statusText;
      funcFailure(response);
    }
  });
}
function AuthySetup(strDeviceCode) {
  if (null == g_guidCodeFlowID)
    g_guidCodeFlowID = '';

  $.ajax({
    type: 'GET',
    url: g_urlAuthySetup.replace('{0}', g_guidServiceID).replace('{1}', g_guidSessionID).replace('{2}', strDeviceCode).replace('{3}', g_guidCodeFlowID),
    contentType: "application/json; charset=utf-8",
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        modelAuthyResponse = JSON.parse(response.jsonData);
        g_AuthySetup = modelAuthyResponse.strSetup;
        g_AuthyTotpSecretDisplayKey = modelAuthyResponse.totpSecretDisplayKey;
        g_guidAuthyCodeFlowID = modelAuthyResponse.guidAuthySetupFlowID;
        g_boolAuthySetup = true;
        if (g_stateAuthy == 'DisablePairing')
          ButtonAction('btnAuthyDisable', 'reset');
        else
          ButtonAction('btnVerifyDevice', 'reset');
        AuthyDisplay();
      }
      else if (response.responsecode == 'INVALID_2FA' || response.responsecode == 'UNAUTHENTICATED' || response.responsecode == 'EXPIRED') {
        if (g_stateAuthy == 'DisablePairing') {
          ButtonAction('btnAuthyDisable', 'reset');
          ButtonAction('btnAuthyDisable', 'enable');
        }
        else {
          ButtonAction('btnVerifyDevice', 'reset');
          ButtonAction('btnVerifyDevice', 'enable');
        }
        $('#AuthyStep2_Error').text('Wrong or expired device confirmation code');
      }
      else {
        if (g_stateAuthy == 'DisablePairing') {
          ButtonAction('btnAuthyDisable', 'reset');
          ButtonAction('btnAuthyDisable', 'enable');
        }
        else {
          ButtonAction('btnVerifyDevice', 'reset');
          ButtonAction('btnVerifyDevice', 'enable');
        }
        $('#AuthyStep2_Error').text('Unable to verify: ' + response.responsecode + '(' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (g_stateAuthy == 'DisablePairing') {
        ButtonAction('btnAuthyDisable', 'reset');
        ButtonAction('btnAuthyDisable', 'enable');
      }
      else {
        ButtonAction('btnVerifyDevice', 'reset');
        ButtonAction('btnVerifyDevice', 'enable');
      }
      $('#AuthyStep2_Error').text('Unable to verify: server temporarily offline');
    }
  });
}
function AuthyDisplay() {
  $('#appSetupImg').empty();
  $('#appSetupImg').qrcode({ "text": g_AuthySetup });
  $('.classAuthy').hide();
  if (g_stateAuthy == 'AuthyEnable')
    $('.classAuthyEnableWorkflowStep3').show();
  else if (g_stateAuthy == 'ViewPairing')
    $('.classAuthyViewPairingStep2').show();

  $('#boxAuthyCode_Edit').focus();
  g_idBtnCancel = 'lnkAuthyCancel';
}
function AuthyVerify(strAuthyCode) {

  var modelAuthyVerify = {};
  modelAuthyVerify.serviceid = g_guidServiceID;
  modelAuthyVerify.sessionid = g_guidSessionID;
  modelAuthyVerify.strSMSOrAuthyCode = strAuthyCode;
  modelAuthyVerify.guidCodeFlowID = g_guidAuthyCodeFlowID;

  $.ajax({
    type: 'POST',
    url: g_urlAuthyVerify,
    data: JSON.stringify(modelAuthyVerify),
    contentType: "application/json; charset=utf-8",
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        SetAuthyState(true);
        $('.classAuthy').hide();
        $('.classAuthyPairingFinished').show();
        ClearEntryFields();
      }
      else if (response.responsecode == 'INVALID_2FA') {
        ButtonAction('btnAuthyEnable', 'reset');
        ButtonAction('btnAuthyEnable', 'enable');
        $('#boxAuthyCode_Error').text('Wrong or expired device confirmation code');
      }
      else {
        ButtonAction('btnAuthyEnable', 'reset');
        ButtonAction('btnAuthyEnable', 'enable');
        $('#boxAuthyCode_Error').text('Unable to verify: ' + response.responsecode + '(' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnAuthyEnable', 'reset');
      ButtonAction('btnAuthyEnable', 'enable');
      $('#boxAuthyCode_Error').text('Unable to verify: server temporarily offline');
    }
  });
}
function AuthyDisable(strSMSCode) {


  if (null == g_guidCodeFlowID)
    g_guidCodeFlowID = '';

  var modelAuthyDisable = {};
  modelAuthyDisable.serviceid = g_guidServiceID;
  modelAuthyDisable.sessionid = g_guidSessionID;
  modelAuthyDisable.Code = strSMSCode;
  modelAuthyDisable.CodeFlowID = g_guidCodeFlowID;

  $.ajax({
    type: 'DELETE',
    url: g_urlAuthyVerify,
    data: JSON.stringify(modelAuthyDisable),
    contentType: "application/json; charset=utf-8",
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        SetAuthyState(false);
        ClearEntryFields();
      }
      else if (response.responsecode == 'INVALID_2FA') {
        ButtonAction('btnAuthyDisable', 'reset');
        ButtonAction('btnAuthyDisable', 'enable');
        $('#AuthyStep2_Error').text('Wrong or expired device confirmation code');
      }
      else {
        ButtonAction('btnAuthyDisable', 'reset');
        ButtonAction('btnAuthyDisable', 'enable');
        $('#AuthyStep2_Error').text('Unable to verify: ' + response.responsecode + '(' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      ButtonAction('btnAuthyDisable', 'reset');
      ButtonAction('btnAuthyDisable', 'enable');
      $('#AuthyStep2_Error').text('Unable to verify: server temporarily offline');
    }
  });
}
function SendAuthyInstructions(strDeviceType) {
  $('.classAuthyShowInstructionsToSMSHelp').hide();
  $('.classAuthySMSHelpSending').show();

  $.ajax({
    type: 'GET',
    url: g_urlAuthyInstructions.replace('{0}', g_guidServiceID).replace('{1}', g_guidSessionID).replace('{2}', strDeviceType),
    contentType: "application/json; charset=utf-8",
    success: function (response) {

      if (response.responsecode == 'SUCCESS') {
        $('.classAuthySMSHelpSending').hide();
        $('.classAuthySMSHelpSent').show();
      }
      else {
        $('.classAuthySMSHelpSending').hide();
        $('.classAuthyShowInstructionsToSMSHelp').show();

        $('#AuthyInstructions_Error').html('Unable to send SMS code: <b>' + response.responsecode + '</b> (' + response.errordescription + ')');
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      $('.classAuthySMSHelpSending').hide();
      $('.classAuthyShowInstructionsToSMSHelp').show();

      $('#AuthyInstructions_Error').text('Unable to verify: server temporarily offline');
    }
  });
}
// functions - authy - end

// functions - logout - begin
function privLogout() {

  modelInput = {};
  modelInput.serviceid = g_guidServiceID;
  modelInput.sessionid = g_guidSessionID;

  $.ajax({
    type: 'POST',
    url: g_urlLogout,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(modelInput),
    success: function (response) {
      if (response.responsecode == 'SUCCESS') {
        window.location.replace(g_urlLogoutLanding);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
    }
  });

}
// functions - logout - end

// functions - youreceived - begin
function SetTwitterToFromIDs(longTwitterIDPayer, longTwitterIDPayee) {
  g_longTwitterIDPayer = longTwitterIDPayer;
  g_longTwitterIDPayee = longTwitterIDPayee;
}
function SetPayeeContractID(contractID, payeeUserIdForService) {
  g_ContractIDPayee = contractID;
  g_payeeUserIdForService = payeeUserIdForService;
}
// functions - youreceived - end


// functions - shortcode - begin
function ShortcodeDisplayBCHQRCode() {

  var qrCodeText = g_BTCAddressesAll['BCH'].AddrNext + '?message=Deposit BCH into iPayYou account'.replace(/ /g, "%20");

  $('#cellQRCodeBCH').qrcode({
    "text": qrCodeText
  });

}
function ShortcodeDisplayBTCQRCode() {
  var qrCodeText = g_BTCAddressesAll['BTC'].AddrNext + '?message=Deposit BTC into iPayYou account'.replace(/ /g, "%20");

  $('#cellQRCodeBTC').qrcode({
    "text": qrCodeText
  });

}
function ShortcodeDisplayBSVQRCode() {
  var qrCodeText = g_BTCAddressesAll['BSV'].AddrNext + '?message=Deposit BSV into iPayYou account'.replace(/ /g, "%20");

  $('#cellQRCodeBSV').qrcode({
    "text": qrCodeText
  });

}

function SetWalletBalanceInSatoshiLightweight(CurrencyCode, satoshiWalletBalanceUsable, satoshiWalletBalancePending /*, satoshiWalletBalanceConfirmed */) {

  g_satoshiWalletBalanceUsableLightweight[CurrencyCode] = satoshiWalletBalanceUsable;
  g_satoshiWalletBalancePendingLightweight[CurrencyCode] = satoshiWalletBalancePending;

  var FiatBTCWalletBalanceUsable = privFiatBalanceFromSatoshi(g_satoshiWalletBalanceUsableLightweight[CurrencyCode], g_dictConversionRate[CurrencyCode]);

  SetWalletBalanceInFiatLightweight(CurrencyCode, FiatBTCWalletBalanceUsable);
}
function SetWalletBalanceInFiatLightweight(CurrencyCode, FiatBTCWalletBalanceUsable) {
  $('.Fiat' + CurrencyCode + 'WalletBalanceLightweight').text('$' + numberWithCommas(FiatBTCWalletBalanceUsable.toFixed(2)));

  var FiatCombinedWalletBalance = privGetCombinedFiatBalance();
  $('.FiatCombinedWalletBalanceLightweight').text('$' + numberWithCommas(FiatCombinedWalletBalance.toFixed(2)));
}
function ShortCodeArchiveSUCCESS(gridItem) {
  InventoryItemList('gridInventoryShortlink', g_loadTypes.Empty);
  DisplayShortCode('init');
}
function ShortCodeArchiveFAILURE(gridItem, responsecode, description) {
  $('.classClaimCodeError').html('<b>' + responsecode + '</b><br />' + description);
}
function InventoryShortlinkSelected(objGridItem) {
  g_GridCatalogItemSelected = objGridItem;
  DisplayShortCode('inventory');
}
function SetShortcodeCommand(strCommand) {
  g_strShortcodeCommand = strCommand;
}
function SetShortcodeTwitterID(longTwitterUserID) {
  g_longShortcodeTwitterID = longTwitterUserID;
}
// functions - shortcode - end


// functions - twitterdefaultaspxonly - begin
function SetTwitterIDExisting(TwitterID) {
  g_TwitterID = TwitterID;
  SetTwitterIDFromGlobal();
  if ('' != g_TwitterID && g_urlTwitter != null) {
    $('.classTwitterRetrieving').show();
    $('.classTwitterRetrieved').hide();
    TwitterGetHandleFromID(g_TwitterID, 'MyHandle');
  }
}
function SetTwitterIDFromGlobal() {
  if ('' == g_TwitterID) {
    $('.classSettingSocialTwitterRegistered').hide();
    $('.classTwitterRetrieved').hide();
    $('.classTwitterRow').hide();
    $('.classTwitterNotPresent').show();
    $('.classTwitterNotRegistered').show();
  }
  else {
    $('.classTwitterNotRegistered').hide();
    $('.classSettingSocialTwitterRegistered').show();
  }
}
function SetTwitterHandleNew(strTwitterOauthToken, strTwitterOauthVerifier) {
  g_TwitterNew = true;
  g_strTwitterOauthToken = strTwitterOauthToken;
  g_strTwitterOauthVerifier = strTwitterOauthVerifier;
}
function SetTwitterHandleNewJump() {
  MenuClick('LeftMenu', 'Settings');
  MenuSubClick('LeftMenu', 'Settings', 'Social');

  if (g_strTwitterOauthToken != '') {
    TwitterGetIDFromTokens(readCookie('guidTwitterFlow'), g_strTwitterOauthVerifier);
    $('.classTwitterNotRegistered').hide();
    $('.classTwitterNotRegistered').hide();
    $('.classTwitterRetrieving').show();

  }

}
function TwitterGetIDFromTokensSUCCESS(strTwitterID) {
  $('.classTwitterRetrieving').hide();
  $('.classTwitterNotRegistered').hide();
  SetTwitterIDExisting(strTwitterID);
}
function TwitterGetIDFromTokensFAILURE(errorcode, errordescription, TwitterID, guidFlow) {
  $('.classTwitterRetrieving').hide();
  $('.classTwitterNotRegistered').show();

  if (errorcode == 'NOENTRY') {
    $('#cellSettingsError').html('Too long to login: <b>Please try again</b>');
  }
  else if (errorcode == 'DUPLICATE') {
    $('#cellSettingsError').html('Unable to connect with Twitter account: <b>Twitter handle already registered to a different account</b>');
  }
  else if (errorcode == 'CATASTROPHIC') {
    $('#cellSettingsError').html('Unable to connect with Twitter account: <b>please try again later</b>');
  }
  else {
    $('#cellSettingsError').html('Unable to connect with Twitter account: <b>' + errorcode + ' (' + errordescription + ')</b>');
  }
}
function TwitterGetHandleFromIDSUCCESS(strWhoseHandle, objTwitterData) {
  var strTwitterHandle = objTwitterData.Handle;

  if (strWhoseHandle == 'MyHandle') {
    $('.classTwitterNotPresent').hide();
    $('.classTwitterRow').show();
    $('.classTwitterRetrieved').html('@' + strTwitterHandle);
    $('.classTwitterPic').attr('src', objTwitterData.ProfileImageUrl);
    $('.classTwitterRetrieving').hide();
    $('.classTwitterRetrieved').show();
    $('.classTwitterPicCell').show();

    if (g_TwitterNew)
      $('.classSettingSocialTwitterChangeSuccess').show();
  }
  else if (strWhoseHandle == 'PayeeHandle') {
    $('#cellPayeeAddress').html('<img width="48" height="48" src="' + objTwitterData.ProfileImageUrl + '" />&nbsp;&nbsp;&nbsp;&nbsp;<i>Twitter:</i> <b>@' + strTwitterHandle + '</b>');
  }
  else if (strWhoseHandle == 'OtherHandle') {
    $('.cellTwitterID_' + objTwitterData.Id).html('<img width="48" height="48" src="' + objTwitterData.ProfileImageUrl + '" />&nbsp;&nbsp;&nbsp;&nbsp;<i>Twitter:</i> <b>@' + strTwitterHandle + '</b>');
    $('.imgTwitter_' + objTwitterData.Id).prop('src', objTwitterData.ProfileImageUrl);
    $('.handleTwitter_' + objTwitterData.Id).html('@' + strTwitterHandle);

  }
  else if (strWhoseHandle == 'TwitterPayee')
    $('.cellTwitterID_' + objTwitterData.Id).html('&nbsp;<img src="' + objTwitterData.ProfileImageUrl400x400 + '"  width="72" />&nbsp;&nbsp;&nbsp;@' + objTwitterData.Handle);
  else if (strWhoseHandle == 'TwitterPayer')
    $('.cellTwitterID_' + objTwitterData.Id).html('&nbsp;<img src="' + objTwitterData.ProfileImageUrl400x400 + '"  width="60" />&nbsp;&nbsp;&nbsp;@' + objTwitterData.Handle);
  else if (strWhoseHandle == 'TwitterSender')
    $('.cellTwitterID_' + objTwitterData.Id).html('&nbsp;<img src="' + objTwitterData.ProfileImageUrl400x400 + '"  width="36" />&nbsp;&nbsp;&nbsp;@' + objTwitterData.Handle);


}
function TwitterGetHandleFromIDFAILURE(strWhoseHandle, idTwitter, strTwitterFailureMsg) {
  if (strWhoseHandle == 'MyHandle') {
    $('.classTwitterRetrieved').html('@' + idTwitter);
    $('.classTwitterRetrieving').hide();
    $('.classTwitterRetrieved').show();
    $('#cellSettingsError').html(strTwitterFailureMsg);
  }
  else {
    if (strWhoseHandle == 'TwitterPayer') {
      $('.cellTwitterID_' + idTwitter).text('Someone');
    }
    else if (strWhoseHandle == 'TwitterPayee') {
      $('.cellTwitterID_' + idTwitter).text('');
    }

    $('.cellTwitterIDFail_' + idTwitter).text(strTwitterFailureMsg);
  }
}
// functions - twitterdefaultaspxonly - end


// functions - rewardslevels - begin






//functions - rewardslevels - end


//functions - auctions - begin

function AuctionsBuyBidsList(gridId, loadType, bidPackSelected = '') {

    $.ajax({
        type: 'GET',
        url: g_urlAuctionsBuyBidsList + '?LoadType=' + loadType+ '&' + GetQueryParametersForSessionAndService(),
        success: function (response) {
            if (response.responsecode == 'SUCCESS' || response.responsecode == 'NOENTRY') {
                arrayGridItemList = JSON.parse(response.data);
                if (loadType === 0) {
                    //$('.changeLevelOption').hide();
                    strEmptyRow = arrayGridItemList[0].strHTMLRow;
                    GridLoadEmptyRow(gridId, strEmptyRow);
                    GridReplaceRows(gridId, null);
                    $('#loading' + gridId).show();
                    // now load the rest of the rows
                    AuctionsBuyBidsList(gridId, 1);
                }
                else {

                    if (response.responsecode != 'NOENTRY' && arrayGridItemList.length > 0) {
                        $('#noavailable' + gridId).hide();
                        GridReplaceRows(gridId, arrayGridItemList);

                        if (loadType === 2) {
                           // $('.changeLevelOption').show();
                        }

                    }
                    else {
                        GridReplaceRows(gridId, null);
                        $('#loading' + gridId).hide();
                        $('#noavailable' + gridId).show();
                    }
                }

            }

            else {
                $('#lblErrorAuctionsBuyBids').html('Unable to load auction bid backs' + ': ' + response.responsecode + ' - ' + response.errordescription);
            }
        },
        failure: function (response) {
            $('#lblErrorAuctionsBuyBids').html('Unable to load auction bid backs' + ': ' + response.responsecode + ' - ' + response.errordescription);


        },
        error: function (xhr, ajaxOptions, thrownError) {

            $('#lblErrorAuctionsBuyBids').html('Unable to load auction bid backs');

        }

    });



}



function AuctionBidPackSelected(objGridRowData)
{
    g_GridAuctionBidPackSelected = objGridRowData;

    AuctionsPageInit('BidPackSelected');
}


function UpdateTotalCostAuctionBidPacks() {
    var count = 0;

    var input = $('#bidPackQuantity').val();

    if (input != '') {
        count = parseInt(input);
    }

    var fiatPriceForBids = count * (g_GridAuctionBidPackSelected.USDItemPrice * (1 - g_percentDiscount / 100));

    $('#cellAuctionBidPackTotalCost').removeClass('Error').text('$' + numberWithCommas(fiatPriceForBids.toFixed(2)));

    if (count > 0)
        ButtonAction('btnAuctionBidPackPurchase', 'enable');
    else
        ButtonAction('btnAuctionBidPackPurchase', 'disable');

}


function AuctionsBuyBidPack(quantity, itemSelected) {

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: g_urlAuctionsBuyBids + '?' + GetQueryParametersForSessionAndService(),
        data: JSON.stringify(new BidPackSelected(itemSelected.ID, itemSelected.guidParentServiceID, quantity, itemSelected.USDItemPrice, g_defaultCurrency, g_promotionCode)),
        success: function (response) {
            if (response.responsecode == 'SUCCESS') {

                var bidCount = parseInt(response.data);

                ShortCutToAuctionsLive();

            }

            else {
                ButtonAction('btnAuctionBidPackPurchase', 'reset');
                $('#lblErrorAuctionsBuyBids').html('Unable to buy bid pack selected' + ': ' + response.responsecode + ' - ' + response.errordescription);
            }
        },
        failure: function (response) {
            ButtonAction('btnAuctionBidPackPurchase', 'reset');
            $('#lblErrorAuctionsBuyBids').html('Unable to buy bid pack selected' + ': ' + response.responsecode + ' - ' + response.errordescription);


        },
        error: function (xhr, ajaxOptions, thrownError) {

            ButtonAction('btnAuctionBidPackPurchase', 'reset');
            $('#lblErrorAuctionsBuyBids').html('Unable to buy bid pack selected');

        }

    });



}

function AuctionsSetAuctionId(auctionId) {

    g_AuctionId = auctionId;

}


function UpdateAuction(auction) {
    if ($('#auctionTimeLeft_' + auction.AuctionId).length > 0) {
        $('#auctionTimeLeft_' + auction.AuctionId).text(auction.TimeLeftSeconds);

        $('#auctionCurrentWinner_' + auction.AuctionId).text(auction.HighestBidder.toLocaleString());

        $('#auctionNextBid_' + auction.AuctionId).text((auction.NextBidCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" }));

        $('#auctionCurrentBid_' + auction.AuctionId).text((auction.CurrentBidCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" }));

        if (auction.Live && g_AuctionId != null & g_AuctionId != '') {


            $('#rowPlaceBid_' + auction.AuctionId).show();

            $('#tblBidsPrev').html('');

            if (auction.Bids != null) {
                for (i = 0; i < auction.Bids.length; i++) {

                    $('#tblBidsPrev').append(auction.Bids[i].htmlRow);
                }

            }

            if (g_universalID == auction.HighestBidder.toLocaleString()) {
                ButtonAction('btnBid_' + auction.AuctionId, 'disable');

            }
            else {

                if (auction.CanBid) {
                    ButtonAction('btnBid_' + auction.AuctionId, 'enable');
                }

            }



        }

        else if (auction.Ended) {
            $('#rowPlaceBid_' + auction.AuctionId).hide();
            $('#rowAuctionEnded_' + auction.AuctionId).show();

        }

    }



}

function AuctionsBid(auctionId) {

    $('#lblErrorAuctions').html('');

    var nextBid = $('#auctionNextBid_' + auctionId).text();

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: g_urlAuctionsBid + '?' + GetQueryParametersForSessionAndService(),
        data: JSON.stringify(new BidSubmit(auctionId, nextBid)),
        success: function (response) {
            if (response.responsecode == 'SUCCESS') {

                ButtonAction('btnBid_' + auctionId, 'reset');
                ButtonAction('btnBid_' + auctionId, 'disable');

                var bidResponse = response.data;

                $('#auctionCurrentBid_' + auctionId).text(bidResponse.CurrentBid);
                $('#auctionCurrentWinner_' + auctionId).text(bidResponse.UniversalIdHighestBidder);
                $('#auctionNextBid_' + auctionId).text(bidResponse.NextBid);

                bidsMade[auctionId] = bidResponse.CurrentBidCents;


                var array = $('#labelBidCount').text().split(' ');

                var cnt = parseInt(array[2]);

                $('#labelBidCount').text('Bid Count: ' + (cnt - 1).toString());


                $('#lblErrorAuctions').html('');



            }
            else {
                $('#lblErrorAuctions').html('Error: ' + response.responsecode + '-' + response.errordescription);
                ButtonAction('btnBid_' + auctionId, 'reset');
            }
        },
        failure: function (response) {
            //
            $('#lblErrorAuctions').html('Error: ' + response.responsecode + '-' + response.errordescription);
            ButtonAction('btnBid_' + auctionId, 'reset');

        },
        error: function (xhr, ajaxOptions, thrownError) {
            //
            $('#lblErrorAuctions').html('Error: ' + response.responsecode + '-' + response.errordescription);
            ButtonAction('btnBid_' + auctionId, 'reset');

        }

    });

}





//functions - auctions - end








// MENUS - BEGIN
function LeftMenu_Wallet_Init() {
  g_stateAddressBook = 'Wallet';
  MenuSubClick('LeftMenu', 'Wallet', 'ReceiveFunds');
}
function LeftMenu_Welcome_Init() {
  StateCurrentMainPush('LeftMenu', 'Welcome');
  StateCurrentPush();

  DisplayWelcome2('Welcome');
}
function LeftMenu_TxHistory_Init() {
  DisplayWallet('TxHistory');
}
function LeftMenu_SendFunds_Init() {
  DisplayWallet('SendFunds');
}
function LeftMenu_ReceiveFunds_Init() {
  DisplayWallet('ReceiveFunds');
}
function LeftMenu_AllCurrencies_Init() {
  DisplayWallet('AllCurrencies');
}
function LeftMenu_WalletDeposit_Init() {
  DisplayWallet('DepositFromBank');
}
function LeftMenu_SellBitcoin_Init() {
  DisplayWallet('WithdrawToBank');
}
function WithdrawToBank_BankList_Init() {

  if (g_stateWalletWithdrawDeposit == 'withdraw') {
    StateCurrentMainPush('LeftMenu', 'SellBitcoin');
    //StateCurrentMainPush('LeftMenu', 'Wallet');
    //StateCurrentSubPush('LeftMenu', 'Wallet', 'WithdrawSyn');
  }
  else if (g_stateWalletWithdrawDeposit == 'deposit') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'WalletDeposit');
  }
  StateCurrentMainPush('WithdrawToBank', 'BankList');
  StateCurrentPush();

  DisplayBank('ListOfSavedBanks');
}
function WithdrawToBank_BankAdd_Init() {
  privDisplayWithdrawDeposit();

  if (g_stateWalletWithdrawDeposit == 'withdraw') {
    StateCurrentMainPush('LeftMenu', 'SellBitcoin');
    //StateCurrentMainPush('LeftMenu', 'Wallet');
    //StateCurrentSubPush('LeftMenu', 'Wallet', 'WithdrawSyn');
  }
  else if (g_stateWalletWithdrawDeposit == 'deposit') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'WalletDeposit');
  }

  StateCurrentMainPush('WithdrawToBank', 'BankAdd');
  StateCurrentPush();

  DisplayBank('AddNewBank');
}
function WithdrawChoices_AddressBook_Init() {

  AddressBookDisplay('SelectFromAddressBook');

  $('.classAddressBookList').show();

}
function WithdrawChoices_NewPayee_Init() {

  g_strPayeeName = '';
  g_strPayeeAddress = '';
  $('#rowUnderstandReWrongAddress').hide();
  $('#rowContinueCreateNewPayee').show();

  CheckIfToEnableCreateNewPayeeButton();

  if (g_stateAddressBook == 'Wallet')
    SendPaymentPageInit('CreateNewPayee');
  else if (g_stateAddressBook == "GiftCards")
    AddressBookDisplay('CreateNewPayee');


  $('.classAddressBookNew').show();
}
function LeftMenu_AmazonDirect_Init() {
  StateCurrentMainPush('LeftMenu', 'AmazonDirect');
  StateCurrentPush();

  AmazonDirectPageInit('Initial');
}

function LeftMenu_Auctions_Init()
{
    MenuSubClick('LeftMenu', 'Auctions', 'AuctionsLive');
}

function LeftMenu_AuctionsLive_Init()
{
    StateCurrentMainPush('LeftMenu', 'Auctions');
    StateCurrentSubPush('LeftMenu', 'Auctions', 'AuctionsLive');
    StateCurrentPush();

    AuctionsPageInit('AuctionsLive');

}

function LeftMenu_AuctionsBuyBids_Init()
{
    StateCurrentMainPush('LeftMenu', 'Auctions');
    StateCurrentSubPush('LeftMenu', 'Auctions', 'AuctionsBuyBids');
    StateCurrentPush();

    AuctionsPageInit('AuctionsBuyBids'); 
}

function LeftMenu_EarnBitcoin_Init() {
  MenuSubClick('LeftMenu', 'EarnTrade', 'EarnIntro');
}
function LeftMenu_EarnIntro_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnIntro');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnIntro', 0);

}
/*
function LeftMenu_EarnViaSafeway_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnViaSafeway');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnViaSafeway');

}
*/
function LeftMenu_EarnOption1_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption1');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 1);
}
function LeftMenu_EarnOption2_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption2');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 2);
}

function LeftMenu_EarnOption3_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption3');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 3);
}

function LeftMenu_EarnOption4_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption4');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 4);
}

function LeftMenu_EarnOption5_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption5');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 5);
}

function LeftMenu_EarnOption6_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption6');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 6);
}

function LeftMenu_EarnOption7_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption7');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 7);
}

function LeftMenu_EarnOption8_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption8');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 8);
}

function LeftMenu_EarnOption9_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption9');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 9);
}

function LeftMenu_EarnOption10_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 10);
}

function LeftMenu_EarnOption11_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 11);
}

function LeftMenu_EarnOption12_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 12);
}

function LeftMenu_EarnOption13_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 13);
}

function LeftMenu_EarnOption14_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 14);
}

function LeftMenu_EarnOption15_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 15);
}

function LeftMenu_EarnOption16_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnOption10');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnOption', 16);
}





function LeftMenu_Shopping_Init() {
  MenuSubClick('LeftMenu', 'Shopping', 'GiftCards');
}
function LeftMenu_GiftCards_Init() {
  StateCurrentMainPush('LeftMenu', 'Shopping');
  StateCurrentSubPush('LeftMenu', 'Shopping', 'GiftCards');
  StateCurrentPush();

  ShoppingPageInit('GiftCards');
}
function LeftMenu_ShoppingIntro_Init() {
  StateCurrentMainPush('LeftMenu', 'Shopping');
  StateCurrentSubPush('LeftMenu', 'Shopping', 'ShoppingIntro');
  StateCurrentPush();

  ShoppingPageInit('ShoppingIntro');
}
function LeftMenu_HardwareWallets_Init() {
  StateCurrentMainPush('LeftMenu', 'Shopping');
  StateCurrentSubPush('LeftMenu', 'Shopping', 'HardwareWallets');
  StateCurrentPush();
  CatalogPageInit('HardwareWallets');
}
function LeftMenu_HardwareWallet_Init() {
  StateCurrentMainPush('LeftMenu', 'Wallet');
  StateCurrentSubPush('LeftMenu', 'Wallet', 'HardwareWallet');
  StateCurrentPush();
  CatalogPageInit('HardwareWallets');
}
function LeftMenu_Inventory_Init() {
  MenuClick('Inventory', 'InventoryActive');
}
function Inventory_InventoryActive_Init() {
  StateCurrentMainPush('LeftMenu', 'Inventory');
  StateCurrentMainPush('Inventory', 'InventoryActive');
  StateCurrentPush();

  InventoryInit('InventoryActive');

}
function Inventory_InventoryArchive_Init() {
  StateCurrentMainPush('LeftMenu', 'Inventory');
  StateCurrentMainPush('Inventory', 'InventoryArchive');
  StateCurrentPush();

  InventoryInit('InventoryArchive');
}
function LeftMenu_EarnTrade_Init() {
  MenuSubClick('LeftMenu', 'EarnTrade', 'EarnIntro');
  //StateCurrentMainPush('LeftMenu', 'EarnTrade');
  //StateCurrentPush();
  //EarnBitcoinPageInit('EarnIntro');
}

function LeftMenu_EarnIntro_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnIntro');
  StateCurrentPush();
  EarnBitcoinPageInit('EarnIntro');
}



function LeftMenu_EarnViaSafeway_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'EarnViaSafeway');
  StateCurrentPush();

  EarnBitcoinPageInit('EarnViaSafeway');

}
function LeftMenu_SellAll_Init() {

  DisplayWallet('WithdrawToBank');
}
function LeftMenu_BuyAll_Init() {
  DisplayWallet('DepositFromBank');
}
function LeftMenu_SwapAll_Init() {
  StateCurrentMainPush('LeftMenu', 'EarnTrade');
  StateCurrentSubPush('LeftMenu', 'EarnTrade', 'SwapAll');
  StateCurrentPush();

  DisplayBetweenCurrencies('Init');
}
function LeftMenu_AddressesUsed_Init() {
  DisplayAddressesUsed('Init');
}
function LeftMenu_BetweenCurrencies_Init() {
  DisplayBetweenCurrencies('Init');
}
function LeftMenu_Deals_Init() {
  StateCurrentMainPush('LeftMenu', 'Deals');
  StateCurrentPush();

  DealsPageInit('DealsIntro');
}
function LeftMenu_VPNProtection_Init() {
  StateCurrentMainPush('LeftMenu', 'Shopping');
  StateCurrentSubPush('LeftMenu', 'Shopping', 'VPNProtection');
  StateCurrentPush();

  VPNProtectionPageInit('VPNProtection');
}
function LeftMenu_Settings_Init() {

  if (g_boolUserLoggedIn) {
    MenuSubClick('LeftMenu', 'Settings', 'Personal');
  }

  else {
    MenuSubClick('LeftMenu', 'Settings', 'AllCurrencies');
  }
  
}
function LeftMenu_Authentication_Init() {
  StateCurrentMainPush('LeftMenu', 'Settings');
  StateCurrentSubPush('LeftMenu', 'Settings', 'Authentication');
  StateCurrentPush();

  SetAuthyState(g_boolAuthyEnabled);

  SettingsPageInit('Authentication');
}
function LeftMenu_Personal_Init() {
  StateCurrentMainPush('LeftMenu', 'Settings');
  StateCurrentSubPush('LeftMenu', 'Settings', 'Personal');
  StateCurrentPush();

  SettingsPageInit('Personal');
}
function LeftMenu_Social_Init() {
  StateCurrentMainPush('LeftMenu', 'Settings');
  StateCurrentSubPush('LeftMenu', 'Settings', 'Social');
  StateCurrentPush();

  SettingsPageInit('Social');
}
function LeftMenu_Level1_Init() {
  StateCurrentMainPush('LeftMenu', 'Settings');
  StateCurrentSubPush('LeftMenu', 'Settings', 'Level1');
  StateCurrentPush();

  SettingsPageInit('Level1');
}
function LeftMenu_Level2_Init() {
  StateCurrentMainPush('LeftMenu', 'Settings');
  StateCurrentSubPush('LeftMenu', 'Settings', 'Level2');
  StateCurrentPush();

  SettingsPageInit('Level2');
}
function Level2a2bMenu_Level2aPicture_Init() {
  SettingsPageInit('Level2aPicture');
}
function Level2a2bMenu_Level2bVideo_Init() {
  SettingsPageInit('Level2bVideo');
}
function LeftMenu_FAQ_Init() {
  MenuSubClick('LeftMenu', 'FAQ', 'WhyIPayYou');
}
function LeftMenu_WhyIPayYou_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'WhyIPayYou');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqWhyIPayYou';
  PageInitFAQ();
}
function LeftMenu_WhatIsBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'WhatIsBitcoin');
  StateCurrentPush();
  g_enumFaqPageToDisplay = 'faqWhatIsBitcoin';
  PageInitFAQ();
}
function LeftMenu_TwitterCommands_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'TwitterCommands');
  StateCurrentPush();
  g_enumFaqPageToDisplay = 'faqTwitterCommands';
  PageInitFAQ();
}
function LeftMenu_BuyingBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'BuyingBitcoin');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqBuyingBitcoin';
  PageInitFAQ();
}
function LeftMenu_EarningBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'EarningBitcoin');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqEarningBitcoin';
  PageInitFAQ();
}
function LeftMenu_SellingBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'SellingBitcoin');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqSellingBitcoin';
  PageInitFAQ();

}
function LeftMenu_WhereIsBuyBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'WhereIsBuyBitcoin');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqWhereIsBuyBitcoin';
  PageInitFAQ();
}
function LeftMenu_AmazonDirectFAQ_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'AmazonDirectFAQ');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqAmazonDirect';
  PageInitFAQ();

}
function LeftMenu_AmazonGCPromo_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'AmazonGCPromo');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqAmazonGCPromo';
  PageInitFAQ();

}
function LeftMenu_Aug1Announce_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'Aug1Announce');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqAug1Announce';
  PageInitFAQ();

}
function LeftMenu_ContactUs_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'ContactUs');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqContactUs';
  PageInitFAQ();

}
function LeftMenu_PayingWithBitcoin_Init() {
  StateCurrentMainPush('LeftMenu', 'FAQ');
  StateCurrentSubPush('LeftMenu', 'FAQ', 'PayingWithBitcoin');
  StateCurrentPush();

  g_enumFaqPageToDisplay = 'faqPayingWithBitcoin';
  PageInitFAQ();
}
function LeftMenu_Loyalty_Init() {
  MenuSubClick('LeftMenu', 'Loyalty', 'LoyaltyAbout');
}
function LeftMenu_LoyaltyAbout_Init() {
  StateCurrentMainPush('LeftMenu', 'Loyalty');
  StateCurrentSubPush('LeftMenu', 'Loyalty', 'LoyaltyAbout');
  StateCurrentPush();

  LoyaltyInit('About');
}
function LeftMenu_YouReceived_Init() {
  StateCurrentMainPush('LeftMenu', 'YouReceived');
  StateCurrentPush();

  DisplayYouReceived('init');
}
function LeftMenu_ShortCode_Init() {
  DisplayShortCode('init');
}

function LeftMenu_RewardsLevels_Init() {
  MenuSubClick('LeftMenu', 'RewardsLevels', 'RewardsLevelsIntro');
}

function LeftMenu_RewardsLevelsIntro_Init() {
  StateCurrentMainPush('LeftMenu', 'RewardsLevels');
  StateCurrentSubPush('LeftMenu', 'RewardsLevels', 'RewardsLevelsIntro');
  StateCurrentPush();


  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  //ShoppingPageInit('ShoppingIntro');
  $('.classRewardsLevels').show();
  $('#rowRewardsLevelsIntro').show();

  RewardsLevelsDisplay('RewardsLevelsGen');

}



// MENUS - END



// DISPLAY - BEGIN
function DisplayWelcome2(state) {
  ClearEntryFields();
  ClearErrors();

  $('.MenuRow').hide();
  $('.classWelcomeToIPY').show();
  $('.classWelcomeToIPYDefault').show();
  $('#tblBalance').show();
  $('#divVideo').show();
  g_idlnkCancel = '';
}
function DisplayWallet(state) {
  ClearEntryFields();
  ClearErrors();

  $('.MenuRow').hide();
  $('.menuWallet').show();
  $('#tblBalance').show();

  g_idBtnCancel = '';

  if (state == 'TxHistory') {
    StateCurrentMainPush('LeftMenu', 'TxHistory');
    //StateCurrentMainPush('LeftMenu', 'Wallet');
    //StateCurrentSubPush('LeftMenu', 'Wallet', 'TxHistory');
    StateCurrentPush();

    $('.classTxHistoryDefault').show();
  }
  else if (state == 'SendFunds') {
    //StateCurrentMainPush('LeftMenu', 'Wallet');
    //StateCurrentSubPush('LeftMenu', 'Wallet', 'SendFunds');
    //StateCurrentPush();

    SendPaymentPageInit('SendPaymentSubmenuClicked');
    $('.classSendFundsDefault').show();
  }
  else if (state == 'ReceiveFunds') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'ReceiveFunds');
    StateCurrentPush();

    $('.classReceiveBitcoin').show();
    UsdBtcReset();
    $('#boxAmountToDepositInUSD_Edit').focus();
  }
  else if (state == 'AllCurrencies') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'AllCurrencies');
    StateCurrentPush();

    $('.classAllCurrencies').show();
    $('#tblBalance').hide();
  }
  else if (state == 'DepositFromBank') {
    g_stateWalletWithdrawDeposit = 'deposit';
    privDisplayWithdrawDeposit();
    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);

    if (null == g_BankAccountList || g_BankAccountList.length == 0) {
      MenuClick('WithdrawToBank', 'BankAdd');
    }
    else {
      MenuClick('WithdrawToBank', 'BankList');
    }
  }

  else if (state == 'WithdrawToBank') {
    g_stateWalletWithdrawDeposit = 'withdraw';
    privDisplayWithdrawDeposit();

    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);

    if (null == g_BankAccountList || g_BankAccountList.length == 0) {
      MenuClick('WithdrawToBank', 'BankAdd');
    }
    else {
      MenuClick('WithdrawToBank', 'BankList');
    }
  }
}
function PageDisplayBankDeposit(enumPageToDisplay) {
  g_idBtnCancel = '';
  $('.classRowBankDeposit').hide();
  $('.MenuRow').hide();
  ClearErrors();
  ClearEntryFields();

  if (enumPageToDisplay == 'ListOfBankAccounts') {
    ButtonAction('btnDepositSelectBank', 'enable');
    $('#rowDepositBankAccountGrid').show();
  }
  else if (enumPageToDisplay == 'BankAccountSelected') {
    $('#rowDepositBankSelected').show();
    $('#rowAmountToDepositFromSynEdit').show();
    $('#boxFiatAmountToDepositFromSyn_Edit').focus();
    privDepositSynCheckToEnableContinue();
    g_idBtnCancel = 'btnCancelBankSelectedDeposit';
  }
  else if (enumPageToDisplay == 'BankMFADeposit') {
    $('#rowBankConfirmDeposit').show();
    $('#tblBankMFADeposit').show();
    $('#boxBankDepositMFAAnswer_Edit').val('').focus();
    g_idBtnCancel = 'lnkCancelBankMFADeposit';
  }
}
function DisplayBank(state) {
  ClearEntryFields();
  ClearErrors();

  $('.MenuRow').hide();
  $('.menuWallet').show();
  $('#tblBalance').show();
  g_idBtnCancel = '';

  if (state == 'ListOfAvailableBanks') {
    privDisplayWithdrawDeposit();
    $('.classBankMenu').show();
    if (g_stateWalletWithdrawDeposit == 'withdraw' && !g_SecurityLevel1)
      $('#rowSecurityProfileNeeded').show();
    else if (g_stateWalletWithdrawDeposit == 'deposit' && (!g_SecurityLevel2 || g_SecurityLevel2aInReview || g_SecurityLevel2bInReview || !g_SecurityGlideraRegistered || !g_SecurityGlideraPhoneValidated))
      $('#rowSecurityProfileNeeded').show();
    else {
      $('#rowSelectBankFromSupported').show();
    }

    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
  }
  else if (state == 'ListOfSavedBanks') {
    $('.classBankMenu').show();
    privDisplayWithdrawDeposit();
    if (g_stateWalletWithdrawDeposit == 'withdraw' && !g_SecurityLevel1)
      $('#rowSecurityProfileNeeded').show();
    else if (g_stateWalletWithdrawDeposit == 'deposit' && (!g_SecurityLevel2 || g_SecurityLevel2aInReview || g_SecurityLevel2bInReview || !g_SecurityGlideraRegistered || !g_SecurityGlideraPhoneValidated))
      $('#rowSecurityProfileNeeded').show();
    else if (g_stateWalletWithdrawDeposit == 'deposit') {
      $('#rowSelectBankBuyFromSaved').show();
    }
    else if (g_stateWalletWithdrawDeposit == 'withdraw') {
      $('#rowSelectBankSellFromSaved').show();
    }

    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
  }
  else if (state == 'AddNewBank') {
    $('.classBankMenu').show();

    if (g_stateWalletWithdrawDeposit == 'withdraw' && !g_SecurityLevel1) {
      $('#rowSecurityProfileNeeded').show();

    }
    else if (g_stateWalletWithdrawDeposit == 'deposit' &&
      (!g_SecurityLevel2 || g_SecurityLevel2aInReview || g_SecurityLevel2bInReview || !g_SecurityGlideraRegistered || !g_SecurityGlideraPhoneValidated)) {
      $('#rowSecurityProfileNeeded').show();

    }

    else {
      $('#rowSelectBankFromSupported').show();

    }

    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    privSynCheckToEnableBankVerify();
    privDisplayWithdrawDeposit();

  }

  else if (state == 'BankCredentialsByRoutingAccount') {
    privDisplayWithdrawDeposit();
    $('#rowSelectBankByRouting').show();
    $('.classEnterRoutingAccount').show();
    $('#editBankRoutingNumber_Edit').focus();
    g_idBtnCancel = 'lnkCancelBankSelectForAddByRouting';
  }
  else if (state == 'BankCredentialsByRoutingAccountReenter') {
    privDisplayWithdrawDeposit();
    $('#rowSelectBankByRouting').show();
    $('.classReenterRoutingAccount').show();
    $('#editBankRoutingNumberReenter_Edit').focus();
    g_idBtnCancel = 'lnkCancelBankSelectForAddByRoutingReenter';
  }
  else if (state == 'BankCredentialsByRoutingAccountNickname') {
    privDisplayWithdrawDeposit();
    $('#rowSelectBankByRouting').show();
    $('.classEnterBankNickname').show();
    $('#boxBankRoutingAccountReview_EditLocked').text(g_strBankRoutingNumber + ' | ' + g_strBankAccountNumber);
    $('#boxBankRoutingAccountNickname_Edit').focus();

    g_idBtnCancel = 'lnkCancelBankSelectForAddByRoutingNickname';
  }
  else if (state == 'BankMFA') {
    privDisplayWithdrawDeposit();
    $('#rowBankConfirmSelected').show();
    $('#tblBankMFA').show();
    $('#boxBankMFAAnswer_Edit').val('').focus();
    ButtonAction('btnBankMFASubmit', 'reset');
    g_idBtnCancel = 'idCancelBankSelectForAdd';
  }

  else if (state == 'BankSelectedForAdd') {
    privDisplayWithdrawDeposit();
    $('#imgBankSelected').prop('src', g_urlBankLogo);
    $('#nameBankSelected').text(g_strBankName);

    $('#rowBankConfirmSelected').show();
    $('#tblBankCredentials').show();
    $('#editBankUsername_Edit').focus();

    g_idBtnCancel = 'idCancelBankSelectForAdd';

  }
  else if (state == 'BankAccountSelected') {
    privDisplayWithdrawDeposit();
    if (g_stateWalletWithdrawDeposit == 'withdraw') {
      $('#rowWithdrawalBankSelected').show();
      $('#rowAmountToWithdrawToSynEdit').show();
      privWithdrawSynCheckToEnableContinue();
      $('#boxFiatAmountToWithdrawToSyn_Edit').focus();
      g_idBtnCancel = 'btnCancelBankSelectedWithdrawal';
    }
    else if (g_stateWalletWithdrawDeposit == 'deposit') {
      $('#rowDepositBankSelected').show();
      $('#rowAmountToDepositFromSynEdit').show();
      privDepositSynCheckToEnableContinue();
      $('#boxFiatAmountToDepositFromSyn_Edit').focus();
      g_idBtnCancel = 'btnCancelBankSelectedWithdrawal';
    }

  }
  else if (state == 'ConfirmDeposit') {
    SynTimerRestart();
    privDisplayWithdrawDeposit();

    privDepositSynCheckIfToEnableDepositSynNow();
    $('#rowDepositBankSelected').show();
    $('#rowAmountToDepositFromSynConfirm').show();
    $('#boxDepositSynAuthyCode_Edit').focus();

    g_idBtnCancel = 'lnkCancelAmountToDepositFromSynConfirm';

  }
}
function AddressBookDisplay(pageStatus) {
  ClearEntryFields();
  ClearErrors();

  $('.classAddressBookMenuRow').hide();
  $('#rowAddressBook').show();
  g_idBtnCancel = '';

  if (pageStatus == 'InvokeNew') {
    if (null == g_AddressBookList || g_AddressBookList.length == 0) {
      MenuClick('WithdrawChoices', 'NewPayee');
    }
    else {
      MenuClick('WithdrawChoices', 'AddressBook');
    }

  }
  else if (pageStatus == 'CreateNewPayee') {

    g_AddressBookControlLastShown = 'CreateNewPayee';

    $("#chkAddToAddressBook").prop("checked", false);
    $('#chkAddToAddressBook').prop("disabled", true);

    //$('.BTCAmount').text('0.00000000');
    //CheckAmountToSend(false);

    if (g_stateAddressBook == 'Wallet') {
      $('.menuWallet').show();
      $('#rowAddressBookMarketingPayment').show();
    }
    else {
      $('#rowAddressBookMarketingPayment').hide();
      g_idBtnCancel = 'lnkInventoryChange';
    }

    $('#PayeeName_Edit').val(g_strPayeeName);
    $('#PayeeAddress_Edit').val(g_strPayeeAddress);
    CheckIfToEnableCreateNewPayeeButton();

    $('.classAddressBookMenus').show();
    $('.classAddressBookNew').show();
    $('#rowNewPayee').show();
    $('#PayeeAddress_Edit').focus();
  }






  else if (pageStatus == 'PayeeChange') {
    $("#chkAddToAddressBook").prop("checked", false);
    $('#chkAddToAddressBook').prop("disabled", true);

    if (g_AddressBookControlLastShown == 'SelectFromAddressBook')
      AddressBookDisplay('SelectFromAddressBook');
    else if (g_AddressBookControlLastShown == 'CreateNewPayee') {
      AddressBookDisplay('CreateNewPayee');
    }
  }





  else if (pageStatus == 'SelectFromAddressBook') {
    $('.classAddressBookList').show();

    g_AddressBookControlLastShown = 'SelectFromAddressBook';

    AdjustHeightOnResize('gridAddressBook');

    if (g_stateAddressBook == 'Wallet') {
      StateCurrentMainPush('LeftMenu', 'Wallet');
      StateCurrentSubPush('LeftMenu', 'Wallet', 'SendFunds');
      StateCurrentMainPush('WithdrawChoices', 'AddressBook');
      StateCurrentPush();
    }
    else {
      g_idBtnCancel = 'lnkInventoryChange';
    }

    $('.classAddressBookMenus').show();
  }






  else if (pageStatus == 'DisplayPayee') {
    $('.classAddressBookPayeeSelected').show();

    if (g_longPayeeTwitterID > 0) {
      $('#cellPayeeAddress').text('');
      TwitterGetHandleFromID(g_longPayeeTwitterID, 'PayeeHandle');
    }
    else
      $('#cellPayeeAddress').text(g_strPayeeAddress);

    if (g_strPayeeName.trim() == '') {
      $('#cellPayeeName').hide();
      $('#spanrecipient').text(g_strPayeeAddress);
    }
    else {
      strPayeeName = g_strPayeeName.trim();
      $('#cellPayeeName').text(strPayeeName);
      $('#cellPayeeName').show();
      $('#spanrecipient').text(strPayeeName);
    }

    if (g_boolInternalPayee) {
      $('.classNoncancelablePayment').hide();
      $('.classCancelablePayment').show();
    }
    else {
      $('.classNoncancelablePayment').show();
      $('.classCancelablePayment').hide();
    }



    $('#rowAmountToSendEdit').show();
    $('#boxAmountToSendInUSD_Edit').focus();

    if (g_stateAddressBook == 'Wallet') {
      $('#rowPayeeSelectedSendFunds').fadeIn();
      $('#boxAmountToSendInUSD_Edit').focus();
      $('.classSendFundsContinue').show();
      $('.classCurrentCurrencyRow').show();

    }
    else if (g_stateAddressBook == 'GiftCards') {
      $('.classOptionalNote').show();
      $('.classEnterPassword').show();
      $('#boxNoteForRecipient_Edit').focus();
      $('.classCurrentCurrencyRow').hide();
    }

    g_idBtnCancel = 'PayeeChange';

  }
}
function GiftCardPageInit(pageStatus) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classGiftCards').hide();
  $('.GiftCards').show();
  g_percentDiscount = 0;
  g_promotionCode = '';
  g_idBtnCancel = '';

  if (pageStatus == 'SelectBrand') {
    $('#rowGiftCardsBuyMore').show();
    $("#giftCardCatalogBrands").show();
    $("#rowGiftCardBrands").show();
    $('#cardQuantity').val(1);
  }
  else if (pageStatus == 'BrandSelected') {
    if (null != g_gridItemGiftCardBrandSelected) {
      GiftCardValuesList('gridGiftCardCatalogValues', g_catalogCategories.GiftCards, g_loadTypes.Empty, g_gridItemGiftCardBrandSelected.ID, g_gridItemGiftCardBrandSelected.RetailerName);
      $("#imgGiftBrandSelected").attr('src', g_gridItemGiftCardBrandSelected.BrandNameListURL);
      $('#rowGiftCardsBuyMore').show();
      $("#rowGiftCardBrandSelected").show();
      $("#giftCardCatalogBrands").show();
      AdjustHeightOnResize('gridGiftCardCatalogValues');
      g_idBtnCancel = 'lnkCancelGiftCardBrand';
    }
  }
  else if (pageStatus == 'ValueSelected') {
    if (null != g_ItemForPurchaseSelected) {
      updateTotalAmount();
      $('#rowGiftCardsBuyMore').show();
      $("#imgGiftCardValueSelected").attr('src', g_ItemForPurchaseSelected.CatalogOfferPicURL);
      $('#spanGiftCardsMaxAvailable').text(g_ItemForPurchaseSelected.MaxQuantity);
      $('#cellGiftCardDisclaimer').html(g_gridItemGiftCardBrandSelected.BrandDisclaimer);
      $('#giftCardCatalogBrands').show();
      $('#rowGiftCardValueSelected').show();
      $('#boxPromotionCode_Edit').val('');
      $('#boxPromotionCode_Edit').focus();
      $('#cardQuantity').val(1);
      $('.classPromotionDiscountApplied').hide();
      $('.classPromotionDiscountNotApplied').show();
      $('.classWeAreHereToHelp').show();

      updateTotalAmount();
      g_idBtnCancel = 'lnkCancelGiftCardValue';
    }
  }
  else if (pageStatus == 'GiftCardsPurchase') {
    $('#rowGiftCardsBuyMore').show();
    $('#rowGiftCardBrands').show();
  }
}
function CatalogPageInit(pageStatus) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  g_percentDiscount = 0;
  g_promotionCode = '';
  g_idBtnCancel = '';
  $('#itemQuantity').val(1);
  $('.classPromotionDiscountAppliedCatalog').hide();
  $('.classPromotionDiscountNotAppliedCatalog ').show();
  if (null != g_CatalogActive) {
    $('.class' + g_CatalogActive).show();
  }

  if (pageStatus == 'HardwareWallets') {
    g_CatalogActive = pageStatus;
    $('.classHardwareWallets').show();
    $('.classHardwareWalletSelect').show();
  }
  else if (pageStatus == 'ValueSelected') {
    g_idBtnCancel = 'lnkCancelCatalogValue';
    $('.classCatalogItemSelect').hide();
    $('.classCatalogValueSelected').show();
    $('.classWeAreHereToHelp').show();
    $('#imgCatalogValueSelected').prop('src', g_GridCatalogItemSelected.CatalogOfferPicURL);
    $('#cellCatalogDisclaimer').html(g_GridCatalogItemSelected.BrandDisclaimer);
    if (g_GridCatalogItemSelected.MaxQuantity == -1) {
      $('#rowMaximumAvailableCatalog').hide();
    }
    else {
      $('#spanCatalogValuesMaxAvailable').text(g_GridCatalogItemSelected.MaxQuantity);
      $('#rowMaximumAvailableCatalog').show();
    }

    updateTotalAmountCatalog();

    if (g_GridCatalogItemSelected.BrandLogoUrl != null && g_GridCatalogItemSelected.BrandLogoUrl != '') {
      $('#rowCatalogBrand').show();
      $('#imgCatalogBrand').prop('src', g_GridCatalogItemSelected.BrandLogoUrl);
    }
    else {
      $('#rowCatalogBrand').hide();
    }

    if (g_GridCatalogItemSelected.ItemNameGenericSingularNoBrand != null && g_GridCatalogItemSelected.ItemNameGenericSingularNoBrand != '') {
      $('#rowCatalogItem').show();
      $('#cellCatalogItem').text(g_GridCatalogItemSelected.ItemNameGenericSingularNoBrand);
    }
    else {
      $('#rowCatalogItem').hide();
    }

    cntImages = g_GridCatalogItemSelected.listImagesURL.length
    if (cntImages > 0) {
      $('#rowCatalogValueSelectedImages').show();
      $('.classCatalogValueImages').hide();

      for (indexImage = 0; indexImage < cntImages; indexImage++) {
        $('#paddingCatalogValueSelected' + indexImage).show();
        $('#imgCatalogValueSelected' + indexImage).show();
        $('#imgCatalogValueSelected' + indexImage).prop('src', g_GridCatalogItemSelected.listImagesURL[indexImage]);
      }
    }
    else {
      $('#rowCatalogValueSelectedImages').hide();
    }

    cntBonuses = g_GridCatalogItemSelected.listBonusItemBasics.length;
    $('.rowBonuses').hide();
    if (cntBonuses > 0) {
      for (indexBonus = 0; indexBonus < cntBonuses; indexBonus++) {
        $('#rowBonus' + indexBonus).show();
        $('#paddingBonus' + indexBonus).show();
        objBonus = g_GridCatalogItemSelected.listBonusItemBasics[indexBonus];
        if (objBonus.FulfillmentInformation.ShippingLocation == 0) {
          $('#lblBonus' + indexBonus).text('Instant Bonus:');
        }
        else {
          $('#lblBonus' + indexBonus).text('Bonus:');
        }

        if (objBonus.Thumbnail != null && objBonus.Thumbnail != '') {
          $('#cellImgBonus' + indexBonus).show();
          $('#imgBonus' + indexBonus).prop('src', objBonus.Thumbnail);
        }
        else {
          $('#cellImgBonus' + indexBonus).hide();
        }

        $('#itemBonus' + indexBonus).text(objBonus.ItemName);
      }
    }


    $('#boxPromotionCodeCatalog_Edit').focus();

  }
}
function AmazonDirectPageInit(pageStatus) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classAmazonDirect').show();
  g_objAmazonContract = null;
  DisplayAmazonCredentials(false, true);
  g_idBtnCancel = '';

  if (pageStatus == 'Initial') {
    if (g_objAmazonCredentials == null)
      $('#boxAmazonLoginEmail_Edit').focus();
    else
      $('#boxAmountToSendToAmazon_Edit').focus();
  }
}

function AuctionsPageInit(pageStatus, auctionId = ''){
    ClearErrors();
    ClearEntryFields();

    $('.MenuRow').hide();
    $('.classAuctions').show();

    if (pageStatus == 'AuctionsLive') {
        g_AuctionId = '';
        $('.classAuctionsLive').show();
        $('.classAuction').show();
        $('.classAuctionsBuyBids').hide();

    }
    else if (pageStatus == 'AuctionsBuyBids') {
        $('.classAuctionsBuyBids').show();
        $('.classBuyBidsAll').show();
        $('.classAuctionsLive').hide();
        $('.classBidPackSelected').hide();
    }
    else if (pageStatus == 'BidPackSelected') {
        $('.classAuctionsBuyBids').show();
        $('.classAuctionsLive').hide();

        $('.classBuyBidsAll').hide();

        if (null != g_GridAuctionBidPackSelected) {

            $("#imgBidPackSelected").attr('src', g_GridAuctionBidPackSelected.CatalogOfferPicURL);
            $('#cellBidPackDisclaimer').html(g_GridAuctionBidPackSelected.BrandDisclaimer);
            $('.classBidPackSelected').show();
            $('#boxPromotionCodeAuctionsBids_Edit').val('');
            $('#boxPromotionCodeAuctionsBids_Edit').focus();
            $('#bidPackQuantity').val(1);
            $('.classPromotionDiscountApplied').hide();
            $('.classPromotionDiscountNotApplied').show();

            UpdateTotalCostAuctionBidPacks();

            //g_idBtnCancel = 'linkCancelAuctionBidPackSelected';
        }


    }
    else if (pageStatus == 'AuctionSelected') {
        g_AuctionId = auctionId;
        $('.classAuction').hide();
        $('#auctionCell_' + g_AuctionId).show();



    }

}

function EarnBitcoinPageInit(pageStatus, cntOption) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.menuEarnBitcoin').show();
  $('.classEBAcknowledgedNo').show();
  $('.classEBAcknowledgedYes').hide();
  ButtonAction('btnEarnBitcoinPhysicalAccessWishlist', 'reset');
  ButtonAction('btnPhysicalAdditionalInstructionsExpand', 'reset');
  $('#tblEarnBitcoinPhysicalCardSelected').empty();
  $('.classPhysicaAdditionalInstructionsExpand').show();
  g_EarnBitcoinOptionSelected = 0;
  g_EarnBitcoinPhysicalValueSelected = 0;
  g_EarnBitcoinPhysicalGridSelected = null;
  g_idBtnCancel = '';
  $('.classSpaceForCustomEBAddress').css("background-color", "#f0ffff");
  InitializeEBWithdrawalAddress();

  if (pageStatus === 'EarnIntro') {
    $('.classEarnBitcoinIntro').show();
  }
  else if (pageStatus === 'EarnOption') {
    g_EarnBitcoinOptionSelected = cntOption;

    if (g_arrayEarnBitcoinOptions[cntOption].type == 0) {
      EarnBitcoinListDigital(cntOption);
      $('.classEarnBitcoinDigital').show();
      $('.classEarnStepByStep').show();
      //$('.classEarnBitcoinViaOption' + cntOption).show();
      //$('#boxAmazonOrderNumberOption' + cntOption + '_Edit').focus();
      $('#boxEBDigitalOrderNumber_Edit').focus();
    }
    else {
      EarnBitcoinListPhysical('gridPhysicalDenominations', 0, cntOption);
      $('.classEarnBitcoinPhysical').show();
      $('.classEarnStepByStep').show();
      $('.classEarnBitcoinPhysicalMerchant').text(g_arrayEarnBitcoinOptions[cntOption].merchantfriendly);
      $('.classEarnBitcoinPhysicalDigital').text('Physical');
    }
  }
}
function ShoppingPageInit(pageInit) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classGiftCards').hide();
  g_percentDiscount = 0;
  g_promotionCode = '';
  g_idBtnCancel = '';


  if (pageInit == 'ShoppingIntro') {
    $('.classShoppingIntro').show();
  }
  else if (pageInit == 'GiftCards') {
    $('.GiftCards').show();

    $('#rowGiftCardsBuyMore').show();
    $('#rowGiftCardBrands').show();
  }

}
function InventoryInit(pageInit) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.InventoryTable').show();

  g_stateAddressBook = 'GiftCards';
  $('.classInventoryMenu').show();

  if (pageInit == 'InventoryActive') {
    $('#rowInventoryActive').show();
  }
  else if (pageInit == 'InventoryArchive') {
    $('#rowInventoryArchive').show();
  }
  else if (pageInit == 'InventorySellToUs') {
    $('.classInventoryMenu').hide();
    $('#rowInventorySellToUs').show();
    $('#cellSelectedGiftCardUSDRestockingFeeWorking').show();
    g_idBtnCancel = 'lnkInventorySellCancel';

    PurchaseSellContractGet(InventorySellContractGetSUCCESS, InventorySellContractGetFAILURE);
  }
  else if (pageInit == 'InventorySendToFriend') {
    $('.classInventoryMenu').hide();
    $('#rowInventorySendToFriend').show();
    AddressBookDisplay('InvokeNew');
    g_idBtnCancel = 'lnkInventoryChange';
  }


}
function DisplayAddressesUsed(state) {
  ClearEntryFields();
  ClearErrors();
  BTCEntryReset();
  USDEntryReset();

  $('.MenuRow').hide();
  $('.menuWallet').show();
  $('#tblBalance').show();

  g_idBtnCancel = '';

  if (state == 'Init') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'AddressesUsed');
    StateCurrentPush();

    $('.classAddressesUsed').show();
  }

}
function DisplayBetweenCurrencies(state) {
  ClearEntryFields();
  ClearErrors();
  BTCEntryReset();
  USDEntryReset();

  $('.MenuRow').hide();
  $('.menuWallet').show();
  $('#tblBalance').show();

  g_idBtnCancel = '';

  if (state == 'Init') {
    StateCurrentMainPush('LeftMenu', 'Wallet');
    StateCurrentSubPush('LeftMenu', 'Wallet', 'BetweenCurrencies');
    StateCurrentPush();

    $('.classBetweenCurrencies').show();
    $('.classCheckedCheckbox_From').hide();
    $('.classUncheckedCheckbox_From').show();
    $('.classCurrencyLink_From').show();
    $('.classCurrencyLink_From').removeClass('classChecked_From').addClass('classUnchecked_From');
    $('.rowCurrency_From').show();
    $('.rowCurrencyGap_From').show();

    $('.classCellToCurrency').hide();
    $('.classExploreIPYServicesSwapCurrencies').show();

    $('.rowCurrencyGap_To').show();
    $('.rowCurrency_To').show();

    $('.classCheckbox_To').show();

    $('#rowAmountToTransferEdit').hide();

    ButtonAction('btnTransferContinue', 'reset');
    ButtonAction('btnTransferContinue', 'disable');

    CurrenciesTransferAddHandlers();
  }
  else if (state == 'BetweenCurrencies') {

  }

}
function DealsPageInit(pageInit) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classGiftCards').hide();
  g_idBtnCancel = '';


  if (pageInit == 'DealsIntro') {
    $('.classDealsAndDiscounts').show();
  }
}
function ShippingPageDisplay(pageStatus) {
  ClearErrors();

  $('.classAddNewShippingAddress').hide();
  $('.classConfirmShippingAddress').hide();
  $('.classDisplayShippingAddress').hide();
  $('.classDisplayShippingConfirmation').hide();

  if (!g_GridCatalogItemSelected.ShippingInformation || !g_GridCatalogItemSelected.ShippingInformation.Shippable) {
    return;
  }

  $('.classGiftCardDetails').hide();
  $('.classShippingAddressHeader').hide();

  if (pageStatus == 'init') {
    $('.classShippingInfo').show();

    if (g_GridCatalogItemSelected.ShippingInformation.ShippingInfoStatus == g_shippingStatus.NoInfoReceived) {
      ShippingPageDisplay('requestShipping', g_GridCatalogItemSelected);
    }
    else {
      ShippingPageDisplay('displayShipping', g_GridCatalogItemSelected);
    }
  }
  else if (pageStatus === 'requestShipping') {
    $('.classAddNewShippingAddress').show();
    g_fancyboxFocus = 'boxShippingAddressName_Edit';
    g_currentShippingAddress = new ShippingAddress();
  }
  else if (pageStatus === 'confirmShipping') {
    $('.classConfirmShippingAddress').show();
    $('#displayRecipientName').html(g_currentShippingAddress.Name);
    $('#displayStreetAddress').html(g_currentShippingAddress.Street1);
    $('#displayCityName').html(g_currentShippingAddress.City);
    $('#displayStateProvince').html(g_currentShippingAddress.State);
    $('#displayCountry').html(g_currentShippingAddress.Country);
    $('#displayPostalCode').html(g_currentShippingAddress.PostalCode);
    if (g_currentShippingAddress.IsVerified) {
      $('#shippingAddressVerificationError').hide();
    } else {
      $('#shippingAddressVerificationError').show();
    }


  }
  else if (pageStatus == 'displayShipping') {
    g_currentShippingAddress = $.extend(new ShippingAddress(), g_GridCatalogItemSelected.ShippingInformation.ShippingAddress);
    g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser = $.extend(new FinalShippingInfoForUser(), g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser);
    if (g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser.TrackingId != null && g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser.TrackingId != '') {

      $('#shippingTrackingId').html(g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser.getTrackingString('btnTrackingString'));

      $('#btnTrackingString').click(event => {
        window.open(g_GridCatalogItemSelected.ShippingInformation.FinalShippingInfoForUser.getTrackingUrl(), '_blank');
      });


    }
    else {
      $('#shippingTrackingId').text('Awaiting tracking information')
    }

    $('.classTrackingInformation').show();
    $('.classDisplayShippingAddress').show();
    $('.classDisplayShippingConfirmation').show();
    $('#cellProvideShippingInfo_' + g_GridCatalogItemSelected.ID).text('View Shipping Details');


    $('.classShippingAddressTracking').show();

    $('#displayRecipientName').text(g_currentShippingAddress.Name);
    $('#displayStreetAddress').text(g_currentShippingAddress.Street1);
    $('#displayCityName').text(g_currentShippingAddress.City);
    $('#displayStateProvince').text(g_currentShippingAddress.State);
    $('#displayCountry').text(g_currentShippingAddress.Country);
    $('#displayPostalCode').text(g_currentShippingAddress.PostalCode);
  }
}
function VPNProtectionPageInit(pageStatus) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classGiftCards').hide();
  $('.classPromotionDiscountAppliedVPN').hide();
  $('.classPromotionDiscountNotAppliedVPN').show();
  g_percentDiscount = 0;
  g_promotionCode = '';
  g_idBtnCancel = '';
  UpdateTotalAmountVPN();

  if (pageStatus == 'Init') {
  }
  else if (pageStatus == 'VPNProtection') {
    $('.classVPNProtection').show();
    $('#boxPromotionCodeVPN_Edit').focus();
  }
}
function SettingsPageInit(strPage) {
  $('.MenuRow').hide();
  $('.classSetting').hide();
  $('.classSettingSocialOperand').hide();
  g_idBtnCancel = '';

  $('.classSettingsDefault').show();

  if (strPage == 'Authentication') {
    $('.classSettingsAuthentication').show();
  }
  else if (strPage == 'Personal') {
    $('.classSettingPersonal').show();
    $('.classSettingPersonalDefault').show();
  }
  else if (strPage == 'Social') {
    $('.classSettingSocial').show();
    $('.classSettingSocialDefault').show();
    SetTwitterIDFromGlobal();
  }
  if (strPage == 'SettingsNameChange') {
    $('.classSettingPersonal').show();
    $('.classSettingNameChange').show();
    $('#boxChangeFirstName_Edit').focus();
    g_idBtnCancel = 'lnkChangeNameCancel';
  }
  else if (strPage == 'NameSuccess') {
    $('.classSettingPersonal').show();
    $('.classSettingName').show();
    $('.classSettingNameSuccess').show();
    $('.classSettingClose').show();
  }
  else if (strPage == 'SettingsPhoneChange') {
    $('.classSettingPersonal').show();
    $('.classSettingPhoneChange').show();
    $('#boxChangePhone_Edit').focus();
    g_idBtnCancel = 'lnkChangePhoneCancel';
  }
  else if (strPage == 'SettingsEmailChange') {
    $('.classSettingPersonal').show();
    $('.classSettingEmailChange').show();
    $('#boxSettingsNewEmail_Edit').focus();
    g_idBtnCancel = 'lnkChangeEmailCancel';
  }
  else if (strPage == 'SettingsEmailChangeSuccess') {
    $('.classSettingPersonal').show();
    $('.classSettingEmailChangeSuccess').show();
    $('.classSettingClose').show();
  }
  else if (strPage == 'SettingsPasswordChange') {
    $('.classSettingPersonal').show();
    $('.classSettingPasswordChange').show();
    $('#boxSettingsPasswordOld_Edit').focus();
    g_idBtnCancel = 'lnkChangePasswordCancel';
  }
  else if (strPage == 'SettingsCloseAccount') {
    $('.classSettingPersonal').show();
    $('.classSettingCloseAccount').show();

    var satoshiBankPending = 0;
    var satoshiWalletPending = 0;
    var satoshiWalletUsable = 0;

    for (key in g_satoshiBankPending) {
      satoshiBankPending += g_satoshiBankPending[key];
    }

    for (key in g_satoshiWalletBalancePending) {
      satoshiWalletPending += g_satoshiWalletBalancePending[key];
    }

    for (key in g_satoshiWalletBalanceUsable) {
      satoshiWalletUsable += g_satoshiWalletBalanceUsable[key];
    }

    if (satoshiBankPending + satoshiWalletPending + satoshiWalletUsable > 0)
      $('.classSettingCloseAccountNonZeroBalance').show();
    else if (GridGroups['gridGiftCard']['GridItem'].arrayGridRowData != null && GridGroups['gridGiftCard']['GridItem'].arrayGridRowData.length > 0)
      $('.classSettingCloseAccountActiveGiftCards').show();
    else {
      $('.classSettingCloseAccountConfirm').show();
      $('#boxSettingsPasswordOld2_Edit').focus();
    }
    //$('#boxSettingsPasswordOld_Edit').focus();
    g_idBtnCancel = 'lnkCloseAccountCancel';
  }
  else if (strPage == 'SettingsPasswordChangeSuccess') {
    $('.classSettingPersonal').show();
    $('.classSettingPasswordChangeSuccess').show();
    $('.classSettingClose').show();
  }
  else if (strPage == 'SettingsPhoneChangeSuccess') {
    $('.classSettingPersonal').show();
    $('.classSettingPhoneChange1').show();
    $('.classSubmittedPhone').html(g_strPhoneForVerification);
    $('#verificationCode_Edit').focus();
    g_idBtnCancel = 'lnkChangePhoneCancel';
  }
  else if (strPage == 'SettingsPhoneCodeVerificationSuccess') {
    $('.classSettingPersonal').show();
    $('.classSettingClose').show();
    $('.classSettingPhoneChange2').show();
  }
  else if (strPage == 'SettingsAddTwitter') {
    $('.classSettingSocial').show();
    $('.classSettingAddTwitter').show();
    $('#lnkAddTwitter').focus();
  }
  else if (strPage == 'SettingsSocialTwitterChange') {
    $('.classSettingSocial').show();
    $('.classSettingSocialTwitterChange').show();
    $('#authySettingsSocialTwitterPassword_Edit').focus();
    g_idBtnCancel = 'lnkSocialTwitterChangeCancel';
  }
  else if (strPage == 'SettingsSocialTwitterRemove') {
    $('.classSettingSocial').show();
    $('.classTwitterNotRegistered').hide();
    $('.classSettingSocialTwitterRegistered').hide();
    $('.classSettingSocialTwitterRemove').show();
    $('#authySettingsSocialTwitterRemove_Edit').focus();
    g_idBtnCancel = 'lnkSocialTwitterChangeCancel';
  }
  else if (strPage == 'Level1') {
    privSecurityProfileCheckToEnableSubmit();
    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    $('.classSecurityLevel1').show();
    $('#btnSubmitSecurityProfile').show();
    $('#NeedToVerifyLevel2BeforeLevel1').hide();

    /*
    if (!g_SecurityLevel1 && g_SecurityGlideraPhoneValidated) {
        if (!g_SecurityGlideraPhoneValidated) {

        } else {


            $('#rowLevel1ProfileQuestions').show();
            $('#boxSecurityProfileStreet_Edit').focus();
        }
    }
    */

  }
  else if (strPage == 'Level2') {
    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    $('.classSecurityLevel2').show();
    $('.classGlideraSteps').show();

    if (g_SecurityLeve2BeforeLevel1) {
      $('.classIfNeedL2BeforeL1IsFalse').hide();
      $('#rowLevel2').show();
      $('#rowMenuUploadLicense').show();
      ResetLicensePic();
      ResetConsentVideo();
    }
    else {
      $('.classIfNeedL2BeforeL1IsFalse').show();
    }

    if (g_SecurityLevel1) {
      if (!g_SecurityLevel2a)
        MenuClick('Level2a2bMenu', 'Level2aPicture');
      else
        MenuClick('Level2a2bMenu', 'Level2bVideo');
    }
  }
  else if (strPage == 'Level2aPicture') {
    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    StateCurrentMainPush('LeftMenu', 'Settings');
    StateCurrentSubPush('LeftMenu', 'Settings', 'Level2');
    StateCurrentMainPush('Level2a2bMenu', 'Level2aPicture');
    StateCurrentPush();

    $('#rowLevel2').show();
    $('.classSecurityLevel2').show();
    $('#rowMenuUploadConsent').hide();
    $('#rowMenuUploadLicense').show();

    if (!g_SecurityLevel2a) {
      ResetLicensePic();
      //            $('#rowLevel2UploadPhysicalID').show();
    }

  }
  else if (strPage == 'Level2bVideo') {
    SetSecurityLevel(g_SecurityLevel1, g_SecurityLevel2a, g_SecurityLevel2aInReview, g_SecurityLevel2b, g_SecurityLevel2bInReview, g_SecurityGlideraRegistered, g_SecurityGlideraPhoneValidated);
    StateCurrentMainPush('LeftMenu', 'Settings');
    StateCurrentSubPush('LeftMenu', 'Settings', 'Level2');
    StateCurrentMainPush('Level2a2bMenu', 'Level2bVideo');
    StateCurrentPush();

    $('#rowLevel2').show();
    $('#rowMenuUploadConsent').show();
    $('#rowMenuUploadLicense').hide();
    $('.classSecurityLevel2').show();

    ResetConsentVideo();
  }



}
function PageInitFAQ() {
  ClearEntryFields();
  ClearErrors();

  g_idBtnCancel = '';

  $('.MenuRow').hide();
  $('.menuFAQ').show();
  $('.classFAQ').hide();
  $('#' + g_enumFaqPageToDisplay).show();

  if (g_enumFaqPageToDisplay == 'faqWhyIPayYou') {

  }
  else if (g_enumFaqPageToDisplay == 'faqWhatIsBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqPayingWithBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqTwitterCommands') {

  }
  else if (g_enumFaqPageToDisplay == 'faqBuyingBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqEarningBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqWhereIsBuyBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqSellingBitcoin') {

  }
  else if (g_enumFaqPageToDisplay == 'faqAmazonDirect') {

  }
  else if (g_enumFaqPageToDisplay == 'faqAmazonGCPromo') {

  }

  else if (g_enumFaqPageToDisplay == 'faqContactUs') {

  }
}
function LoyaltyInit(pageInit) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classLoyaltyTable').show();

  if (pageInit == 'About') {
    $('.classLoyaltyAbout').show();
  }

}
function DisplayYouReceived(state) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classYouReceived').show();
}
function DisplayShortCode(state) {
  ClearErrors();
  ClearEntryFields();

  $('.MenuRow').hide();
  $('.classShortCode').show();
  $('.classShortCodeActive').hide();
  g_idBtnCancel = '';

  if (state == 'init') {
    if (g_strShortcodeCommand == 'Balance') {
      $('.classShortCodeActive').show();
      $('.classCommandBalanceAndInventory').show();
      g_GridCatalogItemSelected = {};
    }
    else if (g_strShortcodeCommand == 'Fund') {
      $('.classShortCodeActive').show();
      $('.classShortcodeBCHAddress').show();
    }
    else {

    }
  }
  else if (state == 'inventory') {
    $('.classCommandBalanceInventoryItem').show();
    $('#imgShortCodeInventory').prop('src', g_GridCatalogItemSelected.Thumbnail);
    $('#cellShortlinkInventoryName').text(g_GridCatalogItemSelected.DescriptionShort);
    $('#cellShortlinkInventoryID').text(g_GridCatalogItemSelected.IDForDisplay);
    $('#cellShortlinkObtainedOn').addClass('UTCTime').text(g_GridCatalogItemSelected.dtTransaction);
    if (g_GridCatalogItemSelected.longTwitterID != '' && g_GridCatalogItemSelected.longTwitterID != null && g_GridCatalogItemSelected.longTwitterID != '0') {
      $('#cellShortlinkObtainedFrom').addClass('cellTwitterID_' + g_GridCatalogItemSelected.longTwitterID);
      TwitterGetHandleFromID(g_GridCatalogItemSelected.longTwitterID, 'TwitterPayer');
    }
    else if (g_GridCatalogItemSelected.ContractType == 'OneTimeBuy') {
      $('#cellShortlinkObtainedFrom').text('iPayYou.io');
    }
    else {
      $('#cellShortlinkObtainedFrom').text(g_GridCatalogItemSelected.ReceivedFromName);
    }
    ConvertUTCToLocal();

    if (g_GridCatalogItemSelected.ReceivedFromNote == '' || g_GridCatalogItemSelected.ReceivedFromNote == null) {
      $('#rowShortlinkNoteFromSender').hide();
    }
    else {
      $('#rowShortlinkNoteFromSender').show();
      $('#cellShortlinkNoteFromSender').html(g_GridCatalogItemSelected.ReceivedFromNote);
    }

    //g_GridCatalogItemSelected.ClaimCode = '1234';

    if (g_GridCatalogItemSelected.ClaimCode == '') {
      $('#rowShortlinkViewClaimCode').show();
    }
    else {
      if (g_GridCatalogItemSelected.BrandType == 'AmazonGC' || g_GridCatalogItemSelected.BrandType == 'AmazonZinc') {
        $('.classGiftCardDetailRedeemOnAmazon').show();
        $('.classRowGiftCardBarcode').hide();
      }
      else {
        $('.classRowGiftCardBarcode').show();
        $('.classGiftCardDetailClaimImg').attr('src', g_urlIAccountsBaseline + '/BarcodeView-' + g_GridCatalogItemSelected.ClaimCode.replace(' ', ''));
        $('#imgShortlinkClaim').unbind()
          .on('load', function () {
            $('.classGiftCardClaimBarcodeWaiting').hide();
            $('.classGiftCardClaimBarcodeDone').show();
          });
      }

      $('.classClaimCode').text(g_GridCatalogItemSelected.ClaimCode);

      if (null == g_GridCatalogItemSelected.PinCode || '' == g_GridCatalogItemSelected.PinCode) {
        $('.classPinCodeDetails').hide();
      }
      else {
        $('.classPinCodeDetails').show();
        $('.classPinCode').text(g_GridCatalogItemSelected.PinCode);
      }

      $('.classGiftCardDetailClaimCode').show();
    }


    g_idBtnCancel = 'lnkShortlinkCancelInventory';
  }

}

function UpdateDailyLimitsEb(dailyLimit)
{
  var dailyLimitDisplay = formatDollar(dailyLimit);

  $('#lblDailyLimitEbIntro').text(dailyLimitDisplay)
  $('#lblDailyLimitEbIntro').css('color', 'green');
  $('#lblDailyLimitEbIntro').css('Font-Size', 'small');
  $('#lblDailyLimitEbIntro').css('Font-Bold', 'true');

  $('#lblDailyLimitEbFAQ').text(dailyLimitDisplay);
  $('#lblDailyLimitEbFAQ').css('Font-Bold', 'true');
  
}

function RewardsLevelsDisplay(strState) {
  if (strState == 'RewardsLevelsGen') {
    $('.classRewardsLevelsKYCNotNeeded').show();
    $('.classRewardsLevelsKYCNeeded').hide();
    ButtonAction('btnViewRewardsLevels', 'reset');
    $('#btnViewRewardsLevels').hide();
    //RewardsLevelsDisplayKYCButton(g_rewardsLevelsVerificationIDNeeded);
  }

  /*
  else if (strState == 'KYCNeeded') {
    $('.classRewardsLevelsKYCNotNeeded').hide();
    $('.classRewardsLevelsKYCNeeded').show();
    ButtonAction('btnRewardsLevelsDoKYC', 'reset');
    $('#btnRewardsLevelsDoKYC').hide();
    $('#btnViewRewardsLevels').show();

  }

*/

}

/*
function RewardsLevelsDisplayKYCButton(boolKYCNeeded) {
  if (boolKYCNeeded == null) {
    $('#btnRewardsLevelsDoKYC').hide();
  }

  else if (boolKYCNeeded) {
    $('#btnRewardsLevelsDoKYC').show();
  }

  else if (boolKYCNeeded) {
    $('#btnRewardsLevelsDoKYC').hide();
  }

}

*/

function RewardsLevelsUpdateProgress(rewardsLevelFriendly, ebCompletedRecent, ebCompletedLifetime) {

  $('#labelMyRewardsLevel').text(rewardsLevelFriendly);

  var ebCompletedRecentDisplay = formatDollar(ebCompletedRecent);
  //var purchasedRecentDisplay = formatDollar(purchasedRecent);
  var ebCompletedLifetimeDisplay = formatDollar(ebCompletedLifetime);
  //var purchasedLifetimeDisplay = formatDollar(purchasedLifetime);

  $('#lblRewardsLevelsEBCompletedRecent').text(ebCompletedRecentDisplay);
  $('#lblRewardsLevelsEBCompletedRecent').css('color', 'green');

  //$('#lblRewardsLevelsGCPurchasedRecent').text(purchasedRecentDisplay);
  //$('#lblRewardsLevelsGCPurchasedRecent').css('color', 'green');

  $('#lblRewardsLevelsEBCompletedAllTime').text(ebCompletedLifetimeDisplay);
  $('#lblRewardsLevelsEBCompletedAllTime').css('color', 'green');

  //$('#lblRewardsLevelsGCPurchasedAllTime').text(purchasedLifetimeDisplay);
  //$('#lblRewardsLevelsGCPurchasedAllTime').css('color', 'green');

}


// DISPLAY - END



// CLASSES - BEGIN
class newCredentialsBitcoinDirectToAmazon {
  /**
   *     
   * @param {string} newLogin
   * @param {string} newPassword
   * @param {string} contractID
   */
  constructor(newLogin, newPassword, str2FACode, contractID) {
    this.newLogin = newLogin;
    this.newPassword = newPassword;
    this.new2FACode = str2FACode;
    this.contractID = contractID;
  }

}
class bitcoinDirectAmazon2FA {
  /**
   * 
   * @param {string} amazon2FA
   * @param {string} contractID
   * 
   */

  constructor(amazonCode, contractid) {
    this.amazon2FA = amazonCode;
    this.contractID = contractid;
  }

}
class BrandDetails {
  constructor() {
    this.ID = '';
    this.RetailerName = '';
    this.BrandDescriptionShort = '';
    this.BrandNameListURL = '';
    this.BrandDisclaimer = '';
    this.HTMLRow = '';
  }
}
class ShippingAddress {
  constructor() {
    this.Name = '';
    this.Street1 = '';
    this.City = '';
    this.State = '';
    this.Country = g_CountrySelected;
    this.PostalCode = '';
    this.AddressId = '';
    this.IsVerified = false;
  }

  /**
   * 
   * @returns {boolean} if ready to submit data.
   */
  isReadyToSubmit() {
    return this.Name !== ''
      && this.Street1 !== ''
      && this.City !== ''
      && this.State !== ''
      && this.Country !== ''
      && this.PostalCode !== '';

  }
}
class FinalShippingInfoFromUser {
  /**
   *     
   * @param {string} inventoryId
   * @param {string} AddressId
   */
  constructor(inventoryId, addressId) {
    this.InventoryId = inventoryId;
    this.AddressId = addressId;
  }

}
class FinalShippingInfoForUser {
  /**
   * 
   * @param {string} trackingId
   * @param {string} carrier
   */
  constructor(trackingId, carrier) {
    this.Carrier = carrier;
    this.TrackingId = trackingId;
  }

  /**
   * @returns {string}
   * */
  getTrackingString(id) {
    var idString = id ? 'id=\"' + id + '\"' : '';
    var urlString = this.getTrackingUrl();
    return '<a target=\"_blank\" href=\"'
      + urlString
      + '\"'
      + idString
      + '> ' + this.Carrier + ' ' + this.TrackingId + '</a > '

  }

  getTrackingUrl() {
    return 'https://track.aftership.com/'
      + this.Carrier.toLowerCase()
      + '/'
      + this.TrackingId.toLowerCase()
  }
  /**
   * @returns {boolean}
   * */
  isShippingInfoComplete() {
    return this.Carrier !== ''
      && this.TrackingId !== '';
  }


}
class ShippingInformationForUser {
  /**
   * 
   * @param {FinalShippingInfoForUser} finalShippingData
   * @param {bool} shippable
   * @param {string} shippingInfoStatus
   * @param {ShippingAddress} shippingAddress
   */
  constructor(finalShippingData, shippable, shippingInfoStatus, shippingAddress) {
    this.FinalShippingInfoForUser = finalShippingData;
    this.Shippable = shippable;
    this.ShippingInfoStatus = g_shippingStatus[shippingInfoStatus];
    this.ShippingAddress = shippingAddress;
  }
}

class BidPackSelected {
/**
 * @param {string} OfferId 
 * @param {string} ParentServiceId
 * @param {number} Quantity
 * @param {number} USDItemPrice
 * @param {string} CurrencyCode
 * @param {string} PromotionCode
 * 
 * */

    constructor(offerId, parentServiceId, quantity, usdItemPrice, currencyCode, promotionCode) {
        this.OfferId = offerId;
        this.ParentServiceId = parentServiceId;
        this.Quantity = quantity;
        this.USDItemPrice = usdItemPrice;
        this.CurrencyCode = currencyCode;
        this.PromotionCode = promotionCode;
    }


}


// CLASSES - END
