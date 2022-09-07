import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string
  usuario: string
  clave: string

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create()
    if (this.storage.get("usuarios")== null){
      this.storage.set("usuarios",[])
    } 
  }

  registrar(){
    this.storage.get("usuarios").then((lista)=>{
      lista.push ({"email":this.email,
    "usuario":this.usuario,
  "clave":this.clave
})
this.storage.set("usuarios",lista)
    })

  }

  mostrar(){
  console.log(this.storage.get("usuarios"))
}
}
