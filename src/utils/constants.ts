/**
 * @packageDocumentation
 * @module Utils-Constants
 */

import BN from "bn.js"

export const PrivateKeyPrefix: string = "PrivateKey-"
export const PublicKeyPrefix: string = "PublicKey-"
export const NodeIDPrefix: string = "NodeID-"
export const PrimaryAssetAlias: string = "AVAX"
export const MainnetAPI: string = "api.avax.network"
export const FujiAPI: string = "api.avax-test.network"

export interface C {
  blockchainID: string
  alias: string
  vm: string
  fee?: BN
  gasPrice: BN | number
  chainID?: number
  minGasPrice?: BN
  maxGasPrice?: BN
  txBytesGas?: number
  costPerSignature?: number
  txFee?: BN
  avaxAssetID?: string
}
export interface X {
  blockchainID: string
  alias: string
  vm: string
  creationTxFee: BN | number
  mintTxFee: BN
  avaxAssetID?: string
  txFee?: BN | number
  fee?: BN
}
export interface P {
  blockchainID: string
  alias: string
  vm: string
  creationTxFee: BN | number
  createSubnetTx: BN | number
  createChainTx: BN | number
  minConsumption: number
  maxConsumption: number
  maxStakingDuration: BN
  maxSupply: BN
  minStake: BN
  minStakeDuration: number
  maxStakeDuration: number
  minDelegationStake: BN
  minDelegationFee: BN
  avaxAssetID?: string
  txFee?: BN | number
  fee?: BN
}
export interface Network {
  C: C
  hrp: string
  X: X
  P: P
  [key: string]: C | X | P | string
}
export interface Networks {
  [key: number]: Network
}

export const NetworkIDToHRP: object = {
  0: "custom",
  1: "avax",
  2: "cascade",
  3: "denali",
  4: "everest",
  // 5: "fuji",
  1337: "custom",
  4294967295: "local",
  162: "localflare",
  14: "flare",
  114: "costwo",
  7: "coston",
  5: "songbird",
}

export const HRPToNetworkID: object = {
  manhattan: 0,
  avax: 1,
  cascade: 2,
  denali: 3,
  everest: 4,
  fuji: 5,
  custom: 1337,
  local: 4294967295,
  localflare: 162,
  flare: 14,
  costwo: 114,
  coston: 7,
  songbird: 5
}

export const NetworkIDToNetworkNames: object = {
  0: ["Manhattan"],
  1: ["Avalanche", "Mainnet"],
  2: ["Cascade"],
  3: ["Denali"],
  4: ["Everest"],
  // 5: ["Fuji", "Testnet"],
  1337: ["Custom Network"],
  4294967295: ["Local Network"],
  162: ["Local Flare"],
  14: ["Flare"],
  114: ["Coston 2"],
  7: ["Coston"],
  5: ["Songbird"]
}

export const NetworkNameToNetworkID: object = {
  Manhattan: 0,
  Avalanche: 1,
  Mainnet: 1,
  Cascade: 2,
  Denali: 3,
  Everest: 4,
  Fuji: 5,
  Testnet: 5,
  Custom: 1337,
  "Custom Network": 1337,
  Local: 4294967295,
  "Local Network": 4294967295,
  "Local Flare": 162,
  "Flare": 14,
  "Costwo": 114,
  Coston: 7,
  Songbird: 5
}

export const FallbackHRP: string = "custom"
export const FallbackNetworkName: string = "Custom Network"
export const FallbackEVMChainID: number = 43112

export const DefaultNetworkID: number = 1

export const PlatformChainID: string = "11111111111111111111111111111111LpoYY"
export const PrimaryNetworkID: string = "11111111111111111111111111111111LpoYY"
export const XChainAlias: string = "X"
export const CChainAlias: string = "C"
export const PChainAlias: string = "P"
export const XChainVMName: string = "avm"
export const CChainVMName: string = "evm"
export const PChainVMName: string = "platformvm"

// DO NOT use the following private keys and/or mnemonic on Fuji or Testnet
// This address/account is for testing on the local avash network
export const DefaultLocalGenesisPrivateKey: string =
  "ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"
export const DefaultEVMLocalGenesisPrivateKey: string =
  "0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"
export const DefaultEVMLocalGenesisAddress: string =
  "0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC"
export const mnemonic: string =
  "output tooth keep tooth bracket fox city sustain blood raise install pond stem reject long scene clap gloom purpose mean music piece unknown light"

