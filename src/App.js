import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";

function App($app) {
  this.state = {}

  const searchInput = new SearchInput({ 
    $app,
    onSearch: async value => {
      console.log(value);
    }
  });

  const searchResult = new SearchResult({
    $app,
    initialState: [],
  })

  this.setState = () => {

  }

  const init = () => {
  
  }

  init();
}

export default App;

// class App {
//   $target = null;
//   data = [];

//   constructor($target) {
//     this.$target = $target;

//     this.searchInput = new SearchInput({
//       $target,
//       onSearch: keyword => {
//         api.fetchCats(keyword).then(({ data }) => this.setState(data));
//       }
//     });

//     this.searchResult = new SearchResult({
//       $target,
//       initialData: this.data,
//       onClick: image => {
//         this.imageInfo.setState({
//           visible: true,
//           image
//         });
//       }
//     });

//     this.imageInfo = new ImageInfo({
//       $target,
//       data: {
//         visible: false,
//         image: null
//       }
//     });
//   }

//   setState(nextData) {
//     console.log(this);
//     this.data = nextData;
//     this.searchResult.setState(nextData);
//   }
// }
