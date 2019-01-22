Object.prototype.clone = function () {
  let cloned = this;

  if (Array.isArray(this)) {
    cloned = [];
    this.forEach((e) => {
      cloned.push(typeof e === 'object' ? e.clone() : e);
    });

  } else if (typeof this === 'object') {
    cloned = {};

    Object.keys(this).forEach((key) => {
      cloned[key] = typeof this[key] === 'object' ? this[key].clone() : this[key];
    });
  }

  return cloned;
}
