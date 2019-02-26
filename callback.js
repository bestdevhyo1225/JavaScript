// 생활코딩 - 콜백 (call-back)
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// 1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9 이런순으로 정렬됨.. 숫자 기준 아님
console.log(numbers.sort());

// 숫자 기준으로 정렬할 것이다.
var sortfunc = function(a, b) {
    // 양수이면 1, 음수이면 -1, 같다면 0
    return a - b;
}
console.log(number.sort(sortfunc));
// sortfunc 함수는 call-back 함수
// 처리하는것을 위임한다.
