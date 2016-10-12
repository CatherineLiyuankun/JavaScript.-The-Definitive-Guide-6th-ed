/**
 * Created by yuanli on 9/19/2016.
 */
function type(o) {
    var t, c, n; //type, class, name

    //null
    if (o === null) return "null";
    //NaN not equal to itself
    if (o !== o) return "nan";

    if ((t = typeof o) !== "object") return t;

    if ((c = classof(o)) !== "Object") return c;

    if(o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName())) return n;

    return "object";
};

function classof(o) {
    return Object.prototype.toString().call(o).slice(8, -1);
};

Function.prototype.getName = function (){
    if ("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};



//null
var nul = null;
console.log(type(nul));

//nan
var nan = NaN;
console.log(type(nan));

//type
var num = 3;
console.log(type(num));

//????????
var Complex = function(x,y) { this.r = x; this.i = y };
var c = new Complex(1, 2);
console.log(type(c));

//???????
//function Range(from, to) {
//    this.from = from;
//    this.to = to;
//};
//
//var r = new Range(1,3);
//console.log(type(r));