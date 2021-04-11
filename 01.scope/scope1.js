var var1 = 1; //코드 블럭 바깥에서 선언된 변수

if (true) {
    var var2 = 2; // 코드 블록 내에서 선언된 변수
    if (true) {
        var var3 = 3; // 중첩 코드블럭 내에 선언된 변수
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 6;
    }
}


// 스코프의 유효범위를 잘 알아야 사이드이펙이 없다. 

console.log(var1);
console.log(var2);
console.log(var3);

//함수안에는 스코프의 유효범위가 달라지기때문에 밖에서 값을 접근 할수 없다
console.log(var4);
console.log(var5);

//정리 var 키워드는 블럭스코프가 아니라 함수레벨 스코프 이다.

