import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/new-task/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },

  {
    path: 'users/:userId', //dynamic route-> your-domain/users/u1
    component: UserTasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix',
      },
      { path: 'tasks', component: TasksComponent },
      { path: 'tasks/new', component: NewTaskComponent },
    ], //use of nested routing
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
