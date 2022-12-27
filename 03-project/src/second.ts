interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface Story {
  createStory(): void;
}
// 1. follow interface by implememnt it to class
class Instagram implements TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {}
}
// 2. add new property and use 2 other interface
class Youtube implements TakePhoto, Story {
  constructor(public cameraMode: string, public filter: string, public burst: number, public search: string) {}
  createStory(): void {
    // do something
  }
}
