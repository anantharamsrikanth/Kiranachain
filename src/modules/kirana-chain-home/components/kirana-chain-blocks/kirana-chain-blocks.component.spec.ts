import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainBlocksComponent } from './kirana-chain-blocks.component';

describe('KiranaChainBlocksComponent', () => {
  let component: KiranaChainBlocksComponent;
  let fixture: ComponentFixture<KiranaChainBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
