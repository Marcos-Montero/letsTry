export interface ICard {
    id?: any
    name: string
    description: string
    img: string
    price: number
}
export interface ICardOrder {
    products: string[]
    date: any
    price: number
}
export interface IButton {
    action: () => void
}

export interface IButton {
    action: () => void
}