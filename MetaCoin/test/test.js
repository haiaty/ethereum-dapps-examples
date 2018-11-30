
var MetaCoin = artifacts.require("./MetaCoin.sol");


var account_one = "0xe0463a7b9548053d4d9a6378a4e957f55614bf7d"; // an address
var account_two = "0x10b90d464c2b691abd10340e104015be670b7ce3"; // another address

var meta;
MetaCoin.deployed().then(function(instance) {
  meta = instance;
  return meta.sendCoin(account_two, 10, {from: account_one});
}).then(function(result) {
  // If this callback is called, the transaction was successfully processed.
  alert("Transaction successful!")
}).catch(function(e) {
  // There was an error! Handle it.
})
