function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
console.log(x); //ReferenceError: x is not defined


// 지역변수의 생명주기는 함수의 생명 주기와 일치한다. 
// 메모리적으로 해제 되지 않으면 가비지 콜렉터에 의해 소멸되지 않는다. 

var x = 'global';
function foo2() {
    console.log(x);
    var x = 'local';
}


foo2();
console.log(x);