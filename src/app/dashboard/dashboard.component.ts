import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FormularioComponent } from './formulario/formulario.component';
import { Alumno } from './model';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showFiller = false;


  public alumnos: Alumno[] = [];

  constructor(private matDialog: MatDialog) { }

  abrirFormulario(): void {
    const dialogref = this.matDialog.open(FormularioComponent)

    dialogref.afterClosed().subscribe({
      next: (valor) => {
        if (valor) {
          console.log('recibido', valor)
        }
        else {
          console.log('cancelado')
        }

      }
    })
  }

}
