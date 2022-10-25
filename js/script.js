/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */
/* Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const {createApp} = Vue;

createApp ({
    data() {
        return {
            userName: "",
            greetingMessage: "",
            image: "https://picsum.photos/id/237/200/300",
        }
    },
    methods: {
        message: function () {
            this.greetingMessage = `Ciao ${this.userName}!`;
        }
    }
}).mount("#app");

