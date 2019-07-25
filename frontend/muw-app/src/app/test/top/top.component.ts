import { Component } from "@angular/core";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.css"]
})
export class TopComponent {
  title = "Test Top";
  lists = [
    { title: "howler", url: "@test/howler" },
    { title: "fader", url: "@test/fader" },
    { title: "crossfader", url: "@test/crossfade" }
  ];
}
