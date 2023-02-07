package basic

/*
* class 선언 방법은 동일
* 기본적으로 class는 상속이 불가능함
* open 키워드를 사용해 상속 가능 하도록 선언 가능
*/
open class Shape
/*
* 클래스의 프로퍼티는 클래스의 선언부나 몸체에 선언될 수 있음
* 상속은 메소드의 반환타입을 작성하듯이 작성
*/
class Rectangle(var height: Double, var length: Double): Shape() {
    var perimeter = (height + length) * 2
}

fun main() {
    /*
    * 기본 생성자는 자동으로 생성됨
    */
    val rectangle = Rectangle(5.0, 2.0)
    println("The perimeter is ${rectangle.perimeter}")
}
