
const Search = ()=>{
    return (
        <form className="flex items-center ml-8">
            <input type="text" placeholder="Kategori | Lokasi" className="border border-gray-500 px-4 py-3 rounded-1-md tex-gray-500"/>
            <button className="flex justify-center items-center bg-blue-700/100 border border-blue-700 text-white text-sm rounded-r-md h-12 w-12">
                Search
            </button>
        </form>
    )
}

export default Search