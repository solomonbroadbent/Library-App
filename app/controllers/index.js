//import {computed, observer} from '@ember/object'
import Controller from '@ember/controller';
import {match, not} from '@ember/object/computed';

export default Controller.extend({
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  headerMessage: 'Header Message',
  actions: {
    saveInvitation() {
      const verifiedEmailAddress = this.get('emailAddress');
      this.set('responseMessage', `An invitation has been sent to: ${verifiedEmailAddress}`);
      const invitation = this.store.createRecord('invitation', {
        emailAddress: verifiedEmailAddress
      });
      invitation.save();
    }
    ,
    setEmailAddressToBlank() {
      this.set('emailAddress', '');
    }
  }

})
;
