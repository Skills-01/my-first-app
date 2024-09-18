import React, { useEffect, useState } from "react";
import { Book } from "../components/Book";

export const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const url = "https://potterapi-fedeperin.vercel.app/en/books";

    try {
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();

      setBooks(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {books.map((item, index) => (
        <Book item={item} key={item.id} />
      ))}
    </div>
  );
};
