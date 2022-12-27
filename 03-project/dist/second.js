"use strict";
// 1. follow interface by implememnt it to class
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// 2. add new property and use 2 other interface
class Youtube {
    constructor(cameraMode, filter, burst, search) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.search = search;
    }
    createStory() {
        // do something
    }
}
