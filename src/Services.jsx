import React from "react";
import Card from './Card';
import Sdata from './demo/Sdata';

let Services = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Services page</h1>
            <div className="row">

            {Sdata.map((curVal, index) => {
                return <Card key={index} id={index} img={curVal.imgsrc} title={curVal.title} />                    
            })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
