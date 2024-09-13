import { SingleCommentProp } from "@/lib/types";

export default function Comments({ comment }: SingleCommentProp) {
  console.log(comment);

  // destructure all the keys

  const { body } = comment;

  console.log(comment);

  return (
    <>
      <div className="mx-auto w-11/12 flex-col rounded-md bg-white p-4 mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Anonymous</h1>
          <p className="text-gray-600">{body}</p>
        </div>
      </div>
    </>
  );
}
