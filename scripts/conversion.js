let outputArea = document.querySelector(".output");
let inputType = document.querySelector("#inputType");

function round(value) {
  return Math.round((value + Number.EPSILON) * 10 ** 4) / 10 ** 4;
}

class Converter {
  static bitcoinToAll(bitcoin) {
    return [
      ["ETH", round(bitcoin * 13.48)],
      ["SOL", round(bitcoin * 568.18)],
    ];
  }

  static ethToAll(ethereum) {
    return [
      ["BTC", round(ethereum * 0.0745931)],
      ["SOL", round(ethereum * 41.94)],
    ];
  }

  static solToAll(solana) {
    return [
      ["BTC", round(solana * 0.0018)],
      ["ETH", round(solana * 0.024)],
    ];
  }
}

function updateValues() {
  let input = document.querySelector("#weight").value;
  switch (inputType.value) {
    case "Bitcoin":
      updateOutput(Converter.bitcoinToAll(input));
      break;
    case "Ethereum":
      updateOutput(Converter.ethToAll(input));
      break;
    case "Solana":
      updateOutput(Converter.solToAll(input));
  }
}

function updateOutput(values) {
  outputArea.style.visibility = "visible";

  document.querySelector("#firstOutputName").innerHTML = values[0][0];
  document.querySelector("#firstOutputValue").innerHTML = values[0][1];

  document.querySelector("#secondOutputName").innerHTML = values[1][0];
  document.querySelector("#secondOutputValue").innerHTML = values[1][1];

  document.querySelector("#thirdOutputName").innerHTML = values[2][0];
  document.querySelector("#thirdOutputValue").innerHTML = values[2][1];
}

inputType.addEventListener("change", (event) => {
  if (document.querySelector("#weight").value != 0) updateValues();
});

document
  .querySelector("#weight")
  .addEventListener("input", (event) => updateValues());
