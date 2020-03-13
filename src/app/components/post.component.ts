import { EmployeesService } from '../employees/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector : 'post',
    templateUrl: '../layouts/post.component.html',
    providers : [EmployeesService]
})

export class PostComponent {

    constructor(private _emp : EmployeesService){

    }

    addEmployee(addEmployeeForm : NgForm) {        
        let formData = addEmployeeForm['form']['value'];

        this._emp.addEmployee(formData['EmployeeId'], formData['BeaconId'], formData['DirectManagerEmployeeId'], formData['MatrixManagerEmployeeId'], 
        formData['HireDate'], formData['Division'], formData['Department'], formData['JobTitle'], formData['JobTitle2'], formData['Location'], formData['Sublocation'], 
        formData['Status'], formData['ConfirmationDate'], formData['PayRollId'], formData['JobTitlDescription'], formData['TradingSystem']).subscribe();

        console.log(formData);
    }
}