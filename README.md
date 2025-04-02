## Client Geteway 

El geteway es el punto de comunicación entre los clientes y los servicios. Este es el encargado de recibir las peticiones y enviarlas a los servidores correspondientes y devolver la respuesta alcliente.

## Dev 


1. Clonar el respositorio
2. Instalar dependencias
3. Crear un archivo ".env" basado en el ".env.templete"
4. Tener tener iniciados los microservice que se van a utilizar
5. Levantar proyecto con "npm run start:dev"


## Nats
```
docker run -d --name nats-serve -p 4222:4222 -p 8222:8222 nats
```


## PROD
Ejecutar el comando
'''
docker build -f dockerfile.prod -t gateway .
'''