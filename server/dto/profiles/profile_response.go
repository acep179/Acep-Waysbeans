package profilesdto

type ProfileResponse struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode"`
}
