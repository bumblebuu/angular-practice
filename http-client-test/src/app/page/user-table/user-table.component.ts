import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy {

  userList: User[];
  userSubscription: Subscription;
  filterPhrase: string = '';
  orderKey: string = '';
  orderDirection: number = 1;
  changeCounter: number = 0;
  faPhone = faPhone;
  faAt = faAt;
  faSortNumericDown = faSortNumericDown;
  faIdCard = faIdCard;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onDelete(user: User) {
    this.userService.remove(user.id).subscribe(
      response => {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }

  changeOrder(param: string): void {
    if (param === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }

    this.orderKey = param;
  }


}
