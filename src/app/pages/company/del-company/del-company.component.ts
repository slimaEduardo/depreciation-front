import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from 'app/services/company.service';
import { CompanyComponent } from '../company.component';

@Component({
  selector: 'app-del-company',
  templateUrl: './del-company.component.html',
  styleUrls: ['./del-company.component.css']
})
export class DelCompanyComponent implements OnInit {

  @Input() company_id;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  public delete(companyId: number){
    companyId = this.company_id;
    console.log('chegamos', companyId)
    this.companyService.delete(companyId)
  }
}
