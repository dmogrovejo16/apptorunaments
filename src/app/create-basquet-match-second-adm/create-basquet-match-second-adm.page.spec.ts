import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBasquetMatchSecondAdmPage } from './create-basquet-match-second-adm.page';

describe('CreateBasquetMatchSecondAdmPage', () => {
  let component: CreateBasquetMatchSecondAdmPage;
  let fixture: ComponentFixture<CreateBasquetMatchSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBasquetMatchSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
