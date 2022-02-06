import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Sheet',
      redirecTo: '/action-sheet'
    },

    {
      icon: 'appstore',
      name: 'Alert',
      redirecTo: '/alert'
    }
  ]

  ngOnInit() {
  }

}

interface Componente{
  icon: string,
  name: string,
  redirecTo:string
} 