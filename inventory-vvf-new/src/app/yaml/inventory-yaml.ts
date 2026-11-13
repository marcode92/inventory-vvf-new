export interface Model {
  id_modello:string,
  nome_modello:string,
  quantita: Number,
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
  caratteristiche: Fields,
  stato: 'DA_INVENTARIARE' | 'FUORI_USO' | 'MAGAZZINO',
  creation_date:  Date,
  categoria:string,
  sottocategoria:string
}

export interface Fields {
  nome_campo?: string,
  tipo_campo?:string,
  value?:string | number | boolean,
}
export enum TipoCampo {
  NUME = 'Numerico',
  TESTO = 'Testo',
  BOOL = 'Decisionale',
}

export enum Stato {
  DA_INVENTARIARE = 'Da inventariare',
  MAGAZZINO = 'Magazzino',
  FUORI_USO = 'Fuori uso'
}