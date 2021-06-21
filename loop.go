package main

import "fmt"

func loop() {
	sum := 0
	for i := 1; i<=10; i++ {
		sum  += i
	}
	fmt.Println(sum);

	n:=1
	for n<100 {
		n*=2;
	}
	fmt.Println(n)

	// for {
	// 	println("infinite loop")
	// }

	names := []string{"홍길동", "이순신", "강감찬"}
	
	for index, name := range names {
		println(index, name);
	}
	goto Next;

   println("pass here")

	Next:

	


}