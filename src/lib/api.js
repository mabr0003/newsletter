const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function getSubs() {
  let response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function postSub(subData) {
  let response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subData),
  });

  let data = await response.json();
  return data;
}

export async function getSubsById(id) {
  const idUrl = `${url}?id=eq.${id}`;
  let response = await fetch(idUrl, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function patchSub(id, subData) {
  const idUrl = `${url}?id=eq.${id}`;
  let response = await fetch(idUrl, {
    method: "PATCH",
    headers: headersList,
    body: JSON.stringify(subData),
  });

  let data = await response.json();
  return data;
}
export async function deleteSub(id) {
  const idUrl = `${url}?id=eq.${id}`;
  let response = await fetch(idUrl, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
