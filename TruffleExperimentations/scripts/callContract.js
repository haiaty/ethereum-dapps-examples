

const Web3 = require('web3');
const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'stairs often update giant snack pony party report rally filter fire skin';
const rpcUrl = 'http://localhost:8545'; // ganache-cli
const provider = new HDWalletProvider(mnemonic, rpcUrl, 0, 10);
const web3 = new Web3(provider);
const { addresses, wallets } = provider;
const gasPrice = web3.utils.toWei(new BN(10), 'gwei');


/*
const HelloWorldABI = JSON.parse(fs.readFileSync('./abi/HelloWorld.abi', 'utf8'));

const NetworkProxyInstance = new web3.eth.Contract(HelloWorldABI);*/