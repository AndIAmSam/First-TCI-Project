# Automating dockers creation

## Docker DB
To create the MYSQL database in the MYSQL_CONTAINER container

```
docker compose -f dockerDB-compose.yml up -d
```

---
temporary:

Yes, you can automate the execution of these commands by using a Docker initialization script. Docker allows you to add .sql or .sh scripts to the `/docker-entrypoint-initdb.d/` directory, which are automatically executed upon container startup.

Here's how you can do it:

1. Create a new file named `init.sql` in the same directory as your Dockerfile and docker-compose.yml file.

**init.sql**
```sql
USE projectdb;
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

2. In your Dockerfile, add a command to copy this script into the `/docker-entrypoint-initdb.d/` directory.

**Dockerfile**
```Dockerfile
FROM mysql
ENV MYSQL_ROOT_PASSWORD=123456
ENV MYSQL_DATABASE=projectdb
COPY ./init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
```

3. In your docker-compose.yml file, make sure you have a volume for `/var/lib/mysql` to ensure your data persists.

**docker-compose.yml**
```yaml
version: '3'
services:
  db:
    build: .
    container_name: MYSQL_CONTAINER
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql
volumes:
  db_data:
```

Now, when you run `docker-compose up -d`, Docker will start your MySQL container and automatically execute the `init.sql` script, creating your `tasks` table in the `projectdb` database.