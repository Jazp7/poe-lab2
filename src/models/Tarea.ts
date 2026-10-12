export type Prioridad = 'alta' | 'media' | 'baja';

export interface ITarea {
  id: string;
  titulo: string;
  prioridad: Prioridad;
  completada: boolean;
  fecha: string;
}

export class Tarea implements ITarea {
  constructor(
    public id: string,
    public titulo: string,
    public prioridad: Prioridad,
    public completada: boolean = false,
    public fecha: string = new Date().toISOString()
  ) {}
}
