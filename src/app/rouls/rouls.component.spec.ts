import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoulsComponent } from './rouls.component';

describe('RoulsComponent', () => {
  let component: RoulsComponent;
  let fixture: ComponentFixture<RoulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
