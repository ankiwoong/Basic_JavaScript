
If 문은 코드에서 결정을 내리는 데 사용됩니다. 키워드 if는 괄호 안에 정의 된 특정 조건에서 중괄호로 코드를 실행하도록 JavaScript에 지시합니다. 이러한 조건을 부울 조건이라고하며 true 또는 false 만 가능합니다.

조건이 참으로 평가되면 프로그램은 중괄호 안에있는 명령문을 실행합니다. 부울 조건이 false로 평가되면 중괄호 안의 문이 실행되지 않습니다.

의사 코드

if (조건이 참) {
  문이 실행됩니다.
}
예

기능 테스트 (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
테스트 (true); // "It was true"반환
테스트 (거짓); // "It was false"반환
true 값으로 test가 호출되면 if 문은 myCondition을 평가하여 true인지 아닌지 확인합니다. true이므로 함수는 "It was true"를 반환합니다. false 값으로 test를 호출하면 myCondition이 true가 아니고 중괄호 안의 문이 실행되지 않고 함수가 "It was false"를 반환합니다.

매개 변수가 wasThatTrue이면 "Yes, that was true"를 리턴하고 그렇지 않으면 "No, that was false"를 리턴하는 함수 내부에 if 문을 작성하십시오.