async function getCamera() {
  try {
    const camera = await navigator.mediaDevices.getUserMedia({
      video: { width: 300, height: 100 }
    });
    console.log('Camra', camera);
    const video = document.querySelector('video');
    video.srcObject = camera;
  } catch (err) {
    console.log(err);
  }
}
getCamera();
