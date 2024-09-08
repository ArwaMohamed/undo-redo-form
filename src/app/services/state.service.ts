import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private undoStack: any[] = [];
  private redoStack: any[] = [];
  private currentState: BehaviorSubject<any>;

  constructor() {
    this.currentState = new BehaviorSubject<any>(null);
  }

  setInitialState(state: any): void {
    this.currentState.next(state);
    this.undoStack.push(state);
  }

  pushState(state: any): void {
    this.undoStack.push(state);
    this.redoStack = [];
  }

  undo(): any {
    if (this.undoStack.length > 1) {
      const currentState = this.undoStack.pop();
      this.redoStack.push(currentState);
      return this.undoStack[this.undoStack.length - 1];
    }
    return null;
  }

  redo(): any {
    if (this.redoStack.length > 0) {
      const state = this.redoStack.pop();
      this.undoStack.push(state);
      return state;
    }
    return null;
  }
  hasUndo(): boolean {
    return this.undoStack.length > 1;
  }

  hasRedo(): boolean {
    return this.redoStack.length > 0;
  }
}
