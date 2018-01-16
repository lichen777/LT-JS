https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
//first submission, a little bit long
var isValid = function(s) {
    var len = s.length;
    if (s[len-1] === "(" || s[len-1] === "[" || s[len-1] === "{") {
        return false;
    }
    if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
        return false;
    }
    var stack = [];
    for (var i = len - 1; i >= 0; i--) {
        if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
            stack.push(s[i]);
        } else if (s[i] === "(") {
            if (stack.pop() !== ")") {
                return false;
            }
        } else if (s[i] === "[") {
            if (stack.pop() !== "]") {
                return false;
            }
        } else if (s[i] === "{") {
            if (stack.pop() !== "}") {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
       return false; 
    }
    return true;
};

//second and better solution:
var isValid = function(s) {
    var len = s.length;
    var stack = [];
    var check = {"(":")","{":"}","[":"]"};

    for (var i = 0; i < len; i++) {
        if (check[s[i]]) {
            stack.push(s[i]);
        } else {
            var top = stack.pop();
            if (check[top] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
