"use strict";
function processMessages(messages) {
    let processedMessages = [];
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];
        let formattedMessage = message.trim().toLowerCase();
        if (formattedMessage.length > 0) {
            let newMessage = formattedMessage.split(" ").join("-");
            processedMessages.push(newMessage);
        }
    }
    return processedMessages;
}
