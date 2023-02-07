package basic

fun main() {
    val items = listOf("apple", "banana", "kiwifruit")

    /*
    * 값에 접근
    */
    for (item in items) {
        println(item)
    }

    /*
    * 인덱스에 접근
    * items.indices -> 인덱스 배열
    */
    for (index in items.indices) {
        println("item at $index is ${items[index]}")
    }
}