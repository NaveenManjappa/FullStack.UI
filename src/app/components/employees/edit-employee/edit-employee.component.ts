import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  employeeDetail: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          //call the api
          this.empService.getEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetail = response;
              }
            })
        }
      }
    })
  }

  updateEmployee() {
    this.empService.updateEmployee(this.employeeDetail.id, this.employeeDetail)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        }
      })
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployee(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    })
  }
}
