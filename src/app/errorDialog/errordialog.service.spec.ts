import { TestBed } from '@angular/core/testing';

import { ErrorDialogService } from './errordialog.service';

describe('ErrordialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorDialogService = TestBed.get(ErrorDialogService);
    expect(service).toBeTruthy();
  });
});
