// Generated from c:/Users/Usuario/Documents/Jesus/utn ( Jesús)/año 2025/Sintaxis y semantica de los lenguajes/Analizador/analizadorTema39568_2/Proyecto Node JS/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,15,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,2,1,2,1,2,1,2,5,2,
26,8,2,10,2,12,2,29,9,2,1,2,1,2,1,2,1,2,1,2,3,2,36,8,2,1,3,4,3,39,8,3,11,
3,12,3,40,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,1,1,0,6,7,52,0,15,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,
38,1,0,0,0,8,44,1,0,0,0,10,50,1,0,0,0,12,53,1,0,0,0,14,16,3,2,1,0,15,14,
1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,20,3,4,
2,0,20,3,1,0,0,0,21,22,5,3,0,0,22,23,3,12,6,0,23,27,5,4,0,0,24,26,3,6,3,
0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,35,1,0,0,0,
29,27,1,0,0,0,30,31,5,5,0,0,31,32,5,13,0,0,32,33,3,6,3,0,33,34,5,14,0,0,
34,36,1,0,0,0,35,30,1,0,0,0,35,36,1,0,0,0,36,5,1,0,0,0,37,39,3,8,4,0,38,
37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,
3,10,5,0,43,7,1,0,0,0,44,45,5,8,0,0,45,46,5,10,0,0,46,47,5,1,0,0,47,48,5,
11,0,0,48,49,5,12,0,0,49,9,1,0,0,0,50,51,5,9,0,0,51,52,5,12,0,0,52,11,1,
0,0,0,53,54,7,0,0,0,54,13,1,0,0,0,4,17,27,35,40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, null, null, "'si'", "'entonces'", "'sino'", 
                            "'verdadero'", "'falso'", "'imprimir'", "'salir'", 
                            "'('", "')'", "';'", "'{'", "'}'" ];
    static symbolicNames = [ null, "CADENA", "WS", "SI", "ENTONCES", "SINO", 
                             "VERDADERO", "FALSO", "IMPRIMIR", "SALIR", 
                             "LPAREN", "RPAREN", "SEMI", "LBRACE", "RBRACE", 
                             "ID" ];
    static ruleNames = [ "programa", "instruccion", "decision", "sentencia", 
                         "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(analizadorParser.SI);
	        this.state = 22;
	        this.condicion();
	        this.state = 23;
	        this.match(analizadorParser.ENTONCES);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 24;
	            this.sentencia();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 30;
	            this.match(analizadorParser.SINO);
	            this.state = 31;
	            this.match(analizadorParser.LBRACE);
	            this.state = 32;
	            this.sentencia();
	            this.state = 33;
	            this.match(analizadorParser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.salida();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	        this.state = 42;
	        this.terminar();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(analizadorParser.IMPRIMIR);
	        this.state = 45;
	        this.match(analizadorParser.LPAREN);
	        this.state = 46;
	        this.match(analizadorParser.CADENA);
	        this.state = 47;
	        this.match(analizadorParser.RPAREN);
	        this.state = 48;
	        this.match(analizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(analizadorParser.SALIR);
	        this.state = 51;
	        this.match(analizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.CADENA = 1;
analizadorParser.WS = 2;
analizadorParser.SI = 3;
analizadorParser.ENTONCES = 4;
analizadorParser.SINO = 5;
analizadorParser.VERDADERO = 6;
analizadorParser.FALSO = 7;
analizadorParser.IMPRIMIR = 8;
analizadorParser.SALIR = 9;
analizadorParser.LPAREN = 10;
analizadorParser.RPAREN = 11;
analizadorParser.SEMI = 12;
analizadorParser.LBRACE = 13;
analizadorParser.RBRACE = 14;
analizadorParser.ID = 15;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_instruccion = 1;
analizadorParser.RULE_decision = 2;
analizadorParser.RULE_sentencia = 3;
analizadorParser.RULE_salida = 4;
analizadorParser.RULE_terminar = 5;
analizadorParser.RULE_condicion = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_decision;
    }

	SI() {
	    return this.getToken(analizadorParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(analizadorParser.ENTONCES, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	SINO() {
	    return this.getToken(analizadorParser.SINO, 0);
	};

	LBRACE() {
	    return this.getToken(analizadorParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(analizadorParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_sentencia;
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(analizadorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(analizadorParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(analizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(analizadorParser.SALIR, 0);
	};

	SEMI() {
	    return this.getToken(analizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(analizadorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(analizadorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.InstruccionContext = InstruccionContext; 
analizadorParser.DecisionContext = DecisionContext; 
analizadorParser.SentenciaContext = SentenciaContext; 
analizadorParser.SalidaContext = SalidaContext; 
analizadorParser.TerminarContext = TerminarContext; 
analizadorParser.CondicionContext = CondicionContext; 
