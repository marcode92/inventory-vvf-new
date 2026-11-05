export interface Model {
  id_modello:string,
  nome_modello:string,
  quantita: Number,
  caratteristiche: Fields,
  stato: Stato,
  creation_date:  Date,
  categoria:string,
  sottocategoria:string,
}

export interface Fields {
  nome_campo?: string,
  tipo_campo?:string,
  value?:string | number | boolean,
}

export enum Stato {
  DA_INVENTARIARE = 'Da inventariare',
  COMPLETO = 'Completo'
}