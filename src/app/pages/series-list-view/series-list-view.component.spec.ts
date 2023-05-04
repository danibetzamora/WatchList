import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListViewComponent } from './series-list-view.component';

describe('SeriesListViewComponent', () => {
  let component: SeriesListViewComponent;
  let fixture: ComponentFixture<SeriesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
