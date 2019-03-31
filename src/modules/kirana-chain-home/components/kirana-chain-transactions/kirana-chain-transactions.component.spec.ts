import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainTransactionsComponent } from './kirana-chain-transactions.component';

describe('KiranaChainTransactionsComponent', () => {
  let component: KiranaChainTransactionsComponent;
  let fixture: ComponentFixture<KiranaChainTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
