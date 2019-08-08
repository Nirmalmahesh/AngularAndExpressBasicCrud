import { TestBed } from '@angular/core/testing';

import { DepartmentCrudService } from './department-crud.service';

describe('DepartmentCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentCrudService = TestBed.get(DepartmentCrudService);
    expect(service).toBeTruthy();
  });
});
