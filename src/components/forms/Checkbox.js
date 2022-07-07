const Checkbox = ({ id, title, checked }) => (
  <div className="flex items-center">
    <input className="bg-white hover:bg-neutral-50 focus:bg-neutral-100 checked:bg-primary border border-neutral-400 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-primary-400 rounded w-4 h-4 text-primary transition-all" type="checkbox" id={ id } defaultChecked={ checked } />
    <label className="text-sm text-black font-medium ml-2" htmlFor={ id }>{ title }</label>
  </div>
)

export default Checkbox