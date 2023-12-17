import { Component } from '@angular/core';
import { User } from '@@models';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  dataSource = this.usersService.getAllUsers();

  displayedColumns = ['username', 'actions'];

  constructor(private readonly usersService: UsersService) {}

  deleteUser(user: User) {
    this.usersService.deleteUser(user);

    this.dataSource = this.usersService.getAllUsers();
  }
}
