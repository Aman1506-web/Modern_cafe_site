export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "pizza-margherita",
    name: "Margherita Pizza",
    description: "San Marzano tomatoes, fresh mozzarella, basil oil.",
    price: 289,
    category: "pizza",
    badge: "Wood-fired",
  },
  {
    id: "pizza-bbq",
    name: "BBQ Smokehouse",
    description: "Charred corn, cheddar, caramelized onion, chipotle bbq.",
    price: 329,
    category: "pizza",
    badge: "Smoky",
  },
  {
    id: "coffee-flatwhite",
    name: "Flat White",
    description: "Velvety double-shot with microfoam.",
    price: 179,
    category: "coffee",
    badge: "House blend",
  },
  {
    id: "coffee-coldbrew",
    name: "Vanilla Cold Brew",
    description: "18-hour brew, vanilla bean syrup, citrus peel.",
    price: 199,
    category: "coffee",
    badge: "Slow brew",
  },
  {
    id: "burger-brie",
    name: "Brie & Fig Burger",
    description: "Seared patty, melted brie, fig jam, arugula.",
    price: 349,
    category: "burgers",
    badge: "Signature",
  },
  {
    id: "burger-classic",
    name: "Classic Smash",
    description: "Smash patty, cheddar, pickles, garlic aioli.",
    price: 299,
    category: "burgers",
  },
  {
    id: "pasta-alfredo",
    name: "Truffle Alfredo",
    description: "Parmesan cream, truffle oil, cracked pepper.",
    price: 319,
    category: "pasta",
  },
  {
    id: "pasta-arrabbiata",
    name: "Roasted Chili Arrabbiata",
    description: "Fire-roasted tomatoes, chili crunch, basil.",
    price: 279,
    category: "pasta",
  },
  {
    id: "momos-steam",
    name: "Steamed Veg Momos",
    description: "Hand-folded dumplings, ginger soy dip.",
    price: 169,
    category: "momos",
  },
  {
    id: "momos-tandoori",
    name: "Tandoori Momos",
    description: "Smoky yogurt marinade, mint chutney.",
    price: 199,
    category: "momos",
    badge: "Spicy",
  },
  {
    id: "snack-garlicbread",
    name: "Cheese Garlic Bread",
    description: "Buttery pull-apart loaf, roasted garlic.",
    price: 159,
    category: "snacks",
  },
  {
    id: "snack-bagel",
    name: "Sesame Bagel",
    description: "House-made, served with herbed cream cheese.",
    price: 139,
    category: "snacks",
  },
  {
    id: "dessert-cookie",
    name: "Chunky Choco Cookie",
    description: "Brown butter dough, molten dark chocolate.",
    price: 129,
    category: "desserts",
    badge: "Best seller",
  },
  {
    id: "dessert-tiramisu",
    name: "Cocoa Tiramisu Jar",
    description: "Espresso-soaked ladyfingers, mascarpone cloud.",
    price: 189,
    category: "desserts",
  },
  {
    id: "drink-icedtea",
    name: "Peach Iced Tea",
    description: "Stone-fruit sweetness, citrus zest.",
    price: 149,
    category: "drinks",
  },
  {
    id: "drink-ginger-fizz",
    name: "Ginger Citrus Fizz",
    description: "Sparkling ginger ale, lime, mint.",
    price: 159,
    category: "drinks",
  },
];

export const categories = [
  { id: "pizza", label: "Pizza" },
  { id: "coffee", label: "Coffee" },
  { id: "burgers", label: "Burgers" },
  { id: "pasta", label: "Pasta" },
  { id: "momos", label: "Momos" },
  { id: "snacks", label: "Snacks" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];
