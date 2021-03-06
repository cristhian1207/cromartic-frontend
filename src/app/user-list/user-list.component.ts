import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/cromartic/user.service';
import { User } from '../bean/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.users().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }
}
