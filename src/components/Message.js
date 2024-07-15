const Message = ({ type, message }) => {
    let displayMessage;

    switch (type) {
        case 'loading':
            displayMessage = 'Fetching data from backend...';
            break;
        case 'error':
            displayMessage = `Error: ${message}`;
            break;
        case 'no-data':
            displayMessage = 'No data found.';
            break;
        default:
            displayMessage = '';
    }

    return <p className="displayMessage">{displayMessage}</p>;
}

export default Message;
