// 생활코딩 - 상속
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('hyoseok');
document.write(p1.introduce() + '<br />');

// 위 코드를 아래와 같이 변경해보자
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}
var p1 = new Person('hyoseo(k');
document.write(p1.introduce() + '<br />');

/////////////////////////////////////////////////////////////
// 상속을 어떻게 하는지 알아보자
// 위의 코드와 동일..
function Person(name) {
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}
// 새로운 코드
function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    return 'Hello world';
}

function Designer(name) {
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function() {
    return 'Beautiful!';
}

var p1 = new Programmer('hyoseok');
document.write(p1.introduce() + '<br />');
document.write(p1.coding() + '<br />');

var p2 = new Designer('hyeo');
document.write(p2.introduce() + '<br />');
document.write(p2.design() + '<br />');
