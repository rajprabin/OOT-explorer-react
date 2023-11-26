import React, { useState } from 'react';
import "./Filter.css";


// Initial filter state
export const initialFilters = {
	start_year: '1970',
	end_year: '2020',
	min_imdb: '6',
	max_imdb: '7.8',
	genre: 'action',
	language: 'english',
	type: 'movie',
	sort: 'latest',
	page: '1',
};

const FilterForm = ({ onFilterChange }) => {

	const generateYearOptions = (start, end) => {
		const years = [];
		for (let year = start; year <= end; year++) {
			years.push(year.toString());
		}
		return years;
	};



	const [filters, setFilters] = useState(initialFilters);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (['start_year', 'end_year', 'min_imdb', 'max_imdb', 'page'].includes(name)) {
			if (!isNaN(value) || value === '') {
				setFilters((prevFilters) => ({
					...prevFilters,
					[name]: value,
				}));
			}
		} else {
			setFilters((prevFilters) => ({
				...prevFilters,
				[name]: value,
			}));
		}
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		onFilterChange(filters);
	};


	const yearOptions = generateYearOptions(1970, 2020);

	return (
		<form className='form-container' onSubmit={handleSubmit}>
			<label>
				Start Year:
				<select
				id="mySelect"
					name="start_year"
					value={filters.start_year}
					onChange={handleInputChange}
				>
					{yearOptions.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</label>

			<label>
				End Year:
				<select
					id="mySelect"
					name="end_year"
					value={filters.end_year + 1}
					onChange={handleInputChange}
				>
					{yearOptions
						.filter((year) => year > filters.start_year)
						.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
				</select>
			</label>

			<label>
				Genre:
				<input
					type="text"
					name="genre"
					value={filters.genre}
					onChange={handleInputChange}
					readOnly
				/>
			</label>

			<label>
				Language:
				<input
					type="text"
					name="language"
					value={filters.language}
					onChange={handleInputChange}
					readOnly
				/>
			</label>

			<label>
				Type:
				<select
				id="mySelect"
					name="type"
					value={filters.type}
					onChange={handleInputChange}
				>
					<option value="movie">Movie</option>
					<option value="show">Show</option>
				</select>
			</label>
			<br />

			<label>
				Min IMDb:
				<input
					type="number"
					name="min_imdb"
					min="0"
					max="10"
					step="0.1"
					value={filters.min_imdb}
					onChange={handleInputChange}
				/>
			</label>

			<label>
				Max IMDb:
				<input
					type="number"
					name="max_imdb"
					min="0"
					max="10"
					step="0.1"
					value={filters.max_imdb}
					onChange={handleInputChange}
				/>
			</label>
			<br />

			<button type="submit">Apply Filters</button>
		</form>
	);
};

export default FilterForm;
