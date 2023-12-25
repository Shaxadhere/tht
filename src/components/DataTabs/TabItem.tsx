import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  body?: React.ReactNode;
  onTabChange: (tabId: string) => void;
  id: string;
};

const TabItem = ({ icon, label, onTabChange, id }: Props) => {
  return (
    <li
      className="me-2"
      onClick={() => {
        onTabChange(id);
      }}
    >
      <div
        className="cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
      >
        {icon}
        {label}
      </div>
    </li>
  );
};

export default TabItem;
