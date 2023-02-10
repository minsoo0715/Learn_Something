package functions


/*
* 가변 인자를 받을 수 있음.
* 주의: 최대 1개의 가변 Argument를 사용할 수 있음.
*/
fun <T> asList( vararg ts: T): List<T> {
    val result = ArrayList<T>()
    for (t in ts)
        result.add(t)
    return result
}

fun main() {

    /*
    * 아래 형태로 전달
    */
    val list = asList(1, 2, 3)
}