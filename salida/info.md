#informacion
en esta carpeta sale se guardara los resultados de la aplicacion

la carpeta de nodeno se guardan porque son de terceros y se pueden recuperar al usar el comando de npm install 
este lo que hace es buscar en los archivos .json y checar que se necesitan para poder arrancar 


para hacer respaldos en git es necesario arrancar primero que es con el comando en la terminal
git init ------------------------
este verificara primero cuales son las carpetas o archivos que no se han guardado y cuales se 
ignoraran 

el siguiente comando es 
git add . -----------------------
este esta indicando cuales seran los archivos que se tomaran en cuenta para guardar con el "."
se esta tomando en cuenta todos los archivos 

el siguiente comando es 
git commit -m "x comentario"-----
para poder subir alguna modificacion se debe de tener una leve descripcion para el usuario 
asi poder distingiar que ha hecho antes de la modificacion


el comando para para reacer del ultimo comentario
git checkout -- .     -----------
este restablecera todos los archivos del ultimo comentario, deberia de haber un para restablecer solamente un archivo y no todos a la vez
supongo que es como el de seleccionar, remplazar el . por el archivo deseado

el comando para enviar en github es con los siguiente comandos
git remote add origin https
git branch -M main
git push -u origin main