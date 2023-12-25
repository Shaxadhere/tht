import Listing from "../components/ComboDeal/Listing";
import DataTabs from "../components/DataTabs";
import useTabs from "../components/DataTabs/useTabs";
import { PRODUCT_TYPES } from "../constants";
import useShop from "../useShop";

function ComboDeal() {
  const { activeTab, changeTab } = useTabs({ activeTabId: "chips" });
  const {
    products,
    addToCart,
    clearCart,
    onBuy,
    chocolates,
    drinks,
    cart,
    orderPlaced,
  } = useShop(changeTab);

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

  return (
    <>
      <DataTabs tabs={tabs} activeTabId={activeTab} />
      {orderPlaced && (
        <div className="mt-8 max-w-xl justify-around m-auto">
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            <span className="font-medium">Success!</span> Your order for the
            combo deal was placed successfully
          </div>
        </div>
      )}
      {cart.chips && cart.drink && cart.chocolate && (
        <div className="mt-8 max-w-xl justify-around m-auto">
          <div
            className="inline-flex rounded-md max-w-xl w-full gap-5"
            role="group"
          >
            <button
              type="button"
              disabled={orderPlaced}
              onClick={onBuy}
              className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Buy Combo Deal
            </button>
            <button
              type="button"
              disabled={orderPlaced}
              onClick={clearCart}
              className="w-full px-4 py-2 text-sm font-medium text-gray-100 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ComboDeal;
