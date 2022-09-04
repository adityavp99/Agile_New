// Comparison JS/HTML code

// importing CSS styling for Comparison page from CSS Stylesheet file
import comparisonCSS from "./Comparison.module.css";

// importing ComparisonHolder from components folder
// Each ComparisonHolder contains price comparisons for items from 1 restaurant
import ComparisonHolder from "../../components/layout/comparisonholder/Comparisonholder";

// Comparisonpage function containing HTML code
function ComparisonPage() {
  return (
    //div container for the comparison page
    <div className={comparisonCSS.comparison}>

      {/* div container to hold the comparisonholders*/}
      <div className={comparisonCSS.starting}>

        {/* Component that compares prices: Order from 2 restaurants will mean 2 Comparisonholders*/}
        <ComparisonHolder />
        <ComparisonHolder />
      </div>

      {/* Link to cart-summary page to confirm order/ make final changes*/}
      <a href="/cart">
        <button type="submit" className={comparisonCSS.button}>
          Payment
        </button>
      </a>
    </div>
  );
}

// exports the HTML code to be called on App.js
export default ComparisonPage;
