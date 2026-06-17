import { Link } from 'react-router-dom';
import { BsBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const { label, image, uri, mealType, cuisineType } = recipe?.recipe;

  const id = uri?.split('#')[1];

  const [saved, setSaved] = useState(false);

  // Check if recipe already exists in localStorage
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    const exists = savedRecipes.find((item) => item.id === id);

    setSaved(!!exists);
  }, [id]);

  // Save Recipe
  const handleSave = (e) => {
    e.preventDefault(); // Prevent Link navigation
    e.stopPropagation();

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    const exists = savedRecipes.find((item) => item.id === id);

    // REMOVE IF EXISTS
    if (exists) {
      const updatedRecipes = savedRecipes.filter(
        (item) => item.id !== id
      );

      localStorage.setItem(
        'savedRecipes',
        JSON.stringify(updatedRecipes)
      );

      setSaved(false);
    } else {
      // SAVE NEW RECIPE
      const newRecipe = {
        id,
        label,
        image,
        mealType,
        cuisineType,
        recipe,
      };

      localStorage.setItem(
        'savedRecipes',
        JSON.stringify([...savedRecipes, newRecipe])
      );

      setSaved(true);
    }
  };

  return (
    <div className='w-full lg:w-[250px] group'>
      <div className='w-full overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#2b2b2b] lg:h-[300px]'>

        {/* Image Section */}
        <div className='relative overflow-hidden'>
          <Link to={`/recipes/${id}`}>
            <img
              src={image}
              alt={label}
              className='w-full h-[220px] lg:h-[170px] object-cover transition-transform duration-500 group-hover:scale-110'
            />
          </Link>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`absolute top-3 right-3 flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
              saved
                ? 'bg-green-500 text-white border-green-400'
                : 'bg-white/15 text-white border-white/20 hover:bg-green-500'
            }`}
          >
            {saved ? (
              <BsBookmarkHeartFill className='text-[18px]' />
            ) : (
              <BsBookmarkHeart className='text-[18px]' />
            )}
          </button>
        </div>

        {/* Content */}
        <div className='p-4'>
          <Link to={`/recipes/${id}`}>
            <h4 className='text-white text-[17px] font-semibold leading-6 line-clamp-2 hover:text-green-400 transition-colors duration-300'>
              {label}
            </h4>
          </Link>

          <div className='flex flex-wrap gap-1 items-center pt-4'>
            <p className='px-3 py-1 rounded-full text-green-400 bg-green-500/10 border border-green-500/20 text-[12px] font-medium capitalize'>
              {cuisineType}
            </p>

            <p className='px-3 py-1 rounded-full text-orange-400 bg-orange-500/10 border border-orange-500/20 text-[12px] font-medium capitalize'>
              {mealType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;