// 생활코딩 - 함수호출
// JavaScript에서 함수는 일종의 객체이다.
// 객체는 속성들을 가지고 있다.
// 속성의 값이 저장이 되어있다면 속성 -> property
// 객체는 메소드들을 가지고 있다. -> method
function sum(arg1, arg2) {
    return arg1 + arg2;
}
// 함수를 호출하는 방법 apply, call이 있다.
// 두 가지는 같은 취지이지만 사용방법이 다르다.
// apply -> 첫 번째 인자에 null이 아닌 어떤것을 넣어서 사용하는 함수이다.
// 간단한 함수는 굳이 복잡하고 어렵게 사용하지 말자.
sum(1,2); // 3
sum.apply(null, [1,2]); // 3
sum(4,2); // 6
sum.apply(null, [4,2]); // 6

////////////////////////////////////////////////////////////////
var o1 = {val1:1, val2:2, val3:3};
var o2 = {v1:10, v2:50, v3:100, v4:25};
function sum() {
    // sum.apply(o1) 또는 sum.apply(o2)를 호출하면
    // var this = o1; 또는 o2; 라는 코드가 암시적으로 들어간 것이다.
    var _sum = 0;
    // 현재 sum 안에서 this 라는 것은 무엇인지 아직 정해지지 않았다.
    // 무슨 뜻? -> 호출할 때 정해진다.
    for (var name in this) {
        _sum += this[name];
    }
    return _sum;
}
// sum을 수행하는 객체는 o1
alert(sum.apply(o1));   // 6
// sum을 수행하는 객체는 o2
alert(sum.apply(o2));   // 185

//////////////////////////////////////////////////////////////
// 굉장히 불편한.....
// function sum() {
//     var _sum = 0;
//     for (var name in this) {
//         // 함수가 아닌것들만 더한다.
//         if (typeof this[name] !== 'function')
//             _sum += this[name];
//     }
//     return _sum;
// }
// var o1 = {val1:1, val2:2, val3:3, sum:sum};
// var o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum};
// alert(o1.sum());
// alert(o2.sum());

// call -> this를 특정값으로 지정할 수 있다.
const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}!`;
}

// this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.
greet();                // Hello, I'm undefined! -> this는 어디에도 묶이지 않았습니다.
greet.call(bruce);      // Hello, I'm bruce!     -> this는 bruce 입니다.
greet.call(madeline);   // Hello, I'm Madeline!  -> thissms madeline 입니다.

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// call의 첫 번째 매개변수는 this로 사용할 값이고,
// 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달 된다.
update.call(bruce, 1949, 'singer');
// bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer" } 입니다.
update.call(madeline, 1942,  'actress');
// bruce는 이제 { name: "madeline", birthYear: 1942, occupation: "actress" } 입니다.

// call 과 apply 는 같다.
// 다만, apply는 매개변수를 배열로 받는다.
// call 은 매개변수를 직접 받는다.
update.apply(bruce, [1955, 'actor']);      // 매개변수를 배열로 받음
update.apply(madeline, [1918, 'writer']);  // 매개변수를 배열로 받음

const arr = [2, 3, -5, 15, 7];
// this의 값에 null을 쓴 이유 ? Math.min 과 Math.max 가 this 와 관계없이 동작하기 때문에..
Math.min.apply(null, arr);  // -5
Math.max.apply(null, arr);  // 15
