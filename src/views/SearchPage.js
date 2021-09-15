import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/actions/index";
import PhotoDisplay from "../components/PhotoDisplay";

const SearchPage = () => {
  const { searchResults, isFetching, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getRandomSearch, getDatesSearch } = bindActionCreators(actionCreators, dispatch);

  const initialFormValues = {
    startDate: "",
    endDate: ""
  }
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(true);

  const onSubmit = evt => {
    evt.preventDefault();
    getDatesSearch(formValues.startDate, formValues.endDate);
  }

  const onChange = evt => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    })
  }

  useEffect(() => {
    if ( formValues.startDate.length === 10 && formValues.endDate.length === 10 ) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }, [formValues]);

  const handleClick = evt => {
    evt.preventDefault();
    getRandomSearch();
  }

  return (
    <div>
      <section>
        <h1>Search NASA Photos</h1>
        <div>
          <h2>Search by Dates</h2>
          <form className="dateSearchForm" onSubmit={onSubmit}>
            <label> Start Date
              <input 
                value={formValues.startDate}
                onChange={onChange}
                name="startDate"
                type="text"
                placeholder="YYYY-MM-DD"
              />
            </label>
            <label> End Date
              <input 
                value={formValues.endDate}
                onChange={onChange}
                name="endDate"
                type="text"
                placeholder="YYYY-MM-DD"
              />
            </label>
            <button disabled={disabled}>Search</button>
          </form>
        </div>
        <div>
          <h2>Search Random Photos</h2>
          <button onClick={handleClick}>Get Pictures</button>
        </div>
      </section>
      <section>
        { isFetching ? <h2 className="fetching">Fetching Photos Now</h2> : "" }
        { 
          searchResults == null ? <h2>{error}</h2> : 
          searchResults.map((result) => <PhotoDisplay photoObject={result} /> )
        }
      </section>
    </div>
  )
}

export default SearchPage;
