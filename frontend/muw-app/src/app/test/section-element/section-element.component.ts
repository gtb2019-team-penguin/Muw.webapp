import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-section-element",
  templateUrl: "./section-element.component.html",
  styleUrls: ["./section-element.component.css"]
})
export class SectionElementComponent implements OnInit {
  @Input() list: { title: string; desc: string; path: string };
  @Input() num: number;
  @Output() event = new EventEmitter<any>();
  el: HTMLElement;

  context = new AudioContext();
  ctl: any;

  isPlaying: boolean;
  gain: number;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;

    this.context.suspend();
  }
  ngOnInit() {
    this.createSource(this.list.path).then(res => {
      this.ctl = res;
      this.ctl.gainNode.gain.value = 0.3;
      this.gain = this.ctl.gainNode.gain.value;
      this.ctl.source.start();
      console.log(`${this.num} ${this.list.path} loaded`);
    });
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

  onClick() {
    this.event.emit({
      num: this.num,
      pos: this.el.getBoundingClientRect().top
    });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    // console.log(this.num, this.el.getBoundingClientRect().bottom);
    if (
      this.el.getBoundingClientRect().top <= 100 &&
      100 <= this.el.getBoundingClientRect().bottom
    ) {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.context.resume();
        this.fadeIn();
        console.log(this.num, "play!");
      }
    } else {
      if (this.isPlaying) {
        this.isPlaying = false;
        this.fadeOut();
        // this.context.suspend();
        console.log(this.num, "Pause!");
      }
    }
  }

  fadeOut() {
    this.gain = this.ctl.gainNode.gain.value;
    this.ctl.gainNode.gain.setTargetAtTime(0, this.context.currentTime, 1.0);
  }
  fadeIn() {
    this.ctl.gainNode.gain.setTargetAtTime(
      this.gain,
      this.context.currentTime,
      1.0
    );
    this.gain = this.ctl.gainNode.gain.value;
  }
}
