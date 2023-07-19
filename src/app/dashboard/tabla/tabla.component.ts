import { Component } from '@angular/core';
import { Alumno } from '../model';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'fechanacimiento', 'curso', 'genero'];

  
  dataSource: Alumno[] = [];


}
