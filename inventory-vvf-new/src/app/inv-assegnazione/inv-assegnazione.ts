import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Article } from '../yaml/inventory-yaml';

@Component({
  selector: 'app-inv-assegnazione',
  imports: [MatCardModule, ReactiveFormsModule, MatIcon,ReactiveFormsModule,
     MatFormField, MatInputModule, CommonModule,
     MatSelectModule, MatButtonModule,MatTableModule],
  templateUrl: './inv-assegnazione.html',
  styleUrl: './inv-assegnazione.scss',
})
export class InvAssegnazione {
  displayedColumns: string[] = [
    'posizione',
    'articolo',
    'delete',
  ]

  dataSource = [
    {
      num_inventario: '10025',
      seriale: 'FJX12345',
      stato:'DA_INVENTARIARE',
      possessore: 'Mario Rossi',
      last_move: '2026-11-08'
    },
    {
      num_inventario: '10026',
      seriale: 'FJX12346',
      stato:'assegnato',
      possessore: null,
      last_move: '2026-11-09'
    },
    {
      num_inventario: '10027',
      seriale: 'FJX12347',
      stato: 'DA_INVENTARIARE',
      possessore: 'Luigi Bianchi',
      last_move: '2026-11-10'
    }
  ];

  listCatName = ['asd','asd1','asd2']
  listsottoCatName = ['sottocateg','sottocateg','sottocateg']
  listModelli = ['fujitsu','dell']
  listModelli2 = ['svelto','smac']
  models = ['']

  assignForm = new FormGroup({
    stanza: new FormControl(),
    postazione: new FormControl(),
    possessore: new FormControl(),
    categoria: new FormControl(),
    sottocategoria: new FormControl({value:'',disabled:true}),
    modello: new FormControl({value:'',disabled:true}),
    delete: new FormControl()
    /* tecn:  new FormArray<FormGroup>([]) */
})

ngOnInit(){
  this.assignForm.controls.categoria.valueChanges.subscribe(value => {
    const sottocategoria = this.assignForm.controls.sottocategoria;
    const modello = this.assignForm.controls.modello;
    console.log('PRIMA:', sottocategoria.disabled);
    sottocategoria.reset();
    if(value){
      sottocategoria.enable();
      modello.enable()
      if(value === 'asd1')
      this.models = this.listModelli
    else 
      this.models = this.listModelli2
    } else {
      sottocategoria.disable();

    }

    console.log(':', sottocategoria.disabled);
  })
}
move(){
  console.log("move")
}

removeRow(index: number) {
  /* this.dataSource = this.dataSource.filter(x => x.num_inventario = )  */
  }
}
