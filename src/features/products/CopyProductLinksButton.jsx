import React from 'react';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../components/button/PrimaryButton';

import { selectProductLinks } from './stores/productSlice';
import copyToClipboard from '../../utils/copyToClipboard';

export default function CopyProductLinksButton({ total }){
  const links = useSelector(selectProductLinks);

  function copyAllProductLinks(){
    var concatLinks = links.join('\n\n');
    copyToClipboard(concatLinks);
    console.log('copied all links: ', concatLinks);
  }

  return (
    <>
      {total === 0
        ? <></>
        : <PrimaryButton
            handleOnClick={() => copyAllProductLinks()}
          >
            Copy {total} {total > 1 ? 'Links' : 'Link'}
          </PrimaryButton>
      }
    </>
  )
}
