import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobHistoryComponent } from './add-job-history.component';

describe('AddJobHistoryComponent', () => {
  let component: AddJobHistoryComponent;
  let fixture: ComponentFixture<AddJobHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
