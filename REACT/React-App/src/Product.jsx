import "./Product.css";
import Price from "./Price";
function Product({title,idx} ){
    // const list=features.map((feature)=><li>{feature}</li>);
    // if (price>=30000){
        // let isDiscount=price>30000;
        // let styles={backgroundColor: isDiscount ? "pink":""};
        let oldPrice=["12,494","11,900","1,599","599"];
        let newPrice=["8,999","9,199","899","278"];
        let description=[
            ["8,000 DPI","5 Programmable buttons"],
            ["Intutive surface","Designed for iPad Pro"],
            ["Designed for iPad Pro","Intutive surface"],
            ["Wireless","Optical Orientation"]
        ]
;        return(
            
            <div className="Product" >
                
                <h4>{title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>

                {/* <h5>Price:{price}</h5> */}
                {/* <p>
                    {features.map((feature)=>
                    (<li>{feature}</li>
                    ))}
                </p> */}
                {/* <p>{features2}</p> */}
                {/* <p>{price>=30000 ? "Discount of 5%":""}</p> */}
                {/* {price >=30000 ?<p>Discount of 5%</p> :null} */}
                {/* {price >30000 &&<p>Discount of 5%</p> } */}
            </div>
            );
    // }
    // else{
        // return(
        //     <div className="Product">
        //         <h3>{title}</h3>
        //         <h5>Price:{price}</h5>
                {/* <p>
                    {features.map((feature)=>
                    (<li>{feature}</li>
                    ))}
                </p> */}
                {/* <p>{features2}</p> */}
            // </div>
            // );
    // }

    
}
export default Product;