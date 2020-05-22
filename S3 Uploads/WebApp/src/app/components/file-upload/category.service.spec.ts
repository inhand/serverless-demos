import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 3 categories', () => {
    const categories = service.getCategories();
    expect(categories.length).toBe(3);
  });

  it('should have systemA, systemB, systemC values', () => {
    const categories = service.getCategories();
    console.log('categories', categories)
    expect(categories[0].value).toBe('systemA');
    expect(categories[1].value).toBe('systemB');
    expect(categories[2].value).toBe('systemC');
  });
});
