import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpHeaderComponent } from './hp-header.component';

describe('HpHeaderComponent', () => {
  let component: HpHeaderComponent;
  let fixture: ComponentFixture<HpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
