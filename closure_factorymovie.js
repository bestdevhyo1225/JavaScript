// 생활코딩 - 클로저 2
// 조금 더 실용적인 예제
// title 지역 변수는 private 변수
function factory_movie(title) {
    // 중요!! {} 객체를 리턴하고 있다..
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            // _title 의 타입이 String 인지 확인 하고 변경하도록
            if (typeof _title === 'string') {
                title = _title;
            } else {
                alert('제목은 문자열이어야 합니다.');
            }
        }
    }
}
// ghost와 matrix는 get_title, set_title 의 메소드를 담고 있는 객체를 받고 있다.
var ghost = factory_movie('Ghost in the shell');
var matrix = factory_movie('Matrix');
alert(ghost.get_title()); // Ghost in the shell 출력
alert(matrix.get_title());// Matrix 출력
ghost.set_title('공각기동대');
alert(ghost.get_title()); // 공각기동대 출력
alert(matrix.get_title());// Matrix 출력
