import { enhanceBlockquotes } from './enhance-blockquotes';
import { enhanceDividers } from './enhance-dividers';
import { enhanceDots } from './enhance-dots';
import { enhanceEmbeds } from './enhance-embeds';
import { enhanceImages } from './enhance-images';
import { enhanceInteractiveContentsElements } from './enhance-interactive-contents-elements';
import { enhanceNewsletterSignup } from './enhance-newsletter-signup';
import { enhanceNumberedLists } from './enhance-numbered-lists';
import { enhanceTweets } from './enhance-tweets';

class BlockEnhancer {
	blocks: Block[];

	format: CAPIFormat;

	newsletterToEmbed?: Newsletter;

	constructor(
		blocks: Block[],
		format: CAPIFormat,
		newsletterToEmbed?: Newsletter,
	) {
		this.blocks = blocks;
		this.format = format;
		this.newsletterToEmbed = newsletterToEmbed;
	}

	enhanceNewsletterEmbed() {
		this.blocks = enhanceNewsletterSignup(
			this.blocks,
			this.newsletterToEmbed,
		);
		return this;
	}

	enhanceDividers() {
		this.blocks = enhanceDividers(this.blocks);
		return this;
	}

	enhanceDots() {
		this.blocks = enhanceDots(this.blocks);
		return this;
	}

	enhanceInteractiveContentsElements() {
		this.blocks = enhanceInteractiveContentsElements(this.blocks);
		return this;
	}

	enhanceImages() {
		this.blocks = enhanceImages(this.blocks, this.format);
		return this;
	}

	enhanceNumberedLists() {
		this.blocks = enhanceNumberedLists(this.blocks, this.format);
		return this;
	}

	enhanceBlockquotes() {
		this.blocks = enhanceBlockquotes(this.blocks, this.format);
		return this;
	}

	enhanceEmbeds() {
		this.blocks = enhanceEmbeds(this.blocks);
		return this;
	}

	enhanceTweets() {
		this.blocks = enhanceTweets(this.blocks);
		return this;
	}
}

// IMPORTANT: the ordering of the enhancer is IMPORTANT to keep in mind
// example: enhanceInteractiveContentElements needs to be before enhanceNumberedLists
// as they both effect SubheadingBlockElement
export const enhanceBlocks = (
	blocks: Block[],
	format: CAPIFormat,
	newsletterToEmbed?: Newsletter,
): Block[] => {
	return new BlockEnhancer(blocks, format, newsletterToEmbed)
		.enhanceNewsletterEmbed()
		.enhanceDividers()
		.enhanceInteractiveContentsElements()
		.enhanceBlockquotes()
		.enhanceDots()
		.enhanceImages()
		.enhanceNumberedLists()
		.enhanceEmbeds()
		.enhanceTweets().blocks;
};
