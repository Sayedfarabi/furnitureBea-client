import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [addDataError, setAddDataError] = useState("");
    // const [imgUrl, setImgUrl] = useState("");
    const addCategoryApi = `${process.env.REACT_APP_db_url}/addCategory`;

    const handleData = data => {
        // console.log(data);
        const imgBbKey = process.env.REACT_APP_imgbb_Key;
        const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
        const formData = new FormData()

        if (data?.image) {
            const imageFile = data.image[0];
            formData.append('image', imageFile)

            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(photoUrl => {
                    data.image = photoUrl?.data?.url;
                    // console.log(data);

                    fetch(addCategoryApi, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.success) {
                                toast.success(result.message)
                            } else {
                                toast.error(result.message)
                            }
                        })
                })
        }

    }

    return (
        <div>
            <div className='bg-base-100 min-h-screen'>
                <h1 className='text-3xl text-secondary text-center underline my-4 '>Add Product for Advertisement</h1>
                <div className="hero  my-8">
                    <div className="card flex-shrink-0 sm:w-full md:w-1/3  shadow-2 xl bg-base-200">
                        <form onSubmit={handleSubmit(handleData)} className="card-body">

                            {/* Input no 1 */}

                            <div className="form-control">
                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">1. Category Name :</span>
                                    </label>
                                    <input {...register('categoryName', { required: true })} type="text" name='categoryName' placeholder="Enter your category name" className="input input-bordered w-full" />
                                </div>
                                {errors?.categoryName && <p className='text-red-500'>{errors.categoryName.message}</p>}

                                {/* Input no 2 */}

                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">2. Description :</span>
                                    </label>
                                    <textarea {...register("description", { required: true })} name='description' className="textarea input input-bordered w-full h-24" placeholder="Type category description"></textarea>
                                </div>
                                {errors?.description && <p className='text-red-500'>{errors.description.message}</p>}

                                {/* Input no 3 */}

                                <div>
                                    <label className="label">
                                        <span className="label-text font-bold">3. Category Image :</span>
                                    </label>
                                    <input {...register("image", { required: true })} type="file" name='image' className="input input-bordered w-full" />
                                </div>
                                {errors?.image && <p className='text-red-500'>{errors.image.message}</p>}

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