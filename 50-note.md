동일한 이름을 가진 지역 및 전역 변수를 모두 가질 수 있습니다. 이렇게하면 지역 변수가 전역 변수보다 우선합니다.

이 예에서 :

var someVar = "모자";
function myFun () {
  var someVar = "머리";
  return someVar;
}
myFun 함수는 변수의 로컬 버전이 있기 때문에 "Head"를 반환합니다.

myOutfit 함수에 지역 변수를 추가하여 "sweater"로 outerWear 값을 재정의합니다.