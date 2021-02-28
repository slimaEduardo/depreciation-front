import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'app/services/company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  public formulary: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    fantasyName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
    })
 
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    
  }

  public addCmp(){
    console.log(this.formulary)
    this.companyService.insert(this.formulary.value)
    .subscribe(response => {
      console.log("ok!");
    },
    error => {
      console.log(error)
    })
  }
  
}
