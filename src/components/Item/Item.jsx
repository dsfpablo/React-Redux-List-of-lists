import { Trash3Fill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

import { checkItem, removeItem } from "../../redux/itemsListSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <input
        checked={item.checked}
        className="form-check-input"
        type="checkbox"
        onChange={(e) => {
          dispatch(checkItem({ checked: e.target.checked, itemId: item.id }));
        }}
      />
      <span className="ms-3">{item.name}</span>
      <button
        className="float-end bg-transparent border-0 btn-hover"
        onClick={() => dispatch(removeItem({ id: item.id }))}
      >
        <Trash3Fill />
      </button>
    </div>
  );
}

export default Item;
