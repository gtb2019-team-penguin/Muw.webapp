import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopComponent } from "@test/top/top.component";
import { HowlerComponent } from "@test/howler/howler.component";
import { SoundFaderComponent } from "@test/sound-fader/sound-fader.component";
import { SoundCrossfaderComponent } from "@test/sound-crossfader/sound-crossfader.component";
import { SectionElementComponent } from "@test/section-element/section-element.component";
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "test", component: TopComponent },
      { path: "test/howler", component: HowlerComponent },
      { path: "test/fader", component: SoundFaderComponent },
      { path: "test/crossfade", component: SoundCrossfaderComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopComponent,
    HowlerComponent,
    SoundFaderComponent,
    SoundCrossfaderComponent,
    SectionElementComponent,
    TimelineComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
