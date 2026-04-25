export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Começe adicionando alguns items a sua lista de bagagem 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Você pegou tudo! Pronto para ir ✈️"
          : ` 💼 Você tem ${numItems} na sua lista, e você ja separou ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
