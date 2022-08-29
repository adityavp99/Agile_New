import comparisonCSS from "./Comparison.module.css";
import ComparisonHolder from "../../components/layout/comparisonholder/Comparisonholder";

function ComparisonPage() {
  return (
    <div className={comparisonCSS.comparison}>
      <div className={comparisonCSS.starting}>
        <ComparisonHolder />
      </div>
      <button type="submit" className={comparisonCSS.button}>
        Payment
      </button>
    </div>
  );
}

export default ComparisonPage;
