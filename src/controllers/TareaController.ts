import { Tarea } from '../models/Tarea.ts';
import { TareaView } from '../views/TareaView.ts';
import { StorageService } from '../services/StorageService.ts';

export class TareaController {
  private tareas: Tarea[] = [];

  constructor(
    private view: TareaView,
    private storageService: StorageService
  ) {}

  inicializar(): void {
    this.tareas = this.storageService.obtenerTareas();
    this.view.renderizar(this.tareas);
  }
}
