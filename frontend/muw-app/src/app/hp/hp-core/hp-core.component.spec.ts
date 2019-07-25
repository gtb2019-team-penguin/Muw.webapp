import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpCoreComponent } from './hp-core.component';

describe('HpCoreComponent', () => {
  let component: HpCoreComponent;
  let fixture: ComponentFixture<HpCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
