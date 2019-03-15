import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/cromartic/user.service';
import { User } from '../bean/user';
import { SocialNetwork } from '../bean/social-network';
import { SocialNetworkService } from '../service/cromartic/social-network.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {

  users: User[] = [];  

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

  loadSocialNetworkService(username: string){
    console.log(`oa ${username}`);
  }

}
