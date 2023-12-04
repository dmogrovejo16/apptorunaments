import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVolleyMatchThirdAdmPage } from './create-volley-match-third-adm.page';

describe('CreateVolleyMatchThirdAdmPage', () => {
  let component: CreateVolleyMatchThirdAdmPage;
  let fixture: ComponentFixture<CreateVolleyMatchThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateVolleyMatchThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
