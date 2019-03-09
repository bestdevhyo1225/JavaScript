// 생활코딩 - 참조
var a = {'id':1}
function func(b) {
    b = {'id':2}
}
func(a);
console.log(a.id);  // 1

var a = {'id':1}
function func(b) {
    b.id = 2;
}
func(a);
console.log(a.id);  // 2
