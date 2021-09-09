import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacuentaComponent } from './nuevacuenta.component';

describe('NuevacuentaComponent', () => {
  let component: NuevacuentaComponent;
  let fixture: ComponentFixture<NuevacuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevacuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevacuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
