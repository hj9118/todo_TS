import React, { useState } from 'react';
import { Item } from '../types/type';
import { v4 as uuid } from 'uuid';
import { addItem } from '../modules/itemReducer';
import { useDispatch } from 'react-redux';

const InsertItem = () => {
  const [itemName, setItemName] = useState('');

  const dispatch = useDispatch();

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = () => {
    const itemData = {
      id: uuid(),
      name: itemName,
      clear: false
    }
    dispatch(addItem(itemData.id, itemData.name, itemData.clear))
    setItemName("");
  };

  return (
    <>
      <input className="task-input" type='text' value={itemName} onChange={changeItemName} />{' '}
      <button className='button-add' onClick={clickButton}>{'생성'}</button>
    </>
  );
};

export default InsertItem;
