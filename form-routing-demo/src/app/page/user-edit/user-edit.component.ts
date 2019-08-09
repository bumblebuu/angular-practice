import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService
  ) {
    this.ar.params.forEach(params => {
      this.user = this.userService.getUser(params.id);
    });
  }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    console.log("Itt hívom meg a service update metódusát!", this.user);
  }

}
