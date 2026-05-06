export type GalleryImage = {
    src: string;        // full image
    alt?: string;
    width?: number;
    height?: number;

    /** optional thumbnail; if missing, src is used */
    thumb?: string;

    /** optional caption for lightbox */
    caption?: string;

    /** optional credit line */
    credit?: string;
};