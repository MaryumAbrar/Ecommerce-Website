import React from "react";

const BreadCrumb = ({pageTitle}:any) => {
  return (
    <div className="w-full py-24 bg-slate-100 mb-24">
      <div className="w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <h3 className="h3-bold text-blue-950 text-3xl md:text-4xl">{pageTitle}</h3>
        <p>
          Home . Pages . <span className="text-pink-600">{pageTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default BreadCrumb;
