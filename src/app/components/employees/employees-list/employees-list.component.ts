import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  //   {
  //     id: 1,
  //     name: 'Naga Shekar',
  //     email: 'abcd@gmail.com',
  //     phone: 1818181818,
  //     salary: 50000,
  //     department: 'HR'
  //   },
  //   {
  //     id: 2,
  //     name: 'John Smith',
  //     email: 'john@gmail.com',
  //     phone: 9829292929,
  //     salary: 89000,
  //     department: 'Marketing'
  //   },
  //   {
  //     id: 3,
  //     name: 'Steven Smith',
  //     email: 'steve@gmail.com',
  //     phone: 7893893993,
  //     salary: 75000,
  //     department: 'IT'
  //   }
  // ];

  constructor(private employeesService: EmployeeService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe({
        next: (response) => {
          this.employees=response;
          console.log(response);
        }
      })
  }
}
