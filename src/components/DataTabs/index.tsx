import React from "react";
import TabItem from "./TabItem";

type Props = {
  tabs: {
    id: string;
    icon?: React.ReactNode;
    label: string;
    body?: React.ReactNode;
  }[];
  activeTabId?: string;
};

const DataTabs = ({ tabs, activeTabId }: Props) => {
  return (
    <div>
      <ul className="border-b border-gray-200 flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 max-w-xl justify-around m-auto mt-10">
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            body={tab.body}
          />
        ))}
      </ul>

      <div
        className="mt-8 max-w-xl justify-around m-auto"
        style={{ minHeight: "calc(100vh - 340px)" }}
      >
        {tabs.find((tab) => tab.id === activeTabId)?.body}
      </div>
    </div>
  );
};

export default DataTabs;
