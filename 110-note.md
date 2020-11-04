이전 챌린지에서는 단일 조건부 연산자를 사용했습니다. 여러 조건을 확인하기 위해 함께 연결할 수도 있습니다.

다음 함수는 if, else if 및 else 문을 사용하여 여러 조건을 확인합니다.

function findGreaterOrEqual (a, b) {
  if (a === b) {
    return "a와 b are equal";
  }
  else if (a> b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
위의 함수는 여러 조건부 연산자를 사용하여 다시 작성할 수 있습니다.

function findGreaterOrEqual (a, b) {
  반환 (a === b)? "a와 b는 같다"
    : (a> b)? "a가 더 크다"
    : "b가 큼";
}
위에 표시된대로 각 조건이 별도의 행에 있도록 여러 조건부 연산자의 형식을 지정하는 것이 가장 좋습니다. 적절한 들여 쓰기없이 여러 조건부 연산자를 사용하면 코드를 읽기가 어려울 수 있습니다. 예를 들면 :

function findGreaterOrEqual (a, b) {
  반환 (a === b)? "a와 b는 같다": (a> b)? "a가 더 큽니다": "b가 더 큽니다";
}
checkSign 함수에서 findGreaterOrEqual에 사용 된 권장 형식에 따라 여러 조건부 연산자를 사용하여 숫자가 양수, 음수 또는 0인지 확인합니다. 함수는 "positive", "negative"또는 "zero"를 반환해야합니다.