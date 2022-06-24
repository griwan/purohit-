import { overlayAtom } from '../store.js';
import { useAtomValue } from 'jotai';
import VPopup from './VPopup';
import Popup from './Popup';

const OverLay = (props) => {
  const {
    overlayEnable,
    overlayLink,
    overlayContent,
    overlayImage,
    overlayType,
  } = useAtomValue(overlayAtom);

  if (!overlayEnable) return null;

  if (overlayType === 'h')
    return (
      <Popup image={overlayImage} content={overlayContent} link={overlayLink} />
    );

  return (
    <VPopup image={overlayImage} content={overlayContent} link={overlayLink} />
  );
};

export default OverLay;
