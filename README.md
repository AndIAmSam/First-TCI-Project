# TCI-Project

Architecture overview:

![Architecture overview.](./arch.png)
Image taken from [here](https://youtu.be/fBRgw5dyBd4?si=1PH_7EiOyqWtRboY)

## 0. Clone the repository
```
$ git clone git@github.com:AndIAmSam/First-TCI-Project.git
```


## 1. Create a network
```
$ docker network create net
```


## Finally
To compose the project
```
$ docker compose -f composer.yml up -d
```