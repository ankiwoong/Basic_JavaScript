
함수 내에서 선언 된 변수와 함수 매개 변수에는 로컬 범위가 있습니다. 즉, 해당 기능 내에서만 볼 수 있습니다.

다음은 loc이라는 지역 변수가있는 myTest 함수입니다.

function myTest () {
  var loc = "foo";
  console.log (loc);
}
myTest (); // "foo"기록
console.log (loc); // loc이 정의되지 않았습니다.
loc은 함수 외부에서 정의되지 않았습니다.

편집기에는 무슨 일이 일어나고 있는지 확인하는 데 도움이되는 두 개의 console.log가 있습니다. 코드를 작성하면서 콘솔이 어떻게 변경되는지 확인하십시오. myLocalScope 내에서 지역 변수 myVar를 선언하고 테스트를 실행합니다.

참고 : 콘솔에는 여전히 'ReferenceError : myVar is not defined'가 있지만 이로 인해 테스트가 실패하지는 않습니다.