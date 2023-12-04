import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFutbolMatchThirdAdmPage } from './create-futbol-match-third-adm.page';

describe('CreateFutbolMatchThirdAdmPage', () => {
  let component: CreateFutbolMatchThirdAdmPage;
  let fixture: ComponentFixture<CreateFutbolMatchThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateFutbolMatchThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
