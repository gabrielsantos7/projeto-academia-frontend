import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvaliacoesComponent } from './list-avaliacoes.component';

describe('ListAvaliacoesComponent', () => {
  let component: ListAvaliacoesComponent;
  let fixture: ComponentFixture<ListAvaliacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAvaliacoesComponent]
    });
    fixture = TestBed.createComponent(ListAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
