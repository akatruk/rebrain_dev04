"""
@api {get} /products/ All Products
@apiName All_Products
@apiGroup User
@apiParam {string} all elemetns
@apiSuccess {json} all products
@apiExample {curl} Example usage:
    curl -i http://dev04.katruk.ru/producs
@apiSuccessExample Success-Respond:
  HTTP/1.1 200 OK
  {
      "weeds:" "we have"
  }
@apiError error
@apiErrorExample error-response:
  HTTP/1.1 200 OK
  {
      "error:" "no weeds for you"
  }
"""
"""
@api {get} /product/:product_id Detail Product
@apiName detail information of product
@apiGroup User
@apiParam {number} number of product
@apiSuccess {json} detail info
@apiExample {curl} Example usage:
    curl -i http://dev04.katruk.ru/product/:product_id
@apiSuccessExample Success-Respond:
  HTTP/1.1 200 OK
  {
      "TV": ["Company": "LG", "Model": "22-RDE", "Colour": "Black"]
  }
@apiError error
@apiErrorExample error-response:
  HTTP/1.1 200 OK
  {
      "error:" "no product found"
  }
"""
"""
@api {post} /product/:product_id Update product
@apiName Update product
@apiGroup Admin
@apiParam {json} Update product
@apiSuccess {json} Update product info
@apiExample {curl} Example usage:
    curl -i http://dev04.katruk.ru/produc/:product_id
@apiSuccessExample Success-Respond:
  HTTP/1.1 200 OK
  {
      "TV": ["Company": "LG", "Model": "22-RDE", "Colour": "Black"]
  }
@apiError error
@apiErrorExample error-response:
  HTTP/1.1 400 error
  {
      "error": "no product found"
  }
"""