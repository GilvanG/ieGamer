/* eslint-disable react/prop-types */
import React from 'react';
import { BannerMainContainer, ContentAreaContainer } from './styles';

export default function BannerMain({
  title,
  description,
  url,
}) {
  return (
    <BannerMainContainer backgroundImage={url}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {title}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>
        <ContentAreaContainer.Item />

      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
