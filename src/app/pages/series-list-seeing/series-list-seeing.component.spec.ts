import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListSeeingComponent } from './series-list-seeing.component';

describe('SeriesListSeeingComponent', () => {
  let component: SeriesListSeeingComponent;
  let fixture: ComponentFixture<SeriesListSeeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesListSeeingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListSeeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
