import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Article, Stato } from '../yaml/model';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inv-home',
  imports: [RouterLink, MatIconModule, MatToolbar,MatTableModule, DatePipe,ReactiveFormsModule, CommonModule],
  templateUrl: './inv-home.html',
  styleUrl: './inv-home.scss',
})
export class InvHome {
  
  readonly stato = Stato;

  displayedColumns: string[] = [
    'num_inventario',
    'seriale',
    'possessore',
    'dettagli',
    'last_move'
  ]

  ngOnInit(){
      }

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
  
  checkStato(index: number){
    const chiave = Object.keys(Stato).find(
      key => Stato[key as keyof typeof Stato] === 'Da inventariare' );

      return this.dataSource[index].stato !== chiave
      }

  showDetails(articolo: Article){
    console.log("")
  }

  getEnumValue(stato: string): string{

    return Stato[stato as keyof typeof Stato] ?? stato;
  }

  }
