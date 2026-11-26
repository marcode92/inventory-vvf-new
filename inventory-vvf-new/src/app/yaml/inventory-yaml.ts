export interface Model {
  id_modello?:string,
  nome_modello?:string,
  id_categoria?:string,
  id_sottocategoria?:string,
  caratteristiche?:string,
}

export interface Categoria {
 id?:string,
 nome_categoria: string
}

export interface Sottocategoria {
  id?:string,
 nome_sottocategoria: string
}

export interface Article {
  id_modello:string,
  caratteristiche: string,
  stato: 'DA_INVENTARIARE' | 'FUORI_USO' | 'MAGAZZINO',
  creation_date:  Date,
  categoria:string,
  sottocategoria:string
}

export interface ArrivalTableInfo {
  id_modello?:string,
  nome_modello?:string,
  id_categoria?:string,
  nome_categoria?: string,
  id_sottocategoria?: string,
  nome_sottocategoria?:string
}

export interface ArrivalSave {
  id_modello?:string,
  quantita?: string,
  mittente?: string,
  data_creation?: string,
}

export enum Stato {
  DA_INVENTARIARE = 'Da inventariare',
  MAGAZZINO = 'Magazzino',
  FUORI_USO = 'Fuori uso'
}