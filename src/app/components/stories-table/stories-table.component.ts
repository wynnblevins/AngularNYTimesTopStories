import { Component, OnInit } from '@angular/core';
import { APIDataService } from 'src/app/services/apidata/apidata.service';
import { APIKeyService } from 'src/app/services/apikey/apikey.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SectionsService } from 'src/app/services/sections/sections.service';

@Component({
  selector: 'app-stories-table',
  templateUrl: './stories-table.component.html',
  styleUrls: ['./stories-table.component.css']
})
export class StoriesTableComponent implements OnInit {
  stories: any[];
  sections: string[];

  constructor(private apiKeyService: APIKeyService, 
    private sectionsService: SectionsService,
    private apiDataService: APIDataService) { }

  ngOnInit() {
    this.loadData();
    this.loadSections();
  }

  loadSections() {
    this.sections = this.sectionsService.getSections();
  }

  loadData() {
    this.apiDataService.getStories().subscribe((responseObj: any) => {
      this.stories = responseObj.response.docs;
    });        
  }
}
