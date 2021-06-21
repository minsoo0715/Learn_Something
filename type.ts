/*
  let vs var 

  var은 함수 스코프 
  let은 블럭 스코프
*/

    let a1= 1;     var a2 = 3;            
{   
    var a2 = 4;
    let a1 = 5;
    console.log(a1);
    console.log(a2);    
}
console.log(a1); //출력값 : 1    //재정의 되지 않음. 블록 내 변수와 차이
console.log(a2); //출력값 : 4    //재정의 됨, 블록 내 선언은 재선언과 같음



/* 여러 타입들 */

let num:number; //정수 / 실수 

let str:string; // 문자열 

let bool:boolean; //불린

let numArray:Array<number>; //정수 배열

let tuple:[string, number]; //튜플 형식 

enum Color {Red/*0*/, Green/*1*/, Blue/**2*/}; //enum type
let c:Color = Color.Green; //enum의 이름을 자료형으로 함 

let idk:any;  // 타입 추론, 자료형 추론 

function func():void {   //리턴 타입 기술 가능
    return;
}

let undefine:undefined; //정의되지 않은 자료형 

let no:null;  //널 타입 

function cannot():never{ //예외를 발생시키거나 반환하지 않는 함수(무한루프 등)의 리턴 타입. never타입을 any타입으로 추론 불가능.
    throw new Error("you cant execute");
}

let obj:object; //오브젝트 형식 

declare function create(o:object):void; 
//create({prop:0})
//create("hi"); 오류 


let alpha:number|string;    //number나 string타입을 가질 수 있음.

let num_:1|2|3|4|5|6|7|8|9; //1~9까지 밖에 적용안됨
//num_ = 11; 에러 
let str_:"this is string"|"this is not string";
//str_ = "ls"; 에러

type less_than_10 = 1|2|3|4|5|6|7|8|9; //타입 선언
let num2_:less_than_10;

/*타입 단언 */

let someValue:any = "this is a string"
let strLength:number = (<string>someValue).length; //형 검사를 하지 않음.
let strLength3:number = (someValue as string).length; // 마찬가지
let strLength2:number = someValue.length; // 형 검사함 
