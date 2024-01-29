import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaContatoComponent } from './chamada-contato.component';

describe('ChamadaContatoComponent', () => {
  let component: ChamadaContatoComponent;
  let fixture: ComponentFixture<ChamadaContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadaContatoComponent]
    });
    fixture = TestBed.createComponent(ChamadaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
