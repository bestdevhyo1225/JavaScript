// 생활코딩 - 객체 생성자, new
// 객체 내의 변수를 속성 (property)
// 객체 내의 함수를 메소드 (method)
var person = {};
person.name = 'janghyoseok';
person.introduce = function() {
    return 'My name is' + this.name;
}
document.write(person.introduce());

// 객체 안에 변수랑 메소드를 정의하도록..
// 정답은 없지만.. 추천한다.
var person1 = {
    'name' : 'janghyoseok',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
};
document.write(person1.introduce());

///////////////////////////////////////////////////
// 중요!!
// Javascript 언어는 객체 이전에 함수이다!
// 생성자(constructor)는 객체를 만드는 역할을 하는 함수다.
// Javascript 에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.
function Person() {}
// 함수를 호출한 것
var p0 = Person();      // 'undefined' 가 출력됨
// new 가 앞에 붙어있으면 Person은 함수라고 하지 않고 생성자라고 부른다. (객체의 생성)
// 객체의 리터럴을 통해서 만든것이라고 얘기할 수는 있다. (똑같은 것은 아님.)
// var p1 = {};
var p1 = new Person();  // 'Person {}' 와 같은 비어있는 객체가 출력됨
p1.name = 'janghyoseok';
p1.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(p1.introduce());

var p2 = new Person();  // 'Person {}' 와 같은 비어있는 객체가 출력됨
p2.name = 'hyeo';
p2.introduce = function() {
    return 'My name is ' + this.name;
}
document.write(p2.introduce());

//////////////////////////////////////////////
// 개선된 코드
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
// Person은 함수가 아니라 new 키워드를 통해 생성자인 것이다.
var p1 = new Person('janghyoseok');
document.write(p1.introduce());
var p2 = new Person('hyeo');
document.write(p2.introduce());
// 생성자 내에서 이 객체의 프로퍼티를 정의하고 있다. 이러한 작업을 초기화라고 한다.
// 이를 통해서 코드의 재사용성이 대폭 높아졌다.
