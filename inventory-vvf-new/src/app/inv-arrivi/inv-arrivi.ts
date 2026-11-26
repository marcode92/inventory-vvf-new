import { CommonModule, formatDate } from '@angular/common';
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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArrivalSave, ArrivalTableInfo } from '../yaml/inventory-yaml';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-inv-arrivi',
  imports: [MatFormField, MatInputModule,
    MatSelectModule, MatSnackBarModule, MatDividerModule,
    MatSlideToggle, MatIcon, MatDialogModule, ReactiveFormsModule,
    MatFormField, MatInputModule, MatIconModule, CommonModule,
    MatDatepickerModule, MatSelectModule, MatButtonModule, MatTableModule,
    MatCheckboxModule],
  templateUrl: './inv-arrivi.html',
  styleUrl: './inv-arrivi.scss',

})
export class InvArrivi {
  selection = new SelectionModel<ArrivalTableInfo>(false, []);
  dataSource = new MatTableDataSource<ArrivalTableInfo>([])

  displayedColumns = [
    'select',
    'nome_categoria',
    'nome_sottocategoria',
    'nome_modello'
  ];

  arrivalCtrl = new FormGroup({
    quantita: new FormControl(''),
    data_arrivo: new FormControl<Date>(new Date(),{nonNullable:true}),
    mittente: new FormControl(''),
  })

  constructor(private serviceInventory: ServiceInventory, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.serviceInventory.getArrivalTableInfo().subscribe(x => {
      this.dataSource.data = x;
    })
  }

  save() {
   let arrival: ArrivalSave = {}
   let id_modello: string;
   let data_arrivo = formatDate(
    this.arrivalCtrl.get('data_arrivo')!.value,
    'dd-MM-yyyy',
    'it-IT')

    if (this.selection.hasValue()) {
      const id_modello = this.selection.selected[0].id_modello;
      console.log("id_modellooo",id_modello)
      
      arrival = {
        quantita: this.arrivalCtrl.get('quantita')?.value || '0',
        mittente: this.arrivalCtrl.get('mittente')?.value || '',
        id_modello,
        data_creation: data_arrivo || '',
      }
      this.serviceInventory.createArrival(arrival).subscribe(x =>{
        console.log(x)
      })
      
    } else {
       const error = "Seleziona un modello"
                this.snackBar.open(error,'',{duration:3000})
    }
  }
}
