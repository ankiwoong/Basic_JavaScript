삼항 연산자라고도하는 조건부 연산자는 한 줄의 if-else 표현식으로 사용할 수 있습니다.

구문은 다음과 같습니다.

질환 ? true 인 경우 표현 : false 인 경우 표현;

다음 함수는 if-else 문을 사용하여 조건을 확인합니다.

function findGreater (a, b) {
  if (a> b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
조건 연산자를 사용하여 다시 작성할 수 있습니다.

function findGreater (a, b) {
  반환 a> b? "a가 크다": "b가 크다";
}