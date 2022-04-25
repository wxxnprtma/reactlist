

const SearchBox = (props) => {
    return (
        <input
            className={`search-box ${props.className} border w-100 rounded-lg p-2 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`}
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
        />
    )
}

export default SearchBox;