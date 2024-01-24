export async function getLogements() {
  const response = await fetch("/data/logements.json");
  const result = await response.json();
  return result;
}

export async function getPictures(id) {
  const response = await fetch("/data/logements.json");
  const data = await response.json();
  const result = data.find((element) => element.id === id);
  if (result) {
    return result.pictures;
  } else {
    throw new Error();
  }
}

export async function getSingleLogement(id) {
  const response = await fetch("/data/logements.json");
  const data = await response.json();
  const result = data.find((element) => element.id === id);
  if (result) {
    console.log(result);
    return result;
  } else {
    throw new Error();
  }
}
