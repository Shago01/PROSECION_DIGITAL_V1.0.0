import React from 'react';

const SkeletonTable = () => {
  return (
    <div className="w-full mr-4 ml-4 bg-white shadow-lg rounded-lg overflow-auto p-4">
      <div className="relative mb-4">
        <div className="w-full h-10 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      <div className="w-full rounded-lg">
        <div className="flex bg-gray-200 py-2 px-4 rounded-t-lg animate-pulse">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className="w-1/5 h-6 bg-gray-300 mx-2 rounded-md"
              ></div>
            ))}
        </div>

        {Array(8)
          .fill('')
          .map((_, rowIndex) => (
            <div key={rowIndex} className="flex py-3 px-4  animate-pulse">
              {Array(5)
                .fill('')
                .map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-1/5 h-6 bg-gray-300 mx-2 rounded-md"
                  ></div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonTable;
