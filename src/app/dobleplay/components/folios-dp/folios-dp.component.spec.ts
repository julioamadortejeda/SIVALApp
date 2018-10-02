import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoliosDPComponent } from './folios-dp.component';

describe('FoliosDPComponent', () => {
  let component: FoliosDPComponent;
  let fixture: ComponentFixture<FoliosDPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoliosDPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoliosDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
