import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvaliacaoComponent } from './create-avaliacao.component';

describe('CreateAvaliacaoComponent', () => {
  let component: CreateAvaliacaoComponent;
  let fixture: ComponentFixture<CreateAvaliacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAvaliacaoComponent]
    });
    fixture = TestBed.createComponent(CreateAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
