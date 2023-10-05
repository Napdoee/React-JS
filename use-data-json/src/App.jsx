import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <br />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const productName = product.stocked ? product.name :
  <span style={{ color: 'red' }}>
    { product.name }
  </span>

  return (
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
    if(inStockOnly && !product.stocked) return;

    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} category={product.category}/>
      )
    }

    rows.push(
      <ProductRow key={product.name} product={product} />
    )

    lastCategory = product.category;
  });

  return (
    <table border="1" width="250px" cellPadding="3px" cellSpacing="0">
      <thead style={{ backgroundColor: 'gray' }}>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}


function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input 
        type="text" value={filterText} 
        placeholder="Search..." 
        onChange={(e) => {onFilterTextChange(e.target.value)}}
        style={{ padding: '5px 10px', borderRadius: '5px', border: 'none' }}/>
      <br /><br />
      <label>
        <input 
          type="checkbox" checked={inStockOnly}
          onChange={(e) => {onInStockOnlyChange(e.target.checked)}}/> 
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];