export const ONEAVAX: BN = new BN(1000000000)

export const DECIAVAX: BN = ONEAVAX.div(new BN(10))

export const CENTIAVAX: BN = ONEAVAX.div(new BN(100))

export const MILLIAVAX: BN = ONEAVAX.div(new BN(1000))

export const MICROAVAX: BN = ONEAVAX.div(new BN(1000000))

export const NANOAVAX: BN = ONEAVAX.div(new BN(1000000000))

export const WEI: BN = new BN(1)

export const GWEI: BN = WEI.mul(new BN(1000000000))

export const AVAXGWEI: BN = NANOAVAX.clone()

export const AVAXSTAKECAP: BN = ONEAVAX.mul(new BN(3000000))

// Start Manhattan
const n0X: X = {
  blockchainID: "2vrXWHgGxh5n3YsLHMV16YVVJTpT4z45Fmb4y3bL6si8kLCyg9",
  alias: XChainAlias,
  vm: XChainVMName,
  fee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n0P: P = {
  blockchainID: PlatformChainID,
  alias: PChainAlias,
  vm: PChainVMName,
  fee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX.mul(new BN(2000)),
  minStakeDuration: 2 * 7 * 24 * 60 * 60, //two weeks
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX.mul(new BN(25)),
  minDelegationFee: new BN(2)
}

const n0C: C = {
  blockchainID: "2fFZQibQXcd6LTE4rpBPBAkLVXFE91Kit8pgxaBG1mRnh5xqbb",
  alias: CChainAlias,
  vm: CChainVMName,
  fee: MILLIAVAX,
  gasPrice: GWEI.mul(new BN(470)), //equivalent to gas price
  chainID: 43111
}
// End Manhattan

// Start mainnet
let avaxAssetID: string = "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z"
const n1X: X = {
  blockchainID: "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n1P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  creationTxFee: CENTIAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX.mul(new BN(2000)),
  minStakeDuration: 2 * 7 * 24 * 60 * 60, //two weeks
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX.mul(new BN(25)),
  minDelegationFee: new BN(2)
}

const n1C: C = {
  blockchainID: "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 1000,
  // DEPRECATED - txFee
  // WILL BE REMOVED IN NEXT MAJOR VERSION BUMP
  txFee: MILLIAVAX,
  // DEPRECATED - gasPrice
  // WILL BE REMOVED IN NEXT MAJOR VERSION BUMP
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 43114
}
// End Mainnet

// Start Cascade
const n2X: X = {
  blockchainID: "4ktRjsAKxgMr2aEzv9SWmrU7Xk5FniHUrVCX4P1TZSfTLZWFM",
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: 0,
  creationTxFee: 0,
  mintTxFee: new BN(0)
}

const n2P: P = {
  blockchainID: PlatformChainID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: 0,
  creationTxFee: 0,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX.mul(new BN(2000)),
  minStakeDuration: 2 * 7 * 24 * 60 * 60, //two weeks
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX.mul(new BN(25)),
  minDelegationFee: new BN(2)
}

const n2C: C = {
  blockchainID: "2mUYSXfLrDtigwbzj1LxKVsHwELghc5sisoXrzJwLqAAQHF4i",
  alias: CChainAlias,
  vm: CChainVMName,
  gasPrice: 0
}
// End Cascade

// Start Denali
const n3X: X = {
  blockchainID: "rrEWX7gc7D9mwcdrdBxBTdqh1a7WDVsMuadhTZgyXfFcRz45L",
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: 0,
  creationTxFee: 0,
  mintTxFee: new BN(0)
}

const n3P: P = {
  blockchainID: "",
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: 0,
  creationTxFee: 0,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX.mul(new BN(2000)),
  minStakeDuration: 2 * 7 * 24 * 60 * 60, //two weeks
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX.mul(new BN(25)),
  minDelegationFee: new BN(2)
}

const n3C: C = {
  blockchainID: "zJytnh96Pc8rM337bBrtMvJDbEdDNjcXG3WkTNCiLp18ergm9",
  alias: CChainAlias,
  vm: CChainVMName,
  gasPrice: 0
}
// End Denali

// Start Everest
const n4X: X = {
  blockchainID: "jnUjZSRt16TcRnZzmh5aMhavwVHz3zBrSN8GfFMTQkzUnoBxC",
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n4P: P = {
  blockchainID: PlatformChainID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX.mul(new BN(2000)),
  minStakeDuration: 2 * 7 * 24 * 60 * 60, //two weeks
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX.mul(new BN(25)),
  minDelegationFee: new BN(2)
}

const n4C: C = {
  blockchainID: "saMG5YgNsFxzjz4NMkEkt3bAH6hVxWdZkWcEnGB3Z15pcAmsK",
  alias: CChainAlias,
  vm: CChainVMName,
  gasPrice: GWEI.mul(new BN(470)),
  chainID: 43110
}
// End Everest

// Start Fuji
avaxAssetID = "U8iRqJoiJm8xZHAacmvYyZVwqQx6uDNtQeP3CQ6fcgQk3JqnK"
const n5X: X = {
  blockchainID: "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n5P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}

const n5C: C = {
  blockchainID: "yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 1000,
  // DEPRECATED - txFee
  // WILL BE REMOVED IN NEXT MAJOR VERSION BUMP
  txFee: MILLIAVAX,
  // DEPRECATED - gasPrice
  // WILL BE REMOVED IN NEXT MAJOR VERSION BUMP
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 43113
}
// End Fuji

// Start custom network
avaxAssetID = "BUuypiq2wyuLMvyhzFXcPyxPMCgSp7eeDohhQRqTChoBjKziC"
const n1337X: X = { ...n5X }
n1337X.blockchainID = "qzfF3A11KzpcHkkqznEyQgupQrCNS6WV6fTUTwZpEKqhj1QE7"
n1337X.avaxAssetID = avaxAssetID
const n1337P: P = { ...n5P }
n1337P.blockchainID = PlatformChainID
const n1337C: C = { ...n5C }
n1337C.blockchainID = "BR28ypgLATNS6PbtHMiJ7NQ61vfpT27Hj8tAcZ1AHsfU5cz88"
n1337C.avaxAssetID = avaxAssetID
n1337C.chainID = 43112
// End custom network

// Start local network
avaxAssetID = "2RULRJVXVpQNAsV3sBpy4G8LWH1LN3z5Adokv5bVtnZmsBQDCX"
const n4294967295X: X = { ...n5X }
n4294967295X.blockchainID = "ALRkp1tuy7ErVkWuEWFLVd657JAULWDDyQkQBkLKVE94jCaNu"
n4294967295X.avaxAssetID = avaxAssetID
const n4294967295P: P = { ...n5P }
n4294967295P.blockchainID = PlatformChainID
const n4294967295C: C = { ...n5C }
n4294967295C.blockchainID = "qNigBiF2gjcLWf8Zguzi1ztr2nJ87Z7bWwbDzWBJvuwuhvBkX"
n4294967295C.avaxAssetID = avaxAssetID
n4294967295C.chainID = 4294967295
// End local network

// Start local flare
avaxAssetID = "QJx3BomP9MGxCy5RPVXyNUeEqzduvuNbxQVXMuPKDakacdY6K"
const n6X: X = {
  blockchainID: "qG35QGqZ11Mvh8CxCmVVi22juDH3d4GXYFyLeX3W3aWLXWnVb", // from go-flare node response
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n6P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}

const n6C: C = {
  blockchainID: "2DMeTG89jJGhDBdf1oPmPGqRtdZF8qq4zxmSH7CzoyXXt2bRtU",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 100,
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 162
}
// end local flare

// start flare
avaxAssetID = "2MxKSeEWXViLdYyDhW1SQ46AECZEbE2bnVRZptv42JrxqyUX5k"
const n7X: X = {
  blockchainID: "fK5e6T3EniMqagBkxXjAug9EbhFDZbEzPPr4f22uwMoP5i2cJ",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n7P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}

const n7C: C = {
  // blockchainID is sometimes referred to as chainID (it's confusing)
  blockchainID: "umkbhSrjVw5nUvy1eo25AdrjRkPBdtzAMewuxA2rqEx4YMo4c",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 100,
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 14
}
// end flare

// start costwo
avaxAssetID = "fxMAKpBQQpFedrUhWMsDYfCUJxdUw4mneTczKBzNg3rc2JUub"
const n9X: X = {
  blockchainID: "FJuSwZuP85eyBpuBrKECnpPedGyXoDy2hP9q4JD8qBTZGxYbJ",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}

const n9P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}

const n9C: C = {
  blockchainID: "vE8M98mEQH6wk56sStD1ML8HApTgSqfJZLk9gQ3Fsd4i6m3Bi",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 100,
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 114
}
// end costwo

// start coston
avaxAssetID = "sMWvCcweHFoG4SE1SSVtiwosqezUW8tAA77t7BhAS7RUh6ms4"
const n10X: X = {
  blockchainID: "8S5vg8ycMqULMMq2CzrRh3qqbFWjs6a35H8UwNAaS83v9Ynxa",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}
const n10P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}
const n10C: C = {
  // blockchainID is sometimes referred to as chainID (it's confusing)
  blockchainID: "2wcJd3HZL4EAoQDfGhyeHGJU55wizganSzD9EvdDLJX3B5u5Be",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 100,
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 16
}
// end coston

// start songbird
avaxAssetID = "1S3PSi4VsVpD8iK2vdykuajxVeuCV2xhjPSkQ4K88mqWGozMP"
const n11X: X = {
  blockchainID: "7xKYhEvYuUekwDxozgEiMPufzJ3jJPypKbGE8ny6KL84z4RKB",
  avaxAssetID: avaxAssetID,
  alias: XChainAlias,
  vm: XChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  mintTxFee: MILLIAVAX
}
const n11P: P = {
  blockchainID: PlatformChainID,
  avaxAssetID: avaxAssetID,
  alias: PChainAlias,
  vm: PChainVMName,
  txFee: MILLIAVAX,
  creationTxFee: CENTIAVAX,
  createSubnetTx: ONEAVAX,
  createChainTx: ONEAVAX,
  minConsumption: 0.1,
  maxConsumption: 0.12,
  maxStakingDuration: new BN(31536000),
  maxSupply: new BN(720000000).mul(ONEAVAX),
  minStake: ONEAVAX,
  minStakeDuration: 24 * 60 * 60, //one day
  maxStakeDuration: 365 * 24 * 60 * 60, // one year
  minDelegationStake: ONEAVAX,
  minDelegationFee: new BN(2)
}
const n11C: C = {
  // blockchainID is sometimes referred to as chainID (it's confusing)
  blockchainID: "erCt5pSo5d4bM8fMrsB2dRM54PGssDAVqRg1jHedQzr6ayLiq",
  alias: CChainAlias,
  vm: CChainVMName,
  txBytesGas: 1,
  costPerSignature: 100,
  gasPrice: GWEI.mul(new BN(225)),
  minGasPrice: GWEI.mul(new BN(25)),
  maxGasPrice: GWEI.mul(new BN(1000)),
  chainID: 19
}
// end songbird

export class Defaults {
  static network: Networks = {
    0: {
      hrp: NetworkIDToHRP[0],
      X: n0X,
      "2vrXWHgGxh5n3YsLHMV16YVVJTpT4z45Fmb4y3bL6si8kLCyg9": n0X,
      P: n0P,
      "11111111111111111111111111111111LpoYY": n0P,
      C: n0C,
      "2fFZQibQXcd6LTE4rpBPBAkLVXFE91Kit8pgxaBG1mRnh5xqbb": n0C
    },
    1: {
      hrp: NetworkIDToHRP[1],
      X: n1X,
      "2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM": n1X,
      P: n1P,
      "11111111111111111111111111111111LpoYY": n1P,
      C: n1C,
      "2q9e4r6Mu3U68nU1fYjgbR6JvwrRx36CohpAX5UQxse55x1Q5": n1C
    },
    2: {
      hrp: NetworkIDToHRP[2],
      X: n2X,
      "4ktRjsAKxgMr2aEzv9SWmrU7Xk5FniHUrVCX4P1TZSfTLZWFM": n2X,
      P: n2P,
      "11111111111111111111111111111111LpoYY": n2P,
      C: n2C,
      "2mUYSXfLrDtigwbzj1LxKVsHwELghc5sisoXrzJwLqAAQHF4i": n2C
    },
    3: {
      hrp: NetworkIDToHRP[3],
      X: n3X,
      rrEWX7gc7D9mwcdrdBxBTdqh1a7WDVsMuadhTZgyXfFcRz45L: n3X,
      P: n3P,
      "11111111111111111111111111111111LpoYY": n3P,
      C: n3C,
      zJytnh96Pc8rM337bBrtMvJDbEdDNjcXG3WkTNCiLp18ergm9: n3C
    },
    4: {
      hrp: NetworkIDToHRP[4],
      X: n4X,
      jnUjZSRt16TcRnZzmh5aMhavwVHz3zBrSN8GfFMTQkzUnoBxC: n4X,
      P: n4P,
      "11111111111111111111111111111111LpoYY": n4P,
      C: n4C,
      saMG5YgNsFxzjz4NMkEkt3bAH6hVxWdZkWcEnGB3Z15pcAmsK: n4C
    },
    // 5: {
    //   hrp: NetworkIDToHRP[5],
    //   X: n5X,
    //   "2JVSBoinj9C2J33VntvzYtVJNZdN2NKiwwKjcumHUWEb5DbBrm": n5X,
    //   P: n5P,
    //   "11111111111111111111111111111111LpoYY": n5P,
    //   C: n5C,
    //   yH8D7ThNJkxmtkuv2jgBa4P1Rn3Qpr4pPr7QYNfcdoS6k6HWp: n5C
    // },
    1337: {
      hrp: NetworkIDToHRP[1337],
      X: n1337X,
      qzfF3A11KzpcHkkqznEyQgupQrCNS6WV6fTUTwZpEKqhj1QE7: n1337X,
      P: n1337P,
      "11111111111111111111111111111111LpoYY": n1337P,
      C: n1337C,
      BR28ypgLATNS6PbtHMiJ7NQ61vfpT27Hj8tAcZ1AHsfU5cz88: n1337C
    },
    4294967295: {
      hrp: NetworkIDToHRP[4294967295],
      X: n4294967295X,
      "ALRkp1tuy7ErVkWuEWFLVd657JAULWDDyQkQBkLKVE94jCaNu": n4294967295X,
      P: n4294967295P,
      "11111111111111111111111111111111LpoYY": n4294967295P,
      C: n4294967295C,
      "qNigBiF2gjcLWf8Zguzi1ztr2nJ87Z7bWwbDzWBJvuwuhvBkX": n4294967295C
    },
    162: {
      hrp: NetworkIDToHRP[162],
      X: n6X,
      "qG35QGqZ11Mvh8CxCmVVi22juDH3d4GXYFyLeX3W3aWLXWnVb": n6X,
      P: n6P,
      "11111111111111111111111111111111LpoYY": n6P,
      C: n6C,
      "2DMeTG89jJGhDBdf1oPmPGqRtdZF8qq4zxmSH7CzoyXXt2bRtU": n6C
    },
    14: {
      hrp: NetworkIDToHRP[14],
      X: n7X,
      "fK5e6T3EniMqagBkxXjAug9EbhFDZbEzPPr4f22uwMoP5i2cJ": n7X,
      P: n7P,
      "11111111111111111111111111111111LpoYY": n7P,
      C: n7C,
      umkbhSrjVw5nUvy1eo25AdrjRkPBdtzAMewuxA2rqEx4YMo4c: n7C
    },
    114: {
      hrp: NetworkIDToHRP[114],
      X: n9X,
      FJuSwZuP85eyBpuBrKECnpPedGyXoDy2hP9q4JD8qBTZGxYbJ: n9X,
      P: n9P,
      "11111111111111111111111111111111LpoYY": n9P,
      C: n9C,
      "vE8M98mEQH6wk56sStD1ML8HApTgSqfJZLk9gQ3Fsd4i6m3Bi": n9C
    },
    7: {
      hrp: NetworkIDToHRP[7],
      X: n10X,
      "8S5vg8ycMqULMMq2CzrRh3qqbFWjs6a35H8UwNAaS83v9Ynxa": n10X,
      P: n10P,
      "11111111111111111111111111111111LpoYY": n10P,
      C: n10C,
      "2wcJd3HZL4EAoQDfGhyeHGJU55wizganSzD9EvdDLJX3B5u5Be": n10C
    },
    5: {
      hrp: NetworkIDToHRP[5],
      X: n11X,
      "7xKYhEvYuUekwDxozgEiMPufzJ3jJPypKbGE8ny6KL84z4RKB": n11X,
      P: n11P,
      "11111111111111111111111111111111LpoYY": n11P,
      C: n11C,
      "erCt5pSo5d4bM8fMrsB2dRM54PGssDAVqRg1jHedQzr6ayLiq": n11C
    }
  }
}

/**
 * Rules used when merging sets
 */
export type MergeRule =
  | "intersection" // Self INTERSECT New
  | "differenceSelf" // Self MINUS New
  | "differenceNew" // New MINUS Self
  | "symDifference" // differenceSelf UNION differenceNew
  | "union" // Self UNION New
  | "unionMinusNew" // union MINUS differenceNew
  | "unionMinusSelf" // union MINUS differenceSelf
  | "ERROR" // generate error for testing
