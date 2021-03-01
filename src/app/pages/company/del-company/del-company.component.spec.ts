import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCompanyComponent } from './del-company.component';

describe('DelCompanyComponent', () => {
  let component: DelCompanyComponent;
  let fixture: ComponentFixture<DelCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
