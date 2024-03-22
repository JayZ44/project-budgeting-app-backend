DROP DATABASE IF EXISTS budget_data;
CREATE DATABASE budget_data;
\c budget_data;
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY, item_name VARCHAR(30), amount DECIMAL(7,2), date VARCHAR(10), source VARCHAR(30), category VARCHAR(30) 
);