import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function CommentForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { comment } = Object.fromEntries(formData);

    console.log(comment);

    if (typeof comment !== "string" || comment === "") return;

    // addPost(name, title, description);
  };
  return (
    <>
      <form
        className="mx-auto w-11/12 rounded-lg bg-white"
        onSubmit={handleSubmit}
      >
        <Textarea
          id="comment"
          name="comment"
          placeholder="Comment here..."
          className="h-24"
        />
      </form>
      <div className="flex justify-end me-8 mt-4">
        <Button type="submit" size="sm" form="">
          Reply
        </Button>
      </div>
    </>
  );
}
