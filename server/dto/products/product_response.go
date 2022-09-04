package productsdto

type ProductResponse struct {
	ID     int    `json:"id"`
	Title  string `json:"title" form:"title" validate:"required"`
	Price  int    `json:"price"  form:"price" validate:"required"`
	Img    string `json:"img"  form:"img" validate:"required"`
	Desc   string `json:"desc" form:"desc"`
	UserID int    `json:"useID"`
}
