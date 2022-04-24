import React from 'react';

const Address = () => {
  const lines = [
    'The Royal Exchange',
    "St Ann's Square",
    'Manchester, M2 7PE',
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