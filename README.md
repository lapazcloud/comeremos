# ¿Comeremos?

## Requisitos

* Ruby 2.5 o superior
* NodeJS 12 o superior
* Docker 18.09 o superior

## Instalación

```sh
gem install bundler --no-document
bundle install
bundle exec middleman serve
```

Abre http://localhost:4567/ para interactuar con la aplicación y hacer cambios.

## Build

```sh
bundle exec middleman build
````

El proceso de build generará una carpeta `build/` con todos los archivos compilados. Esta carpeta es copiada en la imagen final de Docker y subida a Google Container Registry.

## Build en Docker

```sh
docker build -t comeremos:v1 .
```

## Correr la aplicación en Docker

```sh
docker run -d comeremos -p 8000:80 comeremos:v1
```

Abre http://localhost:8000/ para interactuar con la aplicación en modo producción.
