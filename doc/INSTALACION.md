# Actualización desde PowerShell

1. Coloca `Actualizar-TelaViva-v1.3.ps1` en Descargas.
2. Ejecuta `powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\Downloads\Actualizar-TelaViva-v1.3.ps1"`.
3. El instalador verifica rama main, `origin` correcto, árbol Git limpio y escribe únicamente archivos del proyecto (no `.git`, no backups). Conserva `js/config.js`.
4. Comprueba sintaxis JS si tienes Node.js; crea commit y ejecuta `git push origin main`.
5. Entra a https://elberlord.github.io/Telaviva/ y usa Ctrl+F5.

Si el `push` falla por autenticación o red, el commit queda local.
