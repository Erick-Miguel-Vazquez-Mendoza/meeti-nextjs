<!-- BEGIN:nextjs-agent-rules -->
# Este NO es el Next.js que conoces

Esta versión tiene cambios importantes: las API, las convenciones y la estructura de archivos pueden diferir de tus datos de entrenamiento. Lee la guía relevante en `node_modules/next/dist/docs/` antes de escribir cualquier código. Presta atención a los avisos de desaprobación.
<!-- END:nextjs-agent-rules -->

# Convenciones del Proyecto para la Codificación con Agentes

**Idioma de respuesta:** Siempre responde en español.

Este documento describe las directrices esenciales de construcción, linting y estilo de código para este proyecto Next.js. Adherirse a estas convenciones garantiza la coherencia, la mantenibilidad y la colaboración eficiente.

## 1. Resumen del Proyecto

Este proyecto es una aplicación Next.js construida con TypeScript y estilizada con Tailwind CSS. Sigue una arquitectura basada en características (feature-based) y componentes, y aprovecha las capacidades de enrutamiento del sistema de archivos y de obtención de datos de Next.js.

## 2. Comandos de Construcción, Linting y Pruebas

Los siguientes comandos están definidos en `package.json` para tareas de desarrollo comunes:

*   **Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```
    Inicia el servidor de desarrollo de Next.js.

*   **Construcción del Proyecto:**
    ```bash
    npm run build
    ```
    Construye la aplicación Next.js para producción.

*   **Iniciar Servidor de Producción:**
    ```bash
    npm run start
    ```
    Inicia el servidor de producción de Next.js (después de la construcción).

*   **Linting del Código:**
    ```bash
    npm run lint
    ```
    Ejecuta ESLint para verificar la calidad del código y los problemas de estilo.

## 3. Directrices de Estilo de Código

### 3.1 Principios Generales

*   **Claridad:** El código debe ser fácil de entender y autoexplicativo.
*   **Consistencia:** Sigue los patrones existentes dentro de la base de código.
*   **Legibilidad:** Prioriza la legibilidad humana sobre la astucia.

### 3.2 Importaciones

*   **Orden:**
    1.  Librerías externas (ej., `react`, `next`, `clsx`)
    2.  Módulos internos usando el alias `@/` (ej., `@/components/Button`)
    3.  Importaciones relativas (ej., `./utils`)
*   **Uso de Alias:** Utiliza el alias `@/` para importaciones absolutas desde la raíz del proyecto, como está configurado en `tsconfig.json`.
    ```typescript
    // Correcto
    import { Button } from '@/components/ui/button';
    import { fetchPosts } from '@/lib/api';

    // Evitar (a menos que se importen hermanos o hijos en el mismo directorio)
    // import { Button } from '../../components/ui/button';
    ```

### 3.3 Formato

*   **ESLint:** El proyecto utiliza ESLint (a través de `npm run lint`) para la calidad del código y el formato automático. Asegúrate de que tu editor se integre con ESLint para aplicar el formato al guardar.
*   **Prettier:** Aunque no está configurado explícitamente, Prettier es un compañero común de ESLint para un formato de código consistente. Si se introduce, asegúrate de que esté integrado con ESLint para evitar conflictos.

### 3.4 Uso de TypeScript

*   **Tipado Estricto:** Adhiérete a las reglas estrictas de TypeScript (`"strict": true` en `tsconfig.json`).
*   **Tipos Explícitos:** Usa tipos explícitos para argumentos de funciones, valores de retorno y variables/props complejas donde pueda surgir ambigüedad.
*   **Interfaces/Tipos:** Define interfaces o tipos claros para estructuras de datos, props de componentes y respuestas de API.
*   **Genéricos:** Utiliza genéricos para componentes y funciones reutilizables que operan en varios tipos.

### 3.5 Convenciones de Nomenclatura

*   **Componentes:** PascalCase (ej., `MyComponent`, `UserProfile`).
*   **Variables/Funciones:** camelCase (ej., `myVariable`, `getData`).
*   **Archivos:** kebab-case para directorios de componentes y archivos de ruta (ej., `user-profile/index.tsx`, `[id].tsx`). PascalCase para los archivos de componentes mismos (ej., `Button.tsx`).
*   **Constantes:** SCREAMING_SNAKE_CASE para constantes globales.

### 3.6 Estructura de Componentes (Next.js)

*   **Componentes Funcionales:** Prefiere los componentes funcionales con React Hooks.
*   **Tipado de Props:** Define claramente las props de los componentes usando interfaces o tipos de TypeScript.
*   **Estado Local:** Gestiona el estado local del componente con `useState`.
*   **Efectos Secundarios:** Maneja los efectos secundarios usando `useEffect`.
*   **Componentes de Servidor:** Aprovecha los Componentes de Servidor de Next.js cuando sea apropiado para el rendimiento.

### 3.7 Estilo (Tailwind CSS)

*   **Utility-First:** Usa las clases de utilidad de Tailwind CSS directamente en JSX para el estilo.
*   **Diseño Responsivo:** Utiliza los prefijos responsivos de Tailwind (ej., `sm:`, `md:`, `lg:`) para diseños adaptables.
*   **Evitar Estilos en Línea:** Minimiza el uso de atributos `style` en línea; prefiere las clases de Tailwind.
*   **`clsx`:** Usa `clsx` (ya una dependencia) para combinar clases de Tailwind condicionalmente.

### 3.8 Manejo de Errores

*   **Operaciones Asíncronas:** Usa bloques `try...catch` o Promise `.catch()` para el manejo de errores en operaciones asíncronas (ej., obtención de datos).
*   **Validación de Formularios:** Implementa una validación robusta de formularios tanto en el cliente como en el servidor.
*   **Errores de API:** Maneja las respuestas de error específicas de la API con elegancia y proporciona retroalimentación amigable al usuario.

### 3.9 Específicos de Next.js

*   **Obtención de Datos:** Usa `getServerSideProps`, `getStaticProps` o `use` (React 19) para la obtención de datos, según los requisitos.
*   **Rutas de API:** Define rutas de API en el directorio `pages/api` (o `app/api` en el App Router) para la lógica de backend.
*   **Enrutamiento del Sistema de Archivos:** Adhiérete a las convenciones de enrutamiento del sistema de archivos de Next.js (ej., `pages/users/[id].tsx` para rutas dinámicas).

### 4. Convenciones de Git

*   **Mensajes de Commit:** Escribe mensajes de commit claros y concisos. Sigue un estilo de commit convencional (ej., `feat: añadir nueva funcionalidad`, `fix: resolver error`).
*   **Ramificación:** Usa nombres de ramas descriptivos (ej., `feature/new-auth`, `bugfix/fix-login`).

---
