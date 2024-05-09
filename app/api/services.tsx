const baseURL = "https://aoe4world.com";

export async function SearchPlayer(name: string): Promise<any> {
  let url = baseURL + "/api/v0/players/search?" + `query=${name}`;

  try {
    return (await fetch(url)).json();
  } catch (error) {
    console.error(error);
    return {};
  }
}
