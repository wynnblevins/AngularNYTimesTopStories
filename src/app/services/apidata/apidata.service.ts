import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIKeyService } from '../apikey/apikey.service';

@Injectable({
  providedIn: 'root'
})
export class APIDataService {
  private apiEndpoint: string = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

  constructor(private http: HttpClient, 
    private apiKeyService: APIKeyService) {}

  getStories() {
    let apiKey = this.apiKeyService.getAPIKey();
    let params = new HttpParams()
      .set("api-key", apiKey);
    
    return this.http.get(this.apiEndpoint, { params: params });
  }
}
