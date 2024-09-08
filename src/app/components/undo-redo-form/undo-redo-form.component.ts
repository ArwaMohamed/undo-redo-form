import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-undo-redo-form',
  templateUrl: './undo-redo-form.component.html',
  styleUrls: ['./undo-redo-form.component.scss']
})
export class UndoRedoFormComponent implements OnInit{
  form!:FormGroup
  constructor(private fb: FormBuilder, private stateService: StateService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      gender:[''],
      subscribe: [false]
    });

    this.stateService.setInitialState(this.form.value);

    this.form.valueChanges.subscribe(value => {
      this.stateService.pushState(value);
    });
  }
  undo(): void {
    const previousState = this.stateService.undo();
    if (previousState) {
      this.form.setValue(previousState, { emitEvent: false });
    }
  }

  redo(): void {
    const nextState = this.stateService.redo();
    if (nextState) {
      this.form.setValue(nextState, { emitEvent: false });
    }
  }
  get canUndo(): boolean {
    return this.stateService.hasUndo();
  }

  get canRedo(): boolean {
    return this.stateService.hasRedo();
  }
}
