import { Component, OnInit } from '@angular/core';
import { Company } from 'app/models/company.model';
import { CompanyService } from 'app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  public companies: Company[] = []
  public company_id: number

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

  public delete(companyId: number){
    this.company_id = companyId
     
  }
}
