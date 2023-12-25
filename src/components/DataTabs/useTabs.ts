import { useState } from "react";

const useTabs = ({ activeTabId }: { activeTabId: string }) => {
  const [activeTab, setActiveTab] = useState(activeTabId);

  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    changeTab,
  };
};

export default useTabs;
