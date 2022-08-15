import React, { useMemo, useState } from "react";
import { BiEdit, BiSpreadsheet, BiTrashAlt } from "react-icons/bi";
import { authCalls } from "../../../helpers/api";
import "./dashboard.scss";

const Dashboard = () => {
  // const { blogs } = useNews();
  const blogs = []
  const [lang, setLang] = useState(null);
  const [error, setError] = useState(null);

  const sortedBlogs = useMemo(() => {
    if (lang === null || !lang.length) return blogs;
    return blogs.filter((blog) => blog.language === lang);
  }, [lang, blogs]);

  const handleSelect = (e) => {
    console.log(e.target.checked);
  };

  const handleDelete = async (id) => {
    const response = await authCalls(`/blog/${id}`, "DELETE");

    if (response.status) {
      window.location.reload("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="section dashboard">
      {/* {error && (
        <AlertModal
          error={error}
          setError={setError}
          message={"Something goes wrong"}
        />
      )} */}
      <h3 className="section-title">Blog Table</h3>
      <div className="table-custom">
        <h4 className="table-title">Blog list</h4>
        <div className="table-grid">
          <div className="table-actions">
            {/* <AddBlog /> */}
            <span className="delete">
              <BiTrashAlt size={20} />
            </span>
            <select
              className="sortby"
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="">All</option>
              <option value="sr">Serbian</option>
              <option value="en">English</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Language</th>
                <th>Created At</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBlogs?.length &&
                blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>
                      <input type="checkbox" onClick={handleSelect} />
                    </td>
                    <td>{blog._id}</td>
                    <td>
                      {blog.title.length > 50
                        ? blog.title.slice(50) + "..."
                        : blog.title}
                    </td>
                    <td>
                      {" "}
                      <img
                        src={`./blogs/${blog.files.split("#")[0]}`}
                        width={50}
                        alt=""
                      />{" "}
                    </td>
                    <td>{blog.language}</td>
                    <td>{blog.createdAt}</td>
                    <td>
                      <BiSpreadsheet size={25} />
                    </td>
                    <td>
                      <BiEdit size={25} />
                    </td>
                    <td
                      onClick={() => handleDelete(blog._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <BiTrashAlt color={"red"} size={25} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="pagination">pagination</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
