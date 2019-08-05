import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  list: Student[] = [
    {
      name: "Sára",
      age: 23,
      email: "ajandek@freemail.com",
      gender: false,
      regDate: new Date(),
      skills: [{
        name: "js",
        level: 7
      }]
    },
    {
      name: "Timi",
      age: 25,
      email: "timimi@gmail.com",
      gender: false,
      regDate: new Date(),
      skills: [{
        name: "css",
        level: 9
      }]
    },
    {
      name: "Dani",
      age: 26,
      email: "danini@gmail.com",
      gender: true,
      regDate: new Date(),
      skills: [{
        name: "angular",
        level: 8
      }]
    }
  ];

  constructor() { }
}
