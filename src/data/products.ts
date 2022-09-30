import { IProduct } from "../models";

export const products: IProduct[] = [
  {
    id: 3,
    title: "Refined Concrete Pizza",
    price: 309,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=6182",
    },
    images: [
      "https://api.lorem.space/image/watch?w=640&h=480&r=1681",
      "https://api.lorem.space/image/watch?w=640&h=480&r=1450",
      "https://api.lorem.space/image/watch?w=640&h=480&r=7958",
    ],
  },
  {
    id: 4,
    title: "Small Metal Bike",
    price: 76,
    description: "The Football Is Good For Training And Recreational Purposes",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=3529",
    },
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=458",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=3684",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2254",
    ],
  },
];
