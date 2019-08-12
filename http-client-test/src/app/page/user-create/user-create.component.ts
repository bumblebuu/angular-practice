import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userList: User[];
  userSubscription: Subscription;
  newUser: User = new User();
  changeCounter: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }


  onCreate() {
    this.userService.create(this.newUser).subscribe(
      user => {
        this.userList.push(user);
        this.newUser = new User();
        this.changeCounter++;
        this.router.navigate(["../users"], { relativeTo: this.ar });
      },
      err => console.error(err)
    )
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.onCreate();
  }

}
