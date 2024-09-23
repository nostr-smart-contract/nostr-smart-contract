const { Multisig } = require('./multisig');
const { Wallet } = require('./wallet');
const { Transaction } = require('./transaction');
const { Signature } = require('./signature');
const multisigAddress = multisig.getAddress();

module.exports = {
  Multisig

};

const signingKey = '<signing_key>';
const multisig = new Multisig(signingKey);
const multisigAddress = multisig.getAddress();
