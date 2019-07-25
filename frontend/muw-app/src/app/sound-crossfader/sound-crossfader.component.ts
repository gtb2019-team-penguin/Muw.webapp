import {
  Component,
  OnInit,
  Inject,
  HostListener,
  ElementRef
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-sound-crossfader",
  templateUrl: "./sound-crossfader.component.html",
  styleUrls: ["../app.component.css", "./sound-crossfader.component.css"]
})
export class SoundCrossfaderComponent implements OnInit {
  scrollValue: number;
  el: HTMLElement;
  lists: { title?: string; desc?: string; path?: string }[];

  constructor(@Inject(DOCUMENT) private document: Document, el: ElementRef) {
    this.scrollValue = 0;
    this.el = el.nativeElement;
    this.lists = [
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ag.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ctr.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/kca.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/sg.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/wc.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ag.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ctr.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/kca.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/sg.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/wc.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ag.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/ctr.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/kca.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/sg.mp3"
      },
      {
        title: "section",
        desc:
          "samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample",
        path: "/assets/audio/wc.mp3"
      }
    ];
  }
  ngOnInit() { }

  // scrollEvent(e: any) {
  //   this.scrollValue = e;
  //   console.log(e);
  // }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    let currentPos =
      this.document.scrollingElement.scrollTop || this.document.body.scrollTop;
    // console.log(currentPos);
    this.scrollValue = currentPos;
  }

  onReceiveEventFromChild(eventData: any) {
    console.log(eventData.num, eventData.pos);
  }
}
