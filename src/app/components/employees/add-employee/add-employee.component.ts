import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };


  constructor(private empService: EmployeeService, private router: Router) {


  }

  addEmployee() {
    //console.log(this.addEmployeeRequest);
    this.empService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (emp) => {
          console.log(emp);
          this.router.navigate(['employees']);
        }
      });
  }
}
