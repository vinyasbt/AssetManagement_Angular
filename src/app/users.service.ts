import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users=[
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    }
  ]
printService()
{
  console.log("method from the service is called");
}
  constructor() { }
}
