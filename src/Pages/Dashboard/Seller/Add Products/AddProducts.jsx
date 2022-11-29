import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AppContext } from '../../../../App';



const AddProducts = () => {
    const { categories, dbUser, api } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(categories)




    const handleProduct = data => {

        // Get CategoryId 
        const categoryName = data.categoryName;
        const category = categories.find(category => category.categoryName === categoryName);

        // Get Time
        const postedDate = new Date().toLocaleDateString();
        const postedTime = new Date().toLocaleTimeString();
        // console.log(postedDate, postedTime);

        if (data.productImage) {
            const imgBbKey = process.env.REACT_APP_imgbb_Key;
            const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
            const image = data.productImage[0];

            // Using FormData for image input
            const formData = new FormData()
            formData.append('image', image)

            // Get image url from imagebb
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    // console.log(imageData)
                    if (imageData.success) {
                        const imageUrl = imageData?.data?.url;
                        data.productImage = imageUrl;
                        data.advertisement = false;
                        data.categoryId = category._id;
                        data.postedDate = postedDate;
                        data.postedTime = postedTime;
                        data.inStock = "available";
                        data.reported = false;
                        data.sellerVerified = dbUser?.verified;
                        toast.success("image url convert success")

                        // console.log(data)

                        fetch(`${api}/addProduct`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data)
                                if (data?.success) {
                                    toast.success(data.message);
                                } else {
                                    toast.error(data.message)
                                }
                            })

                    } else {
                        toast.error("Image file to url convert failed")
                    }




                })
        }
        // console.log(data)
    }



    return (
        <div className='bg-base-100'>
            <h1 className='text-3xl text-secondary text-center underline my-4 '>Add Product for Advertisement</h1>
            <div className="hero min-h-screen  my-8">
                <div className="card flex-shrink-0 sm:w-full md:w-2/3  shadow-2 xl bg-base-200">

                    <form onSubmit={handleSubmit(handleProduct)} className="card-body">

                        <div className="form-control">
                            {/* input no 1 */}
                            {/* Dynamic select option input  */}

                            <div>
                                <p className='my-2 font-bold'>1. Select Product Category :</p>
                                <div className='input input-bordered text-center'>
                                    <label htmlFor="category"></label>
                                    <select {...register("categoryName", { required: "product category is required" })} className='w-full'>
                                        <option value="" >Select one</option>
                                        {
                                            categories &&
                                            categories.map(category => <option
                                                key={category._id}
                                                value={category?.categoryName}
                                            >
                                                {category?.categoryName}</option>)
                                        }
                                    </select>
                                </div>
                                {errors.categoryName && <p className='text-red-500'>{errors.categoryName.message}</p>}
                            </div>

                            {/* Input no 2 */}
                            <div>
                                <p className='my-2 font-bold'>2. Select Product Condition :</p>
                                <div className='input input-bordered text-center'>
                                    <label htmlFor="condition"></label>
                                    <select {...register("condition", { required: true })} id="condition" name="condition" className='w-full'>
                                        <option value="">Select one</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Fair">Fair</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Input no 3 */}

                        <div className="form-control">
                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">3. Product Name :</span>
                                </label>
                                <input {...register("productName", { required: true })} type="text" name='productName' placeholder="Enter your Product Name" className="input input-bordered w-full" />
                            </div>

                            {/* Input no 4 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">4. Year of Used Product :</span>
                                </label>
                                <input {...register("yearsOfUsedProduct", { required: true })} type="text" name='yearsOfUsedProduct' placeholder="Years of Use Product" className="input input-bordered w-full" />
                            </div>

                            {/* Input no 5 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">5. Original Price :</span>
                                </label>
                                <input {...register("originalPrice", { required: true })} type="number" name='originalPrice' placeholder="Type Original price for your product" className="input input-bordered w-full" />
                            </div>

                            {/* Input no 6 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">6. Resale Price :</span>
                                </label>
                                <input {...register("resalePrice", { required: true })} type="number" name='resalePrice' placeholder="Type Resale price for your product" className="input input-bordered w-full" />
                            </div>

                            {/* Input no 7 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">7. Description :</span>
                                </label>
                                <textarea {...register("description", { required: true })} name='description' className="textarea input input-bordered w-full h-24" placeholder="Type product description"></textarea>
                            </div>



                            {/* Input no 8 */}
                            {/* This input will be dynamic and readonly required */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">8. Seller Name :</span>
                                </label>
                                <input {...register("sellerName", { required: true })} type="text" name='sellerName' placeholder="Type your Name" className="input input-bordered w-full" defaultValue={dbUser?.name} readOnly />
                            </div>

                            {/* Input no 9 */}
                            {/* Will be dynamic input */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">9. Seller Email :</span>
                                </label>
                                <input {...register("sellerEmail", { required: true })} type="email" name='sellerEmail' className="input input-bordered w-full" placeholder='Type your email' defaultValue={dbUser?.email} readOnly />
                            </div>

                            {/* Input no 10 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">10. Phone Number :</span>
                                </label>
                                <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Type your phone number" className="input input-bordered w-full" />
                            </div>

                            {/* Up on no 11 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">11. Location :</span>
                                </label>
                                <input {...register("location", { required: true })} type="text" name='location' placeholder="Type your location" className="input input-bordered w-full" />
                            </div>


                            {/* Input no 13 */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold">13. Product Image :</span>
                                </label>
                                <input {...register("productImage", { required: true })} type="file" name='productImage' className="input input-bordered w-full" />
                            </div>


                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Add Product" className='btn btn-sm' />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;