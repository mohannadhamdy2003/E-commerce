import React from "react";

const Forbidden = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-center text-red-700">403 - Access Denied</div>
      <div className="text-2xl text-red-500 text-center">Opps - You don't have permission to access this page</div>
    </div>
  );
};

export default Forbidden;
