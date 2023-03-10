import "./Lists.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

import List from "../List/List";
import NewListModal from "../NewListModal/NewListModal";

function Lists() {
  const [showModalNewList, setShowModalNewList] = useState(false);
  const lists = useSelector((state) => state.lists);

  return (
    <>
      <div id="lists">
        <div>
          {lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>

        <Button
          onClick={() => setShowModalNewList(true)}
          className="btn btn-primary rounded-circle shadow"
        >
          <PlusLg style={{ marginTop: "-5px" }} />
        </Button>
      </div>

      <NewListModal
        showModalNewList={showModalNewList}
        setShowModalNewList={setShowModalNewList}
      />
    </>
  );
}

export default Lists;
