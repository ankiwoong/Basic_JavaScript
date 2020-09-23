
return 문에 도달하면 현재 함수의 실행이 중지되고 제어가 호출 위치로 돌아갑니다.

예

function myFun () {
  console.log ( "Hello");
  return "World";
  console.log ( "byebye")
}
myFun ();
위의 출력은 "Hello"를 콘솔에 출력하고 "World"를 반환하지만 "byebye"는 반환 문에서 종료되기 때문에 출력되지 않습니다.

a 또는 b가 0보다 작 으면 함수가 정의되지 않은 값으로 즉시 종료되도록 abTest 함수를 수정합니다.

힌트
undefined는 문자열이 아니라 키워드라는 점을 기억하십시오.