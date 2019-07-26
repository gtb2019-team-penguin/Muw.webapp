import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-core',
  templateUrl: './hp-core.component.html',
  styleUrls: ['./hp-core.component.scss']
})
export class HpCoreComponent implements OnInit {
  paddingTop: string;
  lists: {
    title?: string; desc?: string; table?: { date?: string, text?: string, link?: string }[]; class?: string, audio: string; img: string;
  }[];
  thre: number;
  headerHeightToSection: number;
  constructor() {
  }

  ngOnInit() {
    this.lists = [
      {
        title: "DECO*27",
        class: "dark cover title-1 title-shadow--white bg--center--center bg--shadow",
        audio: "/assets/audio/ag.mp3",
        img: "/assets/images/bg-1.jpg"
      },
      {
        title: "News",
        table: [{
          date: "2019/01/18",
          text: "新曲「乙女解剖 feat. 初音ミク」公開しました。",
          link: "#"
        },
        {
          date: "2018/10/30",
          text: "SNOW MIKU 2019テーマソング 新曲「アイ」を書き下ろしました",
          link: "#"
        },
        {
          date: "2017/12/11",
          text: "SEGA音ゲー「maimai MiLK」オープニング主題歌 作詞作曲担当しました。",
          link: "#"
        }],
        class: "green cover section-1 title-shadow--black title-2 bg--top--center bg--shadow",
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
