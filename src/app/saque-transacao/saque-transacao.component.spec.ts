import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueTransacaoComponent } from './saque-transacao.component';

describe('SaqueTransacaoComponent', () => {
  let component: SaqueTransacaoComponent;
  let fixture: ComponentFixture<SaqueTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaqueTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaqueTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
