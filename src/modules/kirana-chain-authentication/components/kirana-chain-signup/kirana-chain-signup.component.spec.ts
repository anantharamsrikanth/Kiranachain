import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainSignupComponent } from './kirana-chain-signup.component';

describe('KiranaChainSignupComponent', () => {
  let component: KiranaChainSignupComponent;
  let fixture: ComponentFixture<KiranaChainSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
