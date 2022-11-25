import React from 'react';

const AddAdmin = () => {

    return (
        <div>
            <div className='bg-base-100 min-h-screen mx-auto'>
                <div>
                    <h1 className='text-3xl text-secondary text-center underline my-8 '>Add Product for Advertisement</h1>
                </div>
                <div className="hero mt-12">
                    <div className="card flex-shrink-0 w-full md:w-1/2   shadow-2 xl bg-base-200">
                        <form className="card-body">

                            <div className="form-control">
                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">New Admin Email:</span>
                                    </label>
                                    <input type="email" name='newAdminEmail' placeholder="Enter new admin email" className="input input-bordered w-full" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Add Admin" className='btn btn-sm' />
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;