import { FocusMonitor } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-inv-categ',
  imports: [MatIcon,MatDialogModule,ReactiveFormsModule,
     MatFormField, MatInputModule, MatIconModule, CommonModule,
     MatSelectModule, MatButtonModule],
  templateUrl: './inv-categ.html',
  styleUrl: './inv-categ.scss',
})
export class InvCateg {
  listCatName = ['asd','asd','asd']
  listsottoCatName = ['sottocateg','sottocateg','sottocateg']
  categoryCtrl = new FormGroup({
    nomeCat: new FormControl(''),
    nomesottoCat: new FormControl('')
  })

  constructor(private dialogRef: MatDialogRef<InvCateg>){

  }

  save(){
    this.dialogRef.close(true);
  }
}
