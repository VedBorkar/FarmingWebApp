import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsDashboardComponent } from './crops-dashboard.component';

describe('CropsDashboardComponent', () => {
  let component: CropsDashboardComponent;
  let fixture: ComponentFixture<CropsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropsDashboardComponent]
    });
    fixture = TestBed.createComponent(CropsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
