import React from 'react';
import {NavLink} from 'react-router-dom';

const ListItem = ({name, code}) => (

  <div className="user-list__item">
    <h2>
      <NavLink className="nav-list__item-link" to={`/list/${code}`}>{name}</NavLink>
    </h2>
  </div>
);

export default ListItem;