export const saveMessages = (chatId, messages) => {
  localStorage.setItem(chatId, JSON.stringify(messages));
};

export const getMessages = (chatId) => {
  return JSON.parse(localStorage.getItem(chatId)) || [];
};
