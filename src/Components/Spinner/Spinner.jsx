import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = ({
    componentFrom,
    variant
}) => {
    return (
        <Spinner animation="border" role="status" variant={variant} >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default SpinnerComponent