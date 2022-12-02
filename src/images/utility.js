import { lightboxSrcSetParams, lightboxSrcParams } from './lightbox';
import { singleImageParams, smallParams } from './pictureTiles';

export function createUrlWithParams(url, params) {
  if (!params) return url;
  const keys = Object.keys(params);
  if (keys.length < 1) return url;
  return keys.reduce(
    (pUrl, p, i) => (i < 1 ? `${pUrl}${p}=${params[p]}` : `${pUrl}&${p}=${params[p]}`),
    `${url}?`,
  );
}

export function getPictureTileImages(images) {
  function getFirstImageProps(url, img, remProps) {
    return {
      src: createUrlWithParams(url, singleImageParams),
      srcSet: `${createUrlWithParams(img.url, { ...singleImageParams, w: 480, h: 320 })} 480w, ${createUrlWithParams(img.url, { ...singleImageParams, w: 880, h: 587 })} 880w`,
      width: singleImageParams.w,
      height: singleImageParams.h,
      rowSpan: 2,
      colSpan: 2,
      ...remProps,
    };
  }

  function getRemImageProps(url, srcParams, img, rowSpan, colSpan, remProps) {
    return {
      src: createUrlWithParams(url, srcParams),
      width: srcParams.w,
      height: srcParams.h,
      rowSpan,
      colSpan,
      hide: [true, false],
      ...remProps,
    };
  }

  return (images.map((img, i) => {
    const { url, ...remProps } = img;
    const { rowSpan, colSpan, ...srcParams } = smallParams;
    if (i === 0) {
      return getFirstImageProps(url, img, remProps);
    }
    return getRemImageProps(url, srcParams, img, rowSpan, colSpan, remProps);
  }));
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
