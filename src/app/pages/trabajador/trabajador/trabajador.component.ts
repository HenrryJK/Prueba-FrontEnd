import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../models/trabajador';
import { TrabajadorService } from '../../services/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {
  trabajadores: any;
 
  TrabajadorModel:Trabajador = new Trabajador();
  constructor(private trabajadorService: TrabajadorService) {
    
   }

  ngOnInit(): void {
    this.listarTrabajador();
  }

  listarTrabajador():void{
    this.trabajadorService.getTrabajadores().subscribe(data =>{
      console.log(data)
    }) 
  }

}
