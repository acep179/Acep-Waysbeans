package profilesdto

type ProfileResponse struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Phone    int    `json:"phone" gorm:"type: int"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode"`
}
