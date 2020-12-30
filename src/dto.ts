export class CreateCatDto {
  private _name: string;
  private _age: number;
  private _breed: string;

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get breed() {
    return this._breed;
  }

  set breed(breed) {
    this._breed = breed;
  }
}
