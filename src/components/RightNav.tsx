import React from "react";

const RightNav = () => {
  return (
    <>
      <section id="right_nav">
        <div className="p-8">
        <div className="row-base-header text-white">
          <div className="heading">
            <h2 className="heading-1g m-0">Genre</h2>
          </div>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
            {
                bookGenres.map((item,idx)=>(
                    <li key={idx} className="bg-[#282a34] p-1 hover:bg-white hover:text-gray-800 cursor-pointer !pt-1.5 px-2">{item.name}</li>
                ))
            }
        </ul>
        </div>
      </section>
    </>
  );
};

export default RightNav;

const bookGenres = [
  { name: "Science Fiction", slug: "science-fiction" },
  { name: "Fantasy", slug: "fantasy" },
  { name: "Mystery", slug: "mystery" },
  { name: "Romance", slug: "romance" },
  { name: "Thriller", slug: "thriller" },
  { name: "Historical Fiction", slug: "historical-fiction" },
  { name: "Horror", slug: "horror" },
  { name: "Biography", slug: "biography" },
  { name: "Self-Help", slug: "self-help" },
  { name: "Memoir", slug: "memoir" },
  { name: "Young Adult", slug: "young-adult" },
];
