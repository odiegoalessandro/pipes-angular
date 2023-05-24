import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { ArrayPipeImpurePipe } from './pipes/array-pipe-impure.pipe';
import { ArrayPipePipe } from './pipes/array-pipe.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';

registerLocaleData(localePt, "pt")

@NgModule({
  declarations: [
    AppComponent,
    PipeExamplesComponent,
    CamelCasePipe,
    ArrayPipePipe,
    ArrayPipeImpurePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // SettingsService,
    // {
    //   provide:
    //     LOCALE_ID,
    //     deps: [SettingsService],
    //     useFactory: (settingsService: SettingsService) => {
    //       settingsService.getLocale()
    //     }
    // }
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
