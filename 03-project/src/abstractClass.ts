abstract class TakePhoto {
  constructor(public camera: string, public filter: string) {}
  abstract getSepia(): string;
  getRealTime(): number {
    return 8;
  }
}
// 1. this wont work
// const tuan = new TakePhoto('test','filter')
// 2. can use create extend from other photo
class newTakePho extends TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode, filter);
  }
  //   getSepia(): void {
  //     console.log("get sepia");
  //     console.log(this.camera, this.filter);
  getSepia(): string {
    return "this";
  }
}

// 3. so we use class normal :
const tuan = new newTakePho("sony", "blur", 4);
tuan.getRealTime();
