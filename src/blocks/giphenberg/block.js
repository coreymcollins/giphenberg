const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import icon from './icon';
import GiphySearch from '../../components/giphy-search';

const blockTitle = __( 'Insert a GIF from Giphy' );

registerBlockType( 'giphenberg/block-giphenberg', {
	title: __( 'Giphenberg Giphy Search' ),
	icon,
	category: 'common',
	keywords: [
		__( 'gif' ),
		__( 'giphy' ),
		__( 'giphenberg' ),
	],
	attributes: {
		savedGifURL: {
			type: 'string',
		},
		savedGifID: {
			type: 'string',
		},
		savedGifAlt: {
			type: 'string',
		},
	},
	edit: props => {
		return [
			!! props.isSelected && (
				<div
				key='giphenberg-gif-search'
				className={ props.className }>
					<h2 className="giphenberg-header">{ blockTitle }</h2>
					<GiphySearch
						{ ...props }
					/>
				</div>
			),
			! props.isSelected && (
				<div className="giphenberg-display">
					{
						props.attributes.savedGifID ? (
							<img className="giphenberg-saved-image" src={ props.attributes.savedGifURL } alt={ props.attributes.savedGifAlt } />
						) : (
							<div>
								<h2 className="giphenberg-header">{ blockTitle }</h2>
								<p><em>{ __( 'Click to search for a GIF' ) }</em></p>
							</div>
						)
					}
				</div>
			),
		];
	},
	save: props => {
		return (
			<img src={ props.attributes.savedGifURL } alt={ props.attributes.savedGifAlt } />
		);
	},
} );
