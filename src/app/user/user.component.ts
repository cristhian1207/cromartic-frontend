import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/cromartic/user.service';
import { User } from '../bean/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User('','','','','','', new Date(), new Date());
  username: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
    this.userService.user(this.username).subscribe(
      data => {this.user = data; console.log(this.user);},
      error => console.log(error)
    );
  }

}
