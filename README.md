# Burger Queen (API Client)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones](#4-consideraciones)
* [5. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [6. Despliegue](#6-despliegue)
* [7. Pistas / tips](#7-pistas--tips)

***

## 1. Preámbulo

[React](https://react.dev/) y [Angular](https://angular.io/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor). Nuestra
clienta nos ha solicitado desarrollar la interfaz que se integre con una API.

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Esta es la información que tenemos de la clienta:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. La usuaria debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

Además la clienta nos ha dado un [link a la documentación](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
que especifica el comportamiento esperado de la API HTTP que deberás consumir.
Ahí puedes encontrar todos los detalles de los _endpoints_, como por ejemplo
qué parámetros esperan, qué deben responder, etc.

El objetivo principal de es aprender a construir una _interfaz web_ usando
el _framework_ elegido (React, Angular o Vue). Todos estos frameworks de
Front-end tratan de solucionar el mismo problema: **cómo mantener la interfaz
y el estado sincronizados**. Así que esta experiencia espera familiarizarte con
el concepto de _estado de pantalla_, y como cada cambio sobre el estado se va
a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

- [ ] **Uso de media queries**

  <details><summary>Links</summary><p>

  * [CSS media queries - MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)
</p></details>

### JavaScript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Cuerpo (body)**

  <details><summary>Links</summary><p>

  * [Cuerpo de Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages#cuerpo)
</p></details>

- [ ] **Verbos HTTP**

  <details><summary>Links</summary><p>

  * [Métodos de petición HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

- [ ] **Encodings y JSON**

  <details><summary>Links</summary><p>

  * [Introducción a JSON - Documentación oficial](https://www.json.org/json-es.html)
</p></details>

- [ ] **CORS (Cross-Origin Resource Sharing)**

  <details><summary>Links</summary><p>

  * [Control de acceso HTTP (CORS) - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
</p></details>

### Angular

- [ ] **Components & templates**

  <details><summary>Links</summary><p>

  * [Angular Components Overview - Documentación oficial (en inglés)](https://angular.io/guide/component-overview)
  * [Introduction to components and templates - Documentación oficial (en inglés)](https://angular.io/guide/architecture-components#introduction-to-components)
</p></details>

- [ ] **Directivas estructurales (ngIf / ngFor)**

  <details><summary>Links</summary><p>

  * [Writing structural directives - Documentación oficial (en inglés)](https://angular.io/guide/structural-directives)
</p></details>

- [ ] **@Input | @Output**

  <details><summary>Links</summary><p>

  * [Component interaction - Documentación oficial (en inglés)](https://angular.io/guide/component-interaction#component-interaction)
</p></details>

- [ ] **Creación y uso de servicios**

  <details><summary>Links</summary><p>

  * [Providing services - Documentación oficial (en inglés)](https://angular.io/guide/architecture-services#providing-services)
</p></details>

- [ ] **Manejo de rutas**

  <details><summary>Links</summary><p>

  * [In-app navigation: routing to views - Documentación oficial (en inglés)](https://angular.io/guide/router)
</p></details>

- [ ] **Creación y uso de Observables.**

  <details><summary>Links</summary><p>

  * [Observables in Angular - Documentación oficial (en inglés)](https://angular.io/guide/observables-in-angular)
</p></details>

- [ ] **Uso de HttpClient**

  <details><summary>Links</summary><p>

  * [Communicating with backend services using HTTP - Documentación oficial (en inglés)](https://angular.io/guide/http)
</p></details>

- [ ] **Estilos de componentes (ngStyle / ngClass)**

  <details><summary>Links</summary><p>

  * [Template syntax - Documentación oficial (en inglés)](https://angular.io/guide/template-syntax#built-in-directives)
</p></details>

### React

- [ ] **JSX**

  <details><summary>Links</summary><p>

  * [Presentando JSX - Documentación oficial](https://react.dev/learn/writing-markup-with-jsx)
</p></details>

- [ ] **Componentes y propiedades (props)**

  <details><summary>Links</summary><p>

  * [Componentes y propiedades - Documentación oficial](https://react.dev/learn/passing-props-to-a-component)
</p></details>

- [ ] **Manejo de eventos**

  <details><summary>Links</summary><p>

  * [Manejando eventos - Documentación oficial](https://react.dev/learn/responding-to-events)
</p></details>

- [ ] **Listas y keys**

  <details><summary>Links</summary><p>

  * [Listas y keys - Documentación oficial](https://react.dev/learn/rendering-lists)
</p></details>

- [ ] **Renderizado condicional**

  <details><summary>Links</summary><p>

  * [Renderizado condicional - Documentación oficial](https://react.dev/learn/conditional-rendering)
</p></details>

- [ ] **Elevación de estado**

  <details><summary>Links</summary><p>

  * [Levantando el estado - Documentación oficial](https://react.dev/learn/sharing-state-between-components)
</p></details>

- [ ] **Hooks**

  <details><summary>Links</summary><p>

  * [Presentando Hooks - Documentación oficial](https://react.dev/reference/react)
</p></details>

- [ ] **CSS modules**

  <details><summary>Links</summary><p>

  * [Adding a CSS Modules Stylesheet - Documentación de Create React App (en inglés)](https://vitejs.dev/guide/features.html#css-modules)
</p></details>

- [ ] **React Router**

  <details><summary>Links</summary><p>

  * [Quick Start - Documentación oficial (en inglés)](https://reactrouter.com/en/main/start/tutorial)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 4. Consideraciones

Este proyecto se debe "resolver" en duplas y puedes elegir entre
estas tres opciones la manera en que trabajarás con el backend.

1. Consumiendo una API que desarrollarán tus compañeras.
2. Consumiendo esta
[API](https://github.com/Laboratoria/burger-queen-api-mock)
que desarrollamos para ti.
3. Mockeando la API, puedes utilizar herramientas como
[nock](https://github.com/nock/nock),
[json-server](https://www.npmjs.com/package/json-server)
o [mockoon](https://mockoon.com).

El rango de tiempo estimado para completar el proyecto es de 3 a 5 Sprints.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.

En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://react.dev/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**mobile-first**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 5. Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales
![login](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/d2db332e-f101-4db8-bfb2-5761bbd6bf4d)



Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.


#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

![menu](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/eab68bb4-7dd1-4507-b001-272f7399924e)



##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

![kitchen](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/c6a243bc-4614-416e-a7d7-1928c64e541c)


##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

![orders](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/296921fe-00d5-4c3e-b909-a4be94d1f034)


##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

* Ver listado de trabajadorxs.
![listUser](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/5a798f9a-46b5-4cb2-9728-32931d2a6ed2)

* Agregar trabajadorxs.
![newUser](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/906cbf81-2ebf-42eb-ad32-53930e0e38d6)

* Actualizar datos de trabajadorxs.
![editUser](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/d05c9d48-0568-429c-a80a-059008c45bfe)

* Eliminar trabajadoxs.
![deleteUser](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/fbb287d3-35d8-4ed7-a39b-c5ef82bbf792)


##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

* Ver listado de productos.
![listProduct](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/904ce8b6-59cf-4523-a33f-589a6889cea0)

* Agregar productos.
![newProduct](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/43b7db49-0d42-42e1-a7ce-8b544ebee2ed)

* Actualizar datos de productos.
![editProduct](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/550aaa4f-260d-4691-be4d-e6bba3d5c8f6)

* Eliminar productos.
![deleteProduct](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/5b270b79-3c9e-4042-9210-814448bb3d68)


##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

## 7. Prototipos de alta fidelidad

<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/ed64309a-139b-4efa-b8c8-95d86f366c98" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/6f265928-957f-4977-90e5-8a6bad96c18c" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/52eea5a4-5e48-42e3-b83a-2372ec1fce3e" width=33% height=33%>

<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/0a3785c5-d3f4-41cc-a7b1-f3210198ff53" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/444b8c02-2c9d-4fe2-9f9a-b100f5d6d033" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/440d84ab-0407-421d-95cd-6fd8ccd9d535" width=33% height=33%>

<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/232c435a-d892-441d-931e-56f1dd53bf7a" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/dbd3f665-a0cf-4e5d-b07a-6d1d6aafa9bb" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/71e4fdb8-30f2-4a8c-ba38-96351d300af5" width=33% height=33%>

<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/2c8e2999-3151-4305-9dc9-ee9187b44b39" width=33% height=33%>
<img src="https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/83a54c7d-11bf-41a6-9802-ffd263205350" width=33% height=33%>



## 7. Tests
![test](https://github.com/katalimbu/DEV004-burger-queen-api-client/assets/122368809/b2d14f7c-91ac-4e05-bafb-8a0530e8c77b)


## 6. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Recuerda que si mockeaste la API, también tienes que desplegarla.
Te recomendamos explorar las siguientes opciones:

* [Vercel](https://vercel.com/) es una plataforma de _despliegue_ que
nos permite desplegar nuestra aplicación web estática (HTML, CSS y
JavaScript) y también nos permite desplegar aplicaciones web que se
ejecutan en el servidor (Node.js).
* [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 7. Pistas / Tips

### Frameworks / libraries

* [React](https://react.dev/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
* [json-server](https://www.npmjs.com/package/json-server)
* [mockoon](https://mockoon.com)
* [nock](https://github.com/nock/nock)

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
