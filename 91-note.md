
객체의 하위 속성은 점 또는 대괄호 표기법을 함께 연결하여 액세스 할 수 있습니다.

다음은 중첩 된 개체입니다.

var ourStorage = {
  "desk": {
    "서랍": "스테이플러"
  },
  "캐비닛": {
    "상단 서랍": {
      "folder1": "파일",
      "folder2": "비밀"
    },
    "하단 서랍": "소다"
  }
};
ourStorage.cabinet [ "상단 서랍"] .folder2; // "비밀"
ourStorage.desk.drawer; // "스테이플러"
myStorage 개체에 액세스하고 글로브 박스 속성의 내용을 gloveBoxContents 변수에 할당합니다. 가능하면 모든 속성에 점 표기법을 사용하고 그렇지 않으면 대괄호 표기법을 사용하십시오.