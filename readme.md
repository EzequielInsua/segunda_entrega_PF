# Ejecutar el servidor en modo fork y cluster con nodemon verificando el numero de procesos tomados por node.
- nodemon app.js -p8081 --FORK
- nodemon app.js -p8081 --CLUSTER

## Verificacion de procesos de node
tasklist /fi "imagename eq node.exe"


# Ejecutar el servidor utilizando "Forever" (modo watch)
forever -w start app.js -p8081 --FORK 

## Listar los proceso por forever y por sistema operativo
- forever list
- tasklist /fi "imagename eq node.exe"


# Ejecutar el servidor en modo FORK utilizando PM2 en modo FORK y CLUSTER. (modo watch)
- Fork:
 pm2 start app.js --name="Server1" --watch -- -p8081


- Cluster:
 pm2 start app.js --name="ServerC" --watch -i max -- -p8081

## Listar los procesos por PM2 y por Sistema operativo.
- PM2:
 pm2 list

- SO:
 tasklist /fi "imagename eq node.exe"






 # DESAFIO LOGGERS Y GZIP
 #########################

1) Verificar sobre la ruta /info con y sin compresion la diferencia de bytes
    /info sin GZIP  => 763B
    /info con GZIP  => 787B Creo que como es tan poca info, no llega a comprimir y al agregarle info lo perjudica.

