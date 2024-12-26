import { BadgeMinus, ThumbsDown, ThumbsUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

function BookSingle({ book, dispatch }: any) {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{book.author}</CardTitle>
        <CardDescription>Appreciation: {book.rating}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-1 items-center">
        <Button variant="outline">
          <ThumbsUp
            onClick={() => dispatch({ type: "like", payload: book.id })}
          />
        </Button>
        <Button variant="outline">
          <ThumbsDown
            onClick={() => dispatch({ type: "dislike", payload: book.id })}
          />
        </Button>
        <Button
          variant="destructive"
          onClick={() => dispatch({ type: "remove", payload: book.id })}
        >
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookSingle;
