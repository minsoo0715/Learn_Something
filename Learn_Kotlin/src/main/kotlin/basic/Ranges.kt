package basic

fun main() {
    val x = 10
    val y = 9

    /*
    * x가 1~y+1 사이의 값을 갖는지 판단(양단 포함)
    */
    if (x in 1..y+1) {
        println("fits in range")
    }

    val list = listOf("a", "b", "c")

    if (-1 !in 0..list.lastIndex) {
        println("-1 is out of range")
    }
    if (list.size !in list.indices) {
        println("list size is out of valid list indices range, too")
    }

    /*
    * Range를 통한 iterate
    */
    for (x in 1..5) {
        print(x)
    }
    println()

    /* 2씩 증가하도록 */
    for (x in 1..10 step 2) {
        print(x)
    }
    println()
    /* 0 이상일때 까지 3 감소*/
    for(x in 9 downTo 0 step 3) {
        print(x)
    }
}