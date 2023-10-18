

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
    }


    return (
        <div className="bg-[#F4F3F0] py-36  px-56">
            <h2 className='text-center pt-8 pb-4 text-5xl font-semibold font-rancho'>Add Product</h2>
            <p className='max-w-3xl mx-auto text-center text-lg pb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div>
                <form onSubmit={handleAddProduct} className="space-y-8">

                    {/* form row  */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Product Name</span>
                            </label>
                            <label>
                                <input type="text" required name="name" placeholder="Enter product name" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Chef*/}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Brand Name</span>
                            </label>
                            <label>
                                <input type="text" name="brand" placeholder="Enter product brand name" className="input rounded-sm w-full" required />
                            </label>
                        </div>
                    </div>


                    {/* form row  */}

                    {/* Supplier */}

                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Type</span>
                            </label>
                            <label>
                                <input type="text" required name="type" placeholder="Enter product type" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Taste */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </label>
                            <label>
                                <input type="number" required name="price" placeholder="Enter product price" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>


                    {/* form row  */}
                    <div className="md:flex gap-6">


                        {/* Category */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </label>
                            <label>
                                <input type="number" required name="rating" placeholder=" Enter product rating" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Details  */}

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </label>
                            <label>
                                <input type="text" required name="description" placeholder="Enter product description" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form Photo url  */}

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo</span>
                        </label>
                        <label>
                            <input type="text" required name="photo" placeholder="Enter photo URL" className="input rounded-sm w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block bg-black text-white" />

                </form>
            </div>

        </div>
    );
};

export default AddProduct;