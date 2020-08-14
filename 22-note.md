문자열을 정의 할 때 작은 따옴표 나 큰 따옴표로 시작하고 끝나야합니다. 문자열 안에 리터럴 따옴표 ( "또는 ')가 필요하면 어떻게됩니까?

JavaScript에서는 따옴표 앞에 백 슬래시 (\)를 배치하여 따옴표를 문자열 따옴표의 끝으로 간주하지 않도록 이스케이프 할 수 있습니다.

```js
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

이는 다음 따옴표가 문자열의 끝이 아니라 대신 문자열 안에 나타나야 함을 JavaScript에 알립니다. 따라서 이것을 콘솔에 인쇄하면 다음과 같은 결과가 나타납니다.

```
Alan said, "Peter is learning JavaScript".
```

백 슬래시를 사용하여 myStr 변수에 문자열을 할당하면 콘솔에 인쇄 할 경우 다음과 같이 표시됩니다.

```
I am a "double quoted" string inside "double quotes".
```