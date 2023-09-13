const copy = async () => {
  var copyLink = document.getElementById("copyLink").innerText;
  console.log(copyLink);
  await navigator.clipboard.writeText(copyLink);
  alert("Link has been copied!");
}
