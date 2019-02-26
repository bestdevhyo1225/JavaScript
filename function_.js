// 생활코딩 - 함수
// 2가지 형태의 함수
function func1() {
  // 작업..
}

var func2 = function () {
  // 작업..
}

// 함수는 함수의 리턴 값으로도 사용 가능
function cal(mode) {
    val funcs = {
        'plus' : function(left, right) { return left + right; },
        'minus' : function(left, right) { return left - right; }
    };
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

// 배열 값으로도 사용할 수 있다.
var process = [
    function(input) { return input + 10; },
    function(input) { return input * input; },
    function(input) { return input / 2; }
];
var input = 1;
for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}
alert(input);
