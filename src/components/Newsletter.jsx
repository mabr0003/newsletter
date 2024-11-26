import { postSub } from "@/lib/api";
import { revalidatePath } from "next/cache";

const Newsletter = (sendData) => {
  async function sendData(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await postSub(data);

    revalidatePath("/newsletter");
  }

  return (
    <form className="justify-self-center mb-10" action={sendData}>
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
  );
};

export default Newsletter;
