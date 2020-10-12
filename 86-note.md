수정하는 것과 동일한 방법으로 기존 JavaScript 객체에 새 속성을 추가 할 수 있습니다.

ourDog에 "bark"속성을 추가하는 방법은 다음과 같습니다.

ourDog.bark = "활-와우";

또는

ourDog [ "bark"] = "활-와우";

이제 ourDog.bark를 평가할 때 그의 껍질 인 "bow-wow"를 얻습니다.

예:

var ourDog = {
  "name": "캠퍼",
  "다리": 4,
  "꼬리": 1,
  "친구": [ "모든 것!"]
};

ourDog.bark = "활-와우";
myDog에 "bark"속성을 추가하고 "woof"와 같은 개 소리로 설정합니다. 점 또는 대괄호 표기법을 사용할 수 있습니다.