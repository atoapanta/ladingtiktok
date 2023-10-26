export const validateCI = (ci) => {
  var isNumeric = true;
  var total = 0,
    individual;
  ci = ci.toString().replace(/-/g, "");
  for (var i = 0; i < ci.length; i++) {
    individual = parseInt(ci.charAt(i));
    if (isNaN(individual)) {
      isNumeric = false;
      break;
    }
    if (i % 2 === 0) {
      individual *= 2;
      if (individual > 9) {
        individual = (individual % 10) + 1;
      }
    }
    total += individual;
  }
  if (!isNumeric) {
    alert("La cédula ingresada no es numérica");
    return false;
  }
  if (ci.length < 10) {
    alert("La cédula ingresada es incorrecta");
    return false;
  }
  var lastDigit = parseInt(ci.charAt(9));
  var module = total % 10;
  if (module === 0) {
    module = 10;
  }
  var checkDigit = 10 - module;
  if (checkDigit !== lastDigit) {
    alert("La cédula ingresada es incorrecta");
    return false;
  }
  console.log("cédula válida", ci);
  return true;
};
