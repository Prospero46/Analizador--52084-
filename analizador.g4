grammar analizador;

// Parser rules

programa 
    : instruccion+ 
    ;

instruccion
    : decision 
    ;

decision
    : SI condicion ENTONCES sentencia* (SINO LBRACE sentencia RBRACE)? 
    ; 

sentencia 
    : salida+ terminar 
    ;

salida
    : IMPRIMIR LPAREN CADENA RPAREN SEMI ;

terminar
    : SALIR SEMI ;

condicion
    : VERDADERO
    | FALSO ;

// Lexer rules

CADENA
    : '"' (~["\r\n])* '"' ;

fragment CARACTER
    : LETRA
    | DIGITO
    | SIMBOLO ;

fragment LETRA
    : [a-zA-Z_] ;

fragment DIGITO
    : [0-9] ;

fragment SIMBOLO
    : ':' | '!' | '?' | '|' | ';' ;

// Ignorar espacios en blanco
WS : [ \t\r\n]+ -> skip ;

//tokens 
SI         : 'si' ;
ENTONCES   : 'entonces' ;
SINO       : 'sino' ;
VERDADERO  : 'verdadero' ;
FALSO      : 'falso' ;
IMPRIMIR   : 'imprimir' ;
SALIR      : 'salir' ;
LPAREN     : '(' ;
RPAREN     : ')' ;
SEMI       : ';' ;
LBRACE: '{' ;
RBRACE: '}';

// ID al final para no interferir
ID : [a-zA-Z]+ ;
