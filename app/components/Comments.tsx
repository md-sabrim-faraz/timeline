import { CommentProps } from "@/lib/types";

export default function Comments({ comment }: CommentProps) {
  console.log(comment);

  return (
    <>
      <div className="mx-auto w-11/12 flex-col rounded-md bg-white p-4 mb-4">
        <h3>Hello</h3>
      </div>
    </>
  );
}
