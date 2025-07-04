import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<'asc' | 'desc'>();
  order = input.required<string>();
  private taskServices = inject(TasksService);
  userTasks = computed(() =>
    this.taskServices.allTasks().filter((task) => task.userId === this.userId())
  );
}
