import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLayoutComponent } from './farm-layout.component';

describe('FarmLayoutComponent', () => {
  let component: FarmLayoutComponent;
  let fixture: ComponentFixture<FarmLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmLayoutComponent]
    });
    fixture = TestBed.createComponent(FarmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
