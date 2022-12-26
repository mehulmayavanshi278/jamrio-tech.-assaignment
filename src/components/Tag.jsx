import React, { useContext, useEffect } from "react";
import { datacontext } from "../App";
import Navbar from "./Navbar";

function Tag() {
  const { taggeddata, setTeggeddata } = useContext(datacontext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Navbar />

      <div className="aboutMe">
        {taggeddata && (
          <h4 className="mt-5 text-primary">#{taggeddata.title}</h4>
        )}
        {taggeddata &&
          taggeddata.arr.map((elm, id) => {
            return (
              <>
                <div className="tagImg">
                  <img className="w-100" src={elm.image} alt="" />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Tag;
