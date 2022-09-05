package productsdto

type CreateProductRequest struct {
	Title string `json:"title" form:"title" validate:"required"`
	Price int    `json:"price" form:"price" validate:"required"`
	Qty   int    `json:"qty" form:"qty" validate:"required"`
	Img   string `json:"img" form:"img" validate:"required"`
	Desc  string `json:"desc" form:"desc" validate:"required"`
}

type UpdateProductRequest struct {
	Title string `json:"title" form:"title"`
	Price int    `json:"price" form:"price"`
	Qty   int    `json:"qty" form:"qty"`
	Img   string `json:"img" form:"img"`
	Desc  string `json:"desc" form:"desc"`
}
