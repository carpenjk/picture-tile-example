import { useRef } from 'react';
import PopupModal from '@carpenjk/popup-modal';
const TestComponent = () => {
  const scrollRef = useRef();
  return ( <div ref={scrollRef}><PopupModal isOpen={true} scrollNode={scrollRef} lockScroll /></div> );
}
 
export default TestComponent;