import { Tarea } from '../models/Tarea.ts';

export class TareaView {
  private container: HTMLElement;

  constructor(containerId: string = 'app') {
    const el = document.getElementById(containerId);
    if (!el) {
      throw new Error(`Elemento con ID #${containerId} no encontrado en el DOM.`);
    }
    this.container = el;
  }

  renderizar(tareas: Tarea[]): void {
    // Renderizado básico inicial
    this.container.innerHTML = `
      <header>
        <h1>Gestor de Tareas por Prioridad</h1>
      </header>
      <main>
        <p>Total de tareas: ${tareas.length}</p>
      </main>
    `;
  }
}
