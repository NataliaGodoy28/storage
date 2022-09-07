import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string
  clave: string

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.create()
    this.storage.get("usuarios").then((val) => {
      if (val == null) {
        this.storage.set("usuarios", [])
      }
    })
  }

  login(){
    this.storage.get("usuarios").then((lista) => {
      lista.forEach(element => {
        if(element.usuario == this.usuario && element.clave == this.clave){
          this.router.navigate(['/home'])
          return

        }
      });
      console.log("Datos incorrectos")
    })
  }
}


