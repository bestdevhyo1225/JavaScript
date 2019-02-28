// 생활코딩 - 전역 객체
function func() {
    alert('Hello?');
}
// window를 생략하고 암시적으로 사용한 것
func();
// window는 전역 객체, func는 속성 즉, 메소드
window.func();

var o = {
    'func' : function() {
        alert('Hello?');
    }
}
o.func();
window.o.func();
