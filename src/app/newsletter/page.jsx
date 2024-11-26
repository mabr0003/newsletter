import Newsletter from "@/components/Newsletter.jsx";
import { getSubs } from "@/lib/api";
import Link from "next/link";

async function page() {
  const subscribers = await getSubs();

  return (
    <div>
      <main className="grid place-content-center h-screen">
        <Newsletter />
        <ul className="grid grid-cols-3 gap-10">
          {subscribers.map((sub) => (
            <li key={sub.id}>
              <Link href={`/newsletter/${sub.id}`}>
                {sub.name} - {sub.email}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default page;
