# Blockchain-SimpleInterest-Dapp
It is Basic Dapp for Blockchain, Creation using Solidity Smartcontract+Truffle+JS using HTML+CSS as front end

Installation:
1.First, update and install packages
  # sudo apt-get update && sudo apt-get -y upgrade
  # sudo apt-get -y install curl git vim build-essential
2.Install NodeJs to execute the DAPP
  # curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  # sudo apt-get install -y nodejs
  # sudo npm install -g express
3. Install Truffle packages
  # sudo npm install -g truffle
4. Install testrpc(testprc uses ethereumjs to simulate full client behavior and make developing Ethereum)
  # sudo npm install -g ethereumjs-testrpc
  
 Clone: 
 clone the repository to your project Directory

Execution:
Open a terminal & change the directory to SimpleInterest-Dapp & run following Commands
1. # truffle compile            //compiling solidity files

Open a another terminal and run TestRPC as Dummy Blockchain
   # testrpc
   
Again open a first Terminal for Remaining Execution
2. # truffle migrate
3. # npm run dev
pick the url: https://localhost:8080
4. then,paste url in Browser

