import { Component } from "@angular/core";

@Component({
  selector: "app-sound-fader",
  templateUrl: "./sound-fader.component.html",
  styleUrls: ["../app.component.css", "./sound-fader.component.css"]
})
export class SoundFaderComponent {
  title: string = "sound";

  context = new AudioContext();
  ctl1: any;
  ctl2: any;
  playing: boolean;

  constructor() {
    // Create two sources.
    this.createSource("/assets/audio/wc.mp3").then(res => {
      this.ctl1 = res;
      this.ctl1.gainNode.gain.value = 0;
      this.ctl1.source.start();
    });
    this.createSource("/assets/audio/kca.mp3").then(res => {
      this.ctl2 = res;
      this.ctl2.source.start();
    });
    this.playing = false;
    this.context.suspend();
  }

  createSource = async (name: String) => {
    const source: AudioBufferSourceNode = this.context.createBufferSource(); // Sourceノードを作成
    source.buffer = await this.prepareBuffer(name); // 再生するバッファを指定
    const gainNode: GainNode = await this.context.createGain(); // ゲインノードを作成
    source.connect(gainNode); // Sourceをゲインノードに接続
    gainNode.connect(this.context.destination); // ゲインノードをDestinationに接続
    source.loop = true;

    return {
      source: source,
      gainNode: gainNode
    };
  };

  prepareBuffer = async path => {
    //2. fetch APIで音声ファイルを取得
    const res = await fetch(path);
    //ArrayBufferを取得
    const arr = await res.arrayBuffer();
    //3. 音声ファイルをデコード
    const buf = await this.context.decodeAudioData(arr);
    return buf;
  };

  toggle = () => {
    this.playing ? this.stop() : this.play();
    this.playing = !this.playing;
  };
  crossfade = (e: { value: string; max: string }) => {
    const x = parseInt(e.value) / parseInt(e.max);
    // Use an equal-power crossfading curve:
    const gain1 = Math.cos(x * 0.5 * Math.PI);
    const gain2 = Math.cos((1.0 - x) * 0.5 * Math.PI);
    console.log(gain1, gain2);
    this.ctl1.gainNode.gain.value = gain1;
    this.ctl2.gainNode.gain.value = gain2;
  };

  play = () => {
    // Start playback in a loop
    this.context.resume();
    console.log("play");
  };

  stop = () => {
    this.context.suspend();
    console.log("stop");
  };
}
