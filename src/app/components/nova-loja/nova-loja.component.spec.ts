import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaLojaComponent } from './nova-loja.component';

describe('NovaLojaComponent', () => {
  let component: NovaLojaComponent;
  let fixture: ComponentFixture<NovaLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
