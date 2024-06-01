import { CommentProps } from "@/lib/types";

export default function Comments({ comment }: CommentProps) {
  // destructure all the keys

  const { name, email, body } = comment;

  return (
    <>
      <div className="mx-auto w-11/12 flex-col rounded-md bg-white p-4 mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">{name}</h1>
          <h5 className="text-gray-700 font-semibold">{email}</h5>
          <p className="text-gray-600">{body}</p>
        </div>
      </div>
    </>
  );
}
