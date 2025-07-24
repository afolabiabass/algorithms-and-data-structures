
var MinStack = function() {
    this._stack = []
    this._minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this._minStack.length === 0) {
        this._minStack.push(val)
    } else {
        if (val < this._minStack[this._minStack.length - 1]) {
            this._minStack.push(val)
        } else {
            this._minStack.push(this._minStack[this._minStack.length - 1]) 
        }
    }
    this._stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop()
    this._minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._minStack[this._minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(2)
console.log(obj.pop())