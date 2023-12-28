
import "../App.css"
 function Price() {
  return (
    <div className="allcategori">
    <h2 className="sidebar-title">Price</h2>
    <label className='sidebar-label-container'>
      <input type='radio' name='test2'/>
      <span className='checkmark'>All</span>
    </label>
    <label className='sidebar-label-container'>
      <input type='radio' name='test2'/>
      <span className='checkmark'>$0-$50</span>
    </label>
    <label className='sidebar-label-container'>
      <input type='radio' name='test2'/>
      <span className='checkmark'>$50-$100</span>
    </label>
    <label className='sidebar-label-container'>
      <input type='radio' name='test2'/>
      <span className='checkmark'>$100-$150</span>
    </label>
    <label className='sidebar-label-container'>
      <input type='radio' name='test2'/>
      <span className='checkmark'>over-$150</span>
    </label>
    </div>
  )
}
export default Price;