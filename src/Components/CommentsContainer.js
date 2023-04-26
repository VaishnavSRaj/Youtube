import React from "react";

const CommentsData = [
  {
    name: "Vaishnav",
    text: "nice",
    replies: [],
  },
  {
    name: "Akshay",
    text: "good",
    replies: [],
  },
  {
    name: "user-1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "user-2",
        text: "replying to user-1",
        replies: [],
      },
      {
        name: "user-3",
        text: "replying to user-1",
        replies: [
          {
            name: "user-4",
            text: "replying to user-3",
            replies: [
              {
                name: "user",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [
                  {
                    name: "user",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                    replies: [
                      
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "user",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [
          {
            name: "user",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "user",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "user",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "user",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [
          {
            name: "user",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "user",
                text: "lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "user",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "user",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
    ],
  },
  {
    name: "user",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "user",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "user",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 rounded-lg  bg-gray-200 ">
      <div>
        <img
          className="w-14 h-14"
          alt="logo"
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/user-274.png"
        />
      </div>
      <div className="flex flex-col px-5">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-normal text-lg">{text}</p>
      </div>
    </div>
  );
};

const CommentList=({Comment})=>{
  return Comment.map((comments , index)=>
    <div><Comments data={comments} key={index}/>
    <div className="pl-5 py-1 border border-l-black ml-5">
      <CommentList Comment={comments.replies} key={index} />
      </div>
      </div>
  )

  
}

const CommentsContainer = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Comments:</h1>
      </div>
      <div className="py-3">
        <CommentList Comment={CommentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
