import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

import { WyvernSchemaName } from "opensea-js/lib/types"

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
openseaKey = ""
const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  apiKey: openseaKey
})

// fetching assets
/**
 * Simple, unannotated non-fungible asset spec
 */
 export interface Asset {
  // The asset's token ID, or null if ERC-20
  tokenId: string | null,
  // The asset's contract address
  tokenAddress: string,
  // The Wyvern schema name (defaults to "ERC721") for this asset
  schemaName?: WyvernSchemaName,
  // Optional for ENS names
  name?: string,
  // Optional for fungible items
  decimals?: number
}

const asset = {
  tokenAddress: "0x960b7a6bcd451c9968473f7bbfd9be826efd549a", // OCM
  tokenId: "1926", // Token ID
}

console.log("it works")
console.log(asset)

// Token ID and smart contract address for a non-fungible token:
const { tokenId, tokenAddress } = asset
// The offerer's wallet address:
const accountAddress = ""

const offer = await seaport.createBuyOrder({
  asset: {
    tokenId,
    tokenAddress,
     // WyvernSchemaName. If omitted, defaults to 'ERC721'. Other options include 'ERC20' and 'ERC1155'
  },
  accountAddress,
  // Value of the offer, in units of the payment token (or wrapped ETH if none is specified):
  startAmount: 0.3,
})
