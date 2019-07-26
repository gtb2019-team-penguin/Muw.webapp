import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-core',
  templateUrl: './hp-core.component.html',
  styleUrls: ['./hp-core.component.scss']
})
export class HpCoreComponent implements OnInit {
  paddingTop: string;
  lists: {
    title?: string;
    desc?: string;
    table?: {
      type?: string;
      content?: {
        col1?: string;
        col2?: string;
        col3?: string;
      }[]
    };
    class?: string;
    audio?: string;
    img?: string;
  }[];
  thre: number;
  headerHeightToSection: number;
  constructor() {
  }

  ngOnInit() {
    this.lists = [
      {
        title: "DECO*27",
        class: "dark cover title-1 title--pos--bottom title--font-size--7 title-shadow--white bg--center--center bg--shadow font-sans",
        audio: "/assets/audio/ag.mp3",
        img: "/assets/images/bg-1.jpg"
      },
      {
        title: "News",
        table: {
          type: "table",
          content: [
            {
              col1: "2019/01/18",
              col2: "新曲「乙女解剖 feat. 初音ミク」公開しました。",
              col3: "#"
            },
            {
              col1: "2018/10/30",
              col2: "SNOW MIKU 2019テーマソング 新曲「アイ」を書き下ろしました",
              col3: "#"
            },
            {
              col1: "2017/12/11",
              col2: "SEGA音ゲー「maimai MiLK」オープニング主題歌 作詞作曲担当しました。",
              col3: "#"
            },
          ]
        },
        class: "green cover section-1 title-shadow--white title-2 bg--top--center bg--shadow bg--shadow--dark news",
        audio: "/assets/audio/otomekaibou.flac",
        img: "/assets/images/bg-2.jpg"
      },
      {
        title: "バンド × エレクトロニカ",
        desc: "愛の歌に酔いしれろ",
        class: `dark cover 
          title-1 title--pos--top title-shadow--white bg--top--center bg--shadow desc-1 desc--pos--bottom`,
        audio: "/assets/audio/hibana.flac",
        img: "/assets/images/endcard_3596.png"
      },
      {
        title: "discography",
        table: {
          type: "ul",
          content: [
            {
              col1: "/assets/images/android-girl-jacket.jpg",
              col2: "アンドロイドガール",
              col3: "#"
            },
            {
              col1: "/assets/images/aikotoba3-jacket.jpg",
              col2: "愛言葉Ⅲ",
              col3: "#"
            },
            {
              col1: "/assets/images/aikotoba2-jacket.jpg",
              col2: "愛言葉Ⅱ",
              col3: "#"
            },
            {
              col1: "/assets/images/bg-1.jpg",
              col2: "ゴーストルール",
              col3: "#"
            }
          ]
        },
        img: "/assets/images/bg-3.jpg",
        class: "cover bg--top--center bg--shadow bg--shadow--dark flex",
        audio: "/assets/audio/yakosei.flac",
      },
    ]
  }

  headerHeight(headerHeight) {
    this.thre = headerHeight;
    this.paddingTop = `${headerHeight}px`;
  }

}
