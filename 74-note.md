
switch 문에서 가능한 모든 값을 case 문으로 지정하지 못할 수도 있습니다. 대신 일치하는 case 문이없는 경우 실행될 기본 문을 추가 할 수 있습니다. if / else 체인의 마지막 else 문처럼 생각하십시오.

기본 문은 마지막 경우 여야합니다.

switch (num) {
  케이스 값 1 :
    statement1;
    단절;
  케이스 value2 :
    statement2;
    단절;
...
  기본:
    defaultStatement;
    단절;
}
다음 조건에 대한 답을 설정하는 switch 문을 작성하십시오.
"사과"
"b"- "새"
"c"- "고양이"
기본값- "stuff"