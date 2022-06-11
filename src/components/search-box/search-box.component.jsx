import "./search-box.style.css";

const SearchBox = (props) => {
  const { onChangeHandler, className, placeholder } = props;

  return (
    <input
      onChange={onChangeHandler}
      type="search"
      className={className}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
