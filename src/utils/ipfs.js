// IPFS
import { encode as base64_encode } from 'base-64';
import { create as ipfsHttpClient } from 'ipfs-http-client';
let secrets = '2LXbDy8qoEAThQoV1PtygIXO9fp:9c3769c21ef049f6cbd6235b9e95796d';
let encodedSecrets = base64_encode(secrets);

// Configuring IPFS
const ipfs = ipfsHttpClient({
  url: 'https://ipfs.infura.io:5001/api/v0',
  headers: {
    Authorization: 'Basic ' + encodedSecrets,
  },
});
export default ipfs;
