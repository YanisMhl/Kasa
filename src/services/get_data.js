export async function getLogements() {
  const response = await fetch('/data/logements.json');
  const result = await response.json();
  return result;
}
