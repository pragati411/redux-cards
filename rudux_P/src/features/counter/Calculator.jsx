import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subtract } from "./calculatorSlice";

export const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const onAdd = () => {
    // dispatch(add({ input1, input2 }));
    dispatch({ type: "calculator/add", payload: { input1, input2 } });
  };
  const onSub = () => {
    dispatch(subtract({ input1, input2 }));
  };
  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <p>{result}</p>
      <button onClick={onAdd}>Add</button>
      <button onClick={onSub}>Sub</button>
    </>
  );
};
