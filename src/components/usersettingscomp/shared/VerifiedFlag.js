import React from 'react';

const statusStyles = {
  Verified: {
    backgroundColor: '#07A717',
    color: 'white',
    height: '95%',
  },
  Verify: {
    backgroundColor: '#7731E4',
    color: 'white',
    height: '95%',
  },
  NotVerified: {
    backgroundColor: '#FF3C3C',
    color: 'white',
    height: '95%',
  },
};


const VerifiedFlag = ({ status }) => {
  const style = {
    ...statusStyles[status.replace(' ', '')],
    borderRadius: '20px',
    padding: '4px 12px',
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: '700',
  };

  return <span style={style}>{status}</span>;
};

export default VerifiedFlag;
