import { PRODUCT_TYPES } from "../constants";

export const moveTab = (type: string, changeTab: any) => {
  switch (type) {
    case PRODUCT_TYPES.CHIPS:
      changeTab(PRODUCT_TYPES.DRINK);
      break;
    case PRODUCT_TYPES.DRINK:
      changeTab(PRODUCT_TYPES.CHOCOLATE);
      break;
    case "reset":
      changeTab(PRODUCT_TYPES.CHIPS);
      break;
    default:
      break;
  }
};
