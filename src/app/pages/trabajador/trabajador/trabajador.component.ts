import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  constructor(private trabajadorService: TrabajadorService) {
    
   }

  ngOnInit(): void {
    this.trabajadorService.getTrabajadores().subscribe(data =>{
      console.log(data)
    })
    
    
  }

}
