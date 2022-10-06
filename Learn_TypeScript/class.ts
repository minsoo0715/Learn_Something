class Animal {


    name:string; //기본 퍼블릭 
    private age:number; //외부 접근X
    protected weight:number;//상속받은 클래스에서만 접근 
    //#name: string; //비공개 필드  외부 접근 X

    constructor(theName:string) {this.name = theName;}

    move(distanceInMeters:number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

class Snake extends Animal{
    constructor(name:string) {super(name)};
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }

    test() {
     //   this.age; 에러 발생
     this.weight; //에러 X
     this.name; //에러 X
    }
}

class Horse extends Animal{
    constructor(name:string) {super(name)};
    move(distanceInMeters = 45) {
        console.log('Galloping...')
        super.move(distanceInMeters);
    }
}