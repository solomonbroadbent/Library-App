import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submitMessage() {
      const emailAddress = this.get('emailAddress');
      const message = `Thanks for that. We'll get back to at ${emailAddress}`;
      this.set('submitAlertMessage', message);
      alert(message);
    }
  }
});
