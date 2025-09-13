export default function CardHome() {
  return (
    <div class=" m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="max-w-sm mx-auto mt-10 p-6 bg-pink-100 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500">
        <h2 class="text-xl font-bold text-gray-900">Sanrio Plushies</h2>
        <p class="mt-2 text-gray-600">
          Discover your new best friend! Cuddle up with our adorable collection
          of Sanrio plushies, featuring all your favorite characters from Hello
          Kitty and My Melody to Cinnamoroll and Kuromi. Each plush is made with
          super-soft material, perfect for hugging and collecting.
        </p>
        <button class=" mt-3 bg-pink-200 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded transition duration-300">
          Click Here
        </button>
      </div>
      <div class="max-w-sm mx-auto mt-10 p-6 bg-pink-100 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500">
        <h2 class="text-xl font-bold text-gray-900"> Sanrio Fashion</h2>
        <p class="mt-2 text-gray-600">
          Dress your best with the magic of Sanrio! Shop our curated selection
          of clothing featuring all your favorite characters. From casual tees
          to fashionable hoodies, each piece is a celebration of friendship and
          fun.
        </p>
        <button class=" bg-pink-200 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded transition duration-300">
          Click Here
        </button>
      </div>
      <div class="max-w-sm mx-auto mt-10 p-6 bg-pink-100 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500">
        <h2 class="text-xl font-bold text-gray-900">Sanrio Makeup</h2>
        <p class="mt-2 text-gray-600">
          Level up your makeup game! Find your new favorite lip gloss,
          eyeshadow, or brush from our charming Sanrio makeup line. Each product
          is a collectible piece of art, perfect for fans and beauty lovers
          alike.
        </p>
        <button class=" bg-pink-200 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded transition duration-300">
          Click Here
        </button>
      </div>
    </div>
  );
}
