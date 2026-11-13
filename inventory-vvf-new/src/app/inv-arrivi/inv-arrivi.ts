import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-inv-arrivi',
  imports: [MatIcon,MatDialogModule,ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
     MatSelectModule, MatButtonModule],
  templateUrl: './inv-arrivi.html',
  styleUrl: './inv-arrivi.scss',
})
export class InvArrivi {
   listCatName = ['asd','asd1','asd2']
  listsottoCatName = ['sottocateg','sottocateg','sottocateg']
  listModelli = ['fujitsu','dell']
  listModelli2 = ['svelto','smac']
  models = ['']
  arriveForm = new FormGroup({
    modello: new FormControl(''),
    categoria: new FormControl(''),
    sottocategoria: new FormControl({value:'',disabled:true}),
    mittente: new FormControl({value:'',disabled:true}),
    quantità: new FormControl({value:'',disabled:true})
    /* tecn:  new FormArray<FormGroup>([]) */
})

ngOnInit(){
  this.arriveForm.controls.categoria.valueChanges.subscribe(value => {
    const sottocategoria = this.arriveForm.controls.sottocategoria;
    console.log('PRIMA:', sottocategoria.disabled);
    sottocategoria.reset();
    if(value){
      sottocategoria.enable();
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
}
