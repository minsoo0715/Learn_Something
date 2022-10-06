package main

import "fmt"

func types() {

	fmt.Println(" --- types() ---")

	var a int
	//var f float32 //var f float64
	a = 10;

	var i, j, k int = 1, 2, 3    //i =1  j = 2 k = 3

	fmt.Println(i,j,k);
	fmt.Println(a);

	var c = 10; //type 추론

	b := 3 // var b = 3
	
	fmt.Println(b, c)

	const d int = 10
	const s string = "HI"

	const (
		Visa string = "Visa"
		Master="MasterCard"
		Amex = "American Express"
	)

	const (
		Apple = iota //0
		Grape			//1
		Orange			//2
	)


	const (

		t1 bool = true;
		t2 string = "string"
		t3 int = 30      //int8 int16 int32 int64      uint uint8 uint16 uint64
		t4 float32 = 12.2 //float64 complex64 complex128
		t5 byte = 3 //uint8과 동일, 바이트 코드에 사용
		t6 rune = 3 //int32와 동일, 유니코드 코드포인트에 사용
	)

	println("test");
	fmt.Println(`아리랑\n`)     //그대로 출력 
	fmt.Println("아리랑\n")	  //이스케이프 문자 해석해서 출력


// break        default      func         interface    select
// case         defer        go           map          struct
// chan         else         goto         package      switch
// const        fallthrough  if           range        type
// continue     for          import       return       var
fmt.Println(" ---  ---")



}