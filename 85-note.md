JavaScript 개체를 만든 후에는 다른 변수를 업데이트하는 것처럼 언제든지 해당 속성을 업데이트 할 수 있습니다. 점 또는 대괄호 표기법을 사용하여 업데이트 할 수 있습니다.

예를 들어 ourDog를 살펴 보겠습니다.

var ourDog = {
  "name": "캠퍼",
  "다리": 4,
  "꼬리": 1,
  "친구": [ "모든 것!"]
};
특히 행복한 개라서 이름을 "Happy Camper"로 바꾸자. 개체의 이름 속성을 업데이트하는 방법은 다음과 같습니다. ourDog.name = "Happy Camper"; or ourDog [ "name"] = "Happy Camper"; 이제 ourDog.name을 평가할 때 "Camper"대신 "Happy Camper"라는 새 이름을 얻게됩니다.

myDog 개체의 이름 속성을 업데이트합니다. 그녀의 이름을 "Coder"에서 "Happy Coder"로 변경합시다. 점 또는 대괄호 표기법을 사용할 수 있습니다.