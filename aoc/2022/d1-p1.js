var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stri = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000\n";
var addNumStrings = function (str) {
    return str
        .split("\n")
        .map(function (i) { return Number(i); })
        .reduce(function (p, c) { return p + c; }, 0);
};
var maxN = function (arr, n) {
    return __spreadArray([], arr, true).sort(function (a, b) { return b - a; }).slice(0, n);
};
var nums2 = stri.split("\n\n");
var m = 0;
for (var _i = 0, nums2_1 = nums2; _i < nums2_1.length; _i++) {
    var n = nums2_1[_i];
    var su = n
        .split("\n")
        .map(function (i) { return Number(i); })
        .reduce(function (p, c) { return p + c; }, 0);
    console.log({ n: n, su: su });
    if (m < su)
        m = su;
}
console.log({ maximum: m });
var elvesAdded = nums2.map(addNumStrings);
var topThree = maxN(elvesAdded, 3);
console.log({ elvesAdded: elvesAdded, topThree: topThree });
