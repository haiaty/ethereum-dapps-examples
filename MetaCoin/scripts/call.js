var MetaCoin=artifacts.require ("./MetaCoin.sol");

var account_one = "0x98a607219c2878a1d4ecbb5ef04e1a78c5467d18"; // an address
var account_two = "0x1d4fffdb88f28b02e508836f0cde511063028f45"; // another address

var meta;

module.exports =  async (callback) => {

    try
    {
        MetaCoin.deployed().then(function(instance) {

            meta = instance;
            return meta.sendCoin(account_two, 10, {from: account_one});
          }).then(function(result) {

            
            // If this callback is called, the transaction was successfully processed.
            console.log('transaction', result);
          }).catch(function(e) {

            throw e;
            // There was an error! Handle it.
          })

          
    } catch(e) {
        console.log(e);
    }
    //const accounts = web3.eth.accounts._provider.addresses;

    //console.log(web3);

}
