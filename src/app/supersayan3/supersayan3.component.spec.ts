import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supersayan3Component } from './supersayan3.component';

describe('Supersayan3Component', () => {
  let component: Supersayan3Component;
  let fixture: ComponentFixture<Supersayan3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supersayan3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supersayan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
