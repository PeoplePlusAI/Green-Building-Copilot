import React from 'react';
import Card from 'react-bootstrap/Card';

const HeaderCard = ({
    componentFrom,
    cardClassName,
    cardTitleClassName,
    cardBodyClassName,
    cardContent
}) => {

    return (
        <Card className={cardClassName}>
            <Card.Body className={cardBodyClassName}>
                <Card.Title className={cardTitleClassName}>
                    {cardContent}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default HeaderCard