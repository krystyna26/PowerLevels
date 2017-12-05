import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersayan4Component } from './supersayan4.component';

describe('Supersayan4Component', () => {
  let component: Supersayan4Component;
  let fixture: ComponentFixture<Supersayan4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersayan4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersayan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
