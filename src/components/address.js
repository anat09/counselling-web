import React from 'react';

const Address = () => {
  const lines = [
    'The Heaton Moor Counselling and Therapy Centre',
    '33b Shaw Road, Heaton Moor',
    'Stockport, SK4 4AG',
  ];
  return (
    <div className="flex flex-col py-10">
      {
        lines.map((line) => {
          return (
            <div className="text-center text-3xl font-philosopher">{ line }</div>
          )
        })
      }
    </div>
  )
}

export default Address;