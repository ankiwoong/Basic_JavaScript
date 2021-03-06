
다음으로 배울 루프 유형은 do ... while 루프입니다. do ... while 루프라고 부르는 이유는 무엇이든 상관없이 먼저 루프 내부에서 코드를 한 번 통과 한 다음 지정된 조건이 true로 평가되는 동안 루프를 계속 실행하기 때문입니다.

var ourArray = [];
var i = 0;
하다 {
  ourArray.push (i);
  i ++;
} while (i <5);
위의 예는 다른 유형의 루프와 유사하게 작동하며 결과 배열은 [0, 1, 2, 3, 4]와 같습니다. 그러나 do ... while을 다른 루프와 다르게 만드는 것은 첫 번째 검사에서 조건이 실패 할 때 작동하는 방식입니다. 이 동작을 살펴 보겠습니다. 다음은 i <5 인 동안 루프에서 코드를 실행하는 일반 while 루프입니다.

var ourArray = [];
var i = 5;
while (i <5) {
  ourArray.push (i);
  i ++;
}
이 예제에서는 ourArray의 값을 빈 배열로 초기화하고 i의 값을 5로 초기화합니다. while 루프를 실행하면 i가 5보다 작지 않기 때문에 조건이 false로 평가되므로 내부에서 코드를 실행하지 않습니다. 루프. 결과적으로 ourArray는 값이 추가되지 않은 상태로 끝나고 위 예제의 모든 코드가 실행을 완료해도 []처럼 보입니다. 이제 do ... while 루프를 살펴보십시오.

var ourArray = [];
var i = 5;
하다 {
  ourArray.push (i);
  i ++;
} while (i <5);
이 경우 while 루프에서했던 것처럼 i의 값을 5로 초기화합니다. 다음 줄에 도달하면 평가할 조건이 없으므로 중괄호 안의 코드로 이동하여 실행합니다. 배열에 단일 요소를 추가 한 다음 조건 검사에 도달하기 전에 i를 증가시킵니다. 마지막 줄에서 조건 i <5를 마지막으로 평가하면 i가 이제 6이고 조건 검사에 실패하므로 루프를 종료하고 완료됩니다. 위 예제의 끝에서 ourArray의 값은 [5]입니다. 기본적으로 do ... while 루프는 루프 내부의 코드가 한 번 이상 실행되도록합니다. do ... while 루프를 사용하여 값을 배열에 푸시 해 보겠습니다.