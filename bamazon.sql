create database bamazon_db;

use bamazon_db;

create table products (
	id int not null auto_increment,
    product_name varchar(60) null,
    department_name varchar (60) null,
    price_to_customer int (10) null,
    stock_quantity int (10) null,
    primary key(id)
    );

select * from products;