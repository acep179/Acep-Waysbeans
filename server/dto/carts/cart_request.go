package cartsdto

type CreateCartRequest struct {
	ProductID int `validate:"required" json:"productID"`
}

type UpdateCartRequest struct {
	Qty           int `validate:"required" json:"qty"`
	TransactionID int `json:"transactionID"`
}
