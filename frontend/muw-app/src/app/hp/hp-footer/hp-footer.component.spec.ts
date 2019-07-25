import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpFooterComponent } from './hp-footer.component';

describe('HpFooterComponent', () => {
  let component: HpFooterComponent;
  let fixture: ComponentFixture<HpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
