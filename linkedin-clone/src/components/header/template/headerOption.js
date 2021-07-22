import { Avatar } from '@material-ui/core';
import React from 'react';
import '../../../styles/headerOption.css';
import {selectUser} from '../../../features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({avatar,Icon,title, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
          {Icon && <Icon className="headerOption__icon" />}
          {avatar && ( <Avatar className="headerOption__icon" src={user?.photoUrl}></Avatar>)}
          <h3 className="headerOption__title">{title}</h3>
        </div>
      )
}

export default HeaderOption
