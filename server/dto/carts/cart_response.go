package cartsdto

import "waysbeans/models"

type CartResponse struct {
	ID            int                            `json:"id"`
	Qty           int                            `json:"qty"`
	UserID        int                            `json:"userID"`
	User          models.UserResponseRelation    `json:"user"`
	ProductID     int                            `json:"prouductID"`
	Product       models.ProductResponseRelation `json:"product"`
	TransactionID *int                           `json:"transactionID"`
}
