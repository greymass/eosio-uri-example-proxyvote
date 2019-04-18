const util = require('util');
const zlib = require('zlib');
const eosjs = require('eosjs');

const { SigningRequest } = require("eosio-uri");

const textEncoder = new util.TextEncoder();
const textDecoder = new util.TextDecoder();

const rpc = Eos({
  httpEndpoint: 'https://eos.greymass.com'
});

const opts = {
  // string encoder
  textEncoder,
  // string decoder
  textDecoder,
  // string compression
  zlib: {
    deflateRaw: (data) => {
      return new Uint8Array(zlib.deflateRawSync(Buffer.from(data)))
    },
    inflateRaw: (data) => {
      return new Uint8Array(zlib.inflateRawSync(Buffer.from(data)))
    },
  },
  // provider to retrieve contract abi
  abiProvider: {
    getAbi: async (account) => {
      return (await rpc.get_abi(account)).abi
    }
  }
};

export default async function gernerateURI() {
  let req = await SigningRequest.create({
    callback: 'https://dapp.greymass.com',
    actions: [{
      account: 'eosio.token',
      name: 'transfer',
      authorization: [{ actor: '1111111111', permission: 'active' }],
      data: {
        from: '11111111111',
        to: donarionRecipient,
        quantity: donationAmount,
        memo: 'donation',
      }
    }]
  }, opts);

  // encode signing request as string
  return req.encode();
}

