import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisviajesChoferPage } from './misviajes-chofer.page';

describe('MisviajesChoferPage', () => {
  let component: MisviajesChoferPage;
  let fixture: ComponentFixture<MisviajesChoferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisviajesChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
