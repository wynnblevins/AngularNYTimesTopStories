import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APIKeyService } from './services/apikey.service';
import { APIDataService } from './services/apidata.service';
import { StoriesTableComponent } from './components/stories-table/stories-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    APIKeyService,
    APIDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
