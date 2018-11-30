var HelloWorld=artifacts.require ("./HelloWorld.sol");

console.log('start test');
contract('HelloWorld', function(accounts){

    it("it should return the right string", function() {
        return HelloWorld.deployed().then(function(instance) {
          return instance.hi.call();
        }).then(function(text) {
          assert.equal("Hello World", text, "text equals");
        });
      });
});