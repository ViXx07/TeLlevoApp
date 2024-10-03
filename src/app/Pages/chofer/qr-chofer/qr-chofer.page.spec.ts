import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrChoferPage } from './qr-chofer.page';

describe('QrChoferPage', () => {
  let component: QrChoferPage;
  let fixture: ComponentFixture<QrChoferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
