

/**
 * 1. Write a function that takes in a number n and gets the first n number in a finobacci sequence
 * 
 * Example:
 * 
 * fibonacci(5)
 * => 5
 * fibonacci(6);
 * => 8
 * 
 * 
 */
 



function  fibonacci(n){
    if(n == 0){
        return 0;
    }
    
      if (n <= 1) return 1;

  return fibonacci(n - 1) + fibonacci(n- 2);
  
}




/**
 * 2. Write a function that takes in two numbers, and gets the GCD of both numbers, using euclids algorithm
 * 
 * Example:
 * 
 * euclidGcd(7,24)
 * ==> 1
 * euclid Gcd(710,310)
 * ==> 10 
 *  
 */
 
 
function euclidGcd(a,b){
    
    if(!b){
        return a;
    }
    
    return euclidGcd(b, a%b)
    
}




/**
 * 3. Write a function takes in a specific key, and converts an array of objects into a hashmap with that key
 * 
 * 
 * Example:
 * 
 * [{id:123, name:dave"}, {id:345, name"harold"}].toHashMap("id");
 * 
 * ==> Object {123: Object, 345: Object}
 * 
 * 
 */
 

 
 



    function isFunction(func){
        return Object.prototype.toString.call(func) === '[object Function]';
    }

    Array.prototype.toHashMap = function(key){
        var _hashMap = {}, getKey = isFunction(key)?key: function(_obj){return _obj[key];};
        this.forEach(function (obj){
            _hashMap[getKey(obj)] = obj;
        });
        return _hashMap;
    };




 /**
  * 4. Write a function that converts a word into pig latin

  *  Example:
  * translate("apple")
  * => appleay
  * translate("code")
  * => odecay
  */
  
  

function translate(word) {
    var array = word.split('');
    var vowels = ['a','e','i','o','u'];
    var newWord = '';
    for(var i = 0; i < vowels.length-1; i++) {
        for(var y = 0; y < word.length-1; y++) {
            if(word[y] === vowels[i]) {
                for(var x = y; x < word.length; x++){
                    newWord = newWord + word[x];
                }
                for(var n = 0; n < y; n++){ 
                    newWord = newWord + word[n];
                }
                return newWord + "ay";
            }       
        }
    }
}







/** Write a function that sorts an array of integers using mergesort
 * 
 * Example:
 * 
 * mergeSort(33,99,100,30,29,50)
 * 
 * =>  29,30,33,50,99,100
 * 
 * mergeSort(3,2,1)
 * 
 * ==> 1,2,3
 */
 
 
 function mergeSort(array) {

	if (array.length <= 1) return array;

	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle, array.length);

	return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {
	var result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) result.push(left.shift());
		else result.push(right.shift());
	}		
	
	while (left.length) result.push(left.shift());
	while (right.length) result.push(right.shift());

	return result;
};

