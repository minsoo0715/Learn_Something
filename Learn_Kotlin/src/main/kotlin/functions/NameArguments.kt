package functions

fun reformat(
    str: String,
    normalizeCase: Boolean = true,
    upperCaseFirstLetter: Boolean = true,
    divideByCamelHumps: Boolean = false,
    wordSeparator: Char = ' '
) {
    println("str: $str, normalizeCase: $normalizeCase," +
            " upperCaseFirstLetter: $upperCaseFirstLetter," +
            " divideByCamelHumps: $divideByCamelHumps," +
            " wordSeparator: $wordSeparator"
    )
}


fun main() {

    /*
    * 모든 인자를 적어줄 필요가 없음.
    * */
    reformat(
        "String!",
        false,
        false,
        true,
        '-'
    )

    /*
    * default value를 가지는 인자를 제외하고 바로 넘길 수 있음
    * */
    reformat("String!")

    /*
    * 인자 이름을 명시해서 일부만 넘겨줄 수도 있음.
    * */
    reformat("String!", upperCaseFirstLetter = true, wordSeparator = '-')
}