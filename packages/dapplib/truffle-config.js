require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space struggle cruise oval unaware hidden deputy foster genre'; 
let testAccounts = [
"0x5a91deaee486c9bdeb2fb98aa781afa3868e18bae330a28ff16f719c3b46717d",
"0x1fa6f95e6d76040eaa3f4ead6b3382b110e10c46c1e488bdf6c4ae7649efb627",
"0x738f4659e98a7795d486d75eb71d8d65a3dd73ac4ef852e28f6a4e5425f8063b",
"0x91e879ba66216be69f33dfeff44b059f194a6810bbd4380e943d3d3ea2a19c2a",
"0x45a478f307a2cdc67f4a165c22183d9d134d08bd7cba2dab70a112902b832d37",
"0xb68bef91b0e54a9e76b321e4b982e1f7f5d7fd276550a02b8c9ce576248145a2",
"0x84fb0d16c9d664211fa07e8317aa29132ba9797ab3833a6a33effd0cd588a373",
"0x14e74f43c10969daa867013780e5ac55dfa2cf4ebdb4e17898ba8e178a80dba7",
"0xf1caf1c3b78f19b20aaa88ec544c094b4bdf2b4274160f4fe2055c1c3c4fff78",
"0xa28e2c3b6424c84f1b46e4a86ef6cb089ed416cd41572843928c8d9920dd7002"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
