// ES6 에서 새로 만든 화살표 표기법
// 3가지 단축 문법이 있다.
// 1. function 을 생략해도 된다.
// 2. 함수에 매개변수가 단 하나 뿐이라면 괄호()도 생략할 수 있다.
// 3. 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있다.
const f1 = function() { return "hello!"; }
// 또는
// function 을 생략했고, 함수 바디가 표현식 하나라서 중괄호와 return 문을 생략
const f1 = () => "hello";

const f2 = function(name) { return `Hello, ${name}`; }
// 또는
// function 을 생략했고, 매개변수가 단 하나이면서 함수 바디가 표현식 하나라서
// 중괄호와 return 문을 생략
const f2 = name => `Hello, ${name}`;

const f3 = function(a, b) { return a + b; }
// 또는
// function 을 생략했고, 매개변수는 2개라서 괄호를 생략하지 않음
// 함수 바디가 표현식 하나라서 중괄호와 return 문을 생략
const f3 = (a, b) => a + b;

// 화살표 함수는 익명함수를 만들어 다른곳에 전달하려 할 때 가장 유용!!!!

// this 객체가 undefined가 되기도 하고 전역 객체에 묶이기도 해서 오류나는 예제이다.
const o = {
    name: 'Julie',
    greetBackwards: function() {
        function getReverseName() {
            let nameBackwards = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();

// 아래와 같은 방법으로 바꿔야 한다.
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;  // 핵심!!
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length-1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();

// 화살표 함수는 this 객체를 bind 하지 않는다.
// 따라서 내부 함수 안에서 this를 사용할 수 있다.
const o = {
    name: 'Julie',
    greetBackwards: function() {
        // 화살표 표기법으로 익명함수를 만든다.
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length-1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();
