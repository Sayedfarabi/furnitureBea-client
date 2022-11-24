import React from 'react';



const AddProducts = () => {

    return (
        <div className='bg-base-100'>
            <h1 className='text-3xl text-secondary text-center underline my-4 '>Add Product for Advertisement</h1>
            <div className="hero min-h-screen  my-8">
                <div className="card flex-shrink-0 sm:w-full md:w-2/3  shadow-2
                
                
                
                
                
                
                
                
                
                xl bg-base-100">
                    <form className="card-body">

                        <div className="form-control">
                            {/* input no 1 */}
                            {/* Will be Dynamic select option input  */}

                            <div>
                                <p className='my-2'>1. Select Product Category :</p>
                                <div className='input input-bordered text-center'>
                                    <label htmlFor="category"></label>
                                    <select id="category" name="category" className='w-full' required>
                                        <option value="" >Select one</option>
                                        <option value="Bedroom">Bedroom</option>
                                        <option value="Drawing Room">Drawing Room</option>
                                        <option value="Kitchen">Kitchen</option>
                                    </select>
                                </div>
                            </div>
                            {/* Input no 2 */}
                            <div>
                                <label className="label w-full">
                                    <span className="label-text">2. Product Name :</span>
                                </label>
                                <input type="text" name='productName' placeholder="Enter your Product Name" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        {/* Input no 3 */}
                        <div className="form-control">
                            <div>
                                <label className="label w-full">
                                    <span className="label-text">3. Year of Use Product :</span>
                                </label>
                                <input type="text" name='yearsOfUsedProduct' placeholder="Years of Use Product" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 4 */}
                            <div>
                                <p className='my-2'>4. Select Product Condition :</p>
                                <div className='input input-bordered text-center'>
                                    <label htmlFor="condition"></label>
                                    <select id="condition" name="condition" className='w-full' required>
                                        <option value="">Select one</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Fair">Fair</option>
                                    </select>
                                </div>
                            </div>

                            {/* Input no 5 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">5. Location :</span>
                                </label>
                                <input type="text" name='location' placeholder="Type your location" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 6 */}
                            {/* This input will be dynamic and readonly required */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">6. Seller Name :</span>
                                </label>
                                <input type="text" name='sellerName' placeholder="Type your Name" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 7 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">7. Phone Number :</span>
                                </label>
                                <input type="number" name='phone' placeholder="Type your phone number" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 8 */}
                            {/* Will be Dynamic Verification Option and readonly */}
                            <div>
                                <label className="label w-full">
                                    <span className="label-text">8. Verified :</span>
                                </label>
                                <input type="text" name='phone' value={false} className="input input-bordered w-full" readOnly />
                            </div>

                            {/* Input no 9 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">9. Original Price :</span>
                                </label>
                                <input type="number" name='originalPrice' placeholder="Type Original price for your product" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 10 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">10. Resale Price :</span>
                                </label>
                                <input type="number" name='resalePrice' placeholder="Type Resale price for your product" className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 11 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">11. Description :</span>
                                </label>
                                <textarea name='description' className="textarea input input-bordered w-full h-24" placeholder="Type product description"></textarea>
                            </div>

                            {/* Input no 12 */}
                            <div>
                                <label className="label">
                                    <span className="label-text">12. Product Image :</span>
                                </label>
                                <input type="file" name='image' className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 13 */}
                            {/* This input will be dynamic time by function */}

                            <div>
                                <label className="label">
                                    <span className="label-text">13. Uploading Time :</span>
                                </label>
                                <input type="text" name='time' className="input input-bordered w-full" required />
                            </div>

                            {/* Input no 14 */}
                            {/* This input will be dynamic category Id */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text">14. Category Id :</span>
                                </label>
                                <input type="number" name='categoryId' className="input input-bordered w-full" required />
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