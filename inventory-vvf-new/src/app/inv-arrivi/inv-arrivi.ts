import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { tap, switchMap, of } from 'rxjs';
import { ServiceInventory } from '../service/service-inventory';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inv-arrivi',
  imports: [MatFormField, MatInputModule,
    MatSelectModule, MatSnackBarModule, MatDividerModule, 
    MatSlideToggle, MatIcon,MatDialogModule,ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
     MatDatepickerModule, MatSelectModule, MatButtonModule],
  templateUrl: './inv-arrivi.html',
  styleUrl: './inv-arrivi.scss',

})
export class InvArrivi {
  listCatName = new Map<string, string>
  listsottoCatName = new Map<string, string>
  arrivalCtrl = new FormGroup({
    modello: new FormControl({ value: '', disabled: true }),
    categoria: new FormControl(''),
    sottocategoria: new FormControl({ value: '', disabled: true }),
    quantita: new FormControl(''),
    data: new FormControl<Date | null>(new Date(),Validators.required),
    mittente: new FormControl({value:'',disabled:true}),
  })

  constructor(private serviceInventory: ServiceInventory){}

ngOnInit(){
   this.serviceInventory.getCategoryList().subscribe(x => {
      x.forEach(cat => {
        if (cat.id)
          this.listCatName.set(cat.id, cat.nome_categoria)
      })
    })

    this.arrivalCtrl.get('categoria')?.valueChanges.pipe(
      tap(() => {
        this.arrivalCtrl.controls.sottocategoria.disable();
        this.arrivalCtrl.controls.sottocategoria.reset()
        this.listsottoCatName.clear()
      }),
      switchMap(id =>
        id ? this.serviceInventory.getSottoCategoryList(id) : of([]))).subscribe(x => {
          if (x.length) {
            this.arrivalCtrl.get('sottocategoria')?.enable();
            x.forEach(cat => {
              if (cat.id)
                this.listsottoCatName.set(cat.id, cat.nome_sottocategoria)
            })
          }
        })}
}
