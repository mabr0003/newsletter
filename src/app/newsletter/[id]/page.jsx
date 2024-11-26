import { getSubsById } from "@/lib/api";

export default async function page({ params }) {
  const { id } = await params;

  const entry = await getSubsById(id);

  return (
    <div>
      <form>
        <label htmlFor="name" className="block font-bold ">
          Name
        </label>
        <input type="text" id="name" name="name" className="block border py-2 px-3" />
        <label htmlFor="email" className="block font-bold">
          Email
        </label>
        <input type="text" id="email" name="email" className="block border py-2 px-3" />
        <button className="text-center" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}
