CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    id int not null AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean DEFAULT false,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);