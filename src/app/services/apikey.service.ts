import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIKeyService {
  private APIKey = 'e8d7b2a2149143378f5d20b5f78bf0ee';
  
  constructor() { }

  getAPIKey() {
    return this.APIKey;
  }
}
