package functions

/*
* Default Arugments를 지원함.
* */
fun read(
    b: ByteArray,
    off: Int = 0,
    len: Int = b.size,
) {
    println("$b's length is $len off : $off ")
}

/*
* 오버라이드 시 Default Arguments도 동일함
* */
open class A() {
    open fun foo(i: Int = 10) {
        print(i)
    }
}

class B : A() {
    override fun foo(i: Int) {
        print(i)
    }
}

/*
* Argument를 lambda로 받을 수 있음.
* NamedArugment를 사용하면 오른쪽에 있는 값도 지정해줄 수 있음.
* */
fun foo(
    bar: Int  = 0,
    baz: Int = 1,
    qux: () -> Unit,
) {
    println("bar: $bar baz: $baz")
    qux()
}



fun main() {
    var a: B = B();
    a.foo()

    /*
    * 람다의 경우 */
    foo(1) {println("hello")} // bar = 1, baz = 1
    foo(qux = {println("hello")}) // bar = 0, baz = 1
    foo { println("hello")} // bar = 0 baz = 1
}
