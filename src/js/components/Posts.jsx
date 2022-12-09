import React, { useState, useEffect } from "react";

function Posts() {
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  const urlUsers = 'https://jsonplaceholder.typicode.com/users';
  
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  
  const fetchApiPosts = async () => {
    const response = await fetch(urlPosts);
    const responseJSON = await response.json();
    setPosts(responseJSON);
  };
  const fetchApiUsers = async () => {
    const response = await fetch(urlUsers);
    const responseJSON = await response.json();
    setUsers(responseJSON);
  };

  useEffect(() => {
      fetchApiPosts();
      fetchApiUsers();
  }, []);

  
  function userName(id) {
    let userElement = users.filter(function (element) {return (element.id == id)}); 
    return userElement[0].name;
  }

  return (
    <div className="container">
      <h2 className="text-center">Posts List</h2>
        <ul className="list-group">
            { !posts || !users ? <li class="list-group-item">Cargando los datos...</li> : 
              posts.map((post,index) =>{
                return <li key={index} className={"list-group-item "}>
                  <blockquote class="blockquote">{post.title}</blockquote> <figcaption class="blockquote-footer">{userName(post.userId)}</figcaption>
                </li>
              }
            )
          }
         </ul>
    </div>
  );
}

export default Posts;