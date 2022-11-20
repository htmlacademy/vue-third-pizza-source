import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useCartStore } from "@/stores/cart";
import { prepareData } from "../helpers/prepare-data";

describe("Test cart store", () => {
  let cartStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    prepareData();
    cartStore = useCartStore();
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
