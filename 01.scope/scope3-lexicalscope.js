// 자바스크립트는 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다. 
// 이는 렉시컬스코프 또는 정적스코프라고 한다. lexical static scope
// 함수를 어디서 호출했는지 보다는 어디에 선언되었는지 따라 상위 스코프를 결정한다. 
// 함수의 스코프는 정의가 될때 정적으로 결정된다. 


var x = 1;

function foo () {
    var x = 20;
    bar ();
}

function bar () {
    console.log(x);
}


foo();
bar();