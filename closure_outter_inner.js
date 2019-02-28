// 생활코딩 - 클로저 1
// 내부함수, 외부함수
// 외부함수..
function outter() {
    // 내부 함수..
    var inner = function() {
        var title = 'coding everybody';
        alert(title);
    }
    // 내부 함수 호출
    inner();
}
// 외부 함수 호출
outter();

// 내부함수는 외부함수의 지역변수에 접근할수 있다. -> 이러한 것을 '클로저' 라고 한다.
// 외부함수..
function outter() {
    // 외부 함수에 정의되어 있는 지역변수
    var title = 'coding everybody';
    // 내부 함수..
    var inner = function() {
        alert(title);
    }
    // 내부 함수 호출
    inner();
}
// 외부 함수 호출
outter();

// 외부함수..
function outter() {
    // 외부 함수에 정의되어 있는 지역변수
    var title = 'coding everybody';
    // 내부 함수..
    return function() {
        alert(title);
    }
}
// 외부함수가 소멸되어도 내부함수는 외부함수의 지역변수에 접근할 수 있다.
// 이게 가능하다니..
var inner = outter();
inner();
