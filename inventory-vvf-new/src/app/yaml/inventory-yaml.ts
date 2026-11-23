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
  idModello:string,
  caratteristiche: string,
  stato: 'DA_INVENTARIARE' | 'FUORI_USO' | 'MAGAZZINO',
  creation_date:  Date,
  categoria:string,
  sottocategoria:string
}

export enum Stato {
  DA_INVENTARIARE = 'Da inventariare',
  MAGAZZINO = 'Magazzino',
  FUORI_USO = 'Fuori uso'
}