import { StyledInput } from "./Filter.styled";
import { selectFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/filtersSlice";


export const Filter = () => {
    const dispatch = useDispatch();
    const { filter } = useSelector(selectFilter);

    //зміна фільтру
    const onChangeFilter = (evt) => {
        dispatch(changeFilter(evt.target.value))
    };

    return (
        <label>
            Find contact by name
            <StyledInput onChange={onChangeFilter} type="text" name="name" value={filter} required />
        </label>
    );
};
