/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserTransfComponent } from './user-transf.component';

describe('UserTransfComponent', () => {
  let component: UserTransfComponent;
  let fixture: ComponentFixture<UserTransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
