// 생활코딩 - 객체
// 객체 생성
// 객체를 만드는 방법 1
var age = {
    'hyo' : 30,
    'hye' : 26,
    'yoon' : 80
};

// 객체를 만드는 방법 2
var age = {};
grades['hyo'] = 30;
grades['hye'] = 26;
grades['yoon'] = 80;

// 객체를 만드는 방법 3
var age = new Object();
grades['hyo'] = 30;
grades['hye'] = 26;
grades['yoon'] = 80;

// 객체 속성에 접근하는 법
var age = {
    'hyo' : 30,
    'hye' : 26,
    'yoon' : 80
};

// 접근 방법 1
alert(age['hyo']);

// 접근 방법 2
alert(age.hye);

// 객체에 저장된 데이터를 기준으로 반복 작업을 하는 방법
var age = {
    'hyo' : 30,
    'hye' : 26,
    'yoon' : 80
};

for (var key in age) {
    document.write("key : " + key + " value : " + age[key] + "<br>");
}

// 객체에는 객체를 담을수도 있고, 함수도 담을수 있다.
var age = {
    list : {
        'hyo' : 30,
        'hye' : 26,
        'yonn' : 80
    },
    show : function() {
        for (var name in this.list) {
            document.write(name + " : " + this.name[name] + "<br>");
        }
    }
};
