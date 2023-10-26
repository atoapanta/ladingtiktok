## Formulario de registro para nuevos clientes
  Este proyecto es un formulario de registro para nuevos clientes en nuestro sitio web. El formulario está desarrollado en React y utiliza un backend en PHP para almacenar los datos de los usuarios.
- Cómo empezar
  Para empezar, sigue estos pasos:
  Clona el repositorio en tu máquina local.
  Instala las dependencias del proyecto utilizando el comando npm install.
  Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
  REACT_APP_API_URL=http://localhost:8080/contactanos/register.php

  - Estas variables de entorno se utilizan para especificar la URL del backend en PHP.
  - Inicia el servidor de desarrollo utilizando el comando npm start.
  - Abre tu navegador web y navega a http://localhost:3000 para ver el formulario de registro.
## Tecnologías utilizadas
  - React
  - PHP
  - Axios
  - SweetAlert2
## Cómo funciona
  El formulario de registro está compuesto por cinco campos: nombres completos, número de identificación, número de celular, correo electrónico y ciudad. Cuando el usuario envía el formulario, los datos se envían al backend en PHP utilizando la biblioteca Axios. Si el registro es exitoso, se muestra un mensaje de confirmación utilizando la biblioteca SweetAlert2.
## Cómo contribuir
Si deseas contribuir a este proyecto, sigue estos pasos:
Haz un fork del repositorio.
Crea una rama para tu nueva funcionalidad utilizando el comando git checkout -b nueva-funcionalidad.
Implementa tu nueva funcionalidad y haz los cambios necesarios.
Haz un commit de tus cambios utilizando el comando git commit -m "Agrega nueva funcionalidad".
Haz un push de tus cambios utilizando el comando git push origin nueva-funcionalidad.
Crea un pull request en GitHub.
Espera a que tu pull request sea revisado y aceptado.
Licencia
Este proyecto está licenciado bajo la Licencia MIT.
