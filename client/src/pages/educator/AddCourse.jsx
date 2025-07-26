import React, {useRef, useState} from 'react';
import Quill from 'quill';
import uniqid from 'uniqid';
import { use } from 'react';

const AddCourse = () => {

  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] =useState('');
  const [coursePrice, setCoursePrice] =useState(0);
  const [discount, setDiscount] =useState(0);
  const [image, setImage] =useState(null);
  const [chapters, setChapters] =useState([]);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>

    </div>
  )
}

export default AddCourse