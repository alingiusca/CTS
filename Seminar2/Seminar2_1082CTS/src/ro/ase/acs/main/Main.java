package ro.ase.acs.main;

import ro.ase.acs.readers.ConsoleReader;
import ro.ase.acs.services.Orchestrator;
import ro.ase.acs.writers.ConsoleWriter;

public class Main {
    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in); //S
//        System.out.print("Message: ");
//        String message = scanner.nextLine();
//        System.out.println(message);
//        scanner.close();

//        ConsoleReader reader = new ConsoleReader();
//        //ConsoleWriter writer = new ConsoleWriter();
//        //ConsoleWriter writer = new FileWriter(); //O
//        Writeable writer = new FileWriter();
//        writer.write(reader.read());
//
//        try {
//            reader.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

        //Orchestrator orchestrator = new Orchestrator(new ConsoleReader(), new ConsoleWriter()); //D
        Orchestrator orchestrator = new Orchestrator();
        orchestrator.execute();
    }
}
