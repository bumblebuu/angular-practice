import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userList: User[];
  userSubscription: Subscription;
  user: User = new User();
  changeCounter: number = 0;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private userService: UserService
  ) {
    this.ar.params.forEach(params => {
      this.getOneUser(params.id);
    });
  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.onUpdate(this.user);
  }


  onUpdate(user: User) {
    this.userService.update(user).subscribe(
      response => {
        this.router.navigate(["../../users"], {relativeTo: this.ar});
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }

  getOneUser(id: number) {
    this.userService.getOne(id).subscribe(
      user => {
        this.user = user;
      },
      err => console.error(err)
    )
  }

  

}
