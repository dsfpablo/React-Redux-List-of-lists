import { Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { removeList } from "../../redux/listsSlice";
import { removeItemsInList } from "../../redux/itemsListSlice";
import { useSelector, useDispatch } from "react-redux";

function List({ list }) {
  const itemsList = useSelector((state) => state.itemsList);
  const dispatch = useDispatch();

  return (
    <Link to={`/${list.id}`}>
      <div
        className="list scale"
        style={{
          borderTop:
            "5px solid #" + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        <div>
          <h5>{`${list.name} (${
            itemsList.filter(
              (item) => item.listId === list.id && item.checked === true
            ).length
          }/${
            itemsList.filter((item) => item.listId === list.id).length
          })`}</h5>
          <span className="created-span">
            Creada: {format(list.createdAt, "yyyy-MM-dd")}
          </span>
        </div>
        <button
          className="delete-btn h hover-red scale"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeList({ id: list.id }));
            dispatch(removeItemsInList({ listId: list.id }));
          }}
        >
          <Trash3Fill />
        </button>
      </div>
    </Link>
  );
}

export default List;
