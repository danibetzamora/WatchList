import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListViewComponent } from './videos-list-view.component';

describe('VideosListViewComponent', () => {
  let component: VideosListViewComponent;
  let fixture: ComponentFixture<VideosListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
