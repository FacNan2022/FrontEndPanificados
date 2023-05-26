import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PanificadosServiceService } from 'src/app/service/panificados-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public panificadoService: PanificadosServiceService) { }
  persona: Persona = new Persona("","","","","","","","","");

  ngOnInit(): void {
    this.panificadoService.lista().subscribe(data => {
      this.persona=data[0]
      console.log(data[0].apellido)
    },
    (error: any) => {
      console.error(error);
    });
  }


}
