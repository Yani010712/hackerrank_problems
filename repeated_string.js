function repeatedString(s, n) {
    //number of times the letter 'a' appears in the original string
    let occurrence = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a'){
             occurrence ++;
        }
    }  
    //number of times the original string is repeated to complete n
    let str = Math.floor(n / s.length); 
    //total number of times the character 'a' is repeated in those repetitions 
    let count = occurrence * str;
    //number of times the character is repeated in the rest of the string(remainder)
    for(let i = 0; i < (n % s.length);i++){
        if(s[i] == 'a'){
            count++;
        } 
    }   
    return count;


}