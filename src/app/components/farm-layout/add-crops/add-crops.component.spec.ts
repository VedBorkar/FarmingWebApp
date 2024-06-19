import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCropsComponent } from './add-crops.component';

describe('AddCropsComponent', () => {
  let component: AddCropsComponent;
  let fixture: ComponentFixture<AddCropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCropsComponent]
    });
    fixture = TestBed.createComponent(AddCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
