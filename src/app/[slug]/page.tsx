"use client";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { QSingleBooks } from "../../../sanity/query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getData(prop: string) {
  const bookRes = await client.fetch(QSingleBooks, {
    slug: prop,
  });
  return {
    book: bookRes,
  };
}

const Slug = async (props: any) => {
  const param = props.params.slug;
  const { book } = await getData(param);


  return (
    <section className="max-w-[1180px] w-full mx-auto pt-40 text-white pb-20">
      <div className="md:flex justify-between items-end">
        <div>
          <h3 className="text-2xl md:text-4xl">{book?.title}</h3>
          <h6 className="capitalize mt-2 text-2xl">
            Author: {book?.author?.name}
          </h6>
        </div>
      </div>
      <div className="mt-5 text-gray-300 content">
        <PortableText value={book?.content} />
      </div>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {book?.volume?.map((item: any, idx: number) => (
          <div>
            <Link key={idx} className="manga-thumbnail" target="_blank" href={item?.link}>
            <img
              src={item?.image?.asset?.url}
              loading="lazy"
              className="manga-thumbnail-img"
              alt={item?.volume}
            />
          </Link>
            <p className="text-2xl mt-4 text-center">Volume: {item?.volume || '1'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slug;
