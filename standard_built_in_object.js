// 생활코딩 - 표준 내장 객체
// 자바스크립트가 기본적으로 가지고 있는 객체들을 의미한다.
// Object, Function, Array, String, Boolean, Number, Math, Date, RegExp
// 1.
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'tsukuba');
function getRandomValueFromArray(arr) {
    // 실행할때마다 원칙에 따라서 0 ~ 1 안에서 소수(0.1, 0.2, ..., 0.9)를 제공
    // floor -> 0.0(0), 0.1(0), .. , 1.1(1) 뒤에 소수점을 제거
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}
console.log(getRandomValueFromArray(arr));

// 2. 1번 코드를 아래와 같이 확장하기
Array.prototype.randomValue = function() {
    // this가 의미하는 것은 배열 객체
    var index = Math.floor(this.length * Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'tsukuba');
console.log(arr.randomValue());

// 정답은 없지만 프로토타입을 확장하는 것을 통해서 모든 배열이 공통적으로 가지고 있어야 되는
// 어떠한 API를 사용자가 직접 정의할 수 있다는 것은 상당히 강력하고 멋진일이다.
