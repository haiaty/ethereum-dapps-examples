

#### TUTORIAL LINKS


- complete video:
https://www.youtube.com/watch?v=3681ZYbDSSk

- truffle tutorial 
https://truffleframework.com/tutorials/pet-shop



# SOME TIPS

- in order to interact with your contract

1) type in the terminal:

truffle console

2) then assign the deployed contract to a variable by typing this:

Election.deployed().then(function(instance){ app = instance })

3) play around with the contract like this

app.address
app.candidate()