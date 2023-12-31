# elk-pipeline-agg
Problem Statement:

You have been provided with an Elasticsearch index containing a sample e-commerce dataset. The dataset includes information about customer orders, products, and order details. Your task is to create Elasticsearch queries to generate three reports using pipeline aggregations, parent aggregations, and cumulative sum.

Dataset:
You can use the following Elasticsearch index to perform your analysis. This index is named "ecommerce_data."

PUT ecommerce_data
{
  "mappings": {
    "properties": {
      "order_id": {
        "type": "integer"
      },
      "product_id": {
        "type": "integer"
      },
      "product_name": {
        "type": "text"
      },
      "quantity": {
        "type": "integer"
      },
      "price": {
        "type": "float"
      },
      "customer_id": {
        "type": "integer"
      },
      "order_date": {
        "type": "date"
      }
    }
  }
}

POST /ecommerce_data/_doc/1
{
  "order_id": 1,
  "product_id": 101,
  "product_name": "Product A",
  "quantity": 2,
  "price": 10.0,
  "customer_id": 1,
  "order_date": "2023-01-01"
}

POST /ecommerce_data/_doc/2
{
  "order_id": 1,
  "product_id": 102,
  "product_name": "Product B",
  "quantity": 3,
  "price": 15.0,
  "customer_id": 1,
  "order_date": "2023-01-01"
}

POST /ecommerce_data/_doc/3
{
  "order_id": 2,
  "product_id": 101,
  "product_name": "Product A",
  "quantity": 1,
  "price": 10.0,
  "customer_id": 2,
  "order_date": "2023-01-02"
}

POST /ecommerce_data/_doc/4
{
  "order_id": 2,
  "product_id": 103,
  "product_name": "Product C",
  "quantity": 2,
  "price": 20.0,
  "customer_id": 2,
  "order_date": "2023-01-02"
}




Report 1: Total Revenue per Customer
Report 2: Cumulative Sum of Orders per Day
Report 3: Average Quantity of Products by Product Name
