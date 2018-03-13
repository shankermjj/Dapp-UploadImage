pragma solidity ^0.4.4;

contract SI {

struct Enroll
    {
        uint rollno;
        string name;
        string ipfs;
    }
event details(uint rollno,string name,string ipfs);   
Enroll[] public stu;   

address public owner;

  function SI() public 
  {
     owner=msg.sender;
  }


 function calculate(uint pr,string ti,string url) returns(bool)
 {
        if(msg.sender==owner)
	{
        stu.push(Enroll({rollno:pr,name:ti,ipfs:url}));
	return true;
	}
	return false;   
 }

    function fetch(uint v) public constant returns(uint r,string n,string i)
    {
        
        Enroll storage di =stu[v];
        details(di.rollno,di.name,di.ipfs);
        return (di.rollno,di.name,di.ipfs);
      
    } 
        
        
           
     
 }
