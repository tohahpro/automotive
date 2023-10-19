import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "../Brands/Rating";
import Swal from "sweetalert2";


const MyCart = () => {

    const dataLoaded = useLoaderData()
    const [products, setProducts] = useState(dataLoaded)


    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'

                            )
                            const remaining = products.filter(item => item._id !== _id);
                            setProducts(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5 px-56 py-40">
            {
                products.map(product =>
                    <div key={product._id}>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={product.photo} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.product_name}</h2>
                                <p>{product.type}</p>
                                <Rating rating={product.rating}></Rating>

                                <p>Price : {product.price} $</p>
                                <div className="card-actions">
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="btn btn-wide">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyCart;