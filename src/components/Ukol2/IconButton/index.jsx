import './style.css';

export const IconButton = ({ label, onSelectName }) => {
  return (
    <button className="icon-button" onClick={() => onSelectName(label)}>
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
