import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-core',
  templateUrl: './hp-core.component.html',
  styleUrls: ['./hp-core.component.scss']
})
export class HpCoreComponent implements OnInit {
  paddingTop: string;
  lists: { title?: string; desc?: string; class?: string, audio: string; img: string; }[];
  thre: number;
  headerHeightToSection: number;
  constructor() {
  }

  ngOnInit() {
    this.lists = [
      {
        title: "DECO*27",
        desc: "",
        class: "dark cover title-1 bg--center--center",
        audio: "/assets/audio/ag.mp3",
        img: "/assets/images/bg-1.jpg"
      },
      {
        title: "News",
        desc: "",
        class: "dark cover section-1 title-2 bg--top--center",
        audio: "/assets/audio/sg.mp3",
        img: "/assets/images/bg-2.jpg"
      },
    ]
  }

  headerHeight(headerHeight) {
    this.thre = headerHeight;
    this.paddingTop = `${headerHeight}px`;
  }

}
