import Product from './Product.jsx';
function ProductTab(){
  // let options=["hi-tech "," durable "," fast"];
  // let options2={a:"hi-tech",b:"durable",c:"fast"};
  let styles={
    display:"flex",
    felxWrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
  };
    return (
    <div style={styles}>
      <Product title="Logistic MX Master" idx={0}/>
      <Product title="Apple Pencile (2nd gen)" idx={1}/>
      <Product title="Zebronicx Zeb-transformer" idx={2}/>
      <Product title="Petronic Toad 23" idx={3}/>
    </div>
    );
}

export default ProductTab;