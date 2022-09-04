package cartsdto

type CartResponse struct {
	ID            int  `json:"id"`
	Qty           int  `json:"qty"`
	UserID        int  `json:"userID"`
	ProductID     int  `json:"prouductID"`
	TransactionID *int `json:"transactionID"`
}
