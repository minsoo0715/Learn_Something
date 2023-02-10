package functions

fun printHello(name: String?): Unit { // Unit 반환 타입은 생략 가능
    if (name != null)
        println("Hello $name")
    else
        println("Hi there")
    // Unit 반환을 명시할 수 있음.
    // return Unit;
    // return;
}



/*
* Kotlin은 반환타입의 추론을 지원하지 않음.
* -> Unit을 반환하는 경우에만 생략 가능
*/