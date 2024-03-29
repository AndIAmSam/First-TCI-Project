FROM mysql:8.0-debian
ENV MYSQL_ROOT_PASSWORD=123456
ENV MYSQL_DATABASE=projectdb

COPY ./init.sql /docker-entrypoint-initdb.d/