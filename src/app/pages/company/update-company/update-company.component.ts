import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'app/models/company.model';
import { CompanyService } from 'app/services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public formularyUp: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    fantasyName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
    })

  @Input() public company: Company
 
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    
  }

 

 public listComp(){
      
  }
  
}
