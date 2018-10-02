import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivacionesComponent } from './activaciones.component';

describe('ActivacionesComponent', () => {
  let component: ActivacionesComponent;
  let fixture: ComponentFixture<ActivacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
