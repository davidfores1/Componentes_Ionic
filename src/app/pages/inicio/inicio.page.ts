import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuCtrl: MenuController, private dataservice:DataService) { }

  componentes: Observable<Componente[]>

  ngOnInit() {
  
    this.componentes = this.dataservice.getMenuOpts();
  
  }

  // toggleMenu(){
  //  this.menuCtrl.toggle();
  // }


}
