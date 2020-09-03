
if, else if 문에서 순서가 중요합니다.

이 함수는 위에서 아래로 실행되므로 어떤 문이 먼저 오는지주의해야합니다.

이 두 가지 기능을 예로 들어 보겠습니다.

첫 번째는 다음과 같습니다.

function foo (x) {
  if (x <1) {
    return "Less than one";
  } else if (x <2) {
    return "2 미만";
  } else {
    return "2보다 크거나 같음";
  }
}
두 번째는 명령문의 순서를 바꿉니다.

function bar (x) {
  if (x <2) {
    return "2 미만";
  } else if (x <1) {
    return "Less than one";
  } else {
    return "2보다 크거나 같음";
  }
}
이 두 함수는 둘 다에 숫자를 전달하면 거의 동일 해 보이지만 다른 출력을 얻습니다.

foo (0) // "1 미만"
bar (0) // "2 개 미만"
올바른 값을 반환하도록 함수의 논리 순서를 변경합니다.