export function showDescription(e, data, setDescription) {
  const id = e.target.id;
  const to = e.target.href;
  const {
    allSanityPost: { nodes },
  } = data;
  nodes.forEach((item) => {
    id === item.title && setDescription({ ...item, to });
  });
}
