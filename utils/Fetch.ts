type FetchItem = {
  name: string;
  pathname: string;
  url: string;
};

export const FetchListByFetchItem = async (
  name: string,
  apiList: FetchItem[]
) => {
  // name과 url이 저장된 배열에서 name을 참조해 url에서 fetch를 수행하고 그 결과를 반환
  const item = apiList.find((i) => i.name === name);

  if (item) {
    try {
      const res = await fetch(item.url);
      const data = await res.json();

      if (data) {
        console.log(data);
        return data; // setter?
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(`Invaild Name: ${name}`);
  }
};

export const fetchThisItem = async (api: string) => {
  const res = await fetch(`http://localhost:3030/${api}`);
  const data = await res.json();

  if (data) {
    console.log(data);
    return data;
  }
};

export async function fetchEventById(eventId?: string) {
  const queryPath = "/detail?eventId";
  const res = await fetch(
    `http://localhost:3030/event${eventId ? "?id=" + eventId : ""}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  console.log(data);
  return { data };
}
