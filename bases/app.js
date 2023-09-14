const app = Vue.createApp({
    // //aca adentro configuramos una aplicacion de Vue
    // //propia template, es una planilla que contiene el contenido HTML del componente.
    // template: ` 
    //     <h1>Hola mundo</h1>
    //     <p> Desde app.js <p/>
    // `  

    data() { //data que nuestro componenete va a manejas, es una funcion
        return{
            quote: 'I´m Batman', 
            author: 'Bruce Wayne',
        }// este objeto literal es reactivo, y sus propiedad tambien lo son. 
        //Lo que quiere decir esto es que si por alguna razon se cambiara el valor de alguna propiedad, 
        //automaticamente vue va a renderizar la prop que se modifico 

    },
    methods: { //aca le mando lo que quiero hacer con el button que cree en el index, dentro del div id=#myApp
        changeQuote(  ) {
            console.log('Hola Mundo')
            this.author = 'Martina Acosta' //this hace referencia a todo el objeto, a nuestro componente, y va a hacer referencia a author.
            this.capitalize() //aca llamo la funcion capitalize para que se ejecute lo que le mando en el cuerpo
        },
        capitalize() {
            this.quote = this.quote.toUpperCase() //estoy haciendo referencia a quote que tiene el valor I´m Batman, lo que hace esto es que se pongo en mayuscula quote
        }
    }

})

app.mount('#myApp') //aca le indico al componente que se monte en myApp que se encuentra en el componente index donde hay un etiqueta div que tiene un id='myApp'