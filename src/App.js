import { useState } from 'react'
import ChangeLocation from './components/ChangeLocation'
import Restaurants from './components/Restaurants'
import Pagination from './components/Pagination'
import axios from 'axios'

const App = () => {


  const [restaurants, setRestaurants] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)


  const updateLocal = (location) => {
    var str = location.postcode

    const fetchRestaurants = async (e) => {
      try {
        setLoading(true)
        const res = await axios.get('https://uk.api.just-eat.io/restaurants/bypostcode/' + str)
        const restArray = res.data.Restaurants

        setRestaurants(restArray)
        setLoading(false)

      } catch (e) {
        alert('Please provide a valid postcode')
      }
    }

    fetchRestaurants(str)

  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = restaurants.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (

    <div className="container">

      <h1 className="mt-5">Restaurant Search</h1>

      <ChangeLocation onUpdate={updateLocal}></ChangeLocation>

      <Restaurants restaurants={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={restaurants.length} paginate={paginate} />

    </div>


  );
}

export default App;
