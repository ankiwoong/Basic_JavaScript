다차원 배열이있는 경우 이전 웨이 포인트와 동일한 논리를 사용하여 배열과 하위 배열을 모두 반복 할 수 있습니다. 다음은 그 예입니다.

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i = 0; i <arr.length; i ++) {
  for (var j = 0; j <arr [i] .length; j ++) {
    console.log (arr [i] [j]);
  }
}
이것은 arr의 각 하위 요소를 한 번에 하나씩 출력합니다. 내부 루프의 경우 arr [i] 자체가 배열이기 때문에 arr [i]의 .length를 확인합니다.

arr의 하위 배열에있는 모든 숫자의 곱을 반환하도록 함수 multiplyAll을 수정합니다.