const heading = "Please Meet Our Team";
let i = 0;
// heading typing each letter in 150ms
const typing = () => {
  if (i < heading.length) {
    document.querySelector(".heading").innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
};

typing();
