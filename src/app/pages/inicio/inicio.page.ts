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
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },

    {
      icon: 'storefront-outline',
      name: 'Alert',
      redirecTo: '/alert'
    }
    ,

    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
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