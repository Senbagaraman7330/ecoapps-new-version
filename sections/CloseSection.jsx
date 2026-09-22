import React from 'react';
import DitherCanvas from '../common/DitherCanvas';
import StageDecorations from '../common/StageDecorations';
import CtaButton from '../common/CtaButton';

export default function CloseSection() {
  return (
    <section className="close" aria-label="Start building free">
      <div className="stage-frame">
        <div className="dither-field stage-mat" aria-hidden="true">
          <DitherCanvas fieldIndex={4} />
          <div className="stage-content">
            <div className="close-plate">
              <h2 className="close-title">Hand over a link this time.</h2>
              <CtaButton
                text="Start building free"
                href="https://vessa.design/signup?next=create"
                variant="inverted"
              />
            </div>
          </div>
        </div>

        <StageDecorations />
      </div>
    </section>
  );
}
