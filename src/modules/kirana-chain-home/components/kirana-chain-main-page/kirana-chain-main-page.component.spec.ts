import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranaChainMainPageComponent } from './kirana-chain-main-page.component';

describe('KiranaChainMainPageComponent', () => {
  let component: KiranaChainMainPageComponent;
  let fixture: ComponentFixture<KiranaChainMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiranaChainMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranaChainMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
