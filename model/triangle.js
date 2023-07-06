class Triangle{

constructor(xA, yA, xB, yB, xC, yC){

    this.segmentAB = new Segment(xA, yA, xB, yB);
    this.segmentBC = new Segment(xB, yB, xC, yC); 
    this.segmentCA = new Segment(xC, yC, xA, yA)


}

//questo triangolo è fatto con i pezzi degli altri 2, MA NON EREDITA NULLA DAGLI ALTRI. Sta usando cose che ha già costruito
//questa si chiama composizione, non è ereditarietà

get perimeter(){
    return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
}

get area(){                 //con la formula di Erone


}


isRectangle(){                //se un lato al quadrato è uguale alla somma dei quadrati degli altri due


}


}


//fare un programma che, dati x studenti si mettono in un array e vengono shufflati in modo casuale e printati a coppie
//fare anche la classe degli studenti con il suo toString
//una classe chiamata course che avrà un array di studenti
// 1) creare classe student con toString
// 2) creare classe classroom che contiene un array di students
// 3) aggiungere a classroom tre metodi;
//        -addStudent()
//        -randomizeStudent()
//        -printSquads()