package ro.ase.acs.services;

import ro.ase.acs.main.IoC;
import ro.ase.acs.readers.ConsoleReader;
import ro.ase.acs.writers.ConsoleWriter;
import ro.ase.acs.writers.Writeable;
import ro.ase.acs.readers.Readable;

import java.io.Console;

//D
public class Orchestrator {
//    private ConsoleReader reader = new ConsoleReader();
//    private ConsoleWriter writer = new ConsoleWriter();

    private Readable reader;
    private Writeable writer;

//    public Orchestrator(Readable reader, Writeable writer) {
//        this.reader = reader;
//        this.writer = writer;
//    }

    private IoC IoC = new IoC();

    public Orchestrator(){
        IoC.register(Readable.class, ConsoleReader.class);
        IoC.register(Writeable.class, ConsoleWriter.class);
        this.reader = IoC.resolve(Readable.class);
        this.writer = IoC.resolve(Writeable.class);
    }

    public void execute() {

        writer.write(reader.read());
    }
}
