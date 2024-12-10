export const spends = [
    {
        day: 'mon',
        price: 20.34
    },
    {
        day: 'tue',
        price: 50.21
    },
    {
        day: 'wed',
        price: 90.12
    },
    {
        day: 'thu',
        price: 70.98
    },
    {
        day: 'fri',
        price: 60.99
    },
    {
        day: 'sat',
        price: 80.45
    },
    {
        day: 'sun',
        price: 40.01
    },
]

export const lastMonth = 400
export const thisMonth = spends.reduce((a, b) => a + b.price, 0)
export const percentage = ((thisMonth-lastMonth) * 100) / lastMonth
