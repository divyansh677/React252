import React from 'react'
import PropTypes from 'prop-types';

export default function table() {
  return (
    <div>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">value</th>
      <th scope="col">Valid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      
    </div>
  )
}


table.prototypes  ={

}