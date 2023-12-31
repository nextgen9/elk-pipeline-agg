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

Data Insertion:
You can use the following statements to insert sample data into the "ecommerce_data" index. Make sure to adjust the data according to your requirements.

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
Solution:
GET /ecommerce_data/_search
{
  "size": 0,
  "aggs": {
    "customers": {
      "terms": {
        "field": "customer_id"
      },
      "aggs": {
        "total_revenue": {
          "sum": {
            "field": "price"
          }
        }
      }
    }
  }
}

Report 2: Cumulative Sum of Orders per Day
Solution:
GET /ecommerce_data/_search
{
  "size": 0,
  "aggs": {
    "order_date_histogram": {
      "date_histogram": {
        "field": "order_date",
        "calendar_interval": "day"
      },
      "aggs": {
        "cumulative_orders": {
          "cumulative_sum": {
            "buckets_path": "_count"
          }
        }
      }
    }
  }
}

Report 3: Average Quantity of Products by Product Name
Solution:
GET /ecommerce_data/_search
{
  "size": 0,
  "aggs": {
    "products": {
      "terms": {
        "field": "product_name"
      },
      "aggs": {
        "avg_quantity": {
          "avg": {
            "field": "quantity"
          }
        }
      }
    }
  }
}

