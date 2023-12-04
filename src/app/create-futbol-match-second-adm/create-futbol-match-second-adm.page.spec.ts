import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFutbolMatchSecondAdmPage } from './create-futbol-match-second-adm.page';

describe('CreateFutbolMatchSecondAdmPage', () => {
  let component: CreateFutbolMatchSecondAdmPage;
  let fixture: ComponentFixture<CreateFutbolMatchSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateFutbolMatchSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
