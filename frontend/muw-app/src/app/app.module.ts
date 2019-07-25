import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TopComponent } from "./top/top.component";
import { HowlerComponent } from "./howler/howler.component";
import { SoundFaderComponent } from "./sound-fader/sound-fader.component";
import { SoundCrossfaderComponent } from "./sound-crossfader/sound-crossfader.component";
import { SectionElementComponent } from "./section-element/section-element.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: TopComponent },
      { path: "howler", component: HowlerComponent },
      { path: "fader", component: SoundFaderComponent },
      { path: "crossfade", component: SoundCrossfaderComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopComponent,
    HowlerComponent,
    SoundFaderComponent,
    SoundCrossfaderComponent,
    SectionElementComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
