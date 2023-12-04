import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBasquetMatchThirdAdmPage } from './create-basquet-match-third-adm.page';

describe('CreateBasquetMatchThirdAdmPage', () => {
  let component: CreateBasquetMatchThirdAdmPage;
  let fixture: ComponentFixture<CreateBasquetMatchThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBasquetMatchThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
