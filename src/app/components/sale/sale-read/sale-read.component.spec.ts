import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReadComponent } from './sale-read.component';

describe('SaleReadComponent', () => {
  let component: SaleReadComponent;
  let fixture: ComponentFixture<SaleReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
