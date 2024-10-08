import React from 'react';
import Card from '../../components/card/Card.jsx';
import CardHeading from '../../components/card/CardHeading.jsx';
import Title from '../../components/card/Title.jsx';

export default function LinkShortener(){
  return (
    <Card>
      <CardHeading>
        <Title text="Link Shortener" />
      </CardHeading>
    </Card>
  )
}