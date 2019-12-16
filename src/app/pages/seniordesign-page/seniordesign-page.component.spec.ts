import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniordesignPageComponent } from './seniordesign-page.component';

describe('SeniordesignPageComponent', () => {
  let component: SeniordesignPageComponent;
  let fixture: ComponentFixture<SeniordesignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniordesignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniordesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
