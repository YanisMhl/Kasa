export async function getLogements() {
  const response = await fetch('/data/logements.json');
  const result = await response.json();
  return result;
}

export async function getPictures(id) {
  const response = await fetch('/data/logements.json');
  const data = await response.json();
  data.array.forEach(element => {
    if (element.id === id) {
      return element.pictures;
    }
  });
}