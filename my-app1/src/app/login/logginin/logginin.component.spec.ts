import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggininComponent } from './logginin.component';

describe('LoggininComponent', () => {
  let component: LoggininComponent;
  let fixture: ComponentFixture<LoggininComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggininComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
