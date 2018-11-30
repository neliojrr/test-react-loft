import React from 'react';
import PropTypes from 'prop-types';

const Version = ({ data = {}, differences }) => {
  const {
    id = '',
    deal_number = '',
    sale_status = '',
    updated_at = ''
  } = data || {};
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th
            style={{
              color: differences.indexOf('deal_number') !== -1 ? 'red' : 'black'
            }}
          >
            Deal Number
          </th>
          <th
            style={{
              color: differences.indexOf('sale_status') !== -1 ? 'red' : 'black'
            }}
          >
            Sale Status
          </th>
          <th
            style={{
              color: differences.indexOf('updated_at') !== -1 ? 'red' : 'black'
            }}
          >
            Updated at
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ id }</td>
          <td
            style={{
              color: differences.indexOf('deal_number') !== -1 ? 'red' : 'black'
            }}
          >
            { deal_number }
          </td>
          <td
            style={{
              color: differences.indexOf('sale_status') !== -1 ? 'red' : 'black'
            }}
          >
            { sale_status }
          </td>
          <td
            style={{
              color: differences.indexOf('updated_at') !== -1 ? 'red' : 'black'
            }}
          >
            { updated_at }
          </td>
        </tr>
      </tbody>
    </table>
  )
};

Version.propTypes = {
  data: PropTypes.object,
  differences: PropTypes.array
};

Version.defaultProps = {
  data: {},
  differences: []
};

export default Version;
