# Instalar Tela Viva v1.4 sin copias de seguridad

Desde PowerShell, con el archivo en Descargas:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\Downloads\Actualizar-TelaViva-v1.4.ps1"
```

Requisitos: repo limpio en `Documentos/GitHub/Telaviva`, rama `main` y remoto `Elberlord/Telaviva`. El script escribe la versión, conserva `js/config.js`, valida sintaxis JavaScript si existe Node, crea commit y realiza `git push origin main`. No hace `git init`, no crea backups ni fuerza push.

GitHub Pages: https://elberlord.github.io/Telaviva/ (usar Ctrl+F5 tras publicación).
