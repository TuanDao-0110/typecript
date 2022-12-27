"use strict";
class TakePhoto {
    constructor(camera, filter) {
        this.camera = camera;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
// 1. this wont work
// const tuan = new TakePhoto('test','filter')
// 2. can use create extend from other photo
class newTakePho extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //   getSepia(): void {
    //     console.log("get sepia");
    //     console.log(this.camera, this.filter);
    getSepia() {
        return "this";
    }
}
// 3. so we use class normal :
const tuan = new newTakePho("sony", "blur", 4);
tuan.getRealTime();
