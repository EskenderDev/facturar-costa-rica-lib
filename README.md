
🛑 En desarrollo❗️❗️❗️❗️ 🛑

Buscando colaboradores

## Descripción
Este proyecto tiene como fin facilitar la creación de la factura electrónica de Costa Rica. La idea es simplificar el proceso y que está librería pueda ser utilizada como ayuda en otros proyectos que requieran el acceso al sistema de hacienda. Para esto ofrece herramienta para conectarse al API del Ministerio de Hacienda de Costa Rica.

## 

## Testing
Para probar las funcionalidades se recomienda crear un .env en donde se especifiquen datos de prueba.
```
USERNAME_TEST=
PASSWORD_TEST=
IS_STG=
SOURCE_P12_URI=
SOURCE_P12_PASSPORT=
```
Para probar getToken
```
ts-node --require dotenv/config test/getToken.ts
```
Generar la clave
```
ts-node --require dotenv/config test/getClave.ts
```

Para probar getXML
```
ts-node --require dotenv/config test/genXML.ts
```
Para probar genJson HeaderXML
```
ts-node --require dotenv/config test/genBasicXML.ts
```
## Tools
Para usar readXML establecer en .env
```
SOURCE_URI=
```
