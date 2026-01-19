
function Character({ character, isSelected, onSelect }) {
  return (
    <li
      className={`character ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(character)}
    >
      <img src={character.icon} alt={character.name} width="80" />
    </li>
  );
}

export default Character;
