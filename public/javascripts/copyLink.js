const copy = async () => {
  var copyLink = document.getElementById("copyLink").innerText;

  await navigator.clipboard.writeText(copyLink);
  alert("Link has been copied!");
}
