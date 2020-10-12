객체에 대한 대괄호 표기법의 또 다른 용도는 변수 값으로 저장된 속성에 액세스하는 것입니다. 이것은 객체의 속성을 반복하거나 조회 테이블에 액세스 할 때 매우 유용 할 수 있습니다.

다음은 변수를 사용하여 속성에 액세스하는 예입니다.

var dogs = {
  Fido : "Mutt", Hunter : "Doberman", Snoopie : "Beagle"
};
var myDog = "헌터";
var myBreed = dogs [myDog];
console.log (myBreed); // "도베르만"
이 개념을 사용할 수있는 또 다른 방법은 다음과 같이 프로그램 실행 중에 속성 이름이 동적으로 수집되는 경우입니다.

var someObj = {
  propName : "John"
};
function propPrefix (str) {
  var s = "prop";
  반환 s + str;
}
var someProp = propPrefix ( "이름"); // someProp는 이제 'propName'값을 보유합니다.
console.log (someObj [someProp]); // "존"
변수 이름을 사용하여 속성에 액세스 할 때 이름이 아닌 변수 값을 사용하므로 변수 이름을 따옴표로 묶지 않습니다.

playerNumber 변수를 16으로 설정합니다. 그런 다음 변수를 사용하여 플레이어의 이름을 찾아 플레이어에 할당합니다.