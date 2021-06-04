import React from 'react'

export const Restaurants = ({ restaurants, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className='list-group mb-4'>
      {restaurants.map(restaurant => (
        <li key={restaurant.Id} className='list-group-item'>
          <p className="restaurant-name">{restaurant.Name}</p>
          <p>Rating: {restaurant.RatingStars}</p>
          <ul>
            <div className="cuisine-container">
              <p>Cuisine Type:</p>
              {restaurant.CuisineTypes.map(cuisine => (
                <li key={cuisine.Id}>
                  {cuisine.Name}
                </li>
              ))}
            </div>
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Restaurants;