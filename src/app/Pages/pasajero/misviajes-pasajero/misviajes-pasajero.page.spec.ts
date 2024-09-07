import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisviajesPasajeroPage } from './misviajes-pasajero.page';

describe('MisviajesPasajeroPage', () => {
  let component: MisviajesPasajeroPage;
  let fixture: ComponentFixture<MisviajesPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisviajesPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
