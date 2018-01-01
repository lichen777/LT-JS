/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    var len = this.min.length;

    if (len > 0) {
        var num = Math.min(x, this.min[len-1] );
        this.min.push(num);
    }else {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var len = this.stack.length;
    if (len > 0) {
        this.min.pop();
        this.stack.pop();   
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var len = this.stack.length;
    if (len > 0) {
        return this.stack[len - 1];   
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var len = this.stack.length;
    if (len > 0) {
        return this.min[len - 1];
    } else {
        return null;
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
