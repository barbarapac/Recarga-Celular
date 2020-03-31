import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRecargaPage } from './dados-recarga.page';

describe('DadosRecargaPage', () => {
  let component: DadosRecargaPage;
  let fixture: ComponentFixture<DadosRecargaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosRecargaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosRecargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
