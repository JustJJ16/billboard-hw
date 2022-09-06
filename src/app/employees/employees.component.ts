import {Component, OnInit} from '@angular/core';
import {Employee} from "../../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

}
