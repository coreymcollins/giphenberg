const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import icon from './icon';
import GiphySearch from '../../components/giphy-search';

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
	},
	edit: props => {
		return [
			!! props.isSelected && (
				<div
				key='giphy-gif-search'
				className={ props.className }>
					<h2 className="giphenberg-header">{ __( 'Insert a GIF from Giphy!' ) }</h2>
					<GiphySearch
						{ ...props }
					/>
				</div>
			),
			! props.isSelected && (
				<img className="giphy-saved-image" src={ props.attributes.savedGifURL } />
			),
		];
	},
	save: props => {
		return (
			<img src={ props.attributes.savedGifURL } />
		);
	},
} );
