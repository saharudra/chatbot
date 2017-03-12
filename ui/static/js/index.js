function init(){
      var config = {
            apiKey: "AIzaSyDObJ_Z67rfwIvLccUmcx7_OYFctA0ZYiM",
            authDomain: "dotslash-41901.firebaseapp.com",
            databaseURL: "https://dotslash-41901.firebaseio.com",
            storageBucket: "dotslash-41901.appspot.com",
            messagingSenderId: "519125585412"
          };
          firebase.initializeApp(config);

          var defaultDatabase = firebase.database();

   FriendlyChat(defaultDatabase);

}

function FriendlyChat(database) {
      // Reference to the /messages/ database path.
      messagesRef = database.ref('messages');
      // Make sure we remove all previous listeners.
      messagesRef.off();

      // Loads the last 12 messages and listen for new ones.
      var setMessage = function(data) {
        console.log("H: ", data);
        var val = data.val();
        console.log("Here: ", val);
      };
      messagesRef.limitToLast(12).on('child_added', setMessage);
      messagesRef.limitToLast(12).on('child_changed', setMessage);
};