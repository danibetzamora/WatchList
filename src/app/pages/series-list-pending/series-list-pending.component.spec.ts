import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListPendingComponent } from './series-list-pending.component';

describe('SeriesListPendingComponent', () => {
  let component: SeriesListPendingComponent;
  let fixture: ComponentFixture<SeriesListPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesListPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
