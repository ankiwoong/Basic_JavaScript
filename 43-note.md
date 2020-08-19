
pop ()은 항상 배열의 마지막 요소를 제거합니다. 첫 번째를 제거하려면 어떻게해야합니까?

.shift ()가 들어오는 곳입니다. 마지막 요소 대신 첫 번째 요소를 제거한다는 점을 제외하면 .pop ()과 동일하게 작동합니다.

예:

var ourArray = [ "Stimpson", "J", [ "cat"]];
var removedFromOurArray = ourArray.shift ();
// removedFromOurArray는 이제 "Stimpson"과 같고 ourArray는 이제 [ "J", [ "cat"]]와 같습니다.
.shift () 함수를 사용하여 myArray에서 첫 번째 항목을 제거하고 "shifted off"값을 removedFromMyArray에 할당합니다.