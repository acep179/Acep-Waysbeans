package productsdto

type ProductResponse struct {
	ID     int    `json:"id"`
	Title  string `json:"title" form:"title" validate:"required"`
	Price  int    `json:"price"  form:"price" validate:"required"`
	Qty    int    `json:"qty" form:"qty"`
	Img    string `json:"img"  form:"img" validate:"required"`
	Desc   string `json:"desc" form:"desc"`
	UserID int    `json:"useID"`
}
