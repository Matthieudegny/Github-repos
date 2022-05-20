import propTypes from 'prop-types';

// hydratation de composant classique ici avec la props result qui représente le nbre de recheches
function Message({
  resultMessage,
}) {
  return (
    <div id="message">{resultMessage}</div>
  );
}

Message.prototype = {
  result: propTypes.number.isRequired,
};

export default Message;
