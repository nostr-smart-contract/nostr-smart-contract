const { Multisig } = require('./multisig');
const { Wallet } = require('./wallet');

module.exports = {
  Multisig

};

const signingKey = '<signing_key>';
const multisig = new Multisig(signingKey);
const multisigAddress = multisig.getAddress();
