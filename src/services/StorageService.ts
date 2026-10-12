import { Tarea } from '../models/Tarea.ts';

export class StorageService {
  private readonly storageKey: string;

  constructor(storageKey: string = 'gestor_tareas_data') {
    this.storageKey = storageKey;
  }

  guardarTareas(tareas: Tarea[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tareas));
  }

  obtenerTareas(): Tarea[] {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];
    try {
      const items = JSON.parse(raw) as Tarea[];
      return items.map(item => new Tarea(item.id, item.titulo, item.prioridad, item.completada, item.fecha));
    } catch {
      return [];
    }
  }
}
