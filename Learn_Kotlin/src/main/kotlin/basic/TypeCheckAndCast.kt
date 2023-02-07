package basic

fun getStringLength1(obj: Any): Int? {
    if (obj is String) {
        // 'obj'는 String으로 자동 변환됨.
        return obj.length
    }
    // 'obj'는 여전히 Any 타입
    return null
}

fun getStringLength2(obj: Any): Int? {
    if (obj !is String) return null

    return obj.length
}

fun getStringLength3(obj: Any): Int? {
    /*
    * 오른쪽의 조건에서 obj는
    * 왼쪽 조건에 의해 String으로 Cast된 상태
    */
    if (obj is String && obj.length > 0) {
        return obj.length
    }

    return null
}