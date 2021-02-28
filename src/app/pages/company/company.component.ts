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

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.getProducts()
   .then((comp: Company[]) => {
     this.companies = comp
   })
  }

}
