import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hp-header',
  templateUrl: './hp-header.component.html',
  styleUrls: ['./hp-header.component.scss']
})
export class HpHeaderComponent implements OnInit {
  logo: string;
  @Output() headerHeight = new EventEmitter<any>();
  el: ElementRef;
  constructor(el: ElementRef) {
    this.logo = "/assets/images/deco27.jpg";
    this.el = el;
  }

  ngOnInit() {
    this.headerHeight.emit(this.el.nativeElement.getBoundingClientRect().bottom);
  }



}
