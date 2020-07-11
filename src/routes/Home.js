import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // todo : 영화 데이터 로딩
    // ! 렌더링을 비동기적으로 실행되게 딜레이를 주어서 안전하게 로딩할 시간을 벌어줌.
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating`
    );
    this.setState({ movies, isLoading: false });
  };

  // getMovies = async () => {
  //   const movies = await axios.get(`http://yts-proxy.now.sh/list_movies.json`);
  //   console.log(movies.data.data.movies);
  // };
  // nichol's api address : yts-proxy.now.sh/list_movies.json
  // nichol's api address : yts-proxy.now.sh/movies_details.json?movie_id={id}

  // ? sort_by를 쓸려면? - apr address의 엔드포인트에 ?sort_by=대상 추가하면 됨
  // 예시 : yts-proxy.now.sh/list_movies.json?sort_by=rating
  // Todo : 버튼을 누르면 평점으로 정렬하도록 정렬하는 기능을 따로 구현해보자.
  render() {
    const { isLoading, movies } = this.state;
    // todo : 삼항연산자 false 부분에 데이터 출력
    return (
      <section className="loader">
        {isLoading ? (
          <div className="loader">
            <img
              className="loader_text"
              src="https://thumbs.gfycat.com/SkinnySeveralAsianlion-size_restricted.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
