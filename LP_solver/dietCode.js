


// ** COPYRIGHT (c) 2007 STEFAN WANER **

// ****************** ALL RIGHTS RESERVED *******************



// *** ERROR HANDLING

// window.onerror = myErrorTrap;

var objectiveFunction = "cost";

var nutrientGEQ = [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// 0 = ignore (no constraint) 1 = LEQ 2 = GEQ
// order: calories, cholesterol, fat, sodium, carbs, fiber, protein, VitA, VitC,
// Calcium, iron

var nutrientGEQDefault = nutrientGEQ.slice();

var nutrientTotals = [2000, 6000, 20, 2400, 80, 25, 60, 5000, 90, 1000]

var nutrientTotalsDefault= nutrientTotals.slice();

var foodNamesen = ["Frozen Broccoli", "Carrots (raw)", "Celery (raw)", "Corn (frozen)", "Iceberg Lettuce (raw)", "Sweet Peppers (raw)", "Potatoes (baked)", "Tofu", "Chicken (roasted)", "Spaghetti with Sauce", "Tomato (red, ripe, raw)", "Apple (raw with skin)", "Banana", "Grapes", "Kiwifruit (raw)", "Oranges", "Bagels", "Wheat Bread", "White Bread", "Oatmeal Cookies", "Apple Pie", "Chocolate Chip Cookies", "Butter", "Cheddar Cheese", "Whole Milk (3.3% fat)", "Lowfat Milk (2% fat)", "Skim Milk", "Poached Eggs", "Scrambled Eggs", "Bologna, Turkey", "Frankfurter, Beef", "Ham (sliced, extra-lean)", "Kielbasa (pork)", "Cap'N Crunch", "Cheerios", "Corn Flakes (Kellogg)", "Raisin Bran (Kellog)", "Rice Krispies", "Special K", "Avena", "Malteada (chocolate)", "Pizza (with pepperoni)", "Tacos", "Hamburgers (con ingredients)", "Hotdog, sensillo", "Couscous", "White Rice", "Macaroni", "Peanut Butter", "Pork", "Sardines in Oil", "White Tuna in Water", "Popcorn (air-popped)", "Potato Chips (bbq flavor)", "Pretzels", "Tortilla Chips", "Chicken Noodle Soup", "Splt Pea & Ham Soup", "Veg & Beef Soup", "New England Clam Chowder", "Tomato Soup", "New England Clam Chowder (with milk)", "Cream of Mushroom Soup (with milk)", "Bean & Bacon Soup", "Corn tortillas", "Flour tortillas", "Avocados", "Peanuts", "Almonds", "Hazelnuts", "Coconut", "Walnuts", "Pistachios", "Green olives", "Cranberries", "Strawberries", "Mangos", "Musk Melon", "Papaya", "Pears", "Pineapple", "Watermelon", "Natural yogurt", "Yogurt with strawberry", "Blue cheese", "Gouda cheese", "Mozzarella", "Parmesan cheese", "Cream cheese", "Boiled eggs", "Fried eggs", "Chicken with vegetables", "Grilled chicken breast", "Roast veal", "Grilled steak", "Roast beef", "Fried beef", "Roast lamb", "Fried fish fillet", "Smoked salmon", "Fish fried whole", "Tuna in oil" ];

var foodNameses = ["Br&oacute;coli congelado ", "Zanahoria (cruda)", "Apio (crudo)", "Ma&iacute;z (congelado)", "Lechuga Iceberg (fresca)", "Pimiento dulce (fresco)", "Papa (hornerda)", "Tofu", "Pollo (asado)", "Espagueti con salsa", "Jitomate (rojo, colorado, verde)", "Manzana (con piel)", "Pl&aacute;tano", "Uva", "Kiwi (verde)", "Naranja", "Bagels", "Pan de trigo", "Pan blanco", "Galletas de avena", "Pay de manzana", "Galletas con chispas de chocolate", "Mantequilla", "Queso cheddar", "Leche entera (3.3% grasa)", "Leche baja en grasa (2% grasa)", "Leche descremada", "Huevos escalfados", "Huevos revueltos", "Salchicha de pavo", "Salchicha, carne de res", "Jam&oacute;n (rebanado, extra-magro)", "Kielbasa (de cerdo)", "Cap'N Crunch", "Cheerios", "Corn Flakes (Kellogg)", "Raisin Bran (Kellog)", "Rice Krispies", "Special K", "Arina de avena", "Malteada (chocolate)", "Pizza (con pepperoni)", "Taco", "Hamburguesa (con ingredientes)", "Hotdog, sencillo", "Cusc&uacute;s", "Arroz blanco", "Macarrones", "Crema de cacahuate", "Carne de cerdo", "Sardinas en aceite", "At&uacute;n blanco en agua", "Palomitas (Microhondas)", "Papas fritas (sabor bbq)", "Galleta salada", "Totopos", "Sopa de pollo con fideo", "Sopa de ch&iacute;charos", "Sopa de vegetales y res", "Sopa de almejas tipo Nuw England", "Sopa de jitomate", "Crema de almejas de tipo Nuw England", "Sopa crema de champi&ntilde;ones", "Sopa de fr&iacute;jol & tocino", "Tortilla de maiz", "Tortilla de harina", "Aguacate", "Cacahuate", "Almendra", "Avellana", "Coco", "Nuez", "Pistachos", "Aceituna verde", "Arandano rojo", "Fresa", "Mango", "Melon" , "Papaya", "Pera", "Pi&ntilde;a", "Sand&iacute;a", "Yogur natural", "Yogur con fresa", "Queso azul", "Queso gouda", "Queso mozzarella", "Queso parmesano", "Queso crema", "Huevos cocidos", "Huevos fritos", "Pollo con verduras", "Pechuga de pollo a la parrilla", "Asado de ternera", "Arrachera asada de vaca", "Carne asada de vaca", "Carne frita de vaca", "Carne de cordero asada", "Filete de pescado frito", "Salm&oacute;n ahumado", "Pescado entero frito", "At&uacute;n en aceite" ];


var numFoods= foodNamesen.length-1;


var foodSelected = [true, true, false, false, false, false, true, false, true, true, true, true, true, false, false, true, false, true, false, false, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false ];

var foodSelectedDefault = foodSelected.slice();


var maxServings = new Array();
for (var i = 0; i <= numFoods; i++) maxServings[i] = 2;
//(numFoods + ", " + maxServings[numFoods])
var maxServingsDefault = maxServings.slice();


var priceStrings = ["$0.16", "$0.07", "$0.04", "$0.18", "$0.02", "$0.53", "$0.06", "$0.31", "$0.84", "$0.78", "$0.27", "$0.24", "$0.15", "$0.32", "$0.49", "$0.15", "$0.16", "$0.05", "$0.06", "$0.09", "$0.16", "$0.03", "$0.05", "$0.25", "$0.16", "$0.23", "$0.13", "$0.08", "$0.11", "$0.15", "$0.27", "$0.33", "$0.15", "$0.31", "$0.28", "$0.28", "$0.34", "$0.32", "$0.38", "$0.82", "$0.52", "$0.44", "$0.59", "$0.83", "$0.31", "$0.39", "$0.08", "$0.17", "$0.07", "$0.81", "$0.45", "$0.69", "$0.04", "$0.22", "$0.12", "$0.19", "$0.39", "$0.67", "$0.71", "$0.75", "$0.39", "$0.99", "$0.65", "$0.67", "$0.02", "$0.06", "$0.34", "$0.89", "$1.75", "$1.38", "$0.68", "$1.98", "$1.25", "$0.98", "$0.78", "$0.86", "$0.25", "$0.39", "$0.37", "$0.43", "$0.36", "$0.34", "$0.28", "$0.32", "$0.23", "$0.24", "$0.28", "$0.24", "$0.31", "$0.13", "$0.15", "$1.05", "$1.13", "$1.18", "$1.88", "$1.31", "$1.22", "$1.32", "$0.75", "$1.02", "$0.73", "$0.45" ];


var prices = [0.16 , 0.07 , 0.04 , 0.18 , 0.02 , 0.53 , 0.06 , 0.31 , 0.84 , 0.78 , 0.27 , 0.24 , 0.15 , 0.32 , 0.49 , 0.15 , 0.16 , 0.05 , 0.06 , 0.09 , 0.16 , 0.03 , 0.05 , 0.25 , 0.16 , 0.23 , 0.13 , 0.08 , 0.11 , 0.15 , 0.27 , 0.33 , 0.15 , 0.31 , 0.28 , 0.28 , 0.34 , 0.32 , 0.38 , 0.82 , 0.52 , 0.44 , 0.59 , 0.83 , 0.31 , 0.39 , 0.08 , 0.17 , 0.07 , 0.81 , 0.45 , 0.69 , 0.04 , 0.22 , 0.12 , 0.19 , 0.39 , 0.67 , 0.71 , 0.75 , 0.39 , 0.99 , 0.65 , 0.67 ,
0.02 , 0.06 , 0.34 , 0.89 , 1.75 , 1.38 , 0.68 , 1.98 , 1.25 , 0.98 , 0.78 , 0.86 , 0.25 , 0.39 , 0.37 , 0.43 , 0.36 , 0.34 , 0.28 , 0.32 , 0.23 , 0.24 , 0.28 , 0.24 , 0.31 , 0.13 , 0.15 , 1.05 , 1.13 , 1.18 , 1.88 , 1.31 , 1.22 , 1.32 , 0.75 , 1.02 , 0.73 , 0.45 ];

var servingSizesen = ["10 oz", "1/2 cup shredded", "1 stalk", "1/2 cup", "1 leaf", "1 pepper", "1/2 cup", "1/4 block", "1 lb chicken", "1 1/2 cup", "1", "1", "1", "10", "1", "1", "1 oz", "1 slice", "1 slice", "1", "1 oz", "1", "1 pat", "1 oz", "1 cup", "1 cup", "1 cup", "1", "1", "1 oz", "1 frankfurter", "1 slice", "1 slice", "1 oz", "1 oz", "1 oz", "1.3 oz", "1 oz", "1 oz", "1 c", "1 c", "1 slice", "1 small", "1 burger", "1 hotdog", "1/2 cup", "1/2 cup", "1/2 cup", "2 tbsp", "4 oz", "2", "3 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 cup", "1 cup", "1 cup", "1 cup", "1 cup", "1 cup", "1 cup", "1 cup", "1", "1", "1", "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "3 oz", "3 oz", "3 oz", "3 oz", "4 oz", "4 oz", "1", "4 oz", "4 oz", "4 oz", "4 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1", "1", "5 oz", "5 oz", "4 oz", "4 oz", "4 0z", "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "3 oz" ];

var servingSizeses = ["10 oz", "1/2 taza rallada", "1 trozo", "1/2 taza", "1 hoja", "1 chile", "1/2 taza", "1/4 block", "1 lb pollo", "1 1/2 taza", "1", "1", "1", "10", "1", "1", "1 oz", "1 rebanada", "1 rebanada", "1", "1 oz", "1", "1 pat", "1 oz", "1 taza", "1 taza", "1 taza", "1", "1", "1 oz", "1 salchicha", "1 rebanada", "1 rebanada", "1 oz", "1 oz", "1 oz", "1.3 oz", "1 oz", "1 oz", "1 c", "1 c", "1 rebanada", "1 peque&ntilde;o", "1 hamburguesa", "1 hotdog", "1/2 taza", "1/2 taza", "1/2 taza", "2 tbsp", "4 oz", "2", "3 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 taza", "1 taza", "1 taza", "1 taza", "1 taza", "1 taza", "1 taza", "1 taza", "1", "1", "1", "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "3 oz", "3 oz" , "3 oz", "3 oz", "4 oz", "4 oz", "1", "4 oz", "4 oz", "4 oz", "4 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1 oz", "1", "1", "5 oz", "5 oz", "4 oz", "4 oz", "4 oz" , "4 oz", "4 oz", "4 oz", "4 oz", "4 oz", "3 oz" ];

var calories = [73.8 , 23.7 , 6.4 , 72.2 , 2.6 , 20 , 171.5 , 88.2 , 277.4 , 358.2 , 25.8 , 81.4 , 104.9 , 15.1 , 46.4 , 61.6 , 78 , 65 , 65 , 81 , 67.2 , 78.1 , 35.8 , 112.7 , 149.9 , 121.2 , 85.5 , 74.5 , 99.6 , 56.4 , 141.8 , 37.1 , 80.6 , 119.6 , 111 , 110.5 , 115.1 , 112.2 , 110.8 , 145.1 , 607.2 , 181 , 369.4 , 275 , 242.1 , 100.8 , 102.7 , 98.7 , 188.5 , 710.8 , 49.9 , 115.6 , 108.3 , 139.2 , 108 , 142 , 150.1 , 184.8 , 158.1 , 175.7 , 170.7 , 163.7 , 203.4 , 172 , 23 , 41 , 253 , 625 , 666 , 721 , 402 , 718 , 656 , 107 , 42 , 31 , 55 , 41 , 49 , 63 , 59 , 37 , 55 , 69 , 100 , 90.1 , 70 , 130 , 71 , 95 , 187 , 41 , 223 , 158 , 469 , 138 , 260 , 333 , 151 , 190 , 209 , 167 ];

var cholestrol = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 129.9 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5.1 , 10.9 , 29.4 , 33.2 , 18.3 , 4.4 , 211.5 , 211.2 , 28.1 , 27.4 , 13.3 , 17.4 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 14.2 , 56.4 , 42.8 , 44.1 , 0 , 0 , 0 , 0 , 105.1 , 34.1 , 35.7 , 0 , 0 , 0 , 0 , 12.3 , 7.2 , 10 , 10 , 0 , 22.3 , 19.8 , 2.5 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2.3 , 6.8 , 21.4 , 20 , 0 , 222 , 214 , 226.3 , 181 , 38.3 , 121.5 , 72.9 , 79.2 , 66.7 , 95.9 , 120.8 , 69 , 79.1 , 95.9 , 42.6 ];

var fat = [0.8 , 0.1 , 0.1 , 0.6 , 0 , 0.1 , 0.2 , 5.5 , 10.8 , 12.3 , 0.4 , 0.5 , 0.5 , 0.1 , 0.3 , 0.2 , 0.5 , 1 , 1 , 3.3 , 3.1 , 4.5 , 4.1 , 9.3 , 8.1 , 4.7 , 0.4 , 5 , 7.3 , 4.3 , 12.8 , 1.4 , 7.1 , 2.6 , 1.8 , 0.1 , 0.7 , 0.2 , 0.1 , 2.3 , 1.5 , 7 , 20.6 , 10.2 , 14.5 , 0.1 , 0.2 , 0.5 , 16 , 72.2 , 2.7 , 2.1 , 1.2 , 9.2 , 1 , 7.4 , 4.6 , 4 , 3.8 , 5 , 3.8 , 6.6 , 13.6 , 5.9 , 0.4 , 1.01 , 25.50 , 52.3 , 59.8 , 71.2 , 38 , 68.4 , 55 , 10.8 , 0.2 , 0.4 , 0.3 , 0.3 , 0.1 , 2.4 , 0.2 , 0.3 , 0.2 , 1.7 , 8.1 , 6.5 , 3.5 , 9.3 , 6.8 , 6.5 , 17.8 , 9 , 5.1 , 8.4 , 44.7 , 4.1 , 12.6 , 23.4 , 6.4 , 9.6 , 11.7 , 7.7 ];

var sodium = [68.2 , 19.2 , 34.8 , 2.5 , 1.8 , 1.5 , 15.2 , 8.1 , 125.6 , 1237.1 , 11.1 , 0 , 1.1 , 0.5 , 3.8 , 0 , 151.4 , 134.5 , 132.5 , 68.9 , 75.4 , 57.8 , 41.3 , 173.7 , 119.6 , 121.8 , 126.2 , 140 , 168 , 248.9 , 461.7 , 405.1 , 279.8 , 213.3 , 307.6 , 290.5 , 204.4 , 340.8 , 265.5 , 2.3 , 16.5 , 267 , 802 , 563.9 , 670.3 , 4.5 , 0.8 , 0.7 , 155.5 , 38.4 , 121.2 , 333.2 , 1.1 , 212.6 , 486.2 , 149.7 , 1862.2 , 964.8 , 1915.1 , 1864.9 , 1744.4 , 992 , 1076.3 , 951.3 , 5 , 21 , 4.9 , 18.3 , 15.8 , 2.3 , 22.8 , 4.8 , 6.8 , 1.7 , 0.8 , 0.8 , 6 , 24.9 , 3.4 , 2.3 , 1.1 , 1.1 , 87 , 53.1 , 3 , 252 , 192 , 0.3 , 227 , 87.4 , 69.9 , 63.8 , 89.1 , 327.8 , 143.8 , 88.1 , 104.7 , 102 , 122.9 , 1.2 , 41.4 , 437.9 ];


var carbs = [13.6 , 5.6 , 1.5 , 17.1 , 0.4 , 4.8 , 39.9 , 2.2 , 0 , 58.3 , 5.7 , 21 , 26.7 , 4.1 , 11.3 , 15.4 , 15.1 , 12.4 , 11.8 , 12.4 , 9.6 , 9.3 , 0 , 0.4 , 11.4 , 11.7 , 11.9 , 0.6 , 1.3 , 0.3 , 0.8 , 0.3 , 0.6 , 23 , 19.6 , 24.5 , 27.9 , 24.8 , 21.3 , 25.3 , 128.2 , 19.9 , 26.7 , 32.7 , 18 , 20.9 , 22.3 , 19.8 , 6.9 , 0 , 0 , 0 , 22.1 , 15 , 22.5 , 17.8 , 18.7 , 26.8 , 20.4 , 21.8 , 33.2 , 16.6 , 15 , 22.8 , 11 , 21 , 9.54 , 21.7 , 23.3 , 16.9 , 17.2 , 20.4 , 28.3 , 3.5 , 10.8 , 7.1 , 14.4 , 9.5 , 12.5 , 16.3 , 15.4 , 9.5 , 8.7 , 9.3 , 0.65 , 0 , 6.6 , 0 , 0.9 , 0.4 , 0.3 , 6.5 , 0 , 1.4 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

var fiber = [8.5 , 1.6 , 0.7 , 2 , 0.3 , 1.3 , 3.2 , 1.4 , 0 , 11.6 , 1.4 , 3.7 , 2.7 , 0.2 , 2.6 , 3.1 , 0.6 , 1.3 , 1.1 , 0.6 , 0.5 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0.5 , 2 , 0.7 , 4 , 0.4 , 0.7 , 4 , 0 , 0 , 0 , 0 , 0 , 1.3 , 0.3 , 0.9 , 2.1 , 0 , 0 , 0 , 4.3 , 1.2 , 0.9 , 1.8 , 1.5 , 4.1 , 4 , 1.5 , 1 , 1.5 , 0.5 , 8.6 , 0.7 , 0.4 , 6.83 , 14.8 , 10.1 , 10.5 , 7.5 , 6.95 , 2 , 3.6 , 1.7 , 1.4 , 1.1 , 2.1 , 2.4 , 1.4 , 0.3 , 0 , 0.3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 2.3 , 0 , 0.3 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ];

var protein = [8 , 0.6 , 0.3 , 2.5 , 0.2 , 0.7 , 3.7 , 9.4 , 42.2 , 8.2 , 1 , 0.3 , 1.2 , 0.2 , 0.8 , 1.2 , 3 , 2.2 , 2.3 , 1.1 , 0.5 , 0.9 , 0 , 7 , 8 , 8.1 , 8.4 , 6.2 , 6.7 , 3.9 , 5.4 , 5.5 , 3.4 , 1.4 , 4.3 , 2.3 , 4 , 1.9 , 5.6 , 6.1 , 17.3 , 10.1 , 20.7 , 13.6 , 10.4 , 3.4 , 2.1 , 3.3 , 7.7 , 13.8 , 5.9 , 22.7 , 3.4 , 2.2 , 2.6 , 2 , 7.9 , 11.1 , 11.2 , 10.9 , 4.1 , 9.5 , 6.1 , 7.9 , 0.61 , 1.08 , 2.08 , 29.5 , 22.7 , 16.3 , 3.9 , 18.2 , 23.3 , 1.2 , 0.3 , 0.7 , 0.4 , 0.7 , 0.7 , 0.5 , 0.7 , 6.4 , 4.2 , 6.05 , 7.9 , 3.3 , 11.8 , 1.7 , 7.9 , 6.4 , 10.7 , 40.9 , 18.4 , 16 , 23.6 , 34.8 , 28.3 , 22.8 , 24.5 , 24.8 , 23 ];

var vitA = [5867.4 , 15471 , 53.6 , 106.6 , 66 , 467.7 , 0 , 98.6 , 77.4 , 3055.2 , 766.3 , 73.1 , 92.3 , 24 , 133 , 268.6 , 0 , 0 , 0 , 2.9 , 35.2 , 101.8 , 152.9 , 296.5 , 307.4 , 500.2 , 499.8 , 316 , 409.2 , 0 , 0 , 0 , 0 , 40.6 , 1252.2 , 1252.2 , 1250.2 , 1252.2 , 1252.2 , 37.4 , 0 , 281.9 , 855 , 126.3 , 0 , 0 , 0 , 0 , 0 , 14.7 , 53.8 , 68 , 55.6 , 61.5 , 0 , 55.6 , 1308.7 , 4872 , 3785.1 , 20.1 , 1393 , 163.7 , 153.8 , 888 , 25 , 37 , 14 , 0 , 1.2 , 5.2 , 0 , 8.5 , 23 , 29 , 2 , 2 , 390 , 185 , 200 , 7 , 38.5 , 2.2 , 19.5 , 50 , 70 , 109.5 , 64 , 55.6 , 123.2 , 103.2 , 8 , 9.65 , 38.54 , 5.85 , 12 , 0 , 0 , 7.02 , 34 , 48.21 , 131 ];

var vitC = [160.2 , 5.1 , 2.8 , 5.2 , 0.8 , 66.1 , 15.6 , 0.1 , 0 , 27.9 , 23.5 , 7.9 , 10.4 , 1 , 74.5 , 69.7 , 0 , 0 , 0 , 0.1 , 0.9 , 0 , 0 , 0 , 2.3 , 2.3 , 2.4 , 0 , 0.1 , 0 , 10.8 , 7.4 , 5.5 , 0 , 15.1 , 15.1 , 0 , 15.1 , 15.1 , 0 , 0 , 1.6 , 2.2 , 2.6 , 0.1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 9.6 , 0 , 0 , 0 , 7 , 4.8 , 4.8 , 133 , 3.5 , 2.2 , 1.5 , 0.14 , 0.28 , 8 , 0, 5.8 , 3.2 , 3.35 , 5.83 , 5 , 1.5 , 13.45 , 60 , 26 , 63 , 15 , 10.2 , 0.95 , 7.95 , 0 , 0 , 0.25 , 0 , 0.13 , 0 , 0 , 2 , 0 , 0.51 , 0 , 8 , 0 , 0 , 0 , 0 , 0.80 , 0 ];

var calcium = [159 , 14.9 , 16 , 3.3 , 3.8 , 6.7 , 22.7 , 121.8 , 21.9 , 80.2 , 6.2 , 9.7 , 6.8 , 3.4 , 19.8 , 52.4 , 21 , 10.8 , 26.2 , 6.7 , 3.1 , 6.2 , 1.2 , 202 , 291.3 , 296.7 , 302.3 , 24.5 , 42.6 , 23.8 , 9 , 2 , 11.4 , 4.8 , 48.6 , 0.9 , 12.9 , 4 , 8.2 , 18.7 , 23.1 , 64.6 , 220.6 , 51.4 , 23.5 , 7.2 , 7.9 , 4.9 , 13.1 , 59.9 , 91.7 , 3.4 , 2.8 , 14.2 , 10.2 , 43.7 , 27.1 , 33.6 , 32.6 , 82.8 , 27.6 , 186 , 178.6 , 81 , 2 , 0.11 , 13 , 58 , 245 , 18.9 , 18 , 87.5 , 136 , 59.5 , 7 , 27.5 , 10 , 28 , 25 , 17.5 , 6.2 , 200 , 135 , 134 , 202 , 153 , 349 , 22.15 , 25.34 , 21.24 , 24.45 , 9.18 , 21.12 , 16 , 3.5 , 9.5 , 13.88 , 9.04 , 16 , 13 , 11 ];

var iron = [2.3, 0.3, 0.2, 0.3, 0.1, 0.3, 4.3, 6.2, 1.8, 2.3, 0.6, 0.2, 0.4, 0.1, 0.3, 0.1, 1, 0.7, 0.8, 0.5, 0.1, 0.4, 0, 0.2, 0.1, 0.1, 0.1, 0.7, 0.7, 0.4, 0.6, 0.2, 0.4, 7.5, 4.5, 1.8, 16.8, 1.8, 4.5, 1.6, 47.2, 0.9, 2.4, 2.5, 2.3, 0.3, 0.9, 1, 0.6, 0.4, 0.7, 0.5, 0.8, 0.5, 1.2, 0.4, 1.5, 2.1, 2.2, 2.8, 3.5, 1.5, 0.6, 2, 0.12, 0.08, 0.59, 3.5, 4.2, 3.5, 2.47, 1.82, 6.72, 1.4, 0.2, 0.75, 0.5, 0.52, 12, 0.32, 0.25, 0.12, 0.22, 7.8, 0.18, 0.11, 1.02, 3.2, 1.08, 1.13, 5.85, 1.43, 2.88, 2.95, 2.38, 3.9, 3.28, 0.95, 0.70, 0.97, 1 ];



var epsilon = .00000000000001  // 10^-14

var maxSigDig = 13; // max number of sig digits

// var exit = false; // get out of here

var okToRoll = true;		// preliminary testing results

var stepName = "";		// for error trap

var tab = unescape( "%09" );	// these are now the appropriate strings;

var cr = unescape( "%0D" );

var lf = unescape( "%0A" );

var symb = unescape( "%C5" );

var backSlash = unescape( "%5C" );

var gteSymbol = unescape( "%B3" ); // symbols in old netscape

var lteSymbol = unescape( "%B2" );

var lte = unescape ("%u2264");	// actual symbol in IE

var gte = unescape ("%u2265");

var comma = ",";

var singular = false;

var msFormat = false;

var maxRows = 15;

var maxCols = 30;

var numRows = 0;

var numCols = 0;

var numConstraints = 0;

var maximization = true;		// this is a max problem

var phase1 = false;			// are we in phase 1?

var objectiveName = "p";

var numVariables = 1;

var variables = [];

var theTableau = new makeArray2 (1,1);

var theStringTableau = new makeArray2 (1,1); 	// to display steps in the computation

var starred = new makeArray(1);			// starred rows

var TableauNumber = 1;				// the number of tableaus

var maxSteps = 100;					// maximum number of tableaux

var numSigDigs = 6;					// default accuracy



// old globals below...



var maxDenom = 1000;  // for fraction approximation

var tol = .000000001; // for 10 digit accuracy guaranteed cutoff for fractin approx not yet implemented

var tooBigString = "Too many matrices in your expression," + cr + "or your expression is too complicated." + cr +"Please keep it simple!"



// the Instructions



var theSampleLPString = "Maximize p = (1/2)x + 3y + z + 4w subject to" + cr + "x + y + z + w <= 40" + cr + "2x + y - z - w >= 10" + cr + "w - y >= 10";



var theInstructionString = "Notes on formatting: " + cr + " (1) Variable names must begin with letters." + cr + tab + tab + "    (eg. p, x1, loss, z, s, t, u...) " + cr + " (2) For fraction inputs, keep the variable on the right." + cr + tab + tab + "    (eg. (1/3)x and not x/3) " + cr + " (3) Every variable you use must appear in the objective function, (but not"+cr+"     necessarily in the constraints). " + cr + tab + tab + "    (eg. p = 0x + 2y + 0z ) " + cr + " (4) The words 'maximize' (or 'minimize') and 'subject to' must appear. " + cr + " (5) Each inequality should be on its own line, as shown. " + cr + " (6) No need to enter the default constraints: x >= 0, y >= 0, z >= 0 etc."



// end instructions









var fractionMode = false;

var integerMode = false;

var okToRoll = true;

var browserName = navigator.appName;

var browserVersion = navigator.appVersion;

if ( (browserName == "Netscape") && (parseInt(browserVersion) >= 3)) browserName = "N";

else if ( (browserName == "Microsoft Internet Explorer") && (parseInt(browserVersion) >= 3) ) browserName = "M";



// ****************** ERROR HANDLER *************

function myErrorTrap(message,url,linenumber) {

alert("Sorry, I can't process this." + cr +" Press 'Example' for general information.");

return (true);

} // end of on error



// ******************** MATH UTILITIES ******************

function hcf (a,b) {

var bigger = Math.abs(a);

var smaller = Math.abs(b);

var x = 0;

var theResult = 1;

if ( (a == 0) || (b == 0) ) return(1);

if (smaller > bigger) {x = bigger; bigger = smaller;  smaller = x}



var testRatio = roundSigDig(bigger/smaller, 11);

var testRatio2 = 0;

if (testRatio == Math.floor(testRatio) ) return (smaller)

else

	{

	// look for a factor of the smaller, deplete it by that factor and multiply bigger by it

	var found = false;

	var upperlimit = smaller;

	for (var i = upperlimit; i >= 2; i--)

		{

		testRatio = roundSigDig(smaller/i, 10);

		testRatio2 = roundSigDig(bigger/i, 10);

		if  ( (testRatio == Math.floor(testRatio) ) && (testRatio2 == Math.floor(testRatio2) ) )

			{

			smaller = Math.round(smaller/i);

			smaller = Math.round(bigger/i);

			return(theResult *hcf(bigger, smaller) );

			}

		}

		return(theResult);

		}

alert("error!");

return(-1); // should never get here

} // hcf





function lcm(a,b) {

// lowest common multiple

var bigger = Math.abs(a);

var smaller = Math.abs(b);

var x = 0;

if ( (a == 0) || (b == 0) ) return(1);

if (smaller > bigger) {x = bigger; bigger = smaller;  smaller = x}



var testRatio = roundSigDig(bigger/smaller, 11)

if (testRatio == Math.floor(testRatio) ) return (bigger)

else

	{

	// look for a factor of the smaller, deplete it by that factor and multiply bigger by it

	var found = false;

	for (var i = 2; i <= smaller; i++)

		{

		if (i*i >= smaller) break;

		testRatio = roundSigDig(smaller/i, 11);

		if (testRatio == Math.floor(testRatio) )

			{

			smaller = testRatio;

			bigger = bigger*i;

			return( lcm(bigger, smaller) );

			}

		}

		return(bigger*smaller);

		}

alert("error!");

return(-1); // should never get here

} // lcm



// *** reducing a fraction ***

function reduce(fraction){

with (Math)

	{

	var HCF = hcf(fraction[1], fraction[2]);

	fraction[1] = Math.round(fraction[1]/HCF);

	fraction[2] = Math.round(fraction[2]/HCF);

	} // with math

return(fraction);

} // reduce fraction





function toFracArr(x, maxDenom, tol) {

// identical to toFrac, except this returns an array [1] = numerator;  [2] = denom

// rather than a string

// tolerance is the largest errror you will tolerate before resorting to

// expressing the result as the input decimal in fraction form

// suggest no less than 10^-10, since we round all to 15 decimal places.

	var theFrac = new Array();

	theFrac[1] = 0;

	theFrac[2] = 0;

	var p1 = 1;

	var p2 = 0;

	var q1 = 0;

	var q2 = 1;

	var u =0;

	var t = 0;

	var flag = true;

	var negflag = false;

	var a = 0;

	var xIn = x; // variable for later



	if (x >10000000000) return(theFrac);

while (flag)

	{

	if (x<0) {x = -x; negflag = true; p1 = -p1}

	var intPart = Math.floor(x);

	var decimalPart = roundSigDig((x - intPart),15);



	x = decimalPart;

	a = intPart;



	t = a*p1 + p2;

	u = a*q1 + q2;

	if  ( (Math.abs(t) > 10000000000 ) || (u > maxDenom ) )

		{

			n = p1;

			d = q1;

			break;

		}



		p = t;

		q = u;



//		cout << "cf coeff: " << a << endl; // for debugging

//		cout << p << "/" << q << endl;	// for debugging



	if ( x == 0 )

		{

		n = p;

		d = q;

		break;

		}



		p2 = p1;

		p1 = p;

		q2 = q1;

		q1 = q;

		x = 1/x;



	} // while ( true );



	theFrac[1] = n;

	theFrac[2] = d;

	return(theFrac);



} // toFracArr



function toFrac(x, maxDenom, tol) {

// tolerance is the largest errror you will tolerate before resorting to

// expressing the result as the input decimal in fraction form

// suggest no less than 10^-10, since we round all to 15 decimal places.

	var theFrac = new Array();

	theFrac[1] = 0;

	theFrac[2] = 0;

	var p1 = 1;

	var p2 = 0;

	var q1 = 0;

	var q2 = 1;

	var u =0;

	var t = 0;

	var flag = true;

	var negflag = false;

	var a = 0;

	var xIn = x; // variable for later



	if (x >10000000000) return(theFrac);

while (flag)

	{

	if (x<0) {x = -x; negflag = true; p1 = -p1}

	var intPart = Math.floor(x);

	var decimalPart = roundSigDig((x - intPart),15);



	x = decimalPart;

	a = intPart;



	t = a*p1 + p2;

	u = a*q1 + q2;

	if  ( (Math.abs(t) > 10000000000 ) || (u > maxDenom ) )

		{

			n = p1;

			d = q1;

			break;

		}



		p = t;

		q = u;



//		cout << "cf coeff: " << a << endl; // for debugging

//		cout << p << "/" << q << endl;	// for debugging



	if ( x == 0 )

		{

		n = p;

		d = q;

		break;

		}



		p2 = p1;

		p1 = p;

		q2 = q1;

		q1 = q;

		x = 1/x;



	} // while ( true );



	theFrac[1] = n;

	theFrac[2] = d;



	if (theFrac[2] == 1) return (theFrac[1].toString());

	else return (theFrac[1] + "/" + theFrac[2]);



} // toFrac





function lastChar(theString) {

if (theString == "") return(theString);

var len = theString.length;

return theString.charAt(len-1);

}



function isCharHere (InString, RefString)  {

	if(InString.length!=1)

		return (false);

	if (RefString.indexOf (InString, 0)==-1)

		return (false);

	return (true);

}



function looksLikeANumber(theString) {

// returns true if theString looks like it can be evaluated

var result = true;

var length = theString.length;

if (length == 0) return (false);

var x = ""

var y = "1234567890-+*. /"

var yLength = y.length;

for (var i = 0; i <= length; i++)

	{

	x = theString.charAt(i);

		result = false;

		for (var j = 0; j <= yLength; j++)

			{

			if (x == y.charAt(j)) {result = true; break}

			} // j

	if (result == false) return(false);

	} // i

return(result);

} // looks like a number



function roundSix(theNumber) {

var x = (Math.round(1000000*theNumber))/1000000;

return(x);

}



function shiftRight(theNumber, k) {

	if (k == 0) return (theNumber)

	else

		{

		var k2 = 1;

		var num = k;

		if (num < 0) num = -num;

		for (var i = 1; i <= num; i++)

			{

			k2 = k2*10

			}

		}

	if (k>0)

		{return(k2*theNumber)}

	else

		{return(theNumber/k2)}

	}



function roundSigDig(theNumber, numDigits) {

		numDigits = numDigits -1		// too accurate as written

	with (Math)

		{

		if (theNumber == 0) return(0);

		else if(abs(theNumber) < 0.000000000001) return(0);

// WARNING: ignores numbers less than 10^(-12)

		else

			{

			var k = floor(log(abs(theNumber))/log(10))-numDigits

			var k2 = shiftRight(round(shiftRight(abs(theNumber),-k)),k)

			if (theNumber > 0) return(k2);

			else return(-k2)

			} // end else

		}

	}


function roundDec(theNumber, numPlaces) {
with (Math)
	{
	var x =shiftRight(round(shiftRight(theNumber,numPlaces)),-numPlaces);
	return x;
	} // with math
} // roundDec


function looksLikeANumber(theString) {

// returns true if theString looks like it can be evaluated

var result = true;

var length = theString.length;

var x = ""

var y = "1234567890-+^*./ "

var yLength = y.length;

for (var i = 0; i <= length; i++)

	{

	x = theString.charAt(i);

		result = false;

		for (var j = 0; j <= yLength; j++)

			{

			if (x == y.charAt(j)) {result = true; break}

			} // j

	if (result == false) return(false);

	} // i

return(result);

} // looks like a number



// ************ MAKE INTEGER

// Makes a matrix integer by least common multiples of rows

// returms a matrix of STRINGS if Strings = true else gives integers

// input = a matrix of real floats

// also records the row lcm of row i in outArray[i][0]



function makeInteger(theMatrix, RowNum, ColNum,Strings) {

var rowArray = new makeArray2(ColNum,2);

var outArray = new makeArray2(RowNum,ColNum);

for (var i = 1; i <= RowNum; i++)

	{

	// set up fraction row array

	for (var j = 1; j <= ColNum; j++)

		{

		for (var k = 1; k <= 2; k++) rowArray[j][k] = toFracArr(theMatrix[i][j],maxDenom, tol)[k];

		} // j



	// get the lcm of all the row denominators

	var rowLcm = 1;

	for (j = 1; j <= ColNum; j++) rowLcm = lcm(rowLcm,rowArray[j][2]);

	// now multiply the row by the lcm

	var x = 0;

	for  (j = 1; j <= ColNum; j++)

		{

		x = rowLcm*rowArray[j][1]/rowArray[j][2];

		if (!Strings) outArray[i][j] = Math.round(x);

		else outArray[i][j] = Math.round(x).toString();

		} // j

	outArray[0][j] = rowLcm;

	} // i

return(outArray);



} // makeInteger





// *******************PIVOT **********************

function pivot(InMatrix,rows,cols,theRow,theCol) {

// alert("theRow = " + theRow + "theCol" + theCol);

var thePivot = InMatrix[theRow][theCol];

for (var i = 1; i <= cols; i++)

	{

	InMatrix[theRow][i] = InMatrix[theRow][i]/thePivot;

	} // i

// now pivot

for (var i = 1; i <= rows; i++)

	{

	if ( (i != theRow) && (InMatrix[i][theCol] != 0) )

		{

		var factr = InMatrix[i][theCol];

		for (var j = 1; j <= cols; j++)

			{

			InMatrix[i][j] = InMatrix[i][j] - factr*InMatrix[theRow][j];

			} // j

		}

	} // i

// now round all answers

// for (var i = 1; i <= rows; i++)

// 	{

// 	for (var j = 1; j <= cols; j++)

// 		{

// 		InMatrix[i][j] = roundNine(InMatrix[i][j]);

// 		} // j

// 	} // i



return(InMatrix);

}

// ***************** END PIVOT *********************



// ****************SIMPLEX METHOD****************

function simplexMethod(InMatrix, rows, cols) {

var negIndicator = false;

var testRatio = new Array();

var theRow = 0; singular = false;



document.theSpreadsheet.expr.value = "working..";



// alert("HERE")

// PHASE I

while ( (phase1) && (TableauNumber <= maxSteps) )

	{

	phase1 = false;

	for (var i = 1; i <= numRows-1; i++) starred[i] = 0;	// start with a clean slate

	// look for negative pivot columns

	var numx = 0; var theRowx = 0; var theColx = 0; var count = 0;

	for (var j = 1; j <= numCols-2; j++)

		{

		count = 0;

		theRowx = 0;

		for (var i = 1; i <= numRows; i++)

			{

			numx = roundSigDig(InMatrix[i][j],10);

			if (numx != 0)

				{

				count++;

				if (numx < 0) theRowx = i;

				}

			} // i

		if ((count == 1) && (theRowx > 0))

		 	 {

			phase1 = true;

			starred[theRowx] = 1;

//			alert("starred row is row #" + theRowx + "column is "+j)

			}





		} // j

	// end of checking for starred rows phase1 = still true if there are...



	if (phase1)		// there are starred rows

		{
		// first unstar all rows with zeros on the right-hand side
		// by reversing the inequalties
		var checkingForZeros = true;
		var foundAZero = false;
		while(checkingForZeros) {
			checkingForZeros = false;
			for (i = 1; i <= numRows-1; i++)
				{
				if (starred[i] == 1)  break;
				} // i
			theRowx = i;
			// check the first column to see if it has a zero on the
			// right-hand side and is hence equivalent to <= constraint
			if ((InMatrix[theRowx][cols] == 0)&&(starred[theRowx] == 1)){
				checkingForZeros  = true;
				foundAZero = true;
				for (var j = 1; j <= cols-1; j++) {
					InMatrix[theRowx][j] *= -1;
					} // j
				starred[theRowx] = 0;
				} // found a zero on the right-hand side
			} // while checking for zeros
		// scan the first starred row starred row for the largest pos. element & pivot on that column

		// this is actually step 2
		if(!foundAZero) {
			// find the largest positive entry in the first starred row
			// and pivot

			var rowmax = 0;

			for (i = 1; i <= numRows-1; i++)

				{

				if (starred[i] == 1) break;

				} // i

			theRowx = i;

			for (j = 1; j <= numCols-2; j++)

				{

				numx = roundSigDig(InMatrix[i][j],10);

				if (numx > rowmax) {rowmax = numx; theColx = j;}

				} // j

			if (rowmax == 0) {singular = true; displayFinalStatus(); return(InMatrix)}





			else

				{

				// get the lowest ratio and pivot on theRowx, theColx;

				for (var i = 1; i <=rows-1; i++)

					{

					testRatio[i] = -1;

		if (roundSigDig(InMatrix[i][theColx],maxSigDig) >0) // dont want to pivot on a number too close to zero

						{
						if (Math.abs(InMatrix[i][cols]) < epsilon) InMatrix[i][cols] = 0;
						// fixing numbers really close to zero
						testRatio[i] = InMatrix[i][cols]/ InMatrix[i][theColx];

						}

					} // i

				var minRatio = 10000000000000;

				theRow = 0;			// this will have smallest ratio

				for (var i = 1; i <=rows-1; i++)

					{

					if ((testRatio[i] >= 0) && (testRatio[i] < minRatio))

						{

						minRatio = testRatio[i];

						theRow = i;

						} // end if



					else if ((testRatio[i] >= 0) && (testRatio[i] == minRatio))

						{

						if (starred[i] == 1) theRow = i;

						// select starred ones in preference to others

						}

					} // i

			// escape clause follows

				if (theRow == 0) {singular = true; displayFinalStatus(); return(InMatrix)}



				InMatrix = pivot(InMatrix,rows,cols,theRow,theColx);

				// end of this step
			} // if did not find a zero


			TableauNumber +=1;

			document.theSpreadsheet.expr.value += "..";

//displayMatrix(1);



			}

		} // end of phase 1 treatment





// phase1 = false  // TEMPORARY MEASURE TO PREVENT INF LOOPS

	}





// END OF PHASE I

// NOW PHASE II

// alert ("HERE AT PHASE 2")



var testnum = 0;



for (var i = 1; i <= cols-1; i++)

	{

	testnum = roundSigDig(InMatrix[rows][i],10)

	if (testnum<0)

		{

		negIndicator = true;

		}

	} // i



var theCol = 0;

if (negIndicator)

	{

	// look for most negative of them;

	var minval = 0;

	for (i = 1; i <= cols-1; i++)

		{

		testnum = roundSigDig(InMatrix[rows][i],10);

		if (testnum<minval)

			{

			minval = testnum;

			theCol = i;

			}

	} // i



	}



while  ( (negIndicator) && (TableauNumber <= maxSteps) ) // phase 2

	{

	for (var i = 1; i <=rows-1; i++)

		{

		testRatio[i] = -1;

		if (roundSigDig(InMatrix[i][theCol],maxSigDig) >0) // dont want to pivot on a number too close to zero

			{
			if (Math.abs(InMatrix[i][cols]) < epsilon) InMatrix[i][cols] = 0;
			// fixing numbers really close to zero
			testRatio[i] = InMatrix[i][cols]/ InMatrix[i][theCol];
// if (theCol == 1) alert(testRatio[i]);

			}

		} // i

	var minRatio = 10000000000000;

	theRow = 0;			// this will have smallest ratio

	for (var i = 1; i <=rows-1; i++)

		{



		if ((testRatio[i] >= 0) && (testRatio[i] <=minRatio))

			{

			minRatio = testRatio[i];

			theRow = i;

			}

		} // i



	// escape clause:

	if (theRow == 0) {singular = true; displayFinalStatus(); return(InMatrix)}



	InMatrix = pivot(InMatrix,rows,cols,theRow,theCol);

	// end of this step



	TableauNumber +=1;

	document.theSpreadsheet.expr.value += "..";

// displayMatrix(1);





	negIndicator = false;

	for (var i = 1; i <= cols-1; i++)

		{

		if (roundSigDig(InMatrix[rows][i], 10) <0)

			{

			// theCol = i;

			negIndicator = true;

// alert("Column = "+i+"   Value = " + InMatrix[rows][i]);

			}

		} // i



// ERROR CORRECTION BELOW:



      if (negIndicator)  // need to select the most negative EVERY time

      {

         // look for most negative of them;

         var minval = 0;

         for (i = 1; i <= cols-1; i++)

         {

            testnum = roundSigDig(InMatrix[rows][i],10);

            if (testnum<minval)

            {

               minval = testnum;

               theCol = i;

            }

         } // i

      }  // end if negIndicator is still true

	} // while negIndicator





displayFinalStatus();

return(InMatrix);

} // simplexMethod

// ********************** END OF SIMPLEX METHOD



function checkString(InString,subString,backtrack)

// check for subString

// if backtrack = false, returns -1 if not found, and left-most location in string if found

// if backtrack = true, returns -1 if not found, and right-most location in string if found

// note that location is to the left of the substring in both cases

{

var found = -1;

var theString = InString;

var Length = theString.length;

var symbLength = subString.length;

for (var i = Length- symbLength; i >-1; i--)

	{

	TempChar=theString.substring (i, i+ symbLength);

	if (TempChar == subString)

			{

			found = i;

			if (backtrack) i = -1

			}

	} // i

return(found);

} // check





// alert("HERE")

function parser (InString, Sep)  {

// ************************

// returns an array 0th entry = number n of blocks (-1) if the character Sep does not occur

// subsequent n entries are the blocks themselves

// Here are the blocks

// ***block 1 *** SEP *** block 2 *** SEP *** block 3 ***

// (one more block than number of occurrences of SEP)

// ************************

	var NumSeps=0; var Count = 0;

	var location = new Array;

	location[0] = -1;

	var len = InString.length;

	for (Count=0; Count < len; Count++)  {

		if (InString.charAt(Count)==Sep)

			{

			NumSeps++;

			location[NumSeps] = Count;

			}

		}



	var parse = new makeArray (NumSeps+2);

	if (NumSeps == 0) {parse[0] = 1; parse[1] = InString; return(parse);}

	parse[0] = NumSeps + 1;



	for (var i = 1; i <=NumSeps; i++)

		{

		parse[i] = InString.substring(location[i-1]+1, location[i]);

// alert("i = " + i + "  "  + parse[i]);

		}

		parse[NumSeps+1] = InString.substring(location[NumSeps]+1, len);

// alert("i = " + i + "  "  + parse[i]);





	return (parse);

}



function parseLinearExpr(InString) {

// **********

// Returns an array: with 0th entry = an array of variable names

// (eg. ["x", "x'", "y", "z"])

// and subsequent entries the coefficients.

// to get the number of coeeficients, just take the length of the array in position 0.

// first remove a leading cr if there

// ***HERE THE FOLLOWING 2 LINEs ADDED AS A FIX FOR WINTEL

// ALSO ONE A FEW LINES DOWN

InString = stripChar(InString,"(");   // get rid of parens (not needed once x is gone...

InString = stripChar(InString,")");

var stringlen = InString.length

// alert(escape(InString.charAt(0)));

// if (InString.charAt(0) == unescape( "%0A" )) InString = InString.substring(1, stringlen);

// THE ABOVE LINE REMOVES A STRANGE BUG IN NETSCAPE, WHICH SEEMS

// TO INSERT A SPURIOUS LINE BREAK  (0A) THERE RATHER THAN A CR (0D)



// first insert a leading 1

// ***HERE THE FOLLOWING LINE WAS ADDED AS A FIX FOR WINTEL

if (!looksLikeANumber(InString.charAt(0))) InString = "1" + InString;



// first insert a leading + if necessary

if (InString.charAt(0) != "-") InString = "+"+ InString;

// alert(InString);

	var variableList = "";

	InString = replaceSubstring (InString,"+","_+");

	InString = replaceSubstring (InString,"-","_-");



	var ch = "_";

	var Ar = parser(InString, ch);

	var parsd = new makeArray (Ar[0]+1, "");

// alert(Ar[0] + "***" + Ar[1] + "***" + Ar[2] + "***" + Ar[3] + "***" + Ar[4] );



	for (var i = 1; i < Ar[0]; i++)

		{

		parsd[i] = stripChar(Ar[i+1],"_");

		// parser gives 1st entry as what is before first sign -- ignore it

		}



// now for the variable names

var vars = [];

for (var i = 1; i < Ar[0]; i++)

	{

	vars[i-1] = /([a-zA-Z].*)/.exec(parsd[i])[1];

	parsd[i] = parsd[i].replace(/[a-zA-Z].*/, '');

	if (parsd[i] == "+") parsd[i] = "1";  // fixz up the coefficients

	else if  (parsd[i] == "-") parsd[i] = "-1";

	parsd[i] = stripChar(parsd[i],"+");

	}

parsd[0] = vars;



// alert(parsd[0] + "," + parsd[1] + "," + parsd[2] + "," + parsd[3])

	return (parsd);



} // parser







function rightString (InString, num)  {

	OutString=InString.substring (InString.length-num, InString.length);

	return (OutString);

}



function rightTrim (InString)  {

	var length = InString.length;

	OutString=InString.substring(0,length-1);

	return (OutString);

}



function replaceChar (InString,oldSymbol,newSymbol)  {

	var OutString="";

	var TempChar = "";

	for (Count=0; Count < InString.length; Count++)  {

		TempChar=InString.substring (Count, Count+1);

		if (TempChar!=oldSymbol)

			OutString=OutString+TempChar

		else OutString=OutString+newSymbol;

	}

	return (OutString);

}









function replaceSubstring (InString,oldSubstring,newSubstring)  {

	OutString="";

	var sublength = oldSubstring.length;

	for (Count=0; Count < InString.length; Count++)  {

		TempStr=InString.substring (Count, Count+sublength);

		TempChar=InString.substring (Count, Count+1);

		if (TempStr!= oldSubstring)

			OutString=OutString+TempChar

		else

			{

			OutString=OutString+ newSubstring;

			Count +=sublength-1

			}



	}

	return (OutString);

}





// ******************** FORM UTILITIES ******************



function sesame(url,hsize,vsize){
// Default size is 550 x 400
        var tb="toolbar=0,directories=0,status=0,menubar=0"
        tb+=",scrollbars=1,resizable=1,"
    var tbend="width="+hsize+",height="+vsize;
    if(tbend.indexOf("<undefined>")!=-1){tbend="width=550,height=400"}
        tb+=tbend
        Win_1 = window.open("","win1",tb);
        Win_1 = window.open(url,"win1",tb);
	Win_1.focus();
    }





// *** testing *******

// document.theSpreadsheet.output.value = theSampleMatrixString;

// document.theSpreadsheet.output.value +=  "\r" +  checkString(theString, cr+cr,false);

// var matrixName = "A";

// *** testing *******

//  alert ("here");







// ******************* LP PARSER FOLLOWS  **************************



function SetupTableau() {

// reads problem and sets up the first tableau



// get out of here if not ok

if (!okToRoll) return (666);



// first, adjust some globals...

maximization = true;

singular = false;		// start with a clean slate



var theString = document.theSpreadsheet.input.value;

theString += cr;		// want an extrta cr at the end

theString = stripSpaces(theString);

theString = stripChar(theString,tab);			// get rid of tabs

theString = stripChar(theString,":");			// get rid of colons

theString = replaceSubstring(theString,lf, cr);	// replace line feeds by carriage returns

							// some browsers addd these to cr



// convert everything to lower case

theString = theString.toLowerCase();

// now parse commas into line breaks and introduce a line break after "subject to"

theString = replaceSubstring(theString, "to", "to"+cr);

theString = replaceSubstring(theString, ",", cr);

theString = replaceSubstring(theString, cr+"subject", "subject"); // in case they have instrocued a line break or comma before 'subject to'



// now get rid of double carriage returns



var doublecr = true;

while (doublecr)

	{

	if (checkString(theString,cr+cr,false) == -1) doublecr = false;

	else theString = replaceSubstring(theString,cr+cr,cr);

	}

// get rid of terminating cr

if (lastChar(theString) == cr) theString = rightTrim(theString,1);



// else alert("*"+lastChar(theString)+"*");



theString = replaceSubstring(theString, "<=", lteSymbol);

theString = replaceSubstring(theString, ">=", gteSymbol);

theString = replaceSubstring(theString, lte, lteSymbol);

theString = replaceSubstring(theString, gte, gteSymbol);







// look for "maximize" and chop the string there

var check = checkString(theString,"maxi",false)

if (check == -1)

	{check = checkString(theString,"mini",false); maximization = false; phase1 = true}

if (check == -1) { document.theSpreadsheet.expr.value = "Huh?"; document.theSpreadsheet.output.value = "That does not look like a linear programming problem to me!" + cr + cr + "Press Example to see how to type one in." ; okToRoll = false; return(666);}

len = theString.length;

theString = theString.substring(check,len);

// now the string starts with "max or "min"





// now extract the objective and constraints



var tempAr = parser(theString,cr);

var numConstTemp = tempAr[0]-1;

for (var i = 2; i <= numConstTemp; i++) {

	if (tempAr[i] && tempAr[i].match(/=/)) {

		tempAr[i] = tempAr[i].replace(/=/, lteSymbol);

		tempAr[numConstTemp+2] = tempAr[i].replace(lteSymbol, gteSymbol);
		numConstTemp += 1;
		tempAr[0] += 1;

	}

}

// alert("HERElines of the problem are: "+tempAr[0] + "blocks" + tempAr[1] + "***" + tempAr[2] + "***" + tempAr[3] + "***" +  tempAr[4] + "***" +  tempAr[5] + "***")

// the first line should contain the objective



var line1 = tempAr[1];



// get rid of "subject to, if there"

check = checkString(line1,"subj",true);

if (check > 0) line1 = line1.substring(0,check);



// now look for objective

check = checkString(line1,"=",false);

if (check <=0) return(666);

objectiveName = line1.charAt(check-1);

len = line1.length;

var expression = line1.substring(check+1,len);

// alert(expression);

var OBJ = parseLinearExpr(expression);

variables = OBJ[0];

// alert (variables);



numConstraints = tempAr[0]-1;

// alert(numConstraints+1);





// make the tableau .. note that all the variables are assumed to appear in the objective!!!

numVariables = variables.length;


// alert("number of variables =", numVariables)



numRows = numConstraints+1;

numCols = numRows + numVariables + 1;





// create the tableau



theTableau = new makeArray2 (numRows,numCols);

theStringTableau = new makeArray2 (numRows,numCols); // for display purposes

if (phase1) starred = new makeArray(numRows);		// for starred rows



// do the last row

for (var j = 1; j <= numCols; j++) theTableau[numRows][j] = 0; // init

for (var i = 1; i <= numVariables; i++)

	{

	if (maximization) theTableau[numRows][i] = -eval(OBJ[i]);

	else theTableau[numRows][i] = eval(OBJ[i]);

	}

theTableau[numRows][numCols-1] = 1;

theTableau[numRows][numCols] = 0;


// now extract the constraints



// first remove the "subject to..."

theString = tempAr[2];

var x = checkString(theString,"to",false);

len = theString.length;

if (x != -1) theString = theString.substring(x+2,len);

// alert(theString);



tempAr[2] = theString;

var GTE = false; // greater-than-eq flag

// alert("num constraints is " + numConstraints )

for (var i = 1; i <= numConstraints; i++)

	{

	GTE = false; // clean slate
// alert(tempAr[1+i]);
	// first get the inequalities out of the way
	twoPart = parser(tempAr[1+i], lteSymbol);

	if (twoPart[0] <2) {
// alert(tempAr[1+i]);
		twoPart = parser(tempAr[1+i], gteSymbol); phase1 = true; GTE = true;

		}



	if (twoPart[0] <2)

		{
// alert(tempAr[1+i]);
		i += 1;

		okToRoll = false;

		document.theSpreadsheet.expr.value = "Huh? The expression in line " + i + " does not look like an inequality to me!";



// alert("left-side of ineuqulaity = " + twoPart[1]);



		return (666)

		}



// alert("left-side of ineuqulaity = " + twoPart[1]);

 // alert(twoPart[2]);





	var leftHandSide = parseLinearExpr(twoPart[1]);



	for (var j = 1; j <= numCols; j++) theTableau[i][j] = 0;	// init

	theTableau[i][numCols] = eval(twoPart [2]); 		// the right-hand side

	if (GTE) theTableau[i][numVariables + i] = -1;

	else theTableau[i][numVariables + i] = 1;



	var theIndex = 0;

	for (var j = 1; j <= numVariables; j++)

		{

		theVar = variables[j-1];



				theIndex = -1;

				for (var k = 0; k < leftHandSide[0].length; k++) {

					if (leftHandSide[0][k] == theVar) {

						theIndex = k;

						break;

					}

				}

// if (i == 3) alert(theIndex);



				if (theIndex == -1) theTableau[i][j] = 0;

				else theTableau[i][j] = eval(leftHandSide[theIndex+1]);

// alert("HERE");





		}





	} // enf of the loop i

// alert("HERE")



// *** testing starts *******HERE

// var display = "\r";

// for (var i = 1; i <= numRows; i++)

//	{

//	for (j = 1; j <= numCols; j++)

//		{

//		display += theTableau[i][j]  + tab;

//		} // j

//	display += cr;

//	} // i

// document.theSpreadsheet.output.value += display;

// alert("Pausing");

// *** testing *******



// displayMatrix(1);



// *** testing *******

// document.theSpreadsheet.output.value = "objective name = " + objectiveName + cr +  "the expression = " + expression;

// alert ("pausing");

// *** testing *******



return(1);

} // SetupTableau





function displayFinalStatus() {

// gives the solution or error messages



if  (TableauNumber > maxSteps) document.theSpreadsheet.expr.value = "No optimal solution found after 100 steps. Aborted."

else if (singular) document.theSpreadsheet.expr.value = "No optimal solution exists for this problem. Try adding additional foods, changing the contraints, or increasing the number of servings."

else

	{

	document.theSpreadsheet.expr.value = "Optimal Solution: " + objectiveName + " = ";

	var numx = 0; var theRowx = 0; var theColx = 0; var count = 0; var theChar = "";

	var theStr = "";

	var objectiveVal = theTableau[numRows][numCols];



	if (!maximization) objectiveVal = - objectiveVal;

	if ((fractionMode) || (integerMode)) document.theSpreadsheet.expr.value += toFrac (roundSigDig(objectiveVal,15), maxDenom, tol) + "; ";  else

			document.theSpreadsheet.expr.value  += roundSigDig(objectiveVal, numSigDigs).toString() + "; ";

			if (theLanguage=="en") document.theSpreadsheet.output.value = "Minimum " + objectiveFunction +  ": "  + roundSigDig(objectiveVal, numSigDigs).toString() + "; " + cr;
                        else document.theSpreadsheet.output.value = convertStr(toEs(objectiveFunction) +": "   + roundSigDig(objectiveVal, numSigDigs).toString() + "; ") + cr;


	var thePivotPosn = new Array();
	var useThis = true;
	for (var j = 1; j <= numVariables; j++)
		{
		useThis = true;
		count = 0;

		theRowx = 0;


		theChar = variables[j-1];		// name of this variable
		var dietVarIndex = parseInt(stripChar(variables[j-1],"x"));


		thePivotPosn[j] = 0;
		useThis = true;
		document.theSpreadsheet.expr.value += theChar + " = ";


		for (var i = 1; i <= numRows; i++)

			{

			numx = roundSigDig(theTableau[i][j],10);

			if (numx != 0)

				{

				count++;

				if (numx != 0) theRowx = i

				}

			} // i

		if ((count == 1) && (theRowx > 0))

		 	 {

			thePivotPosn[j] = theRowx; // row of that pivot
			// check if we have not already used a pivot in that row
			// in the case of more than one pivot per row
			for (var u = 1; u <= j-1; u++) if (thePivotPosn[j] == thePivotPosn[u]) useThis = false;

				// present solution
			if (useThis) {
				if ((fractionMode) || (integerMode)) theStr = toFrac (roundSigDig(theTableau[theRowx][numCols],15), maxDenom, tol);
				else theStr = roundSigDig(theTableau[theRowx][numCols],numSigDigs).toString();
					}
				else theStr = "0";

				if (j < numVariables) theStr += ", ";

				document.theSpreadsheet.expr.value += theStr;

				if (theStr != "0") {
                                    if(theLanguage=="en") {
					document.theSpreadsheet.output.value += foodNamesen[dietVarIndex] + ": " + roundDec(theTableau[theRowx][numCols],1).toString();
					document.theSpreadsheet.output.value += " servings" + cr;
					}
                                    else {
                                        document.theSpreadsheet.output.value += convertStr(foodNameses[dietVarIndex] + ": " + roundDec(theTableau[theRowx][numCols],1).toString());
					document.theSpreadsheet.output.value += " porciones" + cr;
					}
                                    }


//				alert("starred row is row #" + theRowx + "column is "+j)


			} // if a pivot there


		else

			{

			theStr = "0";

			if (j < numVariables) theStr += ", "; 								document.theSpreadsheet.expr.value += theStr;

			}





		} // j





	} // end of presentation



}









function displayMatrix(number) {

// not used in the diet problem

var theString = "Tableau #" + TableauNumber + cr;



if (singular) theString += "undefined";



else

{

var RowNum = numRows;



var ColNum = numCols;

// alert("about to display a "+ RowNum+ " x " + ColNum + "matrix");



// first round all the results and get the longest resulting string

var maxLength = 1;

var x = "", i=0, j=0, k=0;

var xLen = 0;

// ok to here

// prepare the stringmatrix if integer mode:



if (integerMode) theStringTableau = makeInteger(theTableau, RowNum, ColNum,true);



 // else, handle fractions & decimals

else {

	for (i = 1; i <= RowNum; i++)

	{

	for (j = 1; j <= ColNum; j++)

		{

// alert("i = "+i + " j = " + j + "table entry = " + theTableau[i][j]);

if (fractionMode) x = toFrac (roundSigDig(theTableau[i][j],15) , maxDenom, tol);

	else x = roundSigDig(theTableau[i][j], numSigDigs).toString();

// alert("x = "+x);

		xLen = x.length;

// alert("xLen =" + xLen);

		if (xLen > maxLength) maxLength = xLen;



		theStringTableau[i][j] = x;



		} // j

	} // i

	} // end else (if not integer mode)



if (maxLength < 6) maxLength = 6;  // more space



	var spaceString = "";

	for (i = 0; i <= RowNum; i++) // was 1

		{



		for (j = 1; j <= ColNum; j++)

			{

			if (i == 0)

				{

				if  (j <= numVariables)  x = variables[j-1];

				else if (j == numVariables + numConstraints + 1) {x = objectiveName; if (!maximization) x = "-"+x;}

				else if (j < ColNum) { var mmm = j - numVariables ; x = "s" + mmm.toString();}

				else if (j == ColNum) x = " ";

				} // end if



			else x = theStringTableau[i][j];





			sp = maxLength - x.length

			spaceString = "";

			for (k = 0; k <= sp; k++) spaceString += " ";

			theString += x + spaceString;



			} // j

		theString += cr;

		} // i

} // if not singular

document.theSpreadsheet.output.value += theString + cr;

// now convert the strings back to numbers















return(0);

}



// ******** END OF DISPLAY ROUTINE ***************











function makeArray3 (X,Y,Z)

	{

	var count;

	this.length = X+1;

	for (var count = 1; count <= X+1; count++)

		// to allow starting at 1

		this[count] = new makeArray2(Y,Z);

	} // makeArray3





function makeArray2 (X,Y)

	{

	var count;

	this.length = X+1;

	for (var count = 0; count <= X+1; count++)

		// to allow starting at 1

		this[count] = new makeArray(Y);

	} // makeArray2



function makeArray (Y)

	{

	var count;

	this.length = Y+1;

	for (var count = 1; count <= Y+1; count++)

		this[count] = 0;

	} // makeArray





function stripSpaces (InString)  {

	OutString="";

	for (Count=0; Count < InString.length; Count++)  {

		TempChar=InString.substring (Count, Count+1);

		if (TempChar!=" ")

			OutString=OutString+TempChar;

		}

	return (OutString);

	}



function stripChar (InString,symbol)  {

	OutString="";

	for (Count=0; Count < InString.length; Count++)  {

		TempChar=InString.substring (Count, Count+1);

		if (TempChar!=symbol)

			OutString=OutString+TempChar;

	}

	return (OutString);

}




function doIt(){

	fractionMode = false;

	integerMode = false;


	var num = doIt.arguments[0];



	//**********



	// Option 1

	if (num == 1)

		{

		if (okToRoll)

			{

			TableauNumber = 1;

			document.theSpreadsheet.output.value = ""; 	// clear answer space

			SetupTableau();

// alert("tableau is set up");

			} // of okToRoll



		if (okToRoll)

			{

			theTableau = simplexMethod(theTableau,numRows,numCols);

			}

		} // end of this option



	// Option 2 // preliminary checks

	else  if (num == 2)

		{

		okToRoll = true;

		stepName = "Rounding information"

		var accuracydig = document.theSpreadsheet.acc.value;



		if ( (accuracydig == "") || (!looksLikeANumber(accuracydig)) ) { document.theSpreadsheet.expr.value = "Enter a value for the accuracy (Rounding) in the range 1-13."; okToRoll = false}



		if (okToRoll)

			{

			var thenum = eval(accuracydig);

			if ((thenum < 1) || (thenum > 14)) {document.theSpreadsheet.expr.value = "Accuracy (Rounding) must be in the range 1-13."; okToRoll = false}



			else numSigDigs =thenum;



		if (document.theSpreadsheet.input.value == "") {document.theSpreadsheet.expr.value = "Enter a linear programming problem above (or press Example)."; okToRoll = false; }



			} // if okToRoll

		} // end of this option



	// Option 3 (Erase)

	else  if (num == 3)

		{

		document.theSpreadsheet.input.value = "";

		document.theSpreadsheet.output.value = "";

		document.theSpreadsheet.expr.value = "";

		}



	// compute the expression

	else  if (num == 4)
	// solve the diet problem
		{
		OkToRoll = true;
// alert("This algorithm can take a minute or so to process. If your browser gives you one or more warnings saying that a script is taking a long time and offers to stop the script, just say No and tell it not to warn you again if possible.");
		// Objective:
		var objectiveString = "minimize c = ";

			var foundAFood = false;
			for (var i = 0; i <= numFoods; i++) {

// if (i == 0) alert(foodSelected[i]);
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";

					if (objectiveFunction == "cost") objectiveString += (prices[i]).toString() + "x" + i.toString();
					else if  (objectiveFunction == "calories") objectiveString += (calories[i]).toString() + "x" + i.toString();
					else if  (objectiveFunction == "carbs") objectiveString += (carbs[i]).toString() + "x" + i.toString();
					else if  (objectiveFunction == "fat") objectiveString += (fat[i]).toString() + "x" + i.toString();
					else if  (objectiveFunction == "sodium") objectiveString += (sodium[i]).toString() + "x" + i.toString();
					foundAFood = true;
					}
} // i

				objectiveString += " subject to" + cr
				if (!foundAFood) {alert("You have no foods selected."); okToRoll = false;}

		// Now the max serving constraints


		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) objectiveString += "x" + i.toString() + "<=" + maxServings[i] + ", ";
			} // i

objectiveString += cr;
		// now the nutritional constraints:

		if ((objectiveFunction != "calories")&&(nutrientGEQ[0] != 0))  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (calories[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[0] == 2) objectiveString += ">=" + document.controls.calVal.value + cr;
			else objectiveString += "<=" + document.controls.calVal.value +  cr;
			} // calories




// fat
		if ((objectiveFunction != "fat")&&(nutrientGEQ[2] != 0))  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (fat[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[2] == 2) objectiveString += ">=" + document.controls.fatVal.value + cr;
			else objectiveString += "<=" + document.controls.fatVal.value +  cr;
			} // fat


// carbs
		if ((objectiveFunction != "carbs")&&(nutrientGEQ[4] != 0))  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (carbs[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[4] == 2) objectiveString += ">=" + document.controls.carbsVal.value + cr;
			else objectiveString += "<=" + document.controls.carbsVal.value +  cr;
			} // carbs

// fiber
		if  (nutrientGEQ[5] != 0)  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (fiber[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[5] == 2) objectiveString += ">=" + document.controls.fibVal.value + cr;
			else objectiveString += "<=" + document.controls.fibVal.value +  cr;
			} // fiber

// protein
		if  (nutrientGEQ[6] != 0)  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (protein[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[6] == 2) objectiveString += ">=" + document.controls.protVal.value + cr;
			else objectiveString += "<=" + document.controls.protVal.value +  cr;
			} // protein



// Vit C
		if  (nutrientGEQ[8] != 0)  {
		foundAFood = false;
		for (var i = 0; i <= numFoods; i++) {
				if (foodSelected[i] == true) {
					if (foundAFood) objectiveString += "+";
					objectiveString += (vitC[i]).toString() + "x" + i.toString();

					foundAFood = true;
					}
} // i

			if (nutrientGEQ[8] == 2) objectiveString += ">=" + document.controls.vitCVal.value + cr;
			else objectiveString += "<=" + document.controls.vitCVal.value +  cr;
			} // vitamin C



	objectiveString += cr;



document.theSpreadsheet.input.value = objectiveString;

		} // of this option



	//

	else  if (num == 5)

		{

		document.theSpreadsheet.input.value = theSampleLPString;

		if (document.theSpreadsheet.acc.value == "") document.theSpreadsheet.acc.value = numSigDigs;

		document.theSpreadsheet.expr.value = "Press 'Solve' to solve the given problem.";

		document.theSpreadsheet.output.value =  theInstructionString;

		}

	// Option 6

	else  if (num == 6)

		{



		} // of this option



}

function convertStr(inSt) {
    var y=document.createElement('span');
    y.innerHTML = inSt;
    return y.innerHTML
}

function toEs(inS){
    if (inS=="cost") return "Costo m&iacute;nimo";
    else if(inS == "calories") return "Calor&iacute;as m&iacute;nimas";
    else if(inS == "carbs") return "Carbohidratos m&iacute;nimos";
    else if(inS == "fat") return "Grasa m&iacute;nima";
    else if(inS == "sodium") return "Sodio m&iacute;nimo";
}
