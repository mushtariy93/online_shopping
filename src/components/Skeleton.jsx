import React from "react";

const Skeleton = ({count}) => {
  return (
    <div className="container grid grid-cols-4 gap-3">
      {Array(count)
        .fill(0)
        .map((_, inx) => (
          <div key={inx} className="p-3 shadow-lg">
            <div className="w-full h-60 bg-slate-200 rounded-md"></div>
            <div className="w-9/12 h-6 bg-slate-200 mt-3 rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
