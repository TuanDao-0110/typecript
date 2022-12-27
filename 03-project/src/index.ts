class User {
  protected _courseCount = 1;
  readonly city = "new city";
  constructor(public email: string, public name: string, private userId: string) {}
  //   private method
  private deleteToken() {
    console.log("delete");
  }
  get getEmail(): string {
    return `email ${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("error");
    this._courseCount = courseNum;

  }
}
class SubUser extends User { 
    // with extend new sub can not access private
    isFamily:boolean = true
    changeCourseCount (){
        this._courseCount = 4
    }
   
}

const newUser = new User("emai", "name", "4");
// 1.readonly not allow to changed
// newUser.city = '4'
// 2. cannot access: because of private
// newUser.city



 