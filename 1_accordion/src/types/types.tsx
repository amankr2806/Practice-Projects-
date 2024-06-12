export type defaultData =  {
    id: string,
    question: string,
    answer: string
  }

  export type  idFunction  = (param1 : string) => void;

  export interface MultiSelectionProps {
    multiSelectOn: boolean;
    setMultiSelectionOn: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export interface ItemsProps {
    multiSelectOn: boolean;
  }

  