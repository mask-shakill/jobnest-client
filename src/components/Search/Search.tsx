const Search = () => {
  return (
    <div>
      <p className="text-xl text-black mt-10 ml-2 ">
        We delivered blazing fast & striking work solution
      </p>
      <form action="" className="w-[550px] flex mt-8">
        <select className="rounded-l-full w-[190px] h-[50px]  focus:border-1 focus:border-slate-600 border-1 focus:ring-0">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
          <option value="category5">Category 5</option>
        </select>
        <input
          className="w-[260px]  focus:border-1 focus:border-slate-600 border-1 focus:ring-0"
          type="text"
        />
        <button className="bg-blue-500 text-white py-2 w-[150px] rounded-r-xl">
          Search
        </button>
      </form>
      <p className="text-md text-black mt-7 ml-2">
        Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer
        <br />
      </p>
    </div>
  );
};

export default Search;
