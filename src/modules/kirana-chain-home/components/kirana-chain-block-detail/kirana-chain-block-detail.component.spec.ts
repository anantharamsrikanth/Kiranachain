import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainBlockDetailComponent } from './kirana-chain-block-detail.component';

describe('KiranaChainBlockDetailComponent', () => {
  let component: KiranaChainBlockDetailComponent;
  let fixture: ComponentFixture<KiranaChainBlockDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainBlockDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainBlockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
