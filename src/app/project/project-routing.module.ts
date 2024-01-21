import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListSprintComponent } from './list-sprint/list-sprint.component';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { EditSprintComponent } from './edit-sprint/edit-sprint.component';

const routes: Routes = [
  {path :'add', component : AddProjectComponent},
  {path : 'list' , component : ListProjectComponent},
  {path : 'edit' , component : EditProjectComponent},
  {path : 'list/Sprints' , component : ListSprintComponent },
  {path : 'add/Sprint' , component : AddSprintComponent },
  {path : 'edit/Sprint' , component : EditSprintComponent }
  //{ path: '', redirectTo: '/list', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
