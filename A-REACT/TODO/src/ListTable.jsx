
export default function ListTable(){
    return(
        <table style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    {itemList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.item}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}