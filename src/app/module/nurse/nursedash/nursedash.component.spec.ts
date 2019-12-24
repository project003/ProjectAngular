import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedashComponent } from './nursedash.component';

describe('NursedashComponent', () => {
  let component: NursedashComponent;
  let fixture: ComponentFixture<NursedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
