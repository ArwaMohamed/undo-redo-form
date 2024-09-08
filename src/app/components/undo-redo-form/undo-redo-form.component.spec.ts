import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoRedoFormComponent } from './undo-redo-form.component';

describe('UndoRedoFormComponent', () => {
  let component: UndoRedoFormComponent;
  let fixture: ComponentFixture<UndoRedoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndoRedoFormComponent]
    });
    fixture = TestBed.createComponent(UndoRedoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
