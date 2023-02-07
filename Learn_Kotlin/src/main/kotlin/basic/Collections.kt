package basic

fun main() {
    val items = listOf("apple", "banana", "kiwifruit")

    /*
    * iterate over Collection
    */
    for (item in items) {
        println(item)
    }

    /*
    * In을 통해 Collection이 특정 Object를 포함하는 지 확인 가능
    */
    when {
        "orange" in items -> println("juicy")
        "apple" in items -> println("apple is fine too")
    }

    /*
    * lambda, map collection 사용 가능
    * it을 통해 값 접근 가능
    */
    val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
    fruits
        .filter{ it.startsWith("a") }
        .sortedBy { it }
        .map { it.uppercase() }
        .forEach { println(it) }
}