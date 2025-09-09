import React from 'react'

const AddCourse = () => {
  return (
    <>
    <div className="bg-amber-100 
                    m-auto mt-4 p-5
                    w-150 h-140">

    <div className="mt-4 
                    font-serif font-bold 
                    text-purple-600 text-2xl text-center">
        <label > Add Course</label>
    </div>
    <div className="grid 
                    mt-4 mb-4 p-4 
                    rounded">
        
        <label>Course Name:</label>
        <input type="text" name="" id=""
            className="outline mt-4" />
        <label>Course id</label>
        <input type="text"
            className="outline mt-4" />
        <label for="">Course Type</label>
        <select name="" id=""
                className="outline mt-4" >
            <option value="">Self-paced</option>
            <option value="">Online</option>
        </select>
        <div className="mt-4">
        <label >Description</label>
        </div>
        <textarea name="" id="" rows="2" cols="23"
                className="outline mt-4"></textarea>
        <div className="mt-4">
        <label >Price</label>
        </div>
        <select name="" id=""
                className="outline mt-4">
            <option value="">3000</option>
            <option value="">5000</option>
        </select>
        <div className="text-center">
            <button className="outline bg-purple-600
                            rounded 
                            w-100
                            mt-4 hover:text-blue-600">
                            Add Course
            </button>
        </div>
    </div>
</div>
</>
  )
}

export default AddCourse