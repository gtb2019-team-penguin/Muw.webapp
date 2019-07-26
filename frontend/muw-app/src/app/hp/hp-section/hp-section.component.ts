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
  selector: "app-hp-section",
  templateUrl: "./hp-section.component.html",
  styleUrls: ["./hp-section.component.scss"]
})

export class HpSectionComponent implements OnInit {
  @Input() list: { title: string; desc?: string; table?: { date?: string, text?: string, link?: string }[]; class: string; audio: string; img: string };
  @Output() event = new EventEmitter<any>();
  @Input() thre: number;
  el: HTMLElement;

  context = new AudioContext();
  ctl: any;

  isPlaying: boolean;
  isLoaded: boolean;
  gain: number;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.context.suspend();
  }
  ngOnInit() {
    this.createSource(this.list.audio).then(res => {
      this.ctl = res;
      this.ctl.gainNode.gain.value = 0.3;
      this.gain = this.ctl.gainNode.gain.value;
      this.ctl.source.start();
      this.isLoaded = true;
      console.log(`${this.list.title} ${this.list.audio} loaded`);
      this.elementResize();
    });

    this.list.img = `url("${this.list.img}")`;

  }

  @HostListener("window:resize")
  onresize() {
    this.elementResize();
  }
  elementResize() {
    this.el.querySelector("section").style.height = `${window.innerHeight - this.thre}px`;
  }

  /** 音声処理 */
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
    // fetch APIで音声ファイルを取得
    const res = await fetch(path);
    // ArrayBufferを取得
    const arr = await res.arrayBuffer();
    // 音声ファイルをデコード
    const buf = await this.context.decodeAudioData(arr);
    return buf;
  };
  @HostListener("window:scroll")
  onScroll() {
    if (
      this.el.getBoundingClientRect().top <= this.thre &&
      this.thre <= this.el.getBoundingClientRect().bottom
    ) {
      if (this.isLoaded && !this.isPlaying) {
        this.isPlaying = true;
        this.context.resume();
        this.fadeIn();
        console.log(this.list.title, "play!");
      }
    } else {
      if (this.isLoaded && this.isPlaying) {
        this.isPlaying = false;
        this.fadeOut();
        this.context.suspend();
        console.log(this.list.title, "Pause!");
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