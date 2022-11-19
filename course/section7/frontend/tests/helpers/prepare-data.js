import { useDataStore } from "@/stores/data";
import doughJSON from "../__mocks__/data/dough.json";
import ingredientsJSON from "../__mocks__/data/ingredients.json";
import saucesJSON from "../__mocks__/data/sauces.json";
import sizesJSON from "../__mocks__/data/sizes.json";

export const prepareData = () => {
  const dataStore = useDataStore();
  dataStore.doughs = doughJSON;
  dataStore.ingredients = ingredientsJSON;
  dataStore.sauces = saucesJSON;
  dataStore.sizes = sizesJSON;
  return dataStore;
};
