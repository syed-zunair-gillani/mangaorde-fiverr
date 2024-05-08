"use client";
import { GlobalContext } from "@/context/global-context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Main = () => {
  var { books, selectGener, searchQuery } = useContext(GlobalContext);

  const [allbooks, setAllBooks] = useState<any>();

  useEffect(() => {
    setAllBooks(books);
  }, [books]);

  // filter data by genure
  useEffect(() => {
    if (selectGener) {
      if (selectGener === "all") {
        setAllBooks(books);
      } else {
        const filterBooksbyGen = books.filter(
          (i: any) => i.category.slug.current === selectGener
        );
        setAllBooks(filterBooksbyGen);
      }
    }
  }, [selectGener]);

  // Search data
  useEffect(() => {
    if (searchQuery) {
      selectGener = "all";
      const filtered = books?.filter((item: any) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setAllBooks(filtered);
    } else {
      setAllBooks(books);
    }
  }, [searchQuery]);

  const itemsPerPage = 24;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allbooks?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allbooks?.length / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const newOffset = selectedItem.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

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
                    {currentItems?.map((item: any, idx: number) => (
                      <div className="item" key={idx}>
                        <div className="grid-card">
                          <Link
                            className="manga-thumbnail"
                            href={"/" + item.slug.current}
                          >
                            <img
                              src={item?.image?.asset?.url}
                              loading="lazy"
                              className="manga-thumbnail-img"
                              alt={item?.title}
                            />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                <div className="flex justify-center my-20">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">>"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={0}
                  pageCount={pageCount}
                  previousLabel="<<"
                  renderOnZeroPageCount={null}
                  previousClassName="border border-[2px] flex justify-center items-center flex-col text-white pt-[1px] text-sm white w-9 h-9 rounded-md"
                  containerClassName="flex gap-3 items-center"
                  pageClassName="border border-[2px] flex justify-center items-center flex-col text-lg pt-[2px] white w-9 h-9 rounded-md"
                  activeClassName="bg-white text-black"
                  nextClassName="border border-[2px] flex justify-center items-center flex-col text-white pt-[1px] text-sm white w-9 h-9 rounded-md"
                />
                </div>
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
