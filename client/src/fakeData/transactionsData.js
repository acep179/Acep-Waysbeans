import ethiopia from './../assets/ethiopia.png'
import nicaragua from './../assets/nicaragua.png'

const transactionData = [
    {
        id:1,
        status: 'Waiting Approve',
        total: 129000,
        updated_at: '3/9/22',
        buyer: {
            id: 2,
            fullName: 'Muhammad Syahrul Ramdhani',
            email: 'syahrul@mail.com',
            password: '1234',
            status: 'customer',
            profile: {
                address: 'Cianjur',
                image: null,
                post_code: 54321
            }
        },
        carts: [
            {
                id: 1,
                qty: 2,
                product: {
                    id: 3,
                    title: 'NICARAGUA Beans',
                    price: 29000,
                    img: nicaragua,
                    qty: 423,
                    desc: 'Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.'
                }
            },
            {
                id: 2,
                qty: 3,
                product: {
                    id: 1,
                    title: 'ETHIOPIA Beans',
                    price: 27000,
                    img: ethiopia,
                    qty: 243,
                    desc: 'Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.'
                },
            },
        ]
    },
]

export default transactionData