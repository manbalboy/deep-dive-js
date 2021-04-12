//1. 즉시실행함수
(function () {
    var foo = 10;
}());

//2.네임스페이스 객체 사용
var MYAPP = {};
MYAPP.name = "manbalboy";


//3.Module 패턴사용
var Counter = (function(){
    var num = 0;

    return {
        increase() {
            return ++num;
        },

        decrease() {
            return --num;
        }
    }
}());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.num); //바로 접근불가 

//4. ES6 module 사용 

// import test from 'js' --