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
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ArrivalModels } from '../yaml/inventory-yaml';

@Component({
  selector: 'app-inv-arrivi',
  imports: [MatFormField, MatInputModule,
    MatSelectModule, MatSnackBarModule, MatDividerModule, 
    MatSlideToggle, MatIcon,MatDialogModule,ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
     MatDatepickerModule, MatSelectModule, MatButtonModule, MatTableModule],
  templateUrl: './inv-arrivi.html',
  styleUrl: './inv-arrivi.scss',

})
export class InvArrivi {
  selection = new SelectionModel<number>(false, []);
  dataSource = new MatTableDataSource<ArrivalModels>([])

  displayedColumns = [
    'select',
    'nome_categoria',
    'nome_sottocategoria',
    'nome_modello'
  ];

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
  this.serviceInventory.getArrivalModels().subscribe(x => {
    this.dataSource.data = x;
  })
}
}
