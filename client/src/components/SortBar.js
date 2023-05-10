import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBListGroup style={{ width: '100vw' }} light>
      <MDBListGroupItem tag='a' href='#' action noBorders active aria-current='true' className='px-3'>
        Cras justo odio
      </MDBListGroupItem>
      <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
        Dapibus ac facilisis in
      </MDBListGroupItem>
      <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
        Morbi leo risus
      </MDBListGroupItem>
      <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
        Porta ac consectetur ac
      </MDBListGroupItem>
      <MDBListGroupItem
        tag='a'
        href='#'
        action
        noBorders
        disabled
        tabIndex={-1}
        aria-disabled='true'
        className='px-3'
      >
        Vestibulum at eros
      </MDBListGroupItem>
    </MDBListGroup>
  );
}