package basic

fun main() {
    /*
    * val -> 재할당X
    * 값 수정 X
    */
    val a: Int = 1 // 타입 명시
    val b = 2 // 타입 추론
    val c: Int // 선언&초기화가 동시에 일어나지 않는 경우에는 명시해야 함
    c = 3

    /*
    * var -> 재할당 가능
    */

    var x = 5 // 'Int'로 타입 추론
    x += 1

    incrementX()
}

/*
* 전역 선언도 가능
*/
val PI = 3.14
var x = 0

fun incrementX() {
    x += 1
}

