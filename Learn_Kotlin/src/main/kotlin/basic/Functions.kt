package basic


/*
* fun 함수명(인수: 타입): 반환 타입 형태로 작성
*/
fun sum(a: Int, b: Int): Int {
    return a + b;
}

/*
* 아래처럼 Expression 형식으로 작성 가능
* 반환 타입은 infer 됨
*/
fun sumExpression(a: Int, b: Int) = a + b;

/*
* 반환 값이 없을 때에는 Unit
* 생략이 가능함
*/
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a+b}")
}

fun main() {

}