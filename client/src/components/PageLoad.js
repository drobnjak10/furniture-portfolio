import React, { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

const PageLoad = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [500]);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return children;
};

export default PageLoad;
