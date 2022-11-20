import { useDataStore } from "@/stores/data";
import doughJSON from "../__mocks__/data/dough.json";
import ingredientsJSON from "../__mocks__/data/ingredients.json";
import saucesJSON from "../__mocks__/data/sauces.json";
import sizesJSON from "../__mocks__/data/sizes.json";
import miscJSON from "../__mocks__/data/misc.json";

export const prepareData = () => {
  const dataStore = useDataStore();
  dataStore.doughs = doughJSON;
  dataStore.ingredients = ingredientsJSON;
  dataStore.misc = miscJSON;
  dataStore.sauces = saucesJSON;
  dataStore.sizes = sizesJSON;
  return dataStore;
};
