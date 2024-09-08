import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UndoRedoFormComponent } from './components/undo-redo-form/undo-redo-form.component';

const routes: Routes = [
  {path:'',component:UndoRedoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
