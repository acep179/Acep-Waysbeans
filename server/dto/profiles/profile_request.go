package profilesdto

type ProfileRequest struct {
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode"`
	UserID   int    `json:"userID"`
}
