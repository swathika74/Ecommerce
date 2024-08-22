
import PropTypes from "prop-types";
export const Arraysample = (Props) => {
    const {items}= Props;
  return (
    <div>
        <h1>Items List</h1>
        <ul>
            {items.map((items)=>(
                <li key={items.id}> {items.name}</li>
                ))}
        </ul>
    </div>
  )
}
Arraysample.propTypes={
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};




