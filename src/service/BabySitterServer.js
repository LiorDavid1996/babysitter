export default async function getBabySitter() {
  try {
    return await fetch(
      "https://my-json-server.typicode.com/LiorDavid1996/bebysitterApi2/data"
    ).then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}

