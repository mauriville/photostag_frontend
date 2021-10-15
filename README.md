
## Mapa de Monitoreo Frontend

Sistema para monitoreo de Venta de COmbustible

## Requisitos
1. Node js 11.0 o superior

Los pasos para realizar el despliegue son:

- copiar el archivo .env.suggested  a.env
- configurar conexión al servicio en el archivo .env
- npm install
- npm run serve
- abrir en el navegador http://localhost:8080 

## Créditos

Este usa los siguientes repositorios:

- **[Vue](https://vuejs.org/)**
- **[Datatables](https://datatables.net/)**
- **[MSAL vue](https://www.npmjs.com/package/vue-msal)** 

## Licencia

Este proyecto es de código abierto y licenciado bajor [MIT license](https://opensource.org/licenses/MIT).

### Compilar para produccion
npm run build

### Cargar en produccion
scp -r dist/* usuario@ipservidor:/ruta_de_prod
Ejemplo:
scp -r dist/* desarrolloapp@172.16.3.12:/var/www/clients/client2/web2/web/mapamonitoreo_frontend

### Arreglar Archivos con Lint (En caso de ser necesario)
npm run lint

### Configuracion personalizada
See [Configuration Reference](https://cli.vuejs.org/config/).