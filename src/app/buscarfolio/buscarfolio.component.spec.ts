import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarfolioComponent } from './buscarfolio.component';

describe('BuscarfolioComponent', () => {
  let component: BuscarfolioComponent;
  let fixture: ComponentFixture<BuscarfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
