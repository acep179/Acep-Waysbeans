package profilesdto

type ProfileResponse struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	Img      string `json:"img" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode"`
}
