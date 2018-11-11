import GiphySearchResult from './result';

/**
 * Display the search results.
 *
 * @param  {Object} props      Component properties.
 * @return {GiphySearchResult} The individual Giphy result.
 */
const GiphySearchResults = ( props ) => {

	const {
		gifMouseEnter,
		gifMouseLeave,
		gifOnClick,
		results,
		savedGifID,
	} = props;

	let resultsArray = [];

	if ( results ) {
		resultsArray = Array.from ( results.data );
	}

	const queryResults = resultsArray.map( result => {
		return(
			<GiphySearchResult
				key={ result.id }
				result={ result }
				handleMouseEnter={ gifMouseEnter }
				handleMouseLeave={ gifMouseLeave }
				handleOnClick={ gifOnClick }
				savedGifID={ savedGifID }
			/>
		);
	} );

	return (
		<ul className="giphenberg-results-list">
			{ queryResults }
		</ul>
	)
}

export default GiphySearchResults;
