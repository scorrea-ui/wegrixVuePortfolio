export default class TypeWriter {
  constructor(words, wait = 2000) {
    this.words = words; // Array of words
    this.wait = wait; // Initial set timeout
    this.text = '';

    this.index = 0; // index of array
    this.isDeleting = false;

    this.type();
  }

  type() {
    const currentIndex = this.index % this.words.length;
    const word = this.words[currentIndex]; // get current word based on index

    let typeSpeed = 200;

    if (this.isDeleting) {
      this.text = word.substring(0, this.text.length - 1);
      typeSpeed /= 2;
    } else {
      this.text = word.substring(0, this.text.length + 1);
    }

    if (!this.isDeleting && this.text === word) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.index += 1;
      typeSpeed = 400;
    }

    if (window.innerWidth >= 768) {
      setTimeout(() => this.type(), typeSpeed);
    } else {
      this.text = word;
    }
  }
}
