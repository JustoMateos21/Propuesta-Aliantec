import React from 'react'
import './Table.css'
import { tableItem } from '../../Utils/TableItemsArray'

function Table() {

  return (
    <div className='table__container'>
<div className='table'>
{
    tableItem.map(x=>(
        <div className='table-info'>
    <text className='info'>{x.item}</text>
</div>
    ))
}
</div>
    </div>
  )
}

export default Table