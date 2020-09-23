동등 연산자를 사용한 비교에서 모든 비교 연산자가 부울 참 또는 거짓 값을 반환한다는 것을 기억할 수 있습니다.

때때로 사람들은 다음과 같이 if / else 문을 사용하여 비교를 수행합니다.

function isEqual (a, b) {
  if (a === b) {
    true를 반환하십시오.
  } else {
    거짓 반환;
  }
}
하지만 더 나은 방법이 있습니다. ===는 true 또는 false를 반환하므로 비교 결과를 반환 할 수 있습니다.

function isEqual (a, b) {
  반환 a === b;
}
함수 isLess를 수정하여 if / else 문을 제거합니다.