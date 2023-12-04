import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVolleyMatchSecondAdmPage } from './create-volley-match-second-adm.page';

describe('CreateVolleyMatchSecondAdmPage', () => {
  let component: CreateVolleyMatchSecondAdmPage;
  let fixture: ComponentFixture<CreateVolleyMatchSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateVolleyMatchSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
