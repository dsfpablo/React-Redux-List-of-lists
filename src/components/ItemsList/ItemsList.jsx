import "./ItemsList.css";
import { ArrowLeft, PlusCircleFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Item from "../Item/Item";
import { createItem } from "../../redux/itemsListSlice";

function ItemsList() {
  const [inputNewItem, setInputNewItem] = useState("");
  const listId = useParams().listId;
  const selectedList = useSelector((state) => state.lists).find(
    (list) => list.id === listId
  );
  const itemsList = useSelector((state) => state.itemsList).filter(
    (item) => item.listId === listId
  );
  const dispatch = useDispatch();

  return (
    <>
      <div id="items-list">
        <small>Lista</small>
        <h3>{selectedList.name}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputNewItem !== "") {
              dispatch(createItem({ listId: listId, name: inputNewItem }));
              setInputNewItem("");
            }
          }}
        >
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Agregar nuevo item"
            onChange={(e) => setInputNewItem(e.target.value)}
            value={inputNewItem}
          />
          <button
            type="submit"
            className="add-item-btn btn-hover bg-transparent border-0"
          >
            <PlusCircleFill />
          </button>
        </form>
        <div>
          {itemsList.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Link to="/">
        <ArrowLeft /> volver a la Home
      </Link>
    </>
  );
}

export default ItemsList;
