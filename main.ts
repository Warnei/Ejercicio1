var scanf = require("scanf");

// Clase base 
abstract class AireAcondicionado {
    abstract refrigeracion(): void;
    abstract controlDeHumedad(): void;
    abstract ventilacion(): void;
    abstract controlRemoto(): void;
    abstract estaEncendido(): boolean;
    abstract encender(): void;
    abstract apagar(): void;
}

interface TipoEncendidoBluetooth extends AireAcondicionado {
    activarBluetooth(): void;
}

interface TipoEncendidoInfrarojoWifi extends AireAcondicionado {
    activarinfrarojo(): void;
    activarwifi(): void;
}

class Samsung implements TipoEncendidoBluetooth {
    private encendido: boolean;

    public encender(): void {
        this.encendido = true;
    }

    public apagar(): void {
        this.encendido = false;
    }

    public estaEncendido(): boolean {
        return this.encendido;
    }

    activarBluetooth(): void {
        console.log("Bluetooth activado");
    }

    refrigeracion(): void {
        console.log("Refrigeración activada");
    }

    controlDeHumedad(): void {
        console.log("Control de humedad activado");
    }

    ventilacion(): void {
        console.log("Ventilación activada");
    }

    controlRemoto(): void {
        console.log("Control remoto activado");
    }
}

class Olimpo extends AireAcondicionado implements TipoEncendidoInfrarojoWifi {
    private encendido: boolean;

    public encender(): void {
        this.encendido = true;
    }

    public apagar(): void {
        this.encendido = false;
    }

    public estaEncendido(): boolean {
        return this.encendido;
    }

    activarinfrarojo(): void {
        console.log("Infrarrojo activado");
    }

    activarwifi(): void {
        console.log("Wifi activado");
    }

    refrigeracion(): void {
        console.log("Refrigeración activada");
    }

    controlDeHumedad(): void {
        console.log("Control de humedad activado");
    }

    ventilacion(): void {
        console.log("Ventilación activada");
    }

    controlRemoto(): void {
        console.log("Control remoto activado");
    }
}

class Mabe extends AireAcondicionado implements TipoEncendidoBluetooth, TipoEncendidoInfrarojoWifi {
    private encendido: boolean;

    public encender(): void {
        this.encendido = true;
    }

    public apagar(): void {
        this.encendido = false;
    }

    public estaEncendido(): boolean {
        return this.encendido;
    }

    activarinfrarojo(): void {
        console.log("Infrarrojo activado");
    }

    activarwifi(): void {
        console.log("Wifi activado");
    }

    activarBluetooth(): void {
        console.log("Bluetooth activado");
    }

    refrigeracion(): void {
        console.log("Refrigeración activada");
    }

    controlDeHumedad(): void {
        console.log("Control de humedad activado");
    }

    ventilacion(): void {
        console.log("Ventilación activada");
    }

    controlRemoto(): void {
        console.log("Control remoto activado");
    }
}

// Clase principal
class Main {

    public static main(): void {

        console.log("--Marca De Aire Acondicionado--");
        console.log("1. Samsung");
        console.log("2. Olimpo");
        console.log("3. Mabe");

        console.log("Selecciona una marca:");
        const selectedOption = scanf('%d');

        let aireAC: AireAcondicionado;

        switch (selectedOption) {
            case 1:
                aireAC = new Samsung();
                break;
            case 2:
                aireAC = new Olimpo();
                break;
            case 3:
                aireAC = new Mabe();
                break;
            default:
                console.log("Marca no válida");
                return;
        }

        console.log("1. Encender");
        console.log("2. Apagar");

        console.log("Selecciona una acción:");
        const selectedAction = scanf('%d');

        switch (selectedAction) {
            case 1:
                aireAC.encender();
                if (aireAC.estaEncendido()) {
                    console.log("Características Activadas");
                    aireAC.refrigeracion();
                    aireAC.controlDeHumedad();
                    aireAC.controlRemoto();
                }
                break;
            case 2:
                aireAC.apagar();
                console.log("Características desactivadas");
                break;
            default:
                console.log("Acción no válida");
                break;
        }
    }
}

// Llamar al método main
Main.main();
