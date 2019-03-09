// 생활코딩 - Object 확장
Object.prototype.contain = function(needle) {
    for (var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
}

var o = { 'name' : 'hyoseok', 'city' : 'suwon' }
var a = ['egoing', 'hyeee', 'hyoseok'];

for (var name in o) {
    console.log(name);  // 'name', 'city', 'contain' 출력..
}

for (var name in o) {
    // 해당 객체에 name 인자가 자기 자신의 '직접 정의한' property로 가지고 있는지 확인하는 메소드
    if (o.hasOwnProperty(name)) {
        console.log(name);  // 'name', 'city' 출력..
    }
}

for (var name in a) {
    console.log(name);  // 'egoing', 'hyeee', 'hyoseok', 'contain' 출력..
}

for (var name in a) {
    if (a.hasOwnProperty(name)) {
        console.log(name);  // 'egoing', 'hyeee', 'hyoseok' 출력..
    }
}
