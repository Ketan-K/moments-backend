const sendReply = (status, message, data) => (data ? { status, message, data } : { status, message });

const reportError = (message, error) => console.error(`${message}\n${error.stack}`);

module.exports = {
  sendReply,
  reportError
}