var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scanf = require("scanf");
// Clase base 
var AireAcondicionado = /** @class */ (function () {
    function AireAcondicionado() {
    }
    return AireAcondicionado;
}());
var Samsung = /** @class */ (function () {
    function Samsung() {
    }
    Samsung.prototype.encender = function () {
        this.encendido = true;
    };
    Samsung.prototype.apagar = function () {
        this.encendido = false;
    };
    Samsung.prototype.estaEncendido = function () {
        return this.encendido;
    };
    Samsung.prototype.activarBluetooth = function () {
        console.log("Bluetooth activado");
    };
    Samsung.prototype.refrigeracion = function () {
        console.log("Refrigeración activada");
    };
    Samsung.prototype.controlDeHumedad = function () {
        console.log("Control de humedad activado");
    };
    Samsung.prototype.ventilacion = function () {
        console.log("Ventilación activada");
    };
    Samsung.prototype.controlRemoto = function () {
        console.log("Control remoto activado");
    };
    return Samsung;
}());
var Olimpo = /** @class */ (function (_super) {
    __extends(Olimpo, _super);
    function Olimpo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Olimpo.prototype.encender = function () {
        this.encendido = true;
    };
    Olimpo.prototype.apagar = function () {
        this.encendido = false;
    };
    Olimpo.prototype.estaEncendido = function () {
        return this.encendido;
    };
    Olimpo.prototype.activarinfrarojo = function () {
        console.log("Infrarrojo activado");
    };
    Olimpo.prototype.activarwifi = function () {
        console.log("Wifi activado");
    };
    Olimpo.prototype.refrigeracion = function () {
        console.log("Refrigeración activada");
    };
    Olimpo.prototype.controlDeHumedad = function () {
        console.log("Control de humedad activado");
    };
    Olimpo.prototype.ventilacion = function () {
        console.log("Ventilación activada");
    };
    Olimpo.prototype.controlRemoto = function () {
        console.log("Control remoto activado");
    };
    return Olimpo;
}(AireAcondicionado));
var Mabe = /** @class */ (function (_super) {
    __extends(Mabe, _super);
    function Mabe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mabe.prototype.encender = function () {
        this.encendido = true;
    };
    Mabe.prototype.apagar = function () {
        this.encendido = false;
    };
    Mabe.prototype.estaEncendido = function () {
        return this.encendido;
    };
    Mabe.prototype.activarinfrarojo = function () {
        console.log("Infrarrojo activado");
    };
    Mabe.prototype.activarwifi = function () {
        console.log("Wifi activado");
    };
    Mabe.prototype.activarBluetooth = function () {
        console.log("Bluetooth activado");
    };
    Mabe.prototype.refrigeracion = function () {
        console.log("Refrigeración activada");
    };
    Mabe.prototype.controlDeHumedad = function () {
        console.log("Control de humedad activado");
    };
    Mabe.prototype.ventilacion = function () {
        console.log("Ventilación activada");
    };
    Mabe.prototype.controlRemoto = function () {
        console.log("Control remoto activado");
    };
    return Mabe;
}(AireAcondicionado));
// Clase principal
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        console.log("--Marca De Aire Acondicionado--");
        console.log("1. Samsung");
        console.log("2. Olimpo");
        console.log("3. Mabe");
        console.log("Selecciona una marca:");
        var selectedOption = scanf('%d');
        var aireAC;
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
        var selectedAction = scanf('%d');
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
    };
    return Main;
}());
// Llamar al método main
Main.main();
