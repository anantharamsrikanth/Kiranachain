import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainHomeMainComponent } from './kirana-chain-home-main.component';

describe('KiranaChainHomeMainComponent', () => {
  let component: KiranaChainHomeMainComponent;
  let fixture: ComponentFixture<KiranaChainHomeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainHomeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
