import { lightboxSrcSetParams, lightboxSrcParams } from './lightbox';
import { singleImageParams, smallParams, largeParams } from './pictureTiles';

export function createUrlWithParams(url, params) {
  if (!params) return url;
  const keys = Object.keys(params);
  if (keys.length < 1) return url;
  return keys.reduce(
    (pUrl, p, i) => (i < 1 ? `${pUrl}${p}=${params[p]}` : `${pUrl}&${p}=${params[p]}`),
    `${url}?`,
  );
}

export function getImagesWithProps(images) {
  return (images.map((img, i) => {
    const { url, ...remProps } = img;
    if (i === 0) {
      const { rowSpan, colSpan, ...srcParams } = largeParams;
      return {
        src: createUrlWithParams(url, srcParams),
        width: srcParams.w,
        height: srcParams.h,
        rowSpan,
        colSpan,
        ...remProps,
      };
    }
    const { rowSpan, colSpan, ...srcParams } = smallParams;
    return {
      src: createUrlWithParams(url, srcParams),
      width: srcParams.w,
      height: srcParams.h,
      rowSpan,
      colSpan,
      ...remProps,
    };
  }));
}

export function getPictureTileImages(images) {
  return (
    [
      [
        {
          src: createUrlWithParams(images[0].url, singleImageParams),
          srcSet: `${createUrlWithParams(images[0].url, { ...singleImageParams, w: 480, h: 320 })} 480w, ${createUrlWithParams(images[0].url, { ...singleImageParams, w: 880, h: 587 })} 880w`,
          alt: images[0].alt,
          width: singleImageParams.w,
          height: singleImageParams.h,
          rowSpan: 1,
          colSpan: 1,
        },
      ],
      getImagesWithProps(images),
    ]);
}

export function getLightboxImages(images) {
  return (
    images.map((image) => {
      const getSrcSet = () => lightboxSrcSetParams.reduce((str, params) => (
        `${str}${str ? ',' : ''} ${createUrlWithParams(image.url, params)} ${params.w}w`
      ), '');
      return ({
        src: createUrlWithParams(image.url, lightboxSrcParams),
        srcSet: getSrcSet(),
        alt: image.alt,
      });
    })
  );
}
