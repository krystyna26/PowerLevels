import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayanComponent } from './super-sayan.component';

describe('SuperSayanComponent', () => {
  let component: SuperSayanComponent;
  let fixture: ComponentFixture<SuperSayanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
