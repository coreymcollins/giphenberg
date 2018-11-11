const GiphySearchResult = ( props ) => {

	const {
		handleMouseEnter,
		handleMouseLeave,
		handleOnClick,
		result,
		savedGifID,
	} = props;

	return (
		<li
			className={ result.id === savedGifID ? 'giphy-search-result selected' : 'giphy-search-result' }
			id={ result.id }
			data-gif-preview={ result.images.downsized_medium.url }
			data-gif-full={ result.images.downsized_medium.url }
			data-gif-static={ result.images.original_still.url }
			onMouseEnter={ ( ( e ) => handleMouseEnter( { e, result } ) ) }
			onMouseLeave={ ( ( e ) => handleMouseLeave( { e, result } ) ) }
			onClick={ ( ( e ) => handleOnClick( { e, result } ) ) }
		>
			<img
				id={ `image-${ result.id }` }
				className='giphy-result-gif'
				src={ result.images.original_still.url } />
		</li>
	)
}

export default GiphySearchResult;
