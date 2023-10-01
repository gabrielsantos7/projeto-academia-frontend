import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlunoComponent } from './modal-aluno.component';

describe('ModalAlunoComponent', () => {
  let component: ModalAlunoComponent;
  let fixture: ComponentFixture<ModalAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAlunoComponent]
    });
    fixture = TestBed.createComponent(ModalAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
