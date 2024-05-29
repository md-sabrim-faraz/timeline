export default async function getData(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL + path}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
