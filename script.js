const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here

  const text = textInput.value;
      const delayInSeconds = Number(delayInput.value);

      outputDiv.innerText = "Waiting for " + delayInSeconds + " seconds...";

      await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));

      outputDiv.innerText = "The message is: " + text;
    }

    const btn = document.getElementById("btn");
    btn.addEventListener("click", showMessageAfterDelay);
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}

btn.addEventListener("click", showMessage);