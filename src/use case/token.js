
import { NostrSmartContract } from '@nostr-smart-contract/nostr-smart-contract';
import { Glaphy } from 'glaphy';
export class Token extends NostrSmartContract {
  constructor(glaphy: Glaphy) {
    super(glaphy);
  }
}

export default Token;