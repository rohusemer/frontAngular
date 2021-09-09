import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DregistrosComponent } from './dregistros.component';

describe('DregistrosComponent', () => {
  let component: DregistrosComponent;
  let fixture: ComponentFixture<DregistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DregistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DregistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
