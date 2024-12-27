import { Book } from "@/types/interfaces";

export type Action =
  | { type: "add"; payload: { title: string; author: string } }
  | { type: "remove"; payload: string }
  | { type: "like"; payload: string }
  | { type: "dislike"; payload: string }
  | { type: "sort" };

export const booksReducer = (state: Book[], action: Action): Book[] => {
  switch (action.type) {
    case "add":
      console.log("adding book");
      const book: Book = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        rating: 0,
      };
      return [book, ...state];
    case "remove":
      console.log("removing book");
      return state.filter((book) => book.id !== action.payload);
    case "like":
      console.log("liking book");
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, rating: book.rating + 1 };
        }
        return book;
      });
    case "dislike":
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, rating: book.rating - 1 };
        }
        return book;
      });
    case "sort":
      console.log("sorting books");
      return [...state].sort((a, b) => b.rating - a.rating);
    default:
      return state;
  }
};
