*** How to build an image ***
```
docker build -t asinha08/node-redis:latest .
```

*** How to run a image ****
```
docker run asinha08/node-redis:latest
```

*** How to build and run docker compose ***
```
docker-compose up --build
docker-compose up -d // run call container in background
```

*** How to bring down all running images earlier run by docker-compose ***
```
docker-compose down
```

*** how to check which containers are running by docker-compose ***

```
docker-compose ps
```