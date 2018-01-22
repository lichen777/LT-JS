https://leetcode.com/problems/edit-distance/description/
/*
Matrix DP
State: f[x][y] : means the minimum step to convert first x characters of Word1 to first y characters of Word2.
function: study the minimum steps from previous state to (x,y): f[x][y] = Math.min(f[x-1][y], f[x][y-1], f[x-1][y-1]) + 1
initialize: f[x][0] = x; f[0][y] = y
answer: f[m][n]
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var f = [];
    
    if (m === 0 || n === 0) {
      return Math.max(m, n);
    }
    
    for (var i = 0; i <= m; i++) {
      f[i] = [];
      f[i][0] = i;
    }
    for (var j = 0; j <= n; j++) {
      f[0][j] = j;
    }
    
    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          f[i][j] = f[i - 1][j - 1];
        } else {
          f[i][j] = Math.min(f[i - 1][j], f[i][j - 1], f[i - 1][j - 1]) + 1;
        }
      }
    }
    return f[m][n];
};
