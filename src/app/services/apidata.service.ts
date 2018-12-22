import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APIKeyService } from './apikey.service';

@Injectable({
  providedIn: 'root'
})
export class APIDataService {
  
  response: any;

  constructor(private http: HttpClient, 
    private apiKeyService: APIKeyService) {}


  getStories() {
    
  }
}
