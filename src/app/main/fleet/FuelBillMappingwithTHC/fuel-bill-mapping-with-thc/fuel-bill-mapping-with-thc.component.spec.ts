import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelBillMappingWithThcComponent } from './fuel-bill-mapping-with-thc.component';

describe('FuelBillMappingWithThcComponent', () => {
  let component: FuelBillMappingWithThcComponent;
  let fixture: ComponentFixture<FuelBillMappingWithThcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelBillMappingWithThcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelBillMappingWithThcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
