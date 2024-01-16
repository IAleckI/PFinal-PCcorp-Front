import React from 'react';
import Style from './configAccount.module.css';
import UpdateProduct from '../Update/update';

export default function ConfigAccount() {
  return (
    <div className={Style.configAccount}>
      <UpdateProduct />
    </div>
  );
}