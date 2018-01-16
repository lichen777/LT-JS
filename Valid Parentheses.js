/**
 * @param {string} s
 * @return {boolean}
 */
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
