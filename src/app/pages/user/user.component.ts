import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    
    public formulary: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('' , [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
        phone1: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),Validators.pattern('[0-9,0-9]*')]),
        phone2: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),Validators.pattern('[0-9,0-9]*')])
        })
    
      public users: User[] = []
      public user_id: number
      public user: User
      
      @Output() public updateList: EventEmitter<any> = new EventEmitter<any>()
      show: boolean = true;
    
      constructor(private userService:UserService) { }
    
    
    
      ngOnInit(): void {
        this.listCompanies()
      }
    
      public listCompanies(){
        this.userService.getUsers()
       .then((usr: User[]) => {
         this.users = usr
       })
      }
    
      public referenceId(userId: number){
        this.user_id = userId
        }
    
        //Essa função serve para exibir os dados a serem mudados no modal de edição
        public listUser(user_id: number){
        this.userService.findById(user_id).subscribe(response => {
           this.user = response
           this.formulary = new FormGroup({
             id: new FormControl(user_id),
             name: new FormControl(response.name, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
             email: new FormControl(response.email, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
             phone1: new FormControl(response.phone1, [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')]),
             phone2: new FormControl(response.phone1, [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern('[0-9,0-9]*')])
           })
          
          },
          error => {
            console.log(error)
          })
        }
    
        public edit(user_id: number){
          let aux: User
          aux = this.formulary.value
          this.userService.update(user_id,aux)
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
        
        public addUser(){ //Método para inserção de empresas
            this.userService.insert(this.formulary.value)
            .subscribe(response => {
              this.att()
            },
            error => {
              console.log(error)
            })
          }
          
        public delete(userId: number){ //Método para apagar empresa
            userId = this.user_id;
            this.userService.delete(userId)
            this.att()
          }
    
          public resetFormulary(){
            this.formulary.reset()
          }
}
