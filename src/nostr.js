const { generatePrivateKey, getPublicKey, connect, publish } = require('nostr-dev-kit');

// Generate Nostr keys
const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);

console.log(`Generated Nostr NPub: ${publicKey}`);

// Connect to a relay
const relay = connect('wss://relay.damus.io');

relay.on('open', () => {
  console.log('Connected to relay');

  // Publish a message
  const message = {
    kind: 1, // text note
    pubkey: publicKey,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: 'Hello from Nostr and Bitcoin!',
  };

  const signedMessage = publish(privateKey, message);

  relay.send(JSON.stringify(signedMessage));
});

relay.on('message', (message) => {
  console.log('Received message:', message);
});

module.exports = {
  privateKey,
  publicKey,
  relay,
};
