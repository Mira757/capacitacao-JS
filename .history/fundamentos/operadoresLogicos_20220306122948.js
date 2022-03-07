function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  //const comrparTv32 = !!(trabalho1 ^ trabalho2); //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manteSaudavel = !comprarSorvete;

  return {comprarSorvete,comprarTv50,comprarTv32,manteSaudavel}
}