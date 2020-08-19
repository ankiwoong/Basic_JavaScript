배열의 시작 부분에서 요소를 이동할 수있을뿐만 아니라, 배열의 시작 부분으로 요소를 이동 해제 할 수도 있습니다 (예 : 배열 앞에 요소를 추가).

.unshift ()는 .push ()와 똑같이 작동하지만 배열 끝에 요소를 추가하는 대신 unshift ()는 배열의 시작 부분에 요소를 추가합니다.

예:

var ourArray = [ "Stimpson", "J", "cat"];
ourArray.shift (); // ourArray는 이제 [ "J", "cat"]과 같습니다.
ourArray.unshift ( "해피");
// ourArray는 이제 [ "Happy", "J", "cat"]과 같습니다.
unshift ()를 사용하여 myArray 변수의 시작 부분에 [ "Paul", 35]를 추가합니다.