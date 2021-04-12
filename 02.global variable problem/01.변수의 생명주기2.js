var x = 'global';

function foo2() {
    console.log(x); //이상태에서 지역변수 x 가 끌어올려진상태에서 undefined 값으로 할당되어있다.
    var x = 'local';
}


foo2();
console.log(x);