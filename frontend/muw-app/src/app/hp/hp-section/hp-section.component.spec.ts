import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSectionComponent } from './hp-section.component';

describe('HpSectionComponent', () => {
  let component: HpSectionComponent;
  let fixture: ComponentFixture<HpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
