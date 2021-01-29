const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'cash electric power digital section shallow pilot fancy pencil cruel vacant crouch',
    'https://rinkeby.infura.io/v3/ef4fb1f1d8c0402490e945493e42a6a6'
);

const web3 = new Web3(provider);

const deploy = async () => {
    // Get a list of all accounts
    const accounts = await web3.eth.getAccounts()
     
    // Use one account to deploy contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'});

    console.log(interface);
    console.log("Deployed To:"+ result.options.address);
};
deploy();
