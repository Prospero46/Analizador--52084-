import analizadorVisitor from './generated/analizadorVisitor.js';
import analizadorParser from './generated/analizadorParser.js';

class CustomanalizadorVisitor extends analizadorVisitor {
    visitPrograma(ctx) {
        return ctx.instruccion().map(instr => this.visit(instr));
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.decision());
    }

    visitDecision(ctx) {
        const condicion = ctx.condicion().getText() === 'verdadero';
        const sentencias = ctx.sentencia();

        if (condicion) {
            // Ejecutar todas menos la del "sino" si existe
            const cuerpo = sentencias.length > 1 ? sentencias.slice(0, -1) : sentencias;
            cuerpo.forEach(sent => this.visit(sent));
        } else if (sentencias.length > 1) {
            // Ejecutar solo la sentencia del "sino"
            this.visit(sentencias[sentencias.length - 1]);
        }
    }

    visitSentencia(ctx) {
        ctx.salida().forEach(s => this.visit(s));
        this.visit(ctx.terminar());
    }

    visitSalida(ctx) {
        const texto = JSON.parse(ctx.CADENA().getText()); // Alternativa segura
        console.log(texto);
    }

    visitTerminar(ctx) {
        console.log("Fin del programa.");
    }
}

export default CustomanalizadorVisitor;