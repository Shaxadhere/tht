type Props = {
  label: string;
  isActive?: boolean;
};

const TabItem = ({ label, isActive }: Props) => {
  return (
    <li className="me-2">
      <div
        className={`cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg  group ${
          isActive && "border-b-2 border-blue-600 text-blue-600"
        }`}
      >
        {label}
      </div>
    </li>
  );
};

export default TabItem;
