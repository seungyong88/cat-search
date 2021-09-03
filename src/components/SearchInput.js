function SearchInput({ $app, onSearch }) {
  this.$target = document.createElement('input');
  this.$target.placeholder = "고양이를 검색해보세요.|";
  this.$target.className = "SearchInput";
  this.onSearch = onSearch;
  
  $app.appendChild(this.$target);

  this.$target.addEventListener('keyup', e=> {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
      e.target.value = '';
    }
  })

}

export default SearchInput;