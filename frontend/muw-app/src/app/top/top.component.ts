import { Component } from "@angular/core";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.css"]
})
export class TopComponent {
  title = "Top";
  lists = [
    { title: "howler", url: "./howler" },
    { title: "fader", url: "./fader" },
    { title: "crossfader", url: "./crossfade" }
  ];
}
