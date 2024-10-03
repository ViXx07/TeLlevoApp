import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModViajePage } from './mod-viaje.page';

describe('ModViajePage', () => {
  let component: ModViajePage;
  let fixture: ComponentFixture<ModViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
