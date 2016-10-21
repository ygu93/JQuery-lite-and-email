const MessageStore = require("./message-store.js");
class Inbox {
  constructor(messageStore) {
    this.messages = messageStore;
  }

  render() {
    let doc = document.createElement("UL");
    doc.className = "messages";
    let emails = this.messages.getInboxMessages();
    for (var i = 0; i < emails.length; i++) {
      let mailNode = this.renderMessage(emails[i]);
      doc.appendChild(mailNode);
    }
    return doc;
  }

  renderMessage(message){
    let li = document.createElement("LI");
    li.className = "message";
    // li.innerHTML = 
  }
}

module.exports = Inbox;
