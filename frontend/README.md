Run this command on this directory
# Building docker file
```
docker build -t frontend .
```

# Running the container
```
docker run -dti -p 5137:5137 --name fron frontend

```