import axios from "axios";
import React, { useContext, useEffect } from "react";
import { datacontext } from "../App";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  window.onscroll = function (e) {
    // console.log(this.oldScroll > this.scrollY);
    if (this.oldScroll < this.scrollY) {
      document.querySelector(".navbar").style = "top:-10%";
      this.oldScroll = this.scrollY;
    } else {
      document.querySelector(".navbar").style = "top:0";
      this.oldScroll = this.scrollY;
    }
  };

  const history = useNavigate();
  const {
    posts,
    setPosts,
    userprofile,
    setUserprofile,
    taggeddata,
    setTeggeddata,
  } = useContext(datacontext);
  const getdata = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=20", {
        headers: {
          "content-type": "application/json",
          "APP-ID": "63a6cf4fce8dda8677ade82c",
        },
      });
      if (res) {
        console.log(res.data);
        setPosts(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const showPostDetails = async (id) => {
    try {
      const res = await axios.get(
        `https://dummyapi.io/data/v1/user/${id}/post?limit=10`,
        {
          headers: {
            "content-type": "application/json",
            "APP-ID": "63a6cf4fce8dda8677ade82c",
          },
        }
      );
      if (res) {
        console.log(res.data);
        setUserprofile(res.data.data);
        localStorage.setItem("uid", JSON.stringify(id));
        history("/posts");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const tegdata = async (name) => {
    try {
      const res = await axios.get(
        `https://dummyapi.io/data/v1/tag/${name}/post?limit=20`,
        {
          headers: {
            "content-type": "application/json",
            "APP-ID": "63a9366124ef70c2b69f0b4e",
          },
        }
      );
      if (res) {
        console.log(res.data);
        setTeggeddata({ arr: res.data.data, title: name });
        console.log({ arr: res.data.data, title: name });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
    // localStorage.clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      document.querySelector(".popUp").style = "top:5%";
    }, [1000]);
    setTimeout(() => {
      document.querySelector(".popUp").style = "opacity:0";
    }, [4000]);
  }, []);
  return (
    <>
      <Navbar />
      <div className="popUp">
        <p> click on any post to see full user's profile</p>
      </div>
      <div className="aboutUS mt-3">
        <h2>recent posts</h2>
      </div>
      {posts &&
        posts.map((elm, id) => {
          return (
            <>
              <div className="cont p-0" key={elm.id}>
                <div
                  className="userDetails"
                  onClick={() => {
                    showPostDetails(elm.owner.id);
                  }}
                >
                  <div className="userImg">
                    <img
                      src={elm.owner.picture}
                      alt=""
                      onClick={() => {
                        showPostDetails(elm.owner.id);
                      }}
                    />
                  </div>
                  <p className="mx-2 h5">
                    {" "}
                    {elm.owner.title}. {elm.owner.firstName}{" "}
                    {elm.owner.lastName}
                  </p>
                </div>
                <div className="post bg-white">
                  <div
                    className="mainPost"
                    onClick={() => {
                      showPostDetails(elm.owner.id);
                    }}
                  >
                    <img src={elm.image} alt="" />
                  </div>
                  <div className="likes">
                    <p>
                      {" "}
                      <i className="fa-solid fa-heart text-danger h5"></i>{" "}
                      {elm.likes} likes
                    </p>
                    {elm.tags.map((elmm, id) => {
                      return (
                        <>
                          <NavLink to="/tag">
                            {" "}
                            <p
                              className="fleft text-primary cursor-pointer"
                              onClick={() => tegdata(elmm)}
                            >
                              <i>#{elmm} &nbsp; </i>
                            </p>{" "}
                          </NavLink>
                        </>
                      );
                    })}
                    <p className="d-block">
                      publish on {elm.publishDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      {posts && <Footer />}
    </>
  );
}

export default Home;
