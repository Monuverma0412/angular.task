import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  login(firstName: string, lastName: string, dob: string, gmail: string) {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('DOB:', dob);
    console.log('Gmail:', gmail);

  }
}
