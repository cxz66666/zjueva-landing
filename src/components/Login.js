import React, { useEffect, useState } from "react";
import axios from "axios";


function Login() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            let fetchItems = [];
            for (let i = 1; i <= 7; i++) {
                let result = await axios(
                    'api/info/' + i,
                    {
                        method: 'GET',
                    }
                );
                console.log("2312");
                fetchItems.push({
                    id: result.id
                })

            }
            setItems(fetchItems);
        }
    })
    return (
        <p>
            {
                items.map((item, i) => {
                    return (
                        <div>
                            <tr id={i}>
                                <td>
                                    {item.id}
                                </td>
                            </tr>
                        </div>
                    );
                })
            }
        </p>
    )
}
export default Login;