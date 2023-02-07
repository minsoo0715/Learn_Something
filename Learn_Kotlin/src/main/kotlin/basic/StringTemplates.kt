package basic

fun main() {
    var a = 1

    /*
    * 아래와 같이 템플릿 사용 가능
    */
    var s1 = "a is $a"

    /*
    * 연산 또는 메소드 반환값을 사용할 때에는 {} 사용
    */
    a = 2
    val s2 = "${s1.replace("is", "was")}, but now is $a"


}