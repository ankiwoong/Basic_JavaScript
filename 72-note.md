
골프 게임에서 각 홀은 플레이를 완료하기 위해 공을 홀에 가라 앉히기 위해 골퍼가 만들 것으로 예상되는 평균 스트로크 수를 의미하는 파를 가지고 있습니다. 당신의 스트로크가 얼마나 위 또는 아래에 있는지에 따라 다른 별명이 있습니다.

함수에 par 및 strokes 인수가 전달됩니다. 우선 순위에 따라 스트로크를 나열하는이 표에 따라 올바른 문자열을 반환합니다. 상단 (가장 높음)에서 하단 (가장 낮음)으로 :

스트로크 리턴
1 "홀인원!"
<= 파-2 "Eagle"
파-1 "버디"
par "Par"
파 + 1 "보기"
파 + 2 "Double Bogey"
> = 파 + 3 "집으로가!"
파와 스트로크는 항상 숫자이고 양수입니다. 편의를 위해 모든 이름의 배열을 추가했습니다.