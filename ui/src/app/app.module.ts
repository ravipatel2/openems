import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '../environments';

// modules
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { OverviewModule } from './overview/overview.module';
import { DeviceModule } from './device/device.module';

// components
import { AppComponent } from './app.component';

// services
import { Websocket, Service } from './shared/shared';
import { MyTranslateLoader } from './shared/translate/translate';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AboutModule,
    DeviceModule,
    OverviewModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: MyTranslateLoader }
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MdSnackBar
    // ,
    // {
    //   provide: ErrorHandler,
    //   useExisting: Service
    // }
  ]
})
export class AppModule { }
