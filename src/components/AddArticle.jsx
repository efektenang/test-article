"use client";

import { useState } from "react";

export default function AddArticle() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const addHandle = async (e) => {
    e.preventDefault();
    await fetch("https://api-trials.x5.com.au/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(({ ok, err }) => {
      if (ok) {
        return alert("Data berhasil disimpan");
      } else {
        console.log("error");
      }
    });
  };
  return (
    <div role="tabpanel" className="tab-content">
      <div className="card-body">
        <div className="card-title">Add Article</div>
        <form action="" onSubmit={addHandle}>
          <label htmlFor="title" className="form-control w-full max-w-xs">
            <div className="label">
              <div className="label-text">Title</div>
            </div>
            <input
              name="title"
              type="text"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
              placeholder="Type here"
              className="input bg-gray-100 w-full max-w-xs"
            />
          </label>
          <label htmlFor="content" className="form-control w-full max-w-xl">
            <div className="label">
              <div className="label-text">Content</div>
            </div>
            <textarea
              className="textarea bg-gray-100 h-24"
              value={data.content}
              onChange={(e) => {
                setData({ ...data, content: e.target.value });
              }}
              placeholder="Bio"></textarea>
          </label>
          <button type="submit" className="btn bg-green-400 text-white mt-4">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
