import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: { name: string; email: string; }[] = [];
  hasPermission: boolean = true;
  constructor() {}
  
  ngOnInit(): void {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message))
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      {name: 'john', email: 'john@example.com'},
      {name: 'colleen', email: 'colleen@example.com'}
    ];
  }

}
