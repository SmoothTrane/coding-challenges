

/**
 * 
 * 1. Write a function that checks if a string is a palindrome
 * 
 * isPalindrome("racecar")
 * 
 *  = > true
 * 
 * isPalindrome("code")
 * 
 *  == > false 
 * 
 * 
 */
function isPalindrome(s){
    if(s == s.split('').reverse().join('')){
        return true;
    }
    return false;
}



/**
 * 
 * 2. Create a function  that prints each row elements and its row of a 2D array 
 * Example: var arr = [ [1,2,3], [4,5,6] ] 
 *  print2dElems(arr)
 *  => row 0:
 * 1
 * 2
 * 3
 * row 1
 * 4
 * 5 
 * 6
 * 
 * 
 * 
 */ 

function print2dElems(a){
for (var i in a)   
{  
   console.log("row " + i);  
   for (var j in a[i])   
     {  
      console.log(" " + a[i][j]);  
     }  
}  

}
/**
 *  3  Create a  function that computes the following expression and output its value, where  N  is a odd positive integer given by the user
    Expression : 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 +  1/(N)^2
 * 
 * compute(5)
 * ==> 1.1511111111111112
 * compute(9)
 * ==> 1.1838649533887629
 * compute(8)
 *  == > false
 */

function compute(n){
    
    // N must be an odd number. greater than equal to 3 
    
    if(n % 2 == 0 || n < 3){
        return false; 
    }
    var num = 0;
    for(var i=3; i<=n; i+=2){
	    num+= 1/(Math.pow(i,2));
    }
    num+= 1;
    return num;



}




/**
 * 
 * 4. Create a Javascript function that computes the cost of renting a car. The function asks the user to input his age, the size of the car he wants and the number days he will rent the car, and then outputs the cost.
 * 
 *  To compute the cost, first, you need to calculate the car rental cost for one day based on the size of the car: economy, medium, or full-size, and based on the user’s age. Here is how to get the one day cost of renting a car. The base charge is $50. There is a surcharge of $10 if the driver is under 25 and an additional surcharge based on the car size:
 * car size      		surcharge
 *  economy                        $0 
 *  medium                         $10
 *   full-size                         $15
 *  
 * Then you need to multiply the one day cost by the number of days the car is rented in order to get the full cost.
 * 
 * 
 * Example:
 * 
 * insurance(18, "medium", 7)
 * 
 * ==> 910
 * 
 * insurance(30,"full-size",30)
 *  ==> 15000
 * 
 */
function insurance(age, size, numofdays){
    
    const ECONOMY = 0;
    const MEDIUM = 10;
    const FULL= 15; 
    size = size.toLowerCase();
    var cost = 50;
    if(age <25){
        cost+=10;
    }
    
    if(size === "economy"){
        cost+= ECONOMY;
        cost = cost * numofdays;
    }
    else if(size ==="medium"){
        cost+= MEDIUM * numofdays;
        cost = cost * numofdays;
    
    }
    
    else if(size === "full-size"){
        cost+= FULL * numofdays;
        cost = cost * numofdays;
    }
    else{
        return "Please enter a proper size for a calculation";
    }
    
    return cost; 
    

}


/**
 *  5. Create a function named bite, in this function we will take a human object and conver its type into a zombie and return it back
 * 
 * Example:
 * 
 * var player = { race: "human", fname: "gary", lname: "coltrane"}
 * bite(player)
 * 
 * ==> player {race: "zombie", fname: "gary", lname :"coltrane"}
 */


function bite(human){
    human["race"] = "zombie";
    return human;
}

