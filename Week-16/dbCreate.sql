-- TABLE CREATION CODE
CREATE TABLE cities (
city_id INTEGER PRIMARY KEY AUTO_INCREMENT,
city VARCHAR(50),
state VARCHAR(50)
);

CREATE TABLE warehouses (w_id INTEGER PRIMARY KEY AUTO_INCREMENT,
w_name VARCHAR(50),
location VARCHAR(20),
extra_content JSON,
city_id INTEGER,
FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

 
CREATE TABLE stores (s_id INTEGER PRIMARY KEY AUTO_INCREMENT,
store_name VARCHAR(20),
location_city VARCHAR(20),
warehouse_id INTEGER,
FOREIGN KEY (warehouse_id) REFERENCES warehouses(w_id)
);



CREATE TABLE customers (c_no INTEGER PRIMARY KEY AUTO_INCREMENT,
cname VARCHAR(100),
address VARCHAR(255),
cu_city VARCHAR(100)
);

CREATE TABLE orders (o_no INTEGER PRIMARY KEY AUTO_INCREMENT,
o_date DATE,
customer_id INTEGER,
FOREIGN KEY (customer_id) REFERENCES customers(c_no)
);

CREATE TABLE items (item_no INTEGER PRIMARY KEY AUTO_INCREMENT,
descri TEXT,
weight DECIMAL(5,2),
cost   DECIMAL(5,2)
);


CREATE TABLE order_items (
	order_item_no INTEGER PRIMARY KEY AUTO_INCREMENT,
	order_quantity INTEGER,
    order_id INTEGER,
    items_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES orders(o_no),
    FOREIGN KEY (items_id) REFERENCES items(item_no)
);


CREATE TABLE stores_items (
store_item_id INTEGER PRIMARY KEY AUTO_INCREMENT,
quantity INTEGER,
store_id INTEGER,
item_id INTEGER,
FOREIGN KEY (store_id) REFERENCES stores(s_id),
FOREIGN KEY (item_id) REFERENCES items(item_no)
);

-- --------------------------------------------------------------
-- INSERTING TEST DATA TO TABLES

INSERT INTO cities (city, state) VALUES
('New York City', 'New York'),
('Los Angeles', 'California'),
('Chicago', 'Illinois'),
('Houston', 'Texas'),
('Philadelphia', 'Pennsylvania');
INSERT INTO warehouses (w_name, location, extra_content, city_id) VALUES
('Warehouse A', 'North', '{"temperature": 25, "humidity": 50}', 1),
('Warehouse B', 'South', '{"temperature": 30, "humidity": 60}', 2),
('Warehouse C', 'West', '{"temperature": 20, "humidity": 45}', 3);
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES
('Store X', 'New York City', 1),
('Store Y', 'Los Angeles', 2),
('Store Z', 'Chicago', 1);
INSERT INTO customers (cname, address, cu_city) VALUES
('John Doe', '123 Main St', 'New York City'),
('Jane Smith', '456 Elm St', 'Los Angeles'),
('Bob Johnson', '789 Oak St', 'Chicago');
INSERT INTO orders (o_date, customer_id) VALUES
('2023-05-10', 1),
('2023-05-11', 2),
('2023-05-12', 3);
INSERT INTO items (descri, weight, cost) VALUES
('Item 1', 1.5, 10.99),
('Item 2', 2.0, 15.99),
('Item 3', 0.5, 5.99);
INSERT INTO stores_items (quantity, store_id, item_id) VALUES
(100, 1, 1),
(50, 2, 2),
(75, 3, 3);
INSERT INTO order_items (order_quantity, order_id, items_id) VALUES
(10, 1, 1),
(5, 2, 2),
(7, 3, 3);
