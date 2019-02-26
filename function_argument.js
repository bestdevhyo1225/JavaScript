// 생활 코딩 - argument (인자)
// 함수의 여려가지 정보, 인자의 정보를 담고 있는 객체 -> argument
// 배열과 유사하지만 배열은 아니다. 유사 배열..
function sum() {
    var _sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        document.write(i + ' : ' + arguments[i] + '<br />');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

// 매개변수 -> parameter
// function call(parameter) {}
// 인자 -> argument
// call(1) -> 1 이라는것은 인자(argument)

/////////////////////////////////////////////////////////
function zero() {
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length = 0, arguments = 0

// one.length는 one이라는 함수의 매개 변수의 숫자를 알려줌
// arguments.length는 몇개의 인자를 전달했는가에 대한 정보를 담고있다.
// 만약 사용자가 one함수를 사용해야하는데 arguments 0개를 쓰거나..
// 2개 이상을 사용한 경우에 함수를 만든 제작자의 의도와 벗어날수 있다.
// 그러면 두 length를 비교해서 의도한것과 다른 경우라면 error를 발생시키도록
// 유용하게 사용할 수 있다.
function one(arg1) {
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
one('val1', 'val2'); // one.length = 1, arguments = 2

function two(arg1, arg2) {
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
two('val1'); // two.length = 2, arguments.length = 1
