import createMessageItem from './create-message-item';

export default function addMessageItem(list, message) {
  const listItem = createMessageItem(message);

  list.appendChild(listItem);
}
