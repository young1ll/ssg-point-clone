export function scrollHider(ref: boolean) {
  if (!ref) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
}
