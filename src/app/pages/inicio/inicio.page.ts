import { Component, OnInit, ViewChild } from '@angular/core';

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
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirecTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - row',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - forms',
      redirecTo: '/input'
    },
    {
      icon: 'list',
      name: 'Listas - Sliding',
      redirecTo: '/list'
    },
    {
      icon: 'list',
      name: 'Listas - Reorder',
      redirecTo: '/reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirecTo: '/loading'
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