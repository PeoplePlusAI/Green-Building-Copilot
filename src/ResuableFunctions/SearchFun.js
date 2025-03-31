import { useDispatch, useSelector } from 'react-redux';
import InputOnly from 'Components/Input/inputOnly';
import { clearSearch, updateSearchValue, updateSearchClickedTrue, updateToast } from 'Views/Common/Slice/Common_slice';
import Icons from 'Utils/Icons';

export function SearchComponent({ className, placeholder }) {
    const dispatch = useDispatch();
    const { search_value, search_clicked } = useSelector(state => state.commonState);

    const handleSearch = () => {
        if (search_value.trim()) {
            dispatch(updateSearchClickedTrue());
        } else {
            dispatch(updateToast({ type: "error", message: "Search field should not be empty" }));
        }
    };

    const handleInputChange = (e) => {
        dispatch(updateSearchValue(e.target.value));
    };

    const handleSearchEnter = (event) => {
        if (event.code === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="position-relative w-100">
            <InputOnly
                type="text"
                className={className}
                placeholder={placeholder}
                change={handleInputChange}
                keyDown={handleSearchEnter}
                value={search_value}
            />

            {/* {search_value && (
                <span className="input-group-end-icon-two cursor-pointer" onClick={handleSearch}>
                    {Icons.searchIcon}
                </span>
            )}
            <span
                className={`${!search_clicked ? "pe-none" : "cursor-pointer"} input-group-end-icon-one`}
                onClick={() => dispatch(clearSearch())}
            >
                {Icons.searchCancelIcon}
            </span> */}
        </div>
    );
}
