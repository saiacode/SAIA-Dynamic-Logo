function extract() {
    
    // event.preventDefault();
  console.log(document.getElementById("fname").value);

    // let firstName = "sofiz maggiani";
    let firstName =  document.getElementById("fname").value;
    // let test_string = "alexander ditzend"
    // test_string = "maximiliano goyheneche"
    // test_string = "damian aguilera"
    // test_string = "patricio zubiri"
  const filterRegEx = /[\s,\.,\-,_,@]/g

    let totalName = firstName.replace(filterRegEx, "").toLowerCase();


  let alpha = totalName.length;
  let beta = 1 - (totalName.charCodeAt(0) - 97) / 25;
  let gamma = totalName.length % 2 || 0;
    let delta = (totalName.charCodeAt(1) - 97) / 25 || 0;
    let epsilon = (totalName.charCodeAt(2) - 97) / 25 || 0;
  let zeta = canDivide(totalName.charCodeAt(2), 2);
    let eta = (totalName.charCodeAt(3) - 97) / 25 || 0;
  let theta = canDivide(totalName.charCodeAt(3), 2);
    let iota = (totalName.charCodeAt(4) - 96) / 25 || 0;
  let kappa = canDivide(totalName.charCodeAt(4), 2);
    let lambda = (totalName.charCodeAt(5) - 96) / 25 || 0;
  let mu = canDivide(totalName.charCodeAt(5), 2);
 
 
  let nu = (totalName.charCodeAt(6) - 96) / 25 || 0;
  let xi = canDivide(totalName.charCodeAt(6), 7);
  let omicron = canDivide(totalName.charCodeAt(1), 5);
  let pi = canDivide(totalName.charCodeAt(1), 3);
  let rho = canDivide(totalName.charCodeAt(1), 2);
  let sigma = canDivide(totalName.charCodeAt(0), 13);
  let tau = canDivide(totalName.charCodeAt(0), 11);
  let upsilon = canDivide(totalName.charCodeAt(0), 9);
  let phi = canDivide(totalName.charCodeAt(0), 7);
  let chi = canDivide(totalName.charCodeAt(0), 5);
  let psi = canDivide(totalName.charCodeAt(0), 3);
  let omega = canDivide(totalName.charCodeAt(0), 2);

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
      
    sides: alpha,
    stepsOut: 4,
    thinStroke: 1,
    thickStroke: 3,
    ...greeks,
  };
    console.log('state : ', state)
    draw()
        
        
    
}


function downloadSvg()
{
    let svgElement = document.getElementsByTagName('svg')[0];
    let svg = svgElement.outerHTML;
    let file = new Blob([svg], { type: 'plain/text' });
    let a = document.createElement("a"), url = URL.createObjectURL(file);

    a.href = url;
    a.download = 'exported.svg';    
    document.body.appendChild(a);
    a.click();

    setTimeout(function() 
    {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
}
