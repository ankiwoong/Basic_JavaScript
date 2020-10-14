때때로 주어진 객체의 속성이 존재하는지 확인하는 것이 유용합니다. 객체의 .hasOwnProperty (propname) 메서드를 사용하여 해당 객체에 지정된 속성 이름이 있는지 확인할 수 있습니다. .hasOwnProperty ()는 속성이 있는지 여부에 따라 true 또는 false를 반환합니다.

예

var myObj = {
  모자",
  하단 : "바지"
};
myObj.hasOwnProperty ( "top"); // 진실
myObj.hasOwnProperty ( "middle"); // 거짓
함수 (obj)에 전달 된 객체에 특정 속성 (checkProp)이 포함되어 있는지 테스트하려면 함수 checkObj를 수정합니다. 속성이 발견되면 해당 속성의 값을 반환합니다. 그렇지 않은 경우 "찾을 수 없음"을 반환합니다.