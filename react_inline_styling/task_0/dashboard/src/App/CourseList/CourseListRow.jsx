import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader
    ? { backgroundColor: '#deb5b545' }
    : { backgroundColor: '#f5f5f5ab' };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
