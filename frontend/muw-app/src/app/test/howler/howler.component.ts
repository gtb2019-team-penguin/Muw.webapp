import { Component } from "@angular/core";
import { Howl, Howler } from "howler";

@Component({
  selector: "app-howler",
  templateUrl: "./howler.component.html",
  styleUrls: ["./howler.component.css"]
})
export class HowlerComponent {
  title: string = "Howler";
  sound: Howl = new Howl({
    src: ["assets/audio/audio/Get_Outside.mp3", "assets/audio/audio/Payday.mp3"],
    autoplay: true,
    // volume: 1.0,
    rate: 1.0
    // sprite: {
    //   blast: [9000, 3000],
    //   laser: [0, 1000],
    //   winner: [0, 3000],
    //   asdf: [5000, 5000]
    // },
    // onend: function() {
    //   console.log("finished");
    // }
  });
  vol: number;
  constructor() {
    console.log("page load");
    this.load();
    this.vol = 1.0;
  }
  load() {
    this.sound.once("load", () => {
      console.log("duration", this.sound.duration());
      console.log("sound load");
      Howler.autoUnlock = false;
    });
    this.sound.on("play", function () {
      console.log("play!");
    });
    this.sound.on("pause", function () {
      console.log("pause!");
    });
    this.sound.on("stop", function () {
      console.log("stop!");
    });
    this.sound.on("end", function () {
      console.log("Finished!");
    });
    this.sound.on("seek", () => {
      console.log("seek");
    });
    this.sound.on("fade", () => {
      console.log("fade");
    });
    this.sound.on("unlock", () => {
      console.log("unlock");
    });
    // console.log("state", this.sound.state());
    // console.log("playing", this.sound.playing());

    // setInterval(() => {
    //   console.log(this.sound.time());
    // }, 1000);
  }

  play() {
    this.sound.volume(this.vol);
    this.sound.play(1);
  }
  pause() {
    this.sound.fade(1, 0, 3000);
    // this.sound.pause();
  }
  stop() {
    this.sound.stop();
  }

  up() {
    if (this.vol < 1.0) this.vol += 0.1;
    else this.vol = 1.0;
    this.sound.volume(this.vol);
    console.log("vol", this.vol);
  }
  down() {
    if (this.vol > 0.0) this.vol -= 0.1;
    else this.vol = 0.0;
    this.sound.volume(this.vol);
    console.log("vol", this.vol);
  }
}
