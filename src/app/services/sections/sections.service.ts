import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private sections: string[] = [
    'home',
    'opinion',
    'world',
    'national',
    'politics',
    'upshot',
    'nyregion',
    'business',
    'technology',
    'science',
    'health',
    'sports',
    'arts',
    'books',
    'movies',
    'theater',
    'sundayreview',
    'fashion',
    'tmagazine',
    'food',
    'travel',
    'magazine',
    'realestate',
    'automobiles',
    'obituaries',
    'insider'
  ];

  constructor() { }

  getSections() {
    return this.sections;
  }
}