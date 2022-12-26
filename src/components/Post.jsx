import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { datacontext } from "../App";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";

function Post() {
  const history = useNavigate();

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

  const [userName, setUsername] = useState();
  const {
    posts,
    setPosts,
    userprofile,
    setUserprofile,
    taggeddata,
    setTeggeddata,
  } = useContext(datacontext);
  const [comments, setComments] = useState();
  const [count, setCount] = useState(0);

  const getuserpost = async () => {
    try {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const id = JSON.parse(localStorage.getItem("uid"));
        const res = await axios.get(
          `https://dummyapi.io/data/v1/user/${id}/post?limit=10`,
          {
            headers: {
              "content-type": "application/json",
              "APP-ID": "63a6cf4fce8dda8677ade82c",
            },
          }
        );
        console.log(res.data);
        setUserprofile(res.data.data);
        setUsername(
          `${res.data.data[0].owner.title}  ${res.data.data[0].owner.firstName}  ${res.data.data[0].owner.lastName}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getcomment = async (id) => {
    try {
      const res = await axios.get(
        `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`,
        {
          headers: {
            "content-type": "application/json",
            "APP-ID": "63a6cf4fce8dda8677ade82c",
          },
        }
      );
      if (res) {
        console.log(res.data.data);
        setComments({ arr: [...res.data.data], img: `${id}` });
        console.log({ arr: [...res.data.data], img: `${id}` });

        // setCount(count+1)
        if (res.data.data.length < 1) {
          alert("no comment yet");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tagdata = async (name) => {
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
  const gotoProfile = async (id) => {
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
        setCount(count + 1);
        localStorage.setItem("uid", JSON.stringify(id));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getuserpost();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [count]);
  return (
    <>
      <Navbar />

      <div className="aboutUS row p-0">
        <div className="profilePic col-lg-4 col-4 m-auto rounded-circle">
          {userprofile && (
            <img
              className="w-100 rounded-circle"
              src={userprofile[0].owner.picture}
              alt=""
            />
          )}
        </div>
        <div className="details  col-12 p-3  ">
          <div className="detailsMain  d-flex justify-content-center  align-items-center p-lg-0 px-0">
            {userName && (
              <h1>
                <b>{userName} </b>
              </h1>
            )}
          </div>
        </div>
      </div>
      {userprofile &&
        userprofile.map((elm, id) => {
          return (
            <>
              <div className="cont" key={elm.id}>
                <div className="userDetails">
                  <div className="userImg">
                    <img src={elm.owner.picture} alt="" />
                  </div>
                  <p className="h5 mx-2">
                    {" "}
                    {elm.owner.title}. {elm.owner.firstName}{" "}
                    {elm.owner.lastName}
                  </p>
                </div>
                <div className="post">
                  <div className="mainPost">
                    <img src={elm.image} alt="" />
                  </div>
                  <div className="likes">
                    <p>
                      {" "}
                      <i className="fa-solid fa-heart text-danger h5 "></i>{" "}
                      {elm.likes} likes
                    </p>
                    <p
                      className=""
                      onClick={() => {
                        getcomment(elm.id);
                      }}
                    >
                      <i class="fa-solid fa-comment text-danger h5"></i>{" "}
                      &nbsp;click to see comments &nbsp;{" "}
                      <i class="fa-solid fa-angle-down"></i>
                    </p>
                    {comments &&
                      elm.id == comments.img &&
                      comments.arr.map((elm, id) => {
                        return (
                          <>
                            <div className="cmt mt-1 ">
                              <NavLink to="/posts">
                                {" "}
                                <div className="cmtImg cursor-pointer">
                                  {" "}
                                  <img
                                    src={elm.owner.picture}
                                    alt=""
                                    onClick={() => {
                                      gotoProfile(elm.owner.id);
                                    }}
                                  />
                                </div>{" "}
                              </NavLink>
                              <div className="cmtDetails px-3">
                                <p className="">
                                  {elm.owner.title}. {elm.owner.firstName}{" "}
                                  {elm.owner.lastName}
                                </p>
                                <p className="d-flex justify-content-between">
                                  {" "}
                                  <p> {elm.message} </p>{" "}
                                  <p>{elm.publishDate.slice(0, 10)} </p>{" "}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}

                    {elm.tags.map((elmm, id) => {
                      return (
                        <>
                          <NavLink to="/tag">
                            {" "}
                            <p
                              className="fleft text-primary cursor-pointer"
                              onClick={() => {
                                tagdata(elmm);
                              }}
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

      {userprofile && <Footer />}
    </>
  );
}

export default Post;
