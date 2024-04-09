import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantaWeightComponent } from './kanta-weight.component';

describe('KantaWeightComponent', () => {
  let component: KantaWeightComponent;
  let fixture: ComponentFixture<KantaWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantaWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantaWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
