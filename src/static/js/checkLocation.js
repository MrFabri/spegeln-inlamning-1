export default function checkLocationForStyle() {
  if (
    location.pathname === "/restaurant"
  ) {
    document.querySelector("#restaurant-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/movies"
  ) {
    document.querySelector("#movies-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salons"
  ) {
    document.querySelector("#salons-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/events"
  ) {
    document.querySelector("#events-id").style.textDecoration = "underline";
  } else if ( 
    location.pathname === "/salonA"
  ) {
    document.querySelector("#salon-A").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salonB.html"
  ) {
    document.querySelector("#salon-B").style.textDecoration = "underline";
  }
}