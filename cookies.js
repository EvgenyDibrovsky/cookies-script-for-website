document.addEventListener("DOMContentLoaded", () => {
  // utility function to get cookies
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // utility function to set cookies
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  };

  // utility function to hide cookie banner
  const hideBanner = () => {
    const cookieBanner = document.querySelector(".cookie-banner");
    cookieBanner.style.display = "none";
    setCookie("cookie-accept-btn", "true", 30);
  };

  // cache DOM variables
  const cookieBanner = document.querySelector(".cookie-banner");
  const cookieAcceptButton = document.querySelector(".cookie-accept-btn");

  if (getCookie("cookie-accept-btn")) {
    cookieBanner.style.display = "none"; // hide banner if user has already accepted cookies
  } else {
    // add click event listener to the accept button
    cookieAcceptButton.addEventListener("click", () => {
      hideBanner();
    });
  }
});
