package main

import "fmt"

func condition() {
	var k int = 2;
	
	if k == 1 {
		fmt.Println("One")
	} else if k == 2 {
		fmt.Println("Two")
	}else {
		fmt.Println("else")
	}

	if val := 2*1; val==2 {
		println(val)
	}

	switch k {     //브레이크 자동 
	case -1, 0:
		fmt.Println("NO");
	case 1:
		fmt.Println("One")
	case 2:
		fmt.Println("Two")
	default:
		fmt.Println("Other")
	}

	switch k {
	case 1:
			fmt.Println("1")
			fallthrough       //밑도 같이 실행
	case 2:
		fmt.Println("2")
	}

	// switch k.(type) {     //에러 생김...
	// case int:
	// 	println("int")
	// case bool:
	// 	println("bool");
	// }
}

func grade(score int) {
	switch {
    case score >= 90:
        println("A")
    case score >= 80:
        println("B")
    case score >= 70:
        println("C")
    case score >= 60:
        println("D")
    default:
        println("No Hope")
    }
}



