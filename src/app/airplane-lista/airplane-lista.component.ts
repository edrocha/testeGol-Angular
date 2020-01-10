import { Component, OnInit } from '@angular/core';
import { airplanesService } from '../airplanes.service';
import { airplane } from "../airplane";


@Component({
  selector: 'app-airplane-lista',
  templateUrl: './airplane-lista.component.html',
  styleUrls: ['./airplane-lista.component.css']
})
export class airplaneListaComponent implements OnInit {
  airplane : airplane[];
    
  constructor(private service: airplanesService) { 

  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.airplane = dados);
  }

  onDelete(id){
    console.log('id->'+id);
    var r = confirm('Apaga Registro?');
    if (r==true) {
      this.service.remove(id).subscribe(
        success => location.reload()
      )
      

    }
  }

  

}
