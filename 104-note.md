임의의 10 진수를 생성 할 수 있다는 것은 훌륭하지만 임의의 정수를 생성하는 데 사용하면 훨씬 더 유용합니다.

Math.random ()을 사용하여 임의의 소수를 생성합니다.
임의의 소수에 20을 곱합니다.
다른 함수 인 Math.floor ()를 사용하여 숫자를 가장 가까운 정수로 내림합니다.
Math.random ()은 절대 1을 반환 할 수 없으며, 반올림하기 때문에 실제로 20을 얻을 수 없습니다.이 기술은 0에서 19 사이의 정수를 제공합니다.

모든 것을 종합하면 다음과 같은 코드가됩니다.

Math.floor (Math.random () * 20);

Math.random ()을 호출하고 결과에 20을 곱한 다음 값을 Math.floor () 함수에 전달하여 가장 가까운 정수로 반올림합니다.
im-uiui 10 jinsuleul saengseong hal 