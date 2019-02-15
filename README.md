# e2e-webdriverio
Práctica E2E con Webdriverio

En el archivo de pruebas *test/specs/prueba.js* se pueden configurar algunas variables para el desarrollo de las pruebas de conexión con el sitios [Los Estudiantes](https://losestudiantes.co)

- correo
- password

Para correr este proyecto de una forma integral es necesario correr los siguientes comandos:

```
npm install
node_modules/.bin/selenium-standalone install
node_modules/.bin/selenium-standalone start
```

En una nueva consola se digita el siguiente comando:

```
node_modules/.bin/wdio wdio.conf.js
```

Implementado el reporteador gráfico Allure (Ver carpeta allure-report para más detalles)

![alt text](https://github.com/darman89/taller-3-headless-webdriver/blob/master/Allure-Report.png "Pruebas Taller 3")