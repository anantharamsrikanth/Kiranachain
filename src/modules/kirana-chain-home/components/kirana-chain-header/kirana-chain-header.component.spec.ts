import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainHeaderComponent } from './kirana-chain-header.component';

describe('KiranaChainHeaderComponent', () => {
  let component: KiranaChainHeaderComponent;
  let fixture: ComponentFixture<KiranaChainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
