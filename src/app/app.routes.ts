import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },

  {
    path: 'users/:userId', //dynamic route-> your-domain/users/u1
    component: UserTasksComponent,
    children: [{ path: 'tasks', component: TasksComponent }], //use of nested routing
  },
];
