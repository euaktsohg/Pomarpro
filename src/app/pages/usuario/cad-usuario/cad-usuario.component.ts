import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

constructor(
  private usuarioService:UsuarioService
){
  
}

  //inicializa o formulario
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl('',Validators.required),
    sobrenome:new FormControl('',Validators.required),
    endereco:new FormControl('',Validators.required),
    telefone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    login:new FormControl('',Validators.required),
  })  

  //Métodos dos controles do formulário
  onIncluir(){
    this.formulario.reset();
      this.formulario.enable();
    
  }


  onSalvar(){
    //guarda as informações em uma variavel para melhorar o acesso
let info = this.formulario.value;
//verifica se está inserindo ou alterando com base no valor
//do ID (se for null,está inserindo, senão está alterando)
if(info.id == null){
//irá inserir no banco de dados um usuário
 this.usuarioService.addUsuario(info).subscribe({
  next: (resposta)=>{
  console.log(resposta)

  },
  error: (erro)=>{
 console.log(erro)
  }
 })
}else{
  //irá alterar o usuário no banco de dados



}


  }

onCancelar(){
 this.formulario.reset();
 this.formulario.disable();


}

}
