import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  

  alumnoForm: FormGroup;

  cursos: string[] = [
    'Desarrollo Web',
    'JavaScript',
    'React',
    'Angular',
    'C',
    'Java'
  ];

  constructor(private _fb: FormBuilder, private dialogRef: MatDialogRef<FormularioComponent>) {
    this.alumnoForm = this._fb.group({
      nombre: ['', Validators.required, Validators.minLength(2)],
      apellido: ['', Validators.required, Validators.minLength(2)],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      curso: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  formularioSubmit(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
      return;
    }

    this.dialogRef.close(this.alumnoForm.value);
  }
}
