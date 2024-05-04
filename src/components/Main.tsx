"use client";
import { GlobalContext } from "@/context/global-context";
import React, { useContext } from "react";

const Main = () => {

  var { books, selectGener } = useContext(GlobalContext);
  if (selectGener) {
    if (selectGener === "all") {
      books = books;
    } else {
      const filterBooksbyGen = books.filter(
        (i: any) => i.category.slug.current === selectGener
      );
      books = filterBooksbyGen;
    }
  }




  return (
    <main>
      <div id="main_area">
        <div className="main-container">
          <div className="centre-flex">
            <div id="category_page" className="row-base row-pag">
              <div className="row-base-header">
                <div className="heading">
                  <h2 className="heading-1g m-0">Manga</h2>
                </div>
              </div>

              <div className="list-main-container" id="items-list">
                <div className="wrapper-list">
                  <div className="manga-grid list">
                    {books?.map((item: any, idx: number) => (
                      <div className="item" key={idx}>
                        <div className="grid-card">
                          <a className="manga-thumbnail" href="#">
                            <img
                              src={item?.image?.asset?.url}
                              loading="lazy"
                              className="manga-thumbnail-img"
                              alt={item?.title}
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pagination-div">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination_new">
                      <li className="page-item" id="btn-first">
                        <a className="page-link" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only"></span>
                        </a>
                      </li>
                      <ul
                        style={{ display: "inherit" }}
                        className="paginationLinks"
                      >
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                      </ul>
                      <li className="page-item" id="btn-last">
                        <a className="page-link" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
