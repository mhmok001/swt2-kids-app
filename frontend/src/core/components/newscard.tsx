
import React from 'react';
import { Card } from 'react-bootstrap';

import PropTypes from 'prop-types';

type NewsCardProps = {
  title: string;
  date: string;
  img?: string;
  text: string;
  link: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, date, img, text, link }) => (
  <Card className="mb-4 news-card">
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      <Card.Title>{title}</Card.Title>
      {img && <Card.Img variant="top" src={img} style={{ objectFit: 'cover', height: '160px' }} />}
      <Card.Text>{text}</Card.Text>
      <Card.Link href={link}>Mehr zur Meldung</Card.Link>
    </Card.Body>
  </Card>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsCard;