package basic

import java.lang.Integer.parseInt

/*
 * nullable한 반환값일 경우 ?를 붙일 수 있음.
fun parseInt(str: String): Int? {
    // ...
}
*/

fun printProduct(arg1: String, arg2: String) {
    val x = parseInt(arg1)
    val y = parseInt(arg2)

    // x, y 모두 null 검사 실시
    if (x != null && y != null) {
        // x, y는 null 검사 이후 non-nullable로 변환됨.
        println(x*y)
    }
    else {
        println("'$arg1' or '$arg2' is not a number")
    }
}

fun main() {

}