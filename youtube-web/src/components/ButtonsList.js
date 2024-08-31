const ButtonsList = () => {
  const suggestionsList = ["All", "Music", "Mixes", "Podcast", "Live", "News", "Gaming", "Cricket", "Cooking", "Business", "Technology", "New to you"]
  return (
    <div className="flex">
      {
        suggestionsList.map((suggestion, index) => (
        <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg
          sm:px-1 sm:py-0.5 // Small screens (min-width: 640px)
          md:px-2 md:py-1 // Medium screens (min-width: 768px)
          lg:px-2 lg:py-1 // Large screens (min-width: 1024px)
          xl:px-2 xl:py-1  //min-width:1280px
          2xl:px-3 2xl:py-2 //min-width: 1536px" key={index}>{suggestion}</button>
        ))
      }
    </div>
  )
};

export default ButtonsList;