import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'app/models/company.model';
import { CompanyService } from 'app/services/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  public formularyUp: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    fantasyName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
    })

  public companies: Company[] = []
  public company_id: number
  public company: Company
 

  constructor(private companyService:CompanyService) { }



  ngOnInit(): void {
    this.listCompanies()
  }

  public listCompanies(){
    this.companyService.getCompanies()
   .then((comp: Company[]) => {
     this.companies = comp
   })
  }

  public referenceId(companyId: number){
    this.company_id = companyId
    }

    public listCompany(company_id: number){
    this.companyService.findById(company_id).subscribe(response => {
       this.company = response
       this.formularyUp = new FormGroup({
         id: new FormControl(company_id),
         name: new FormControl(response.name, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
         fantasyName: new FormControl(response.fantasyName, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
         cnpj: new FormControl(response.cnpj, [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
       })
      
      },
      error => {
        console.log(error)
      })
    }

    public edit(company_id: string){
      let aux: Company
      aux = this.formularyUp.value
      this.companyService.update(company_id,aux)
      console.log(aux, company_id)
           
    }
 
}
