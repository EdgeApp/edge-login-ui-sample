/* global $ */
var abcui = require('airbitz-core-js-ui')

var _account = null
var _wallet = null
var _abcUi = null
var _key = null
const walletType = 'wallet:repo:ethereum'

// Replace '0b5776a91bf409ac10a3fe5f3944bf50417209a0' with your own API key from https://developer.airbitz.co
_abcUi = abcui.makeABCUIContext({
  apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0',
  accountType: 'account:repo:com.augur',
  bundlePath: 'abcui',
  vendorName: 'Augur Key Extractor',
  vendorImageUrl: 'https://airbitz.co/go/wp-content/uploads/2016/10/GenericEdgeLoginIcon.png'
})

function updateUi () {
  if (_abcUi == null) {
    $('.logged_out').hide()
    $('.logged_in').hide()
  } else if (_key == null) {
    $('.logged_out').show()
    $('.logged_in').hide()
  } else {
    $('.logged_out').hide()
    $('.logged_in').show()
    $('#username').text(_account.username)
    $('#key').text(_key)
  }
}

$('#login').click(function () {
  _abcUi.openLoginWindow(function (error, account) {
    if (error) {
      console.log(error)
    }
    _account = account

    const abcWallet = account.getFirstWallet(walletType)
    if (abcWallet == null) {
      _key = 'Error: this account has not been used with Augur before'
    } else {
      _wallet = abcWallet
      _key = _wallet.keys.ethereumKey
    }

    updateUi()
  })
})

$('#logout').click(function () {
  _account.logout()
  _account = null
  _wallet = null
  _key = null
  updateUi()
})

$('#account').click(function () {
  _abcUi.openManageWindow(_account, function (error) {
    if (error) {
      console.log(error)
    }
    updateUi()
  })
})
updateUi()
