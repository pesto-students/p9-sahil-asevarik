-- Q1:-Find the item that has minimum weight.
select * from items order by weight limit 1;


-- Q2:-Find the different warehouses in “Pune”.

select * from warehouses JOIN cities on cities.city_id = warehouses.city_id where city Like "chicago";


-- Q3:-Find the details of items ordered by a customer “Jhon Doe”.

select * from  customers join orders on orders.customer_id = customers.c_no
join order_items on orders.o_no = order_items.order_id
join items on items.item_no = order_items.items_id
where cname like "John Doe";



-- Q4:-Find a Warehouse which has maximum stores.

select w_name,count(store_name) from warehouses join stores on warehouses.w_id = stores.warehouse_id group by w_id order by w_id desc limit 1;


-- Q5:-Find an item which is ordered for a minimum number of times.

select * from items join order_items on items.item_no = order_items.items_id join orders on orders.o_no = order_items.order_id order by order_quantity limit 1;


-- Q6:-Find the detailed orders given by each customer.

select * from  customers join orders on orders.customer_id = customers.c_no
join order_items on orders.o_no = order_items.order_id
join items on items.item_no = order_items.items_id;