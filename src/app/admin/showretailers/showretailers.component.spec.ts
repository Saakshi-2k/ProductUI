import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowretailersComponent } from './showretailers.component';

describe('ShowretailersComponent', () => {
  let component: ShowretailersComponent;
  let fixture: ComponentFixture<ShowretailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowretailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowretailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
