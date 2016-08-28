(function () {
  const AVATARS = [
    'eyes-beard.jpg',
    'inter.jpg',
    'roga.jpg',
    'shadow.jpg',
    'smoking.jpg',
    'wc.jpg',
    'we-win.jpg'
  ];
  let avatarsList = [];

  const PATH = '/-i/avatars/';

  const ID = 'avatar';

  const $AVATAR = document.getElementById(ID);

  if (!$AVATAR) {
    return;
  }

  const shffleArray = (inputArray) => {
    let resultArray = [],
      tmpArray = [].concat(inputArray);
    while(tmpArray.length) {
      const index = Math.floor(Math.random() * tmpArray.length);
      resultArray.push(tmpArray[index]);
      tmpArray.splice(index, 1);
    }
    return resultArray;
  };

  let loading = false;
  const DELAY = 100;

  const changeImg = () => {
    if (loading) {
      return;
    }
    loading = true;
    setTimeout(() => {
      if (!avatarsList.length) {
        avatarsList = shffleArray(AVATARS);
      }
      const index = Math.floor(Math.random() * avatarsList.length);
      const newImg = avatarsList[index];
      avatarsList.splice(index, 1);
      $AVATAR.setAttribute('src', PATH + newImg);
      loading = false;
    }, DELAY)
  };

  $AVATAR.addEventListener('mousemove', changeImg);

})();
