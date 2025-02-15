import project1 from "./project.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

import React_logo from "./React-icon.png";
import tailwind_logo from "./tailwindlogo.png";
import boostrap_logo from "./boostraplogo.png";

import node_logo from "./nodejsStackedBlack.png";
import express_logo from "./express_logo.png";

import mongo_logo from "./mongodblogo.png";
import sql_logo from "./sql.png";

import git_logo from "./git.png";
import github_logo from "./github.png";
import rest_logo from "./rest.png";

import python_logo from "./python_logo.png";
import cpp_logo from "./cpp_logo.png";
import c_logo from "./c_logo.png";
import javascript_logo from "./javascript_logo.png";

let projects = [
  {
    image: project1,
    title: "QuickCuisine",
    description:
      "QuickCuisine is a MERN stack-based food delivery platform with Cashfree payments, restaurant browsing, easy ordering, and real-time tracking.",
    link: "https://quickcuisineclient.onrender.com",
  },
  {
    image: project2,
    title: "ENotebook",
    description:
      "E-Notebook is a MERN stack-based app offering secure cloud storage for users to create, store, and manage notes effortlessly.",
    link: "https://e-notebook-client.onrender.com",

  },
  {
    image: project3,
    title: "MemeStream",
    description:
      "MemeStream is a real-time chat app using EJS, Node.js, MongoDB, and Cloudinary for seamless communication and media sharing.",
    link: "https://memefy-zx5p.onrender.com",

  },
];

let frontendlogo = [React_logo, tailwind_logo, boostrap_logo];

let backendlogo = [express_logo, node_logo];

let database = [mongo_logo, sql_logo];

let othertechnology = [git_logo, github_logo, rest_logo];

let programminglanguage = [python_logo, cpp_logo, c_logo, javascript_logo];
const assets = {
  projects,
  frontendlogo,
  backendlogo,
  database,
  othertechnology,
  programminglanguage,
};

export default assets;

