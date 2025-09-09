import React from "react";
import Book from "./Book";

const books =[
    {
      title: "The Art of React",
      author: "김민주",
      coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791194383376.jpg"
    },
    {
        title: "Learning Javascript by Myself",
        author: "윤인성",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162243671.jpg"
    },
    {
        title: "clean code",
        author: "",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966260959.jpg"
    },
];

function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {
                books.map((book) => {
                    return(
                    <Book
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    />
                  )
               })
            }
        </div>
    );
}

export default BookList;