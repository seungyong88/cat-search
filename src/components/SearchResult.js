export default function SearchResult({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('section');
  this.$target.className = "SearchResult";

  $app.append(this.$target);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    this.$target.innerHTML = `
    <div>
      test
    </div>
    <div>
      test
    </div>
    <div>
      test
    </div>
    <div>
      test
    </div>
    `
  }

  this.render();
} 
