import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListPendingComponent } from './videos-list-pending.component';

describe('VideosListPendingComponent', () => {
  let component: VideosListPendingComponent;
  let fixture: ComponentFixture<VideosListPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosListPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
