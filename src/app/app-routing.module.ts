import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'users', component: UserListComponent},
  {path: ':username', component: UserComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
