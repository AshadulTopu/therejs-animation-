// Function to initialize a single card
function initCard(cardElement, frontImage, backImage, displacementImage) {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    cardElement.offsetWidth / -2, 
    cardElement.offsetWidth / 2, 
    cardElement.offsetHeight / 2, 
    cardElement.offsetHeight / -2, 
    1, 
    1000
  );
  
  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(cardElement.offsetWidth, cardElement.offsetHeight);
  cardElement.insertBefore(renderer.domElement, cardElement.firstChild);

  const loader = new THREE.TextureLoader();
  const texture1 = loader.load(frontImage);
  const texture2 = loader.load(backImage);
  const dispTexture = loader.load(displacementImage);

  // ... rest of the setup code remains the same ...

  return { uniforms, renderer, scene, camera };
}

// Initialize all cards when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  const cards = [
    {
      element: document.getElementById('card1'),
      frontImage: 'image1-front.jpg',
      backImage: 'image1-back.jpg',
      displacement: 'disp1.jpg'
    },
    {
      element: document.getElementById('card2'),
      frontImage: 'image2-front.jpg',
      backImage: 'image2-back.jpg',
      displacement: 'disp2.jpg'
    }
    // Add more cards as needed
  ];

  const cardInstances = cards.map(card => initCard(
    card.element, 
    card.frontImage, 
    card.backImage, 
    card.displacement
  ));

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    cardInstances.forEach(instance => {
      instance.renderer.render(instance.scene, instance.camera);
    });
  }
  animate();
});