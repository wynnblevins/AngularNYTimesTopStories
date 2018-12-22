import { Component, OnInit } from '@angular/core';
import { APIDataService } from 'src/app/services/apidata.service';
import { APIKeyService } from 'src/app/services/apikey.service';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stories-table',
  templateUrl: './stories-table.component.html',
  styleUrls: ['./stories-table.component.css']
})
export class StoriesTableComponent implements OnInit {
  stories: any[];
  private apiEndpoint: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

  constructor(private http: HttpClient, 
    private apiKeyService: APIKeyService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let apiKey = this.apiKeyService.getAPIKey();
    let params = new HttpParams()
      .set("api-key", apiKey);
    this.http.get(this.apiEndpoint, { params: params })
      .subscribe((responseObj: any) => {
       this.stories = responseObj.response.docs;
    });
  }
}
