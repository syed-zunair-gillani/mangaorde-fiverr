
"use client";
import React, { createContext, useEffect, useState } from "react";
import { QBooks } from "../../sanity/query";
import { client } from "../../sanity/lib/client";
import { getUniqueItems } from "@/lib";

export const GlobalContext = createContext();

async function getData() {
  const booksRes = await client.fetch(QBooks);
  return {
    allBooks: booksRes
  }
}

export const GlobalProvider = ({ children }) => {

  const [selectGener, setSelectGener] = useState('')
  const [genres, setGenres] = useState()
  const [books, setBooks] = useState()
  console.log("🚀 ~ GlobalProvider ~ books:", books)
  const [searchQuery, setSearchQuery] = useState()

  useEffect(() => {
    (async () => {
      const { allBooks } = await getData()
      setBooks(allBooks)
      const allGenres = allBooks?.map((item) => item.category)
      const genres = getUniqueItems(allGenres) //get unique genres
      setGenres(genres)
    })()
  }, [])


  // const handleSearch = (e) => {
  //   const value = e.target.value
  //   if (value) {
  //     const filterBooksbySearchQ = books.filter(
  //       (i) => i.title.includes(value)
  //     );
  //     setBooks(filterBooksbySearchQ)
  //   }
  // }


  return (
    <GlobalContext.Provider
      value={{
        books,
        genres,
        setSelectGener,
        selectGener,
        setBooks,
        handleSearch,
        searchQuery, setSearchQuery
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
