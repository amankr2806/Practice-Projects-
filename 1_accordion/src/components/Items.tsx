import data from "@/data/data";
import { ItemsProps, idFunction } from "@/types/types";
import { useState } from "react";

const Items:  React.FC<ItemsProps> = ({multiSelectOn}) => {

    const [selected, setSelected] = useState<string | null>(null);

  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  
  const handleSingleSelection: idFunction = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection: idFunction = (id) => {
    let cpyMutiple = [...multiSelected];

    const findIndexOfCurrentId = cpyMutiple.indexOf(id);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(id);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiSelected(cpyMutiple);
  };
    return(
        <>
         {data.map((item) => (
        <div key={item.id} className="item">
          <div
            onClick={
              multiSelectOn
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
            }
            className="question"
          >
            <h3>{item.question}</h3>
          </div>
          {multiSelectOn
            ? multiSelected.indexOf(item.id) !== -1 && <div>{item.answer}</div>
            : selected === item.id && <div>{item.answer}</div>}
        </div>
      ))}
        </>
    );
}

export default Items;