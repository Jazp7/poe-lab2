# Gestor de Tareas por Prioridad (MVC)

Aplicación web desarrollada en TypeScript bajo el patrón arquitectónico Modelo-Vista-Controlador (MVC) para la gestión eficiente de tareas con niveles de prioridad, filtrado, ordenamiento y persistencia en `localStorage`.

## Características Principales
- **Registro de Tareas**: Título y prioridad (`alta`, `media`, `baja`).
- **Priorización Visual**: Códigos de color e indicadores según el nivel de urgencia.
- **Filtros Flexibles**: Filtrado combinado por prioridad y estado de completitud.
- **Ordenamiento Dinámico**: Ordenar por fecha o por prioridad.
- **Persistencia**: Almacenamiento local mediante `localStorage`.
- **Acciones Seguras**: Confirmación previa a la eliminación de tareas.

## Estructura del Proyecto
```text
poe-lab2/
├── index.html
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── main.ts
    ├── models/
    │   └── Tarea.ts
    ├── views/
    │   └── TareaView.ts
    ├── controllers/
    │   └── TareaController.ts
    ├── services/
    │   └── StorageService.ts
    └── styles/
        └── styles.css
```

## Requisitos y Ejecución
1. Instalar dependencias con [pnpm](https://pnpm.io/):
   ```bash
   pnpm install
   ```
2. Iniciar el servidor de desarrollo local:
   ```bash
   pnpm dev
   ```
3. Construir para producción:
   ```bash
   pnpm build
   ```
