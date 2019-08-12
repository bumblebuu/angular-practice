import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  faUsers = faUsers;
  faCoins = faCoins;

  userList: User[];
  active: number = 0;
  inActive: number = 0;
  all: number = 0;
  balance: string;
  //fruits: string[] = [];
  apple: number = 0;
  strawberry: number = 0;
  banana: number = 0;


  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => {
        this.activeUsers(users);
        this.inActiveUsers(users);
        this.allUsers();
        this.getBalance(users);
        // this.getFruits(users);
        this.apple = this.countFruits(users, 'apple');
        this.strawberry = this.countFruits(users, 'strawberry');
        this.banana = this.countFruits(users, 'banana');
      });
  }

  activeUsers(users: User[]): number {
    for (let i = 0; i < users.length; i++) {
      if (users[i].isActive) {
        this.active++;
      }
    }
    return this.active;
  }

  inActiveUsers(users: User[]): number {
    for (let i = 0; i < users.length; i++) {
      if (!users[i].isActive) {
        this.inActive++;
      }
    }
    return this.inActive;
  }

  allUsers(): number {
    this.all = this.active + this.inActive;
    return this.all;
  }

  getBalance(users: User[]): string {
    let regex = /\W/;
    let bal = 0;

    for (let i = 0; i < users.length; i++) {
      bal += parseFloat(users[i].balance
        .replace(regex, '')
        .replace(',', ''));
      this.balance = bal.toFixed(2);
    }
    return this.balance;
  }

  // getFruits(users: User[]): string[] {
  //   for (let i = 0; i < users.length; i++) {
  //     //if (users[i].favoriteFruit) {
  //     if (this.fruits.toString().indexOf(users[i].favoriteFruit) == -1) {
  //       this.fruits.push(users[i].favoriteFruit);
  //     }
  //     //}
  //   }
  //   console.log(this.fruits);
  //   return this.fruits;
  // }

  countFruits(users: User[], fruit: string): number {
    let sum: number = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].favoriteFruit == fruit) {
        sum++;
      }
    }

    return sum;
  }


}
