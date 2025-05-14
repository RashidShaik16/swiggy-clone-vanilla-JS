import {v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const foodData = [
    {
        name: "Chicken Fry Biryani",
        price: 190,
        rating: 3,
        image: "./images/biryani/biryani-1.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis"],
        description: "An indulgent preparation aromatic rice layered with juicy, fried chicken pieces in a delicate blend of whole spices.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Dum Biryani",
        price: 190,
        rating: 2.5,
        image: "./images/biryani/biryani-2.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis"],
        description: "Richly flavored aromatic rice and marinated chicken cooked in hyderabady dum style in a flavored masala served with raita.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Prawn Biryani",
        price: 250,
        rating: 3.5,
        image: "./images/biryani/biryani-7.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis", "Prawn"],
        description: "Serves 1 | A flavorful rice dish with succulent prawns. Serves 1-2",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Joint Biryani",
        price: 210,
        rating: 3.5,
        image: "./images/biryani/biryani-3.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis"],
        description: "A fragrant combination of rice and succulent chicken joint pieces in a special blend of masala. [serves 1].",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mutton Biryani",
        price: 290,
        rating: 3.3,
        image: "./images/biryani/biryani-6.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis", "Mutton"],
        description: "Flavourful and aromatic rice dish with tender mutton pieces. Serves 1-2",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Mughlai Biryani",
        price: 210,
        rating: 3.5,
        image: "./images/biryani/biryani-4.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis"],
        description: "A fragrant combination of rice and succulent chicken joint pieces in a special blend of masala. [serves 1].",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Boneless Biryani",
        price: 230,
        rating: 3.5,
        image: "./images/biryani/biryani-5.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis"],
        description: "Serves 1 | Tender chicken layered with fragrant rice and aromatic spices for a flavor-packed meal. Serves 1-2",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },


    {
        name: "Double Joint Biryani",
        price: 330,
        rating: 3.8,
        image: "./images/biryani/biryani-8.jpg",
        category: "biryani",
        searchArray: ["Biryani", "Biryanis", "Double joint"],
        description: "Flavorful chicken layered with aromatic rice in a dish that is sure to satisfy your cravings. Serves 1-2",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Paneer Zinger Burger",
        price: 200,
        rating: 4.6,
        image: "./images/burger/burger-1.jpg",
        category: "burger",
        searchArray: ["Burger", "Burgers"],
        description: "Relish the Indian paneer zinger",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Spicy Zinger Burger and Popcorn Meal",
        price: 440,
        rating: 4.0,
        image: "./images/burger/burger-2.jpg",
        category: "burger",
        searchArray: ["Burger", "Burgers"],
        description: "Caribbean Spicy Zinger Burger with Medium Popcorn and Pepsi PET 475ml at a deal price",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Burger Buddy Meal",
        price: 520,
        rating: 5.0,
        image: "./images/burger/burger-3.jpg",
        category: "burger",
        searchArray: ["Burger", "Burgers"],
        description: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },
    
    {
        name: "Classic Zinger Mojito Combo",
        price: 298,
        rating: 4.0,
        image: "./images/burger/burger-4.jpg",
        category: "burger",
        searchArray: ["Burger", "Burgers", "Mojito", "Mojitos"],
        description: "Get All New Mojito Reusable Bottle with Classic Chicken Zinger Burger",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Zinger Burger - Classic with Cheese",
        price: 220,
        rating: 3.5,
        image: "./images/burger/burger-5.jpg",
        category: "burger",
        searchArray: ["Burger", "Burgers","cheese"],
        description: "Signature burger with a crunchy chicken fillet, cheese slice, veggies & a delicious mayo sauce",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mojito Mint Slush",
        price: 140,
        rating: 4.0,
        image: "./images/mojito/mojito-1.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "Who hasn't heard of this popular drink? lots of minty coolness to spruce up the long sunny days",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mojito Bottle",
        price: 105,
        rating: 4.2,
        image: "./images/mojito/mojito-2.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "All New Reusable Mojito Bottle 330ml",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mint mojito",
        price: 119,
        rating: 4.1,
        image: "./images/mojito/mojito-3.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "All mint flavour which keeps your day cool",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Cranberry mojito",
        price: 99,
        rating: 5.0,
        image: "./images/mojito/mojito-4.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "A refreshing blend of cranberries and mint that will invigorate your taste buds with its vibrant flavors.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Virgin mojito",
        price: 109,
        rating: 5.0,
        image: "./images/mojito/mojito-5.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "A refreshing mojito with lemon and mint punch",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Blue Lime Mojito",
        price: 129,
        rating: 4.3,
        image: "./images/mojito/mojito-6.jpg",
        category: "mojito",
        searchArray: ["Mojito", "Mojitos"],
        description: "A refreshing and tangy twist on the classic Mojito",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Onion Ravva Dosa",
        price: 75,
        rating: 3.8,
        image: "./images/tiffin/tiffin-1.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 1 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },


    {
        name: "Parota",
        price: 60,
        rating: 3.6,
        image: "./images/tiffin/tiffin-2.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 2 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chapathi",
        price: 75,
        rating: 3.8,
        image: "./images/tiffin/tiffin-3.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 2 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },
    
    {
        name: "Onion Minapa Dosa",
        price: 70,
        rating: 3.8,
        image: "./images/tiffin/tiffin-4.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 1 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Upma Minapa Dosa",
        price: 85,
        rating: 3.5,
        image: "./images/tiffin/tiffin-5.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 1 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Idly",
        price: 45,
        rating: 4.0,
        image: "./images/tiffin/tiffin-6.jpg",
        category: "tiffin",
        searchArray: ["Tiffin", "Tiffins"],
        description: "|Serves 1, 2 pc||Not Spicy|",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Creamy Red Velvet",
        price: 125,
        rating: 4.8,
        image: "./images/desert/desert-1.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "Premium Red velvet desert",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chocochips Ice Cream 500ml",
        price: 275,
        rating: 4.7,
        image: "./images/desert/desert-2.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "Melt in mouth chocolate chips in every spoon",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Dryfruit Overload Ice Cream 500ml",
        price: 340,
        rating: 4.7,
        image: "./images/desert/desert-3.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "A scoop of ice cream loaded with cashews, almonds, pistas and kishmishs",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Jack Fruit Ice Cream [mini Pack]",
        price: 80,
        rating: 4.6,
        image: "./images/desert/desert-4.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "Taste the aromatic sweetness of jackfruit in every bite. (contains 80gms & serves 1 scoop)",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mississippi Mud Ice Cream",
        price: 99,
        rating: 4.6,
        image: "./images/desert/desert-5.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "Delectable chocolate fudge and ice cream, married by a fudge ribbon and sprinkled with brownie pieces",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Death By Chocolate Ice Cream",
        price: 159,
        rating: 3.0,
        image: "./images/desert/desert-6.jpg",
        category: "desert",
        searchArray: ["Desert", "Deserts", "Ice cream", "Ice creams"],
        description: "Indulge in a heavenly creation of rich chocolate bliss in every creamy scoop of this irresistible ice cream.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Paneer pizza (6 pc)",
        price: 299,
        rating: 4.2,
        image: "./images/pizza/pizza-1.jpg",
        category: "pizza",
        searchArray: ["Pizza", "Pizzas"],
        description: "A delectable and flavorsome vegetarian pizza topped with lusciously creamy paneer.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Classic Corn pizza",
        price: 109,
        rating: 4.2,
        image: "./images/pizza/pizza-2.jpg",
        category: "pizza",
        searchArray: ["Pizza", "Pizzas"],
        description: "Personal pizza topped with our classic pan sauce, sweet corn and cheesy dressing.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: '10" Neapolitan Pizza',
        price: 475,
        rating: 4.3,
        image: "./images/pizza/pizza-3.jpg",
        category: "pizza",
        searchArray: ["Pizza", "Pizzas"],
        description: "Tomato, onion, capsicum, tomato sauce & mozzarella cheese.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chicken Tikka Pizza",
        price: 175,
        rating: 3.8,
        image: "./images/pizza/pizza-4.jpg",
        category: "pizza",
        searchArray: ["Pizza", "Pizzas"],
        description: "A delectable fusion of succulent chicken tikka and classic pizza, perfect for meat lovers craving a savory delight.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Tandoori Chicken Pizza",
        price: 209,
        rating: 4.1,
        image: "./images/pizza/pizza-5.jpg",
        category: "pizza",
        searchArray: ["Pizza", "Pizzas"],
        description: "An aromatic pizza topped with flavorful tandoori chicken. Serves 1.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Opulent Butterscotch Bliss Cake",
        price: 529,
        rating: 4.5,
        image: "./images/cake/cake-1.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries"],
        description: "Indulge in a symphony of sweet, buttery flavors layers of moist vanilla sponge cake.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Belgium Chocolate Cake - 500 Grams",
        price: 649,
        rating: 2.8,
        image: "./images/cake/cake-2.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries"],
        description: "Experience chocolate indulgence with our exquisite Belgian Chocolate Cake.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Chocolate Truffle Eggless Cake",
        price: 519,
        rating: 4.0,
        image: "./images/cake/cake-3.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries"],
        description: "Serves 4 | [Eggless/Veg] Indulge in a decadent chocolate experience a chocolate sponge cake, layered with sumptuous Choco truffle.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Mango Fruit Eggless Cake",
        price: 450,
        rating: 4.2,
        image: "./images/cake/cake-4.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries"],
        description: "This delectable dessert crafted with moist vanilla cake layered with mango crush, fruit filling and adorned with pista. Promises a slice of paradise in every bite.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Pineapple Dessert Jar Cake",
        price: 139,
        rating: 4.4,
        image: "./images/cake/cake-5.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries", "jars"],
        description: "Experience the irresistible allure of our Pineapple Jar Cake features layers of moist and fluffy vanilla sponge cake, perfectly paired with a luscious pineapple crush.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Gulab Jamun Red Velvet Jar Cake",
        price: 149,
        rating: 4.4,
        image: "./images/cake/cake-7.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries", "jars"],
        description: "Serves 1 | Divine dessert creation crafted with layers of decadent red velvet sponge cake infused with rich flavors of traditional Gulab jamun.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

    {
        name: "Assorted Cupcakes - 6 Pc",
        price: 449,
        rating: 4.0,
        image: "./images/cake/cake-6.jpg",
        category: "cake",
        searchArray: ["cake", "cakes", "pastry", "pastries", "jars"],
        description: "Cupcakes are always best to complete your day, try our delicious set of red velvet, chocolate and vanilla cupcakes and make your day special.",
        uuid: uuidv4(),
        isAdded : false,
        qty: 0
    },

] 