/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MostdeadlyComponent } from './mostdeadly.component';

describe('MostdeadlyComponent', () => {
  let component: MostdeadlyComponent;
  let fixture: ComponentFixture<MostdeadlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostdeadlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostdeadlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
