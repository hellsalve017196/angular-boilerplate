import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobHistoryComponent } from './update-job-history.component';

describe('UpdateJobHistoryComponent', () => {
  let component: UpdateJobHistoryComponent;
  let fixture: ComponentFixture<UpdateJobHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
