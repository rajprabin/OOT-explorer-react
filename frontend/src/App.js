import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Card from './Components/Card/Card';
import FilterForm,{initialFilters} from './Components/Filter/Filter';

function App() {
	let [fetchedData, updateFetchedData] = useState({});

	let [queryFilter, setQueryFilter] = useState(initialFilters);


	useEffect(() => {
		(async function () {
			const options = {
				method: 'GET',
				url: 'http://localhost:3001/api/ott',
				params: queryFilter,
			};

			try {
				const response = await axios(options);

				updateFetchedData(response.data)
			} catch (error) {
				throw (error)
			}
		})()
	}, [queryFilter])


	const onFilterChange = (filter) => {
		setQueryFilter({
			...queryFilter,
			...filter
		})
	}

	return (
		<div className="App">
			<FilterForm onFilterChange={onFilterChange} />
			<Card datas={fetchedData.results} />
		</div>
	);
}

export default App;
