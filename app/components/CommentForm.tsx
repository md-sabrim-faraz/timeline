import { Textarea } from "./ui/textarea";

export default function CommentForm() {
  return (
    <>
      <form className="mx-auto w-11/12 rounded-lg bg-white">
        <Textarea
          id="comment"
          name="comment"
          placeholder="Comment here..."
          className="h-24"
        />
      </form>
    </>
  );
}
