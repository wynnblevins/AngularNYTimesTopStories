import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { APIKeyService } from './services/apikey/apikey.service';
import { APIDataService } from './services/apidata/apidata.service';
import { SectionsService } from './services/sections/sections.service';

import { StoriesTableComponent } from './components/stories-table/stories-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    APIKeyService,
    APIDataService,
    SectionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }