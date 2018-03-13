# Blockchain-Dapp-UploadingImages/Documents/Videos

It is Basic Dapp for Blockchain, Creation using Solidity Smartcontract+Truffle+JS using HTML+CSS as front end and IPFS used for Peer-to-peer Upload Image Hash Function

Installation:
# Install IPFS:
    a. sudo apt-get update
    b. sudo apt-get install golang-go -y
    c. wget https://dist.ipfs.io/go-ipfs/v0.4.10/go-ipfs_v0.4.10_linux-386.tar.gz
    d. tar xvfz go-ipfs_v0.4.10_linux-386.tar.gz
    e. sudo mv go-ipfs/ipfs /usr/local/bin/ipfs
# Other Installations:
     1. Install NodeJs to execute the DAPP
     2. Install Truffle suit 
     3. Install testrpc(testprc uses ethereumjs to simulate full client behavior and make developing Ethereum)
     More Details: [click here](http://www.techtonet.com/how-to-install-and-execute-truffle-on-an-ubuntu-16-04)  
  
 Clone: 
 clone the repository to your project Directory

# Execution:
1. Open a terminal //for running IPFS <br />
    $ ipfs daemon  //it runs in 8080 port  <br />

2. Open a terminal & change the directory to Dapp-UploadImage & run following Commands <br />
    $ truffle compile            //compiling solidity files  <br />

3. Open a another terminal and run TestRPC as Dummy Blockchain  <br />
    $ testrpc  <br /><br />
   
4. Again open a first Terminal for Remaining Execution  <br />
    $ truffle migrate   <br />
    $ npm run dev  <br />
5. pick the url: https://localhost:8081  <br /><br />
6. then,paste url in Browser  <br />

