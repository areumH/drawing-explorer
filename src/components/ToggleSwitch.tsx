interface ToggleSwitchProps {
  checked: boolean;
  onChange: (next: boolean) => void;
}

export const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-300 cursor-pointer
        ${checked ? 'bg-blue-500' : 'bg-gray-300'}
      `}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
          ${checked ? 'translate-x-1' : 'translate-x-5'}
        `}
      />
    </button>
  );
};
