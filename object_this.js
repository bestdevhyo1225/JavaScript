// 생활코딩 - this
// this는 함수 내에서 함수 호출 맥락(context)를 의미한다.
// 맥락이라는 것은 상황에 따라서 달라진다는 의미
// 즉, 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는
// 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점 역할을 한다.
// 1.
function func() {
    if (window === this) {
        console.log('window === this');
    }
}

///////////////////////////////////////////////////////
// 2. 객체의 소속인 메소드의 this는 그 객체를 가르킨다.
var o = {
    'func' : function() {
        if (o === this) {
            console.log('o === this');
        }
    }
}
o.func();

////////////////////////////////////////////////////////
// 함수안에서 this 라는 키워드는 그 함수가 소속되어있는 객체를 가르킨다.
// 3.
var funcThis = null;

function Func() {
    funcThis = this;
}

// 일반 함수를 호출하는 코드
// window 객체의 메소드를 호출했기때문에
var o1 = Func();
// funcThis 는 window 다.
if (funcThis === window) {
    console.log('window');
}

// 생성자로 객체를 만든 코드
var o2 = new Func();
// 새로 생성되는 객체가 this가 된다.
if (funcThis === o2) {
    console.log('o2');
}

////////////////////////////////////////////////////////
// 4.
var o = {}
var p = {}
function func() {
    switch (this) {
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case window:
            console.log('window');
            break;
        default:
            break;
    }
}
func(); // window
func.apply(o);  // o
func.apply(p);  // p
