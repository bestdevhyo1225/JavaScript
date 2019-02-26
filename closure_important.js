// 생활코딩 - 클로저 3
// 중요한 부분!!!!
// 자주 실수하는 예제..
var arr = [];
for (var i = 0; i < 5; i++) {
    // 즉시 호출하는 부분이 없음 --> (); 다음과 같은 부분이 없다.
    // 즉, function이 선언만 되어있을뿐..
    arr[i] = function() {
        return i;
    }
}
// 5라는 값이 5번 출력된다.
// for 문을 돌면서 function을 호출 한다.
for (var index in arr) {
    console.log(arr[index]());
}
// 정말 꼼꼼히 잘 생각해볼 것.. 쉬운부분이 아님 어려움..
// 수정
var arr = [];
for (var i = 0; i < 5; i++) {
    // arr[i] = function(id) { 내부 함수.. }(i); -> (i); 바로 호출한다는 의미!!!
    // arr[i]변수는 인자값 i를 외부함수인 function의 매개변수 id에 대입하고 바로 호출한 결과값을 가지고 있다.
    // 즉, 외부 함수가 실행된 결과값인 '내부 함수 function() {return id;}' 를 가지고 있다.
    // arr[0] = function() { return 0; }, arr[1] = function() { return 1; }, ...
    arr[i] = function(id) {
        return function() {
            return id;
        }
    }(i); // (i); 즉시 호출하는 것을 의미 한다.
}
// 0, 1, 2, 3, 4 출력
// 내부 함수는 외부 함수가 소멸되어도 외부 함수의 지역 변수(id)에 접근할 수 있다.
// 내부 함수 function() { return id; }를 호출한다.
for (var index in arr) {
    console.log(arr[index]());
}

// 댓글 참고..
var arr = [];
for (var i = 0; i < 5; i++) {
    // 이 부분은..클로저 특성을 사용한 것이 아니다.
    // function이 아니라 function이 실행된 결과값인 '(0,1,2,3,4)' 를 가지고 있다.
    // 즉 arr[0] = 0, arr[1] = 1, arr[2] = 2, ...
    arr[i] = function(id) {
        return id;
    }(i); // (i); 즉시 호출하는 것을 의미한다.
}
// 0, 1, 2, 3, 4 출력
for (var index in arr) {
    console.log(arr[index]());
}
