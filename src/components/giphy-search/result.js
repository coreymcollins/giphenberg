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
			className={ result.id === savedGifID ? 'giphenberg-search-result selected' : 'giphenberg-search-result' }
			id={ result.id }
			data-gif-preview={ result.images.downsized_medium.url }
			data-gif-full={ result.images.downsized_medium.url }
			data-gif-static={ result.images.original_still.url }
		>
			<a
				className='anchor-giphenberg-select'
				href='#'
				onMouseEnter={ ( ( e ) => handleMouseEnter( { e, result } ) ) }
				onFocus={ ( ( e ) => handleMouseEnter( { e, result } ) ) }
				onMouseLeave={ ( ( e ) => handleMouseLeave( { e, result } ) ) }
				onBlur={ ( ( e ) => handleMouseLeave( { e, result } ) ) }
				onClick={ ( ( e ) => handleOnClick( { e, result } ) ) }
			>
				<img
					id={ `image-${ result.id }` }
					className='giphenberg-result-gif'
					src={ result.images.original_still.url }
				/>
			</a>
		</li>
	)
}

export default GiphySearchResult;
