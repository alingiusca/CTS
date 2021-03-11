package seminar.seminar2.g1050;

import java.util.Arrays;

public class MainSeminar2 {
    public static void main(String[] args) {
        Carte carte = new Carte("Istoria Romana", "III123456", "Enciclopedica", 2000, 150, 1950);
        carte.addDomeniu(Domeniu.ISTORIE);
        carte.addAutor("Theodor Mommsen");
        carte.addAutor("Edward Gibbon");
        System.out.println(carte);

        Carte carte1 = carte;
        System.out.println(carte == carte1); //comparare de referinte
        System.out.println(carte.equals(carte1)); //pt egalitate intre doua obiecte (referinte egale => equals intoarce egalitate). daca nu facem suprascriere va compara referintele deci nu e bine.

        Carte carte2 = new Carte();
        carte2.setCota("III123456"); //I345678 -> false
        carte2.setTitlu("Data Mining");
        carte2.addDomeniu(Domeniu.IT);
        carte2.addDomeniu(Domeniu.MATEMATICA);
        System.out.println(carte.equals(carte2));

        System.out.println("Vector sortat dupa an aparitie:");

        Carte[] carti = new Carte[2];
        carti[0] = carte;
        carte2.setAnAparitie(1999);
        carti[1] = carte2;
        Arrays.sort(carti); // prin sort apelez metoda compareTo
        System.out.println(Arrays.toString(carti));
    }
}
