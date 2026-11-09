# Instalación local y publicación en GitHub

**Carpeta local:** `Documentos\GitHub\Telaviva` (o equivalente de la carpeta Documentos en tu sistema).
**Repo remoto:** `https://github.com/Elberlord/Telaviva` — rama `main`.

1. Descarga `Actualizar-TelaViva.ps1` y guárdalo en **Descargas**.
2. Ejecuta desde PowerShell:

   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\Downloads\Actualizar-TelaViva.ps1"
   ```

3. El script verifica que la carpeta ya sea un repo Git y que `origin` sea `Elberlord/Telaviva`. No inicializa Git, **no hace copias de seguridad**, y reemplaza únicamente los archivos correspondientes a Tela Viva.
4. Actualiza los archivos, crea un commit de los archivos de esta versión y ejecuta `git push origin main`. Si falla la autenticación, puedes hacer el push desde GitHub Desktop.
5. Ve a **Settings → Pages → Deploy from a branch**, selecciona `main` y `/ (root)`.

**Seguridad:** jamás escribas contraseñas ni tokens en archivos del sitio; `js/config.js` es público. No se almacena ni envía ningún pedido al servidor; WhatsApp prepara el texto y el cliente debe enviarlo.
