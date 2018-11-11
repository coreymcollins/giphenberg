import classnames from 'classnames';

// Import other functionality.
import GiphySearchResults from './results';
import './editor.scss';

// Export for ease of importing in individual blocks.

const { __ } = wp.i18n;
const { Component } = wp.element;
const { PlainText } = wp.editor;

// function giphySearch( props ) {
export default class GiphySearch extends Component {

	onChangeSearchTerm = value => {
		const { setAttributes } = this.props;

		setAttributes( { searchTerm: value } );

		this.getResults( value );
	};

	getResults = searchTerm => {
		const { setAttributes } = this.props;

		const url = `https://api.giphy.com/v1/gifs/search?q=${ searchTerm }&api_key=YOURAPIKEY&limit=15`;

		return fetch( url )
			.then(
				response => {
					return response.json();
				}
			)
			.then(
				results => {
					setAttributes( { searchResults: results } );
				}
			);
	};

	gifMouseEnter = clickedGIF => {
		const listItemID = clickedGIF.result.id,
			imageID = `image-${ clickedGIF.result.id }`,
			fullURL = document.getElementById( listItemID ).dataset.gifFull,
			thisImage = document.getElementById( imageID );

		thisImage.classList.add( 'animated' );
		thisImage.setAttribute( 'src', fullURL );
	};

	gifMouseLeave = clickedGIF => {
		const listItemID = clickedGIF.result.id,
			imageID = `image-${ clickedGIF.result.id }`,
			staticURL = document.getElementById( listItemID ).dataset.gifStatic,
			thisImage = document.getElementById( imageID );

		thisImage.classList.remove( 'animated' );
		thisImage.setAttribute( 'src', staticURL );
	};

	gifOnClick = clickedGIF => {
		const { setAttributes } = this.props,
			listItemID = clickedGIF.result.id,
			fullURL = document.getElementById( listItemID ).dataset.gifFull;

		setAttributes( {
			savedGifURL: fullURL,
			savedGifID: listItemID
		} );

		if ( document.getElementById( listItemID ).classList.contains( 'selected' ) ) {
			setAttributes( {
				savedGifURL: '',
				savedGifID: ''
			} );
		}

		document.getElementById( listItemID ).classList.toggle( 'selected' );
	};

	render() {
		return (
			<div className="giphenberg-search-container">
				<form
					className="giphenberg-search-form"
					key="giphenberg-form"
					onSubmit={ event => event.preventDefault() }
				>
					<PlainText
						className= { classnames(
							'giphenberg-search'
						) }
						value={ ! this.props.attributes.searchTerm ? '' : this.props.attributes.searchTerm }
						onChange={ this.onChangeSearchTerm }
						placeholder={ this.props.placeholder ? this.props.placeholder : __( 'Enter a search term, like "pizza" or "bart" or "pizza bart"' ) }
					/>

					<GiphySearchResults
						results={ ! this.props.attributes.searchResults ? '' : this.props.attributes.searchResults }
						gifMouseEnter={ this.gifMouseEnter }
						gifMouseLeave={ this.gifMouseLeave }
						gifOnClick={ this.gifOnClick }
						savedGifID={ this.props.attributes.savedGifID }
					/>
				</form>
			</div>
		);
	}
}

// export default giphySearch;
