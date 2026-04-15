# WebQuest · Proyecto Aire Limpio

Sitio web estático en HTML, CSS y JavaScript para la WebQuest **“Aire limpio”**, centrada en el diseño del sistema eléctrico de ventilación en una mina.

## Estructura

- `index.html` → estructura de la web
- `styles.css` → estilos visuales y responsive
- `script.js` → navegación activa, fases interactivas y mini quizzes
- `assets/` → carpeta reservada para imágenes o recursos futuros

## Cómo abrirlo en local

Basta con abrir `index.html` en el navegador.

## Subirlo a GitHub

```bash
git init
git add .
git commit -m "WebQuest Aire Limpio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Publicarlo con GitHub Pages

1. Entra en tu repositorio.
2. Ve a **Settings**.
3. Abre **Pages**.
4. En **Build and deployment**, selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/root`
5. Guarda los cambios.

La web quedará publicada en una URL similar a:

`https://TU-USUARIO.github.io/TU-REPO/`

## Nota

La versión actual usa ilustración generada con CSS para que el proyecto funcione sin depender de imágenes externas.
