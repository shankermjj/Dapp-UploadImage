// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import {  default as Web3 } from 'web3';
import {  default as contract } from 'truffle-contract';

// Import our contract artifacts and turn them into usable abstractions.
import si_artifacts from '../../build/contracts/SI.json'

// Conference is our usable abstraction, which we'll use through the code below.
var SI = contract(si_artifacts);

var accounts, account, speaker;
var sim;

function getBalance1(address) {
    return web3.fromWei(web3.eth.getBalance(address).toNumber(), 'ether');
}



function getBalance (address) {
  return new Promise (function (resolve, reject) {
    web3.eth.getBalance(address, function (error, result) {
      if (error) { reject(error); } 
	else { resolve(result);   }
  })
})
}

window.App = { //where to close
    start: function() {
        var self = this;

        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }
 accounts = accs;
//$("#tentantAddress").html(getBalance(accounts[0])); //prints balance

$("#tentantAddress").text(web3.eth.accounts[0]); //prints account address
            //console.log(accounts);
                 
            self.initializeConference();
        });
    },

    initializeConference: function() {
        var self = this;
	
        SI.deployed().then(function(instance) {
            sim = instance;
            $("#confAddress").html(sim.address);

            self.checkValues();
        }).catch(function(e) {
            console.log(e);
        });

    },




checkValues: function() {

        SI.deployed().then(function(instance) {
           sim = instance;
	    console.log(sim);	
            sim.owner.call().then

	( function(tent) { console.log(tent); $("input#tentantAddress").val(tent);  }). //})
	
	catch(function(e) { console.log(e); });
	});
   },

Calculate: function(pr,ti,ra) 
{
        var simp;
        SI.deployed().

	then( function(instance) { simp = instance; simp.calculate(pr,ti,url,{from: accounts[0],gas:3000000}). //(}


	then( function(ipfs) { console.log(ipfs); var msgResult="Successfully Updated!!!";  $("#Result").html(msgResult); });  }). 
        catch(function(e) { console.log(e); });
    	
//}); //})
}

 




};//loop for main

 



window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    SI.setProvider(web3.currentProvider);
    App.start();

    // Wire up the UI elements



    $("#caluclate").click(function() {
        var pr = $("#p").val();
	var ra = $("#r").val();
	var ti = $("#url").val();
        App.Calculate(pr,ti,ra);
    });

    //$("#trans").click(function() {
    //var val = $("#money").val();
      //  App.departure(val);
//});

});
