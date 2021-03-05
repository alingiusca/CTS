package ro.ase.acs.writers;
//S
public class ConsoleWriter implements Writeable{
    public void write(String message){
        System.out.println(message);
    }
}
