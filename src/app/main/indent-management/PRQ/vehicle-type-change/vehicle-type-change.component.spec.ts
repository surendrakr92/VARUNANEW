import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeChangeComponent } from './vehicle-type-change.component';

describe('VehicleTypeChangeComponent', () => {
  let component: VehicleTypeChangeComponent;
  let fixture: ComponentFixture<VehicleTypeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTypeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
