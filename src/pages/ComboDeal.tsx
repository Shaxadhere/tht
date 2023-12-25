import { Provider } from "react-redux";
import Listing from "../components/ComboDeal/Listing";
import DataTabs from "../components/DataTabs";
import useTabs from "../components/DataTabs/useTabs";
import { PRODUCT_TYPES } from "../constants";
import useShop from "../useShop";
import { store } from "../redux/store";

function ComboDeal() {
  const { activeTab, changeTab } = useTabs({ activeTabId: "chips" });
  const { products, addToCart, chocolates, drinks, cart } = useShop(changeTab);
  const tabs = [
    {
      id: PRODUCT_TYPES.CHIPS,
      label: "Chips",
      body: (
        <Listing
          list={products}
          onAddToCart={addToCart}
          type={PRODUCT_TYPES.CHIPS}
        />
      ),
    },
    {
      id: PRODUCT_TYPES.DRINK,
      label: "Drink",
      body: (
        <Listing
          list={drinks}
          onAddToCart={addToCart}
          type={PRODUCT_TYPES.DRINK}
        />
      ),
    },
    {
      id: PRODUCT_TYPES.CHOCOLATE,
      label: "Chocolate",
      body: (
        <Listing
          list={chocolates}
          onAddToCart={addToCart}
          type={PRODUCT_TYPES.CHOCOLATE}
        />
      ),
    },
  ];

  const onTabChange = (tabId: string) => {
    changeTab(tabId);
  };

  return (
    <Provider store={store}>
      <DataTabs tabs={tabs} onTabChange={onTabChange} activeTabId={activeTab} />

      <div className="inline-flex rounded-md shadow-sm max-w-xl w-                             " role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Profile
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          Messages
        </button>
      </div>

      <p>{JSON.stringify(cart, null, 2)}</p>
    </Provider>
  );
}

export default ComboDeal;
