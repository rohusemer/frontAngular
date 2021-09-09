import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieEstructuraSaldosComponent } from './pie-estructura-saldos.component';

describe('PieEstructuraSaldosComponent', () => {
  let component: PieEstructuraSaldosComponent;
  let fixture: ComponentFixture<PieEstructuraSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieEstructuraSaldosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieEstructuraSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
