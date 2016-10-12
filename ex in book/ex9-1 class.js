/**
 * Created by yuanli on 9/18/2016.
 */
function Range(from, to) {
    this.from = from;
    this.to = to;
};

Range.prototype = {
    constructor: Range,
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};

var r = new Range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);



Number.prototype.times = function(f, context){
    var n = Number(this);
    for(var i = 0; i < n; i++) {
        f.call(context, i);
    }
};

var n = 3;
n.times(function(n) {
    console.log(n + "Hello")
});