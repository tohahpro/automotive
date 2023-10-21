import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductsUpdate = () => {

    const dataLoaded = useLoaderData()

    const { _id, product_name, brand_name, type, price, rating, photo } = dataLoaded

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const product_name = form.product_name.value
        const brand_name = form.brand_name.value.toUpperCase()
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const photo = form.photo.value
        const product = { product_name, brand_name, type, price, rating, photo }
        console.log(product);

        fetch(`https://automotive-server-site-two.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="py-36 px-2 lg:px-56">
            <h2 className='text-center pt-8 pb-4 text-5xl font-semibold font-rancho'>Update Product</h2>
            <div className="py-16">
                <form onSubmit={handleUpdateProduct} className="space-y-8">

                    {/* form row  */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Product Name</span>
                            </label>
                            <label>
                                <input type="text" required name="product_name"
                                    defaultValue={product_name} placeholder="Enter product name" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Chef*/}

                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Brand Name</span>
                            </label>
                            <label>
                                <input type="text" name="brand_name"
                                    defaultValue={brand_name}
                                    placeholder="Enter product brand name" className="input rounded-sm w-full" required />
                            </label>
                        </div>
                    </div>


                    {/* form row  */}

                    {/* Supplier */}

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Type</span>
                            </label>
                            <label>
                                <input type="text" required name="type"
                                    defaultValue={type}
                                    placeholder="Enter product type" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Taste */}

                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Price</span>
                            </label>
                            <label>
                                <input type="number" required name="price"
                                    defaultValue={price}
                                    placeholder="Enter product price" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>


                    {/* form row  */}



                    <div className="flex gap-6">
                        {/* Category */}

                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Rating</span>
                            </label>
                            <label>
                                <input type="number" required name="rating"
                                    defaultValue={rating}
                                    placeholder=" Enter product rating" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* form Photo url  */}

                        <div className="form-control md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Photo</span>
                            </label>
                            <label>
                                <input type="text" required name="photo"
                                    defaultValue={photo}
                                    placeholder="Enter photo URL" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block bg-black text-white" />

                </form>
            </div>

        </div>
    );
};


export default ProductsUpdate;