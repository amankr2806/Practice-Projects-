import { MultiSelectionProps } from "@/types/types";

const MultiSelection: React.FC<MultiSelectionProps> = ({
  multiSelectOn,
  setMultiSelectionOn,
}) => {
  return (
    <>
      <button onClick={() => setMultiSelectionOn(!multiSelectOn)}>
        Multi Selection
      </button>
    </>
  );
};

export default MultiSelection;
