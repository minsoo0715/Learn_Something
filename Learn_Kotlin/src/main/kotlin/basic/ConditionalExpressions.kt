package basic

fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}

/*
* if도 Expression에 적용 가능
*/
fun maxOfExpression(a: Int, b: Int) = if (a > b) a else b