# Blockchain-Dapp-UploadingImages/Documents/Videos

It is Basic Dapp for Blockchain, Creation using Solidity Smartcontract+Truffle+JS using HTML+CSS as front end and IPFS used for Peer-to-peer Upload Image Hash Function

Installation:
# 1. Install IPFS:
    a. sudo apt-get update
    b. sudo apt-get install golang-go -y
    c. wget https://dist.ipfs.io/go-ipfs/v0.4.10/go-ipfs_v0.4.10_linux-386.tar.gz
    d. tar xvfz go-ipfs_v0.4.10_linux-386.tar.gz
    e. sudo mv go-ipfs/ipfs /usr/local/bin/ipfs
# 2. Install NodeJs to execute the DAPP

# 3. Install Truffle suit 
  
# 4. Install testrpc(testprc uses ethereumjs to simulate full client behavior and make developing Ethereum)
  
  
 Clone: 
 clone the repository to your project Directory

# Execution:
Open a terminal //for running IPFS 
1. ipfs daemon  //it runs in 8080 port

Open a terminal & change the directory to Dapp-UploadImage & run following Commands
2. truffle compile            //compiling solidity files

3. Open a another terminal and run TestRPC as Dummy Blockchain
   testrpc
   
Again open a first Terminal for Remaining Execution
4.  truffle migrate
5.  npm run dev

pick the url: https://localhost:8081
6. then,paste url in Browser

