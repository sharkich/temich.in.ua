import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Save4meComponent } from './save4me.component';

describe('Save4meComponent', () => {
  let component: Save4meComponent;
  let fixture: ComponentFixture<Save4meComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Save4meComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Save4meComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
