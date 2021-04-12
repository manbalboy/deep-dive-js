//전역변수의 생명주기는 전역객체의 생명주기와 일치한다. window, self, this, frames, global -> globalThis
//전역객체는 빌트인객체 Object, Array, String, Number, Function ... 과 호스트객체 WebAPI 또는 Node API 를 갖는 객체 

//전역변수의 문제점 
/*
    1. 암묵적 결합 
    2. 긴 생명주기
    3. 스코프 체인 상에서 종점에 존재하기 때문에 검색시간이 김
    4. 네임스페이스 오염 파일 이 분리가 되어있을때 사이드이펙 발생확률!
*/