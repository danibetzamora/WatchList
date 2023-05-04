import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListViewComponent } from './films-list-view.component';

describe('FilmsListViewComponent', () => {
  let component: FilmsListViewComponent;
  let fixture: ComponentFixture<FilmsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
