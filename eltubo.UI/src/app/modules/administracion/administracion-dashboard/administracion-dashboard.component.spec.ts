import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionDashboardComponent } from './administracion-dashboard.component';

describe('AdministracionDashboardComponent', () => {
  let component: AdministracionDashboardComponent;
  let fixture: ComponentFixture<AdministracionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
