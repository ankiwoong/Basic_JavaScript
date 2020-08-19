
배열의 데이터를 변경하는 또 다른 방법은 .pop () 함수를 사용하는 것입니다.

.pop ()은 배열 끝에서 값을 "팝"하는 데 사용됩니다. 이 "팝 오프"값을 변수에 할당하여 저장할 수 있습니다. 즉, .pop ()은 배열에서 마지막 요소를 제거하고 해당 요소를 반환합니다.

숫자, 문자열, 중첩 된 배열 등 모든 유형의 항목을 배열에서 "팝업"할 수 있습니다.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop ();
console.log (oneDown); // 6을 반환합니다.
console.log (threeArr); // 반환 [1, 4]
.pop () 함수를 사용하여 myArray에서 마지막 항목을 제거하고 "popped off"값을 removedFromMyArray에 할당합니다.