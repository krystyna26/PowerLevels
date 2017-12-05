import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersayan2Component } from './supersayan2.component';

describe('Supersayan2Component', () => {
  let component: Supersayan2Component;
  let fixture: ComponentFixture<Supersayan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersayan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersayan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
