/* Builds a single page-wide background layer without changing site content or data logic. */
(function () {
  const body = document.body;
  if (!body || !body.dataset.pageBg || body.dataset.pageBg === "admin") return;

  const layer = document.createElement("div");
  layer.className = "site-backdrop";
  layer.setAttribute("aria-hidden", "true");

  if (body.dataset.pageBg === "home") {
    // Reuse the existing homepage video rather than downloading a second copy.
    const existingVideo = document.querySelector(".hero-video");
    if (existingVideo) {
      existingVideo.classList.remove("hero-video");
      existingVideo.classList.add("site-backdrop-video");
      layer.appendChild(existingVideo);
    }
    const video = layer.querySelector("video");
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("preload", "metadata");
      const attempt = video.play();
      if (attempt && typeof attempt.catch === "function") attempt.catch(function () {});
    }
  }
  body.insertBefore(layer, body.firstChild);
})();
