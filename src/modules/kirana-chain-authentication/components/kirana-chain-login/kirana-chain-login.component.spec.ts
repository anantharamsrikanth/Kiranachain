import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainLoginComponent } from './kirana-chain-login.component';

describe('KiranaChainLoginComponent', () => {
  let component: KiranaChainLoginComponent;
  let fixture: ComponentFixture<KiranaChainLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
