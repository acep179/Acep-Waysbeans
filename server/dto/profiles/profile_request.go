package profilesdto

type ProfileRequest struct {
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Phone    int    `json:"phone" gorm:"type: int"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode"`
	UserID   int    `json:"userID"`
}
