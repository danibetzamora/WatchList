import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListPendingComponent } from './films-list-pending.component';

describe('FilmsListPendingComponent', () => {
  let component: FilmsListPendingComponent;
  let fixture: ComponentFixture<FilmsListPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsListPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
