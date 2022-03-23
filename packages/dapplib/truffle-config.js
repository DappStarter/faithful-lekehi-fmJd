require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember million hidden clip bottom giggle'; 
let testAccounts = [
"0xb32cdc2b18949572772029fec518e7631fbe029e38dd0d9a3738d88e4483f7e2",
"0x8817dac9dad2444519cfd6af6555cf994cc4fdf0ad1c652437d12af9209ec817",
"0x940a97278e2372069097f6403a03e00b895a4a73837921c351524122d16a1c4b",
"0x78e9870cc19dcf368ef5e4cb85a92a3e604df00d745f113407d25c0d23bbcef1",
"0xb2e6b0621fcea8d747d420e8d7d6a8c35c5439f1eb8ebb1044f9a4fa4a3ac2e7",
"0x1544956c2b444cda412b47943c1a8325d00c0e5018670debb9d516f6fd886af3",
"0xd8f64c48d096e32a9d195931599b8d62db3c0b6cd38fb9dcc45f3e3092b7ccf5",
"0x639eed8e96a214e57de23ef0ddc6c5b12f94f55900ed090496ab39dc0a76ee94",
"0xf19aea1b2efdcfff2bd8665eed10b08c327bed9da71ff3084d93b6b9b84871ff",
"0xb443d6a1d518b1f761a13c54c9bfb2eff19e3e57db083c84fcc408bd08324ef3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


