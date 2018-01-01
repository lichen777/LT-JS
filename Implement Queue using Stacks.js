/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    var len = this.stack2.length;
    if (len === 0){
        this.stack2.push(x);
    } else {
        for (var i = 0; i < len; i++) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(x);
        for (var i = 0; i < len + 1; i++) {
            this.stack2.push(this.stack1.pop());
        }
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    var len = this.stack2.length;
    if (len > 0) {
        return this.stack2.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    var len = this.stack2.length;
    return this.stack2[len - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    var len = this.stack2.length;
    return len === 0;   
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
