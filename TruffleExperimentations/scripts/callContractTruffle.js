

var HelloWorld=artifacts.require ("./HelloWorld.sol");




module.exports =  async (callback) => {

    try
    {
        HelloWorld.deployed().then(function(instance) {
            return instance.hi.call();
          }).then(function(text) {
            
            console.log("From contract call:" + text);
          });
    } catch(e) {
        console.log(e);
    }
    //const accounts = web3.eth.accounts._provider.addresses;

    //console.log(web3);

}


