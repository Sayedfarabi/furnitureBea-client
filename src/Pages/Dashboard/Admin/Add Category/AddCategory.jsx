import React from 'react';

const AddCategory = () => {
    return (
        <div>
            <div className='bg-base-100 min-h-screen'>
                <h1 className='text-3xl text-secondary text-center underline my-4 '>Add Product for Advertisement</h1>
                <div className="hero  my-8">
                    <div className="card flex-shrink-0 sm:w-full md:w-1/3  shadow-2 xl bg-base-200">
                        <form className="card-body">

                            {/* Input no 1 */}

                            <div className="form-control">
                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">1. Category Name :</span>
                                    </label>
                                    <input type="text" name='categoryName' placeholder="Enter your category name" className="input input-bordered w-full" required />
                                </div>

                                {/* Input no 2 */}

                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">2. Description :</span>
                                    </label>
                                    <textarea name='description' className="textarea input input-bordered w-full h-24" placeholder="Type category description"></textarea>
                                </div>

                                {/* Input no 3 */}

                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold">3. Category Image :</span>
                                    </label>
                                    <input type="file" name='image' className="input input-bordered w-full" required />
                                </div>

                            </div>

                            {/* Submit Button */}

                            <div className="form-control mt-6">
                                <input type="submit" value="Add Product" className='btn btn-sm' />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddCategory;