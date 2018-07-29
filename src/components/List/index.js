import React from 'react';
import {list} from "../../data/list";

import ListItem from "./ListItem/index";

const List = () => (

  <div className="page-inner">
    <h2>Список</h2>
    {list.map(user =>
      <ListItem key={user.id} name={user.name} code={user.code}/>
    )}
  </div>
);

export default List;