import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPasajeroPage } from './qr-pasajero.page';

describe('QrPasajeroPage', () => {
  let component: QrPasajeroPage;
  let fixture: ComponentFixture<QrPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
