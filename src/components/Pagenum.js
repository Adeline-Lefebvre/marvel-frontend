import "../App.scss";
import { useState } from "react";

const Page = ({ data }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.count / 100);

  return (
    <div className="page-num">
      {page > 1 ? (
        <button
          className="page-num-arrow"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      ) : (
        <div className="page-num-arrow hidden"></div>
      )}
      <div>
        Page {page} sur {totalPages}
      </div>
      {page < totalPages ? (
        <button
          className="page-num-arrow"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      ) : (
        <div className="page-num-arrow hidden"></div>
      )}
    </div>
  );
};

export default Page;
