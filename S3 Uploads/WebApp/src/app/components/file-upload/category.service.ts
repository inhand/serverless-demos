import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  categories: Category [] = [
    {name: 'System A', value: 'systemA'},
    {name: 'System B', value: 'systemB'},
    {name: 'System C', value: 'systemC'}];

  constructor() { }

  getCategories(): Category [] {
    return this.categories;
  }
}
