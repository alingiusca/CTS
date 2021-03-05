package ro.ase.acs.main;

import ro.ase.acs.services.Orchestrator;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

public class IoC {
    private Map<Class<?>, Class<?>> map = new HashMap<>();

    public void register(Class<?> contract, Class<?> implementation) {
        map.put(contract, implementation);
    }

    public <T> T resolve(Class<?> contract){
        try {
            return (T) map.get(contract).getDeclaredConstructor().newInstance();
        } catch (NoSuchMethodException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
        return null;
    }
}
