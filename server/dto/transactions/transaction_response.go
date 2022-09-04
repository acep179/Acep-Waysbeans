package transactiondto

type TransactionResponse struct {
	ID      int    `json:"id"`
	Total   int    `json:"total"`
	Status  string `json:"status"`
	BuyerID int    `json:"buyerID"`
}
