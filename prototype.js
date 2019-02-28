// 생활코딩 - 프로토타입
// prototype은 말 그대로 객체의 원형이라고 할 수 있다.
// Super의 부모 Ultra
function Ultra() {}
Ultra.prototype.ultraProp = true;

// Sub의 부모 Super
function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
// 객체 o에서 ultraProp를 찾는다.
// 없다면 Sub.prototype.ultraProp를 찾는다.
// 없다면 Super.prototype.ultraProp를 찾는다.
// 없다면 Ultra.prototype.ultraProp를 찾는다.
console.log(o.ultraProp);

// 상속받아야한다면..
// 다음과 같은 Sub.prototype = Super.prototype 이런식으로 하면 안된다.
// 자식이 변경됨에 따라 부모도 같이 영향을 받는다.
// 따라서 상속을 받으려면 이런식으로 해야한다.
// 프로토타입을 이용해서 만들어진 복제본을 그 객체로 사용해야 한다.
// Sub.prototype = new Super();
