export interface IProduct {
  id: number,
  size: ('xs' | 's' | 'm' | 'l' | 'xl')[],
  color: string[],
  inStock: boolean,
  fabrick: string[],
  price: number,
  title: string,
  description: string,
  img: string,
}
