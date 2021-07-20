define({ "api": [
  {
    "type": "post",
    "url": "/product/:product_id",
    "title": "Update product",
    "name": "Update_product",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "Update",
            "description": "<p>product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Update",
            "description": "<p>product info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respond:",
          "content": "HTTP/1.1 200 OK\n{\n    \"TV\": [\"Company\": \"LG\", \"Model\": \"22-RDE\", \"Colour\": \"Black\"]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://dev04.katruk.ru/produc/:product_id",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "error-response:",
          "content": "HTTP/1.1 400 error\n{\n    \"error\": \"no product found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./products.py",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/products/",
    "title": "All Products",
    "name": "All_Products",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "all",
            "description": "<p>elemetns</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "all",
            "description": "<p>products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respond:",
          "content": "HTTP/1.1 200 OK\n{\n    \"weeds:\" \"we have\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://dev04.katruk.ru/producs",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "error-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"error:\" \"no weeds for you\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./products.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/product/:product_id",
    "title": "Detail Product",
    "name": "detail_information_of_product",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>of product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "detail",
            "description": "<p>info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respond:",
          "content": "HTTP/1.1 200 OK\n{\n    \"TV\": [\"Company\": \"LG\", \"Model\": \"22-RDE\", \"Colour\": \"Black\"]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://dev04.katruk.ru/product/:product_id",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "error-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"error:\" \"no product found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./products.py",
    "groupTitle": "User"
  }
] });
