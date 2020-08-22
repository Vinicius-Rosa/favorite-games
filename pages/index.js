import Home from '../screens/Home';

export async function getServerSideProps () {
    const response = await fetch(`http://localhost:3000/api/jogos`)
        .then(res => {
          if(res.ok){
            return res.json();
          }
        })
        .then(res => {
          return res;
        })

    return {
      props: {
        games: response.games
      }
    }
}

export default Home;