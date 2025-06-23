import {
  input,
  Component,
  inject,
  computed,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  private usersService = inject(UsersService);
  //use of activate route
  private activateRoute = inject(ActivatedRoute);
  userName = '';
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activateRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
