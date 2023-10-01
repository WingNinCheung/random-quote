export async function changeBackgroundColor() {
  const wipeAnimation = document.getElementById("wipe-animation");
  const randomColor = getRandomColor();

  document.documentElement.style.setProperty("--new", randomColor);
  wipeAnimation.style.backgroundPosition = "left top";
  await new Promise((resolve) => setTimeout(resolve, 1000));

  document.documentElement.style.setProperty("--curr", randomColor);
  wipeAnimation.style.backgroundPosition = "right bottom";
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
