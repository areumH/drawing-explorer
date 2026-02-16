interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

const Chip = ({ label, selected, onClick }: ChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full text-sm sm:text-base border transition cursor-pointer
        ${
          selected
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }
      `}
    >
      {label}
    </button>
  );
};

export default Chip;
