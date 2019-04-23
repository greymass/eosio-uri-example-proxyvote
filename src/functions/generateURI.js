const fetch = require('node-fetch');
const textEncoding = require('text-encoding');
const zlib = require('zlib');
const { JsonRpc } = require('eosjs');
const { SigningRequest } = require("eosio-uri");

const textDecoder = new textEncoding.TextDecoder();
const textEncoder = new textEncoding.TextEncoder();

const rpc = new JsonRpc('https://eos.greymass.com', { fetch });

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

export default async function generateURI(proxyAccount) {
  let req = await SigningRequest.create({
    callback: 'https://dapp.greymass.com',
    actions: [{
      account: 'eosio',
      name: 'voteproducer',
      authorization: [{ actor: '...........1', permission: 'active' }],
      data: {
        voter: '...........1',
        producers: [],
        proxy: proxyAccount
      }
    }]
  }, opts);

  // encode signing request as string
  return req.encode();
}

