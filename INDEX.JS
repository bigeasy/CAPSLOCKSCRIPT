/* CAPSLOCKSCRIPT BOOTSTRAP, WE NEED A TINY BIT OF EVIL LOWERCASE AND CAMELCASE TO GET STARTED, BECAUSE OF INHERENT CASISM */
\u0065\u0076\u0061\u006C(\u0064\u0065\u0063\u006F\u0064\u0065URIC\u006F\u006D\u0070\u006F\u006E\u0065\u006E\u0074(

'%76%61%72 TOKENS = (\n' +
'      \'O%62%6A%65%63%74 S%74%72%69%6E%67 A%72%72%61%79 N%75%6D%62%65%72 R%65%67E%78%70 D%61%74%65 B%6F%6F%6C%65%61%6E B%75%66%66%65%72 \' +\n' +
'      \'%74%6FS%74%72%69%6E%67 %74%6FL%6F%77%65%72C%61%73%65 %74%6FU%70%70%65%72C%61%73%65 %69%6E%64%65%78O%66 %72%65%61%64F%69%6C%65S%79%6E%63 %66%6F%72E%61%63%68 %67%65%74O%77%6EP%72%6F%70%65%72%74%79N%61%6D%65%73 \' +\n' +
'      \'CAPSLOCKSCRIPT\'\n' +
'    ).%73%70%6C%69%74(\' \').%6D%61%70(%66%75%6E%63%74%69%6F%6E (%74) { %72%65%74%75%72%6E { %72%65%67: %6E%65%77 R%65%67E%78%70(%74, \'%69%67\'), %72%65%70: %74 }})\n' +

'  , CAPSLOCKSCRIPT = %66%75%6E%63%74%69%6F%6E (S, EXTRA_TOKENS, EXTRA_ARGS) {\n' +
'      S = S.%74%6FL%6F%77%65%72C%61%73%65()\n' +
'      TOKENS.%63%6F%6E%63%61%74(EXTRA_TOKENS || []).%66%6F%72E%61%63%68(%66%75%6E%63%74%69%6F%6E (T) { S = S.%72%65%70%6C%61%63%65(T.%72%65%67, T.%72%65%70) })\n' +
'      %72%65%74%75%72%6E %6E%65%77 F%75%6E%63%74%69%6F%6E([ \'CAPSLOCKSCRIPT\', \'%72%65%71%75%69%72%65\' ].%63%6F%6E%63%61%74(EXTRA_ARGS || []), S).%62%69%6E%64(%74%68%69%73, CAPSLOCKSCRIPT, %72%65%71%75%69%72%65)\n' +
'    }\n' +

'  , LOAD = CAPSLOCKSCRIPT(\n' +
'      "RETURN FUNCTION (F, EXTRA_TOKENS, EXTRA_ARGS) {" +\n' +
'      "  RETURN CAPSLOCKSCRIPT(REQUIRE(\'FS\').READFILESYNC(F).TOSTRING(), EXTRA_TOKENS, EXTRA_ARGS)" +\n' +
'      "}"\n' +
'    )()\n' +

'LOAD(%72%65%71%75%69%72%65(\'%70%61%74%68\').%6A%6F%69%6E(__%64%69%72%6E%61%6D%65, \'INDEX.CS\'), [], [ \'%74%6F%6B%65%6E%73\', \'%6C%6F%61%64\', \'%6D%6F%64%75%6C%65\' ])(TOKENS, LOAD, %6D%6F%64%75%6C%65)'

))