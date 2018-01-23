https://leetcode.com/problems/word-break/description/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (wordDict === null || wordDict.length === 0) {
        return false;
    }
    var found = [];
    found[0] = true;
    var maxLen = 0;
    for (var word of wordDict) {
        maxLen = Math.max(maxLen, word.length);
    }
    for (var i = 1; i <= s.length; i++) {
        for (var j = 1; j <= Math.min(maxLen, i); j++){
            if (found[i-j]) {
              var str = s.substring(i-j, i);
                if (wordDict.indexOf(str) !== -1) {
                    found[i] = true;
                    break;
                }  
            }   
        }        
    }
    return found[s.length] === true;
};

//another solution
var wordBreak = function(s, wordDict) {
    if(wordDict === [] || wordDict === null){
        return false;
    }
    var found = [];
    found[0] = true;
    for(var i = 1; i <= s.length; i++){
        for(var j = 0; j <= i; j++){
            if(found[j] && wordDict.indexOf(s.substring(j, i)) !== -1){
                found[i] = true;
                break;
            }
        }
    }
    return found[s.length] === true;
};
