import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from 'app/models/company.model';
import { CompanyService } from 'app/services/company.service';
import { Location } from '@angular/common';
import { data } from 'jquery';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  public formulary: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    fantasyName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
    })

  public companies: Company[] = []
  public company_id: number
  public company: Company
  
  @Output() public updateList: EventEmitter<any> = new EventEmitter<any>()
  show: boolean = true;

  constructor(private companyService:CompanyService, private location: Location) { }



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

    //Essa função serve para exibir os dados a serem mudados no modal de edição
    public listCompany(company_id: number){
    this.companyService.findById(company_id).subscribe(response => {
       this.company = response
       this.formulary = new FormGroup({
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
      aux = this.formulary.value
      this.companyService.update(company_id,aux)
      this.updateList.emit(this.att())
    }

    public att() {
      this.listCompanies() // para atualizar o dados do array
        this.show = false // tirar tabela do DOM
          setTimeout(() => {
            this.show = true // retorna com tabela para o DOM e os dados atualizados do
            this.listCompanies()
           
          }, 50);
      }
    
    public addCmp(){ //Método para inserção de empresas
        this.companyService.insert(this.formulary.value)
        .subscribe(response => {
          this.att()
        },
        error => {
          console.log(error)
        })
      }
      
    public delete(companyId: number){ //Método para apagar empresa
        companyId = this.company_id;
        this.companyService.delete(companyId)
        this.att()
      }

      public resetFormulary(){
        this.formulary.reset()
      }
}
