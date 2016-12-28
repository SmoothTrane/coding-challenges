
/**
 * 1. Write a function that takes two NBA players and sum their PPG
 * Example:
 *  var iverson = {team: "76ers", ppg: 11.2}
 * var jordan = {team:"bulls", ppg: 20.2}
 * sumPPG(iverson, jordan)
 *  ==> 31.4
 */
function sumPPG(playerOne, playerTwo){
    
return playerOne + playerTwo;    
    
}



/**
 * 2. Create an array that contains each age of every all star in your class, then return the average oge 
 * Example:
 * var allStars =  [17,16,16,16,16,15,17,17,15,5,17,17,16]
 * 
 *  => 15.4
 */
 
// 
function avgAge(allStars){
    
    var sum = 0.0;
    for(var i = 0; i <allStars.length; i++){
        sum += allStars[i];
    }
    return sum / allStars.length;
    
}



/**
 * 3. Write a function that removes the vowels of any artist name if there is any 
 * 
 * Example removeVowels("drake")
 *  => drk
 * 
 * removeVowels("aeiou")
 * => ""
 */

function removeVowels(str){
    
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
    
}


/**
 * 4. Create a function that takes in an object of nba player, and returns the college that the player went to
 *  var curry = {fname: "Steph", lname:"Curry", number:30, team:"Warriors", college:"Davidson"}
 *  Example: 
 * getCollege(curry)
 * ==> "Davidson"
 * 
 */
 
 
function getCollege(player){
    
    return player["college"];
}




/**
 * 
 * 
 * 5. Write a function that takes in a list of random movies, whatever movie gets chosen is a movie you must watch
 * var rockySeries = ["Rocky", "Rocky II", "Rocky III", "Rocky IV"]
 * randomMovies(movies)
 * ==> "Rocky "
 */

function randomMovies(movies){
    var randNum = Math.floor((Math.random() * movies.length) + 0);
    return movies[randNum];
}

