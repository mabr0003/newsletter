import { getSubsById, patchSub, deleteSub } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SubUpdate({ params }) {
  const { id } = await params;
  const subscriber = (await getSubsById(id))[0];

  async function handleUpdate(formData) {
    "use server";
    const updatedData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await patchSub(id, updatedData);

    revalidatePath("/newsletter");
    redirect("/newsletter");
  }

  async function handleDelete() {
    "use server";
    await deleteSub(id);
    revalidatePath("/newsletter");
    redirect("/newsletter");
  }

  return (
    <div>
      <main className="grid place-content-center">
        <form action={handleUpdate}>
          <label htmlFor="name" className="block font-bold">
            Name
          </label>
          <input defaultValue={subscriber.name} type="text" id="name" name="name" className="block border py-2 px-3" />
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input defaultValue={subscriber.email} type="email" id="email" name="email" className="block border py-2 px-3" />
          <button className="text-center mt-4 bg-green-500 text-white px-4 py-2" type="submit">
            Update
          </button>
        </form>
        <form action={handleDelete}>
          <button type="submit" className="mt-4 bg-red-500 text-white px-4 py-2">
            Delete Subscriber
          </button>
        </form>
      </main>
    </div>
  );
}
