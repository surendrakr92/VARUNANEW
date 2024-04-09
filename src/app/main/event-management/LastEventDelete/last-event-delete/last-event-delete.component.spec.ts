import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEventDeleteComponent } from './last-event-delete.component';

describe('LastEventDeleteComponent', () => {
  let component: LastEventDeleteComponent;
  let fixture: ComponentFixture<LastEventDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastEventDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastEventDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
