function extract() {
  // console.log(document.getElementById("fname").value);

  let totalName = document.getElementById("totalName").value;
  // let totalName = "tarjeta personal alexander ditzend";

  const exclude_regex = /[^a-z]/g

  totalName =
    totalName
      .toLowerCase()
      .replace(" ", "q")
      .replace("0", "z")
      .replace("1", "x")
      .replace("2", "y")
      .replace("3", "w")
      .replace("4", "q")
      .replace("5", "t")
      .replace("6", "j")
      .replace("7", "k")
      .replace("8", "v")
      .replace("9", "h")
      .replace(exclude_regex, "w")

  totalName = totalName.length < 4 ? `${totalName}${totalName}` : totalName


  console.log(`\n************\n${totalName}\n**************\n`)



  let group_a, group_e, group_i, group_o, group_u = false

  let textNormalized = []
  for (let i = 0; i < totalName.length; i++) {
    let n = totalName.charCodeAt(i) - 97
    n = n / 25
    textNormalized.push(n)
  }
  console.log('textNormalized')
  console.log(textNormalized)



  let alpha = totalName.length;
  let beta = 1 - (totalName.charCodeAt(0) - 64) / 65;
  let gamma = totalName.length % 2 || 0;
  let delta = (totalName.charCodeAt(1) - 64) / 65 || 0;
  let epsilon = (totalName.charCodeAt(2) - 64) / 65 || 0;
  let zeta = (totalName.charCodeAt(3) - 64) / 65 || 0;
  let eta = (totalName.charCodeAt(4) - 64) / 65 || 0;
  let theta = (totalName.charCodeAt(5) - 64) / 65 || 0;
  let iota = (totalName.charCodeAt(6) - 64) / 65 || 0;
  let kappa = (totalName.charCodeAt(7) - 64) / 65 || 0;
  let lambda = (totalName.charCodeAt(8) - 64) / 65 || 0;
  let mu = (totalName.charCodeAt(9) - 64) / 65 || 0;
  let nu = canDivide(totalName.charCodeAt(1), 9);
  let xi = canDivide(totalName.charCodeAt(1), 7);
  let omicron = canDivide(totalName.charCodeAt(1), 5);
  let pi = canDivide(totalName.charCodeAt(1), 3);
  let rho = canDivide(totalName.charCodeAt(1), 2);
  let sigma = canDivide(totalName.charCodeAt(0), 13);
  let tau = canDivide(totalName.charCodeAt(0), 11);
  let upsilon = canDivide(totalName.charCodeAt(0), 9);
  let phi = canDivide(totalName.charCodeAt(0), 7);
  let chi = canDivide(totalName.charCodeAt(0), 5);
  // selector en centeredShape
  let psi = canDivide(totalName.charCodeAt(0), 3);
  // selector en centeredShape

  let omega = canDivide(totalName.charCodeAt(0), 2);
  // selector en centeredShape

  let greeks = {
    alpha,
    beta,
    gamma,
    delta,
    epsilon,
    zeta,
    eta,
    theta,
    iota,
    kappa,
    lambda,
    mu,
    nu,
    xi,
    omicron,
    pi,
    rho,
    sigma,
    tau,
    upsilon,
    phi,
    chi,
    psi,
    omega,
  };

  for (i = 0; i < totalName.length; i++) {
    console.log(i + ")  " + totalName[i] + " #" + totalName.charCodeAt(i));
  }
  NAME_TRANSLATED = true;
  state = {
    sides: 6,
    stepsOut: 4,
    thinStroke: 3,
    thickStroke: 5,
    ...greeks,
    textNormalized
  };
  console.log('state : ', state)
  draw();
}
