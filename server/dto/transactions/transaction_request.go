package transactiondto

type CreateTransactionRequest struct {
	Total int `json:"total" validate:"required"`
}

type UpdateTransactionRequest struct {
	Total   int    `json:"total"`
	Status  string `json:"status"`
	BuyerID int    `json:"buyerID"`
}
