*{
    margin: 0;
    padding: 0;
}

body{
    background-color: #000000;
    width: 100vw;
    height: 100vh;
}

main{
    background-color: #90b9c1;
    width: 100%;
    height: 57.5em;
    display: flex;
}

.seccion1{
    background-color: #edeadf;
    width: 70.5vw;
    height: 89vh;
    margin-top: 1.2vw;
    margin-left: 2.1vw;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
}

header{
    background-color: #b7e6fc;
    width: 100%;
    height: 5.5em;
    display: flex;
}

.img-header{
    background-color: #b7e6fc;
    width: 6.4em;
    height: 3em;
    margin: 1em;
    margin-top: 1.2em;
    margin-left: 1.4vw;
}

.parrafo-header{
    background-color: #b7e6fc;
    height: 3em;
    margin-top: 19px;
    line-height: 50px;
    font-size: 1em;
}

.muñeco-area{
    display: flex;
}

.img-nuevo{
    width: 15.5vw;
    height: 25vw;
    background-color: #edeadf;
    margin-top: 2vw;
    margin-left: 2vw;
    padding-top: 6vw;
}

textarea{
    width: 47vw;
    height: 58vh;
    margin-top: 1.2vw;
    margin-left: 1.4vw;
    border: none;
    border-radius: 25px;
    padding-top: 1.4vw;
    padding-left: 1.7vw;
    padding-right: 1.7vw;
    line-height: 1vw;
    font-size: 1.4vw;
    color: #914792;
    resize: none;
}

/* Estilo específico para el placeholder */
textarea::placeholder {
    font-size: 1.4vw; /* Tamaño de fuente para el placeholder */
    line-height: 1vw; /* Altura de línea para el placeholder */
    color: #999;
   /* Color del placeholder */
}


textarea:focus{
    outline: none; /* Elimina el borde al hacer clic */
}


.contenedor-leyenda{
    background-color: #edeadf;
    width: 47vw;
    height: 3vh;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    line-height: 35px;
    margin-left: 18vw;
    align-self: center;
    color: #447b8a;
    border: none;
}

.img-leyenda{
    width: 14px;
    height: 14px;
    margin-top: 0.6em;
    margin-right: 0.55em;
}
.contenedor-btn-seccion1{
    background-color: #edeadf;
    width: 50vw;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    margin-left: 17.7vw;
    margin-top: 1.2vw;
    padding-top: 0.5vw;
}

.btn-encriptar, .btn-desencriptar{
    width: 15vw;
    height: 7.1vh;
    font-size: 1.4vw;
    letter-spacing: 2.5px;
    border-radius: 15px;
    color: #c79e07;
    background-color: #2b3861;
    border: none;

}

/* ------------------------------------------------------------ */
.seccion2{
    background-color: #efe8e8c2;
    width: 24vw;
    height: 89vh;
    margin: 1.2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 18px;
    text-align: center;
}

.img-muñeco{
    width: 20vw;
    margin-bottom: 4vh;
}

.h3-seccion2{
    width: 15vw;
    text-align: center;
    margin-left: 4.3vw;
    margin-bottom: 7vh;
    font-size: 1.4vw;
}

.parrafo-seccion2{
    width: 15vw;
    height: 1.4vw;
    margin-left: 4.3vw;
    font-size: 1.2vw;
}

.btn-seccion2{
    width: 10vw;
    height: 5vh;
    border-radius: 25px;
    border: none;
    color: #355969;
    background-color: burlywood;
    font-size: 1.2vw;
}

/*-----------------------------------------------------------------*/
.contenedor-footer{
    background-color: #90b9c1;
    width: 100vw;
    height: 7.12vh;
    display: flex;
    justify-content: center;
}

.parrafo-footer{
    font-size: 16px;
    margin-top: 26px;
    background-color: #90b9c1;
    padding-left: 0px;
}

span {
   width: 3.8vw;
   height: 1vw;
   background-color: adf;
   align-self: center;
   font-size: 30px;
   margin-left: 4px;
   margin-right: 5px;
   margin-top: 2px;
}

.copy{
    background-color: #90b9c1;
    width: 38px;
    height: 40px;
    padding-top: 13px;
}

.h4-footer{
    background-color: #90b9c1;
    align-content: center;
    padding-right: 1.7vw;
}