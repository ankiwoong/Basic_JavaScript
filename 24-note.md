따옴표는 문자열 내에서 이스케이프 할 수있는 유일한 문자가 아닙니다. 이스케이프 문자를 사용하는 데는 두 가지 이유가 있습니다.

문자를 사용할 수 있도록하려면 캐리지 리턴과 같이 입력 할 수없는 경우도 있습니다.
JavaScript가 의미하는 바를 잘못 해석하지 않고 문자열에 여러 따옴표를 나타낼 수 있습니다.
우리는 이전 도전에서 이것을 배웠습니다.

Code | Output
-- | --
\' | single quote
\" | double quote
\\ | backslash
\n | newline
\r | carriage return
\t | tab
\b | word boundary
\f | form feed

백 슬래시로 표시하려면 백 슬래시 자체를 이스케이프해야합니다.

이스케이프 시퀀스를 사용하여 다음 세 줄의 텍스트를 단일 변수 myStr에 할당합니다.

```js
FirstLine
    \SecondLine
ThirdLine
```
특수 문자를 올바르게 삽입하려면 이스케이프 시퀀스를 사용해야합니다. 또한 위와 같이 이스케이프 시퀀스 나 단어 사이에 공백없이 공백을 따라야합니다.

다음은 이스케이프 시퀀스가 ​​기록 된 텍스트입니다.

"FirstLinenewlinetabbackslashSecondLinenewlineThirdLine"