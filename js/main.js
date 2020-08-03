$("#jane1").fullpage({
  // 參數設定[註1]
  navigation: true, // 顯示導行列
  navigationPosition: "right", // 導行列位置
  onLeave: function (index, nextIndex) {
    if (index == 1) {
      $('.circle1').addClass('cirani');
      $('.circle1').removeClass('cirback');
    }
    if(index==3){
      $('.circle2').removeClass('c2in');
      $('.circle2').addClass('c2out');
    }
  },
  afterLoad: function (anchorLink, index) {
    if (index == 1) {
      $('.circle1').addClass('cirback');
      $('.circle1').removeClass('cirani');

    }
    if(index==3){
      $('.circle2').addClass('c2in');
      $('.circle2').removeClass('c2out');
    }
  }
});


let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector('[' + container + ']')
  const stringsContainer = document.getElementsByClassName(stringTarget)

  while (wrapper) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(1000)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text) {
  let index = 0
  while (index < text.length) {
    const timeout = 100
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while (wrapper.textContent.length) {
    const timeout = 100
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('item', 'data-text');

