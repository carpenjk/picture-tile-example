import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { PictureTiles } from '@carpenjk/picture-tiles';
import { Lightbox, useLightbox } from '@carpenjk/lightbox';
import images from './images/images';
import theme from './theme';
import OverlayButton from './styled/StyledOverlayButton';
import StyledPictureTileWrapper from './styled/StyledPictureTileWrapper';
import { getLightboxImages, getPictureTileImages } from './images/utility';
import { lightboxPreloadCount, showNavArrows } from './images/lightbox';

function App() {
  const { lightboxState, lightboxControl } = useLightbox({
    images: getLightboxImages(images),
    preloadCount: lightboxPreloadCount,
    openToIndex: 0, // default = 0
    openOnMount: false, // default = false
  });

  return (
    <ThemeProvider theme={theme}>
      <header className="App-header" />
      <main>
        <StyledPictureTileWrapper>
          <PictureTiles
          // all properties except overlayButton & onPhotoClick can take be given
          // values for each breakpoint
            images={getPictureTileImages(images)}
            columns={['1', '4']}
            minColWidth={['320px', '150px']}
            maxColWidth={['100%', '1fr']}
            rowHeight={['auto', '250px']} // use rowHeight or gridHeight
            gridWidth={['100%']}
            // gridHeight=['auto', '500px']
            maxGridWidth={['1300px']}
            imageFit={['contain', 'cover']}
            onPhotoClick={((i) => lightboxControl.open(i))}
            overlayButton={{
              OverlayButton: (
                <OverlayButton onClick={lightboxControl.open}>
                  More Photos
                </OverlayButton>
              ),
            }}
          />
          <p style={{ marginTop: '32px' }}>Try resizing the window to see responsive properties in effect</p>
        </StyledPictureTileWrapper>
        <Lightbox
          imgCount={images.length}
          showNavArrows={showNavArrows} // default = true
          lightboxControl={lightboxControl}
          lightboxState={lightboxState}
        />

      </main>
    </ThemeProvider>
  );
}

export default App;
