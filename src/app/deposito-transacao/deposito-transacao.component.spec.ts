import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoTransacaoComponent } from './deposito-transacao.component';

describe('DepositoTransacaoComponent', () => {
  let component: DepositoTransacaoComponent;
  let fixture: ComponentFixture<DepositoTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
