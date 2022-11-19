import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useDataStore } from "@/stores/data";
import { useCartStore } from "@/stores/cart";
import doughJSON from "../__mocks__/data/dough.json";
import ingredientsJSON from "../__mocks__/data/ingredients.json";
import miscJSON from "../__mocks__/data/misc.json";
import saucesJSON from "../__mocks__/data/sauces.json";
import sizesJSON from "../__mocks__/data/sizes.json";

describe("Test cart store", () => {
  let dataStore;
  let cartStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    dataStore = useDataStore();
    cartStore = useCartStore();

    dataStore.doughs = doughJSON;
    dataStore.ingredients = ingredientsJSON;
    dataStore.sauces = saucesJSON;
    dataStore.sizes = sizesJSON;
    dataStore.misc = miscJSON;
  });

  it("Should return cart total", () => {
    const pizza = {
      name: "Test pizza",
      sauceId: 1, // Томатный соус за 50 рублей
      doughId: 1, // Тонкое тесто за 300 рублей
      sizeId: 1, // 30 см, множитель 1
      ingredients: [
        { ingredientId: 1, quantity: 1 }, // Грибы за 33 рубля * 1 = 33 рубля
        { ingredientId: 3, quantity: 2 }, // Салями за 42 рубля * 2 = 84 рубля
      ],
    };

    // Стоимость пиццы 50 + 300 + 33 + 84 = 467

    const misc = [
      { miscId: 1, quantity: 1 }, // Coca-Cola за 56 рублей * 1 = 56 рублей
      { miscId: 2, quantity: 2 }, // Острый соус за 30 рублей * 2 = 60 рублей
    ];

    // Стоимость дополнительных товаров 56 + 60 = 116

    // Стоимость всего заказа 467 + 116 = 583

    cartStore.pizzas = [{ quantity: 1, ...pizza }];
    cartStore.misc = misc;

    const result = cartStore.total;
    expect(result).toBe(583);
  });
});
