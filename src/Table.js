import React, { useState, useEffect } from 'react'



function Table() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((MyJson) => setData(MyJson)).catch((err) => console.log(err))
    })
    console.log(data);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((dataset) => <tr>
                        <td>{dataset.id}</td>
                        <td>{dataset.title}</td>
                        <td>{dataset.body}</td>
                    </tr>)
                }
              </tbody>
            </Table>
        </div>
    )
}

export default Table
