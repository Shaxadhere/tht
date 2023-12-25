type Props = {
  list: any[];
  type: string;
  onAddToCart: ({ id, type }: { id: string; type: string }) => void;
};

const Listing = ({ list, onAddToCart, type }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {list.map((item) => (
        <div
          className="cursor-pointer"
          key={item.id}
          onClick={() => onAddToCart({ id: item.id, type })}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={item.imageUrl}
            alt=""
          />
          <p className="relative text-center text-sm font-medium text-gray-100 mt-2 truncated rounded-lg py-[5px] bg-[#0000004d] bottom-[38px]">
            {item.name} - {item.price}sds
          </p>
        </div>
      ))}
    </div>
  );
};

export default Listing;
