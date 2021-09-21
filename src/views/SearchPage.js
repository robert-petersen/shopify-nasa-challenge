import React, { useState, useEffect } from 'react';
import axios from "axios";
import PhotoDisplay from "../components/PhotoDisplay";

const SearchPage = ({ searchResults, setSearchResults, liked, setLiked }) => {
  const [ isFetching, setIsFetching ] = useState(false);

  const initialFormValues = {
    startDate: "",
    endDate: ""
  }
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ disabled, setDisabled ] = useState(true);

  const getDatesSearch = (startDate, endDate) => {
    setIsFetching(true);
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}`)
    .then((res) => setSearchResults(res.data))
    .catch((err) => console.log("error:", err));
    setIsFetching(false);
  }

  const getRandomSearch = () => {
    setIsFetching(true);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=10`)
      .then((res) => setSearchResults(res.data))
      .catch((err) => console.log("error:", err))
      setIsFetching(false);
  }

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
    <div className="search" >
      <section className="search_container" >
        <div className="banner" >
          <h1>Search NASA Photos</h1>
          <div className="banner_fade"></div>
        </div>
        <div className="search_content" >
          <div className="type_search_container" >
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
          <div className="type_search_container" >
            <h2>Search Random Photos</h2>
            <button onClick={handleClick}>Get Pictures</button>
          </div>
        </div>
      </section>
      <section className="results_container" >
        { isFetching ? <h2 className="fetching">Fetching Photos Now</h2> : "" }
        { 
          searchResults === {} ? <h2>error</h2> : 
          searchResults.map((result) => <PhotoDisplay photoObject={result} liked={liked} setLiked={setLiked} /> )
        }
      </section>
    </div>
  )
}

export default SearchPage;